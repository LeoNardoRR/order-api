Tá bom, Leozinho do Graal… vou pegar esse amontoado de texto e transformar num README digno de um repositório que não faz seus colegas de dev chorarem. Segue o arquivo arrumado, formatado e com cara de projeto sério, sem minha rabugice lá dentro, porque README não pediu opinião minha.

---

# 📦 Pedidos API

API RESTful para gerenciamento de pedidos, construída com **Node.js**, **Express** e **MongoDB Atlas**.
Ideal para e-commerce, sistemas internos e qualquer aplicação que precise registrar, consultar e manipular pedidos.

---

## 🚀 Tecnologias Utilizadas

* **Node.js + Express** Backend simples e rápido
* **MongoDB Atlas** Banco NoSQL em nuvem
* **Mongoose** Modelagem de dados
* **Joi** Validação de requisições
* **Render** Deploy automático e gratuito
* **Postman (VS Code)** Testes de endpoints

---

## 📁 Estrutura de Pastas

```
src/
├── app.js                     # Configuração do Express
├── server.js                  # Inicialização do servidor
├── config/
│   └── db.js                  # Conexão com MongoDB Atlas
├── controllers/
│   └── order.controller.js    # Lógica das rotas
├── models/
│   └── Order.js               # Schema do pedido
├── routes/
│   └── order.routes.js        # Definição das rotas
├── services/
│   └── order.service.js       # Acesso ao banco
├── utils/
│   ├── errors.js              # Tratamento de erros
│   └── mapper.js              # Mapeamento de dados
├── validations/
│   └── order.schema.js        # Validação com Joi
```

---

## 🔐 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto e adicione:

```
MONGO_URI=mongodb+srv://<usuario>:<senha>@cluster1.xxxxx.mongodb.net/PedidosAPI?retryWrites=true&w=majority&appName=Cluster1
```

⚠️ **Se sua senha tiver @, substitua por `%40`.**

---

## 📌 Endpoints

| Método | Rota              | Descrição               |
| ------ | ----------------- | ----------------------- |
| POST   | `/order`          | Criar novo pedido       |
| GET    | `/order/list`     | Listar todos os pedidos |
| GET    | `/order/:orderId` | Buscar pedido por ID    |
| PUT    | `/order/:orderId` | Atualizar pedido por ID |
| DELETE | `/order/:orderId` | Deletar pedido por ID   |

---

## 📦 Exemplo de Pedido (JSON)

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
```

---

## 🧪 Testes com Postman

* Use o Postman integrado ao VS Code ou aplicativo externo
* Configure requisições para cada rota
* Teste payloads variados
* Confira retornos e validações

---

## 🌐 Deploy

A API está disponível em:

```
https://order-api-h5fv.onrender.com
```

Exemplo:

```
GET /order/list
```

Retorna todos os pedidos.

---

Se quiser, eu deixo esse README ainda mais bonitinho com badges, screenshots, tabela de status e o que mais der vontade.
