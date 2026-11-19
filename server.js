const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

  res.end(`
    <h1>DevFlow Store</h1>
    <p>Aplicação de e-commerce funcionando!</p>
    <p>Pipeline CI/CD em desenvolvimento.</p>
  `);
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Servidor funcionando na porta ${PORT}`);
});

module.exports = server;
