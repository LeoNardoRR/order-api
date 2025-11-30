const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const orderRoutes = require('./routes/order.routes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/order', orderRoutes);

// middleware de erro
app.use((err, req, res, next) => {
  console.error(err);
  const status = err.status || 500;
  res.status(status).json({ error: err.message || 'Erro interno' });
});

module.exports = app;
