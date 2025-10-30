// 一个最小的 Node.js HTTP 服务器，无任何依赖
const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('✅ Shiper Node.js 部署成功！');
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
