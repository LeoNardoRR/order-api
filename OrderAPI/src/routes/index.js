require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> {
    console.log('Mongo conectado');
    app.listen(PORT, ()=> console.log(`API rodando na porta ${PORT}`));
  })
  .catch(err => {
    console.error('Falha ao conectar Mongo', err);
    process.exit(1);
  });
