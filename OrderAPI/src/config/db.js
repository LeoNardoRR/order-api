// src/config/db.js

// Aqui importei o mongoose, biblioteca para trabalhar com MongoDB no Node.js
import mongoose from 'mongoose';

// Aqui importei o dotenv, usado para carregar variáveis de ambiente do arquivo .env
import dotenv from 'dotenv';

// Inicializa o dotenv para que as variáveis do arquivo .env fiquem disponíveis no process.env
dotenv.config();

// Define a URI de conexão com o MongoDB.
// Primeiro tenta pegar da variável de ambiente MONGO_URI.
// Caso não exista, usa um banco local chamado "MeuBanco".
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/MeuBanco';

// Conecta ao MongoDB usando o mongoose.
// O parâmetro { autoIndex: true } faz com que os índices definidos nos schemas sejam criados 
// automaticamente.
mongoose.connect(MONGO_URI, {
  autoIndex: true
})
  // Se a conexão for bem-sucedida, exibe mensagem no console
  .then(() => {
    console.log('MongoDB connected');
  })
  // Se ocorrer erro na conexão, exibe mensagem de erro e encerra o processo
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1); // Encerra a aplicação para evitar rodar sem banco de dados
  });
