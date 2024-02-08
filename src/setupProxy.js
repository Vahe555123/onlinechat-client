const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', // Замените '/api' на путь вашего серверного API
    createProxyMiddleware({
      target: 'http://localhost:3001', // Замените на адрес вашего сервера Express
      changeOrigin: true,
    })
  );
};
