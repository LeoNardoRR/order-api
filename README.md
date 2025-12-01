# 📦 Pedidos API  
Uma API RESTful moderna para gerenciamento de pedidos rápida, limpa e feita do jeito certo.  
Construída com **Node.js**, **Express** e **MongoDB Atlas**, perfeita para e-commerce, sistemas internos e qualquer app que precise registrar, atualizar e consultar pedidos de forma confiável.

---

## ⚙️ Stack Tecnológica

- **Node.js + Express** — servidor leve  
- **MongoDB Atlas** — NoSQL flexível, escalável e na nuvem  
- **Mongoose** — schema, validação e queries organizadas  
- **Joi** — blindagem contra payloads  
- **Render** — deploy fácil  
- **Postman** — testes dos endpoints  

---

## 📂 Estrutura do Projeto

```

src/
├── app.js                     # Inicialização do Express
├── server.js                  # Start do servidor
├── config/
│   └── db.js                  # Conexão com MongoDB Atlas
├── controllers/
│   └── order.controller.js    # Regras de negócio / respostas HTTP
├── models/
│   └── Order.js               # Schema do Pedido
├── routes/
│   └── order.routes.js        # Rotas da API
├── services/
│   └── order.service.js       # CRUD e acesso ao banco
├── utils/
│   ├── errors.js              # Erros customizados
│   └── mapper.js              # Mapeamento/normalização das respostas
├── validations/
│   └── order.schema.js        # Validação via Joi

```

---

## 🔐 Configuração (.env)

Crie um arquivo `.env` na raiz:

```

MONGO_URI=mongodb+srv://<user>:<senha>@cluster1.xxx.mongodb.net/PedidosAPI

````

⚠️ Senha com `@` → substitua por `%40`.

---

# 🛣️ Rotas da API

Todas as rotas começam com:  
👉 `https://order-api-h5fv.onrender.com`

---

## ➕ Criar Pedido  
**POST** `/order`

### Body:
```json
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
````

### Possíveis retornos:

* **201** Criado com sucesso
* **400** Payload inválido 

---

## 📄 Listar Todos

**GET** `/order/list`
Retorna *todos* os pedidos.

Retorno (exemplo):

```json
[
  {
    "_id": "674b9bd3d7ae022f20bb75e1",
    "numeroPedido": "pedido-001",
    "valorTotal": 150,
    "items": [...]
  }
]
```

---

## 🔎 Buscar por ID

**GET** `/order/:orderId`

* **200** Pedido encontrado
* **404** Esse ID aí não existe

---

## ✏️ Atualizar Pedido

**PUT** `/order/:orderId`
Aceita alteração total ou parcial.

Exemplo:

```json
{
  "valorTotal": 199.9
}
```

---

## 🗑️ Excluir Pedido

**DELETE** `/order/:orderId`

* **200** Pedido removido
* **404** Pedido não encontrado

---

# 📦 Estrutura do Pedido (Schema)

```json
{
  "_id": "string",
  "numeroPedido": "string",
  "valorTotal": "number",
  "dataCriacao": "date",
  "items": [
    {
      "idItem": "string",
      "quantidadeItem": "number",
      "valorItem": "number"
    }
  ]
}
```

---

# 🧪 Testando no Postman

* Teste cada método (POST, GET, PUT, DELETE)
* Alterne entre payloads válidos e inválidos
* Confira validações do Joi
* Valide mensagens de erro + status HTTP

---

# 🌐 Deploy

API rodando em:

👉 **[https://order-api-h5fv.onrender.com](https://order-api-h5fv.onrender.com)**

Rotas diretas:

* **GET** `/order/list`
* **POST** `/order`
* **GET** `/order/<id>`
* **PUT** `/order/<id>`
* **DELETE** `/order/<id>`
