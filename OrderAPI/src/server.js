// src/server.js

// Importa a aplicação configurada no arquivo app.js
import app from './app.js';

// Define a porta em que o servidor vai rodar.
// Primeiro tenta pegar da variável de ambiente PORT.
// Caso não exista, usa a porta padrão 3000.
const PORT = process.env.PORT || 3000;

// Inicia o servidor Express, fazendo com que ele "escute" na porta definida.
// Quando o servidor estiver rodando, exibe uma mensagem no console.
app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
