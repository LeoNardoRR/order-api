// src/models/Order.js

// Importa o mongoose, biblioteca para modelar e interagir com o MongoDB
import mongoose from 'mongoose';

// Define o schema para os itens de um pedido
const ItemSchema = new mongoose.Schema({
  // ID do produto (numérico)
  productId: { type: Number, required: true },

  // Quantidade do produto (mínimo 1)
  quantity: { type: Number, required: true, min: 1 },

  // Preço unitário do produto (mínimo 0)
  price: { type: Number, required: true, min: 0 }
}, { _id: true }); // Cada item terá seu próprio _id gerado automaticamente

// Define o schema principal para o pedido
const OrderSchema = new mongoose.Schema({
  // Identificador único do pedido
  orderId: { type: String, required: true, unique: true },

  // Valor total do pedido (não pode ser negativo)
  value: { type: Number, required: true, min: 0 },

  // Data de criação do pedido
  creationDate: { type: Date, default: Date.now },

  // Lista de itens do pedido, baseada no ItemSchema
  items: { type: [ItemSchema], default: [] }
}, { 
  // timestamps adiciona automaticamente os campos createdAt e updatedAt
  timestamps: true 
});

// Exporta o modelo "Order" baseado no OrderSchema
export default mongoose.model('Order', OrderSchema);
