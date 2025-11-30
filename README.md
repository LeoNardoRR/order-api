📦 Pedidos API
Uma API RESTful para gerenciamento de pedidos, construída com Node.js, Express e MongoDB Atlas. Ideal para aplicações de e-commerce, sistemas internos ou qualquer serviço que precise registrar, consultar e manipular pedidos.

🚀 Tecnologias Utilizadas
Node.js + Express — Backend leve e rápido

MongoDB Atlas — Banco de dados NoSQL em nuvem

Mongoose — ODM para modelagem de dados

Joi — Validação de dados

Render — Deploy automático e gratuito

Postman (VS Code) — Testes de endpoints

📁 Estrutura de Pastas
Code
src/
├── app.js               # Configuração do Express
├── server.js            # Inicialização do servidor
├── config/
│   └── db.js            # Conexão com MongoDB Atlas
├── controllers/
│   └── order.controller.js  # Lógica das rotas
├── models/
│   └── Order.js         # Schema do pedido
├── routes/
│   └── order.routes.js  # Definição das rotas
├── services/
│   └── order.service.js # Acesso ao banco
├── utils/
│   ├── errors.js        # Tratamento de erros
│   └── mapper.js        # Mapeamento de dados
├── validations/
│   └── order.schema.js  # Validação com Joi
🔐 Variáveis de Ambiente
Configure a variável MONGO_URI no Render ou .env local:

env
MONGO_URI=mongodb+srv://<usuario>:<senha>@cluster1.xxxxx.mongodb.net/PedidosAPI?retryWrites=true&w=majority&appName=Cluster1
⚠️ Se sua senha tiver @, substitua por %40

📌 Endpoints
Método	Rota	Descrição
POST	/order	Criar novo pedido
GET	/order/list	Listar todos os pedidos
GET	/order/:orderId	Buscar pedido por ID
PUT	/order/:orderId	Atualizar pedido por ID
DELETE	/order/:orderId	Deletar pedido por ID
📦 Exemplo de Pedido (JSON)
json
{
  "numeroPedido": "pedido-001",
  "valorTotal": 150,
  "dataCriacao": "2025-11-30T18:15:00.000Z",
  "items": [
    {
      "idItem": "101",
      "quantidadeItem": 2,
      "valorItem": 75
    }
  ]
}
🧪 Testes com Postman
Use o Postman dentro do VS Code ou app externo

Configure requisições para cada rota

Teste com diferentes payloads e valide os retornos

🌐 Deploy
A API está publicada em:

Code
https://order-api-h5fv.onrender.com
Exemplo: GET /order/list → retorna todos os pedidos
