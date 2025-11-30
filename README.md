Pedidos API
Uma API RESTful desenvolvida em Node.js para gerenciamento de pedidos, com persistência em MongoDB e transformação de dados. 

Tecnologias utilizadas
- Node.js + Express
- MongoDB + Mongoose
- Joi (validação)
- Dotenv (variáveis de ambiente)
- Morgan (logs de requisição)
- Postman (testes)
- Git + GitHub

Estrutura do projeto:
OrderAPI/
├── src/
│   ├── config/          # Conexão com MongoDB
│   ├── controllers/     # Lógica dos endpoints
│   ├── models/          # Schemas do banco
│   ├── routes/          # Definição das rotas
│   ├── services/        # Regras de negócio
│   ├── utils/           # Mapeamento e erros
│   └── validations/     # Validação com Joi
├── .env                 # Variáveis de ambiente
├── package.json         # Dependências
├── README.md            # Documentação
└── server.js            # Ponto de entrada

Instalação e execução

# Clonar o repositório
git clone https://github.com/LeoNardoRR/order-api.git
cd order-api

# Instalar dependências
npm install

# Criar arquivo .env
touch .env

Exemplo de .env:
MONGO_URI=mongodb://localhost:27017/MeuBanco
PORT=3000

Iniciar a API
npm run dev

Endpoints disponíveis:

POST	/order - Criar novo pedido
GET	/order/:orderId	- Buscar pedido por ID
GET	/order/list	- Listar todos os pedidos
PUT	/order/:orderId	- Atualizar pedido
DELETE	/order/:orderId	- Deletar pedido


