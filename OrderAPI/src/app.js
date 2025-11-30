// src/app.js

// Importa o framework Express para criar a aplicação web
import express from 'express';

// Importa o morgan, middleware para logar requisições HTTP no console
import morgan from 'morgan';

// Importa o cors, middleware que habilita requisições de diferentes origens (Cross-Origin Resource Sharing)
import cors from 'cors';

// Importa a configuração de conexão com o banco de dados (MongoDB)
import './config/db.js';

// Importa as rotas relacionadas a pedidos
import orderRouter from './routes/order.routes.js';

// Cria a instância principal da aplicação Express
const app = express();

// Middleware que habilita CORS (permite acesso da API por outros domínios)
app.use(cors());

// Middleware que permite interpretar JSON no corpo das requisições
app.use(express.json());

// Middleware que loga as requisições no console (modo 'dev' mostra método, URL e tempo de resposta)
app.use(morgan('dev'));

// Define o prefixo "/order" para todas as rotas de pedidos
app.use('/order', orderRouter);

// Middleware para tratar rotas não encontradas (404)
// Se nenhuma rota for atendida, retorna mensagem de erro
app.use((req, res) => {
  res.status(404).json({ message: 'Endpoint not found' });
});

// Middleware de tratamento de erros
// Captura erros lançados em qualquer parte da aplicação
app.use((err, req, res, next) => {
  const status = err.status || 500; // Usa o status do erro ou 500 (erro interno)
  res.status(status).json({ message: err.message || 'Internal Server Error' });
});

// Exporta a aplicação para ser usada no server.js
export default app;
