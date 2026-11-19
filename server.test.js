
const test = require("node:test");
const assert = require("node:assert");
const http = require("node:http");
const server = require("./server");

test("A aplicação deve responder corretamente", async () => {
  if (!server.listening) {
    await new Promise((resolve) => server.listen(0, resolve));
  }

  const port = server.address().port;

  const response = await new Promise((resolve, reject) => {
    http
      .get(`http://localhost:${port}`, (res) => {
        let data = "";

        res.on("data", (chunk) => {
          data += chunk;
        });

        res.on("end", () => {
          resolve({
            status: res.statusCode,
            body: data,
          });
        });
      })
      .on("error", reject);
  });

  assert.strictEqual(response.status, 200);
  assert.match(response.body, /DevFlow Store/);

  server.close();
});
