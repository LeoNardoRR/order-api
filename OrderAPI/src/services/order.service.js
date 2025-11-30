// src/services/order.service.js

// Importa o modelo Order (representa a coleção de pedidos no MongoDB)
import Order from '../models/Order.js';

// Importa erros customizados para tratar conflitos e recursos não encontrados
import { Conflict, NotFound } from '../utils/errors.js';

// Serviço responsável por criar um novo pedido
export async function createOrder(orderData) {
  // Verifica se já existe um pedido com o mesmo orderId
  const exists = await Order.findOne({ orderId: orderData.orderId });
  if (exists) throw Conflict('orderId already exists'); // Se existir, lança erro de conflito (409)

  // Cria o pedido no banco de dados
  const created = await Order.create(orderData);
  return created; // Retorna o pedido criado
}

// Serviço responsável por buscar um pedido pelo ID
export async function getOrderById(orderId) {
  // Procura o pedido pelo campo orderId
  const order = await Order.findOne({ orderId });
  if (!order) throw NotFound('Order not found'); // Se não encontrar, lança erro 404
  return order; // Retorna o pedido encontrado
}

// Serviço responsável por listar todos os pedidos
export async function listOrders() {
  // Busca todos os pedidos e ordena pela data de criação (mais recentes primeiro)
  return Order.find().sort({ creationDate: -1 });
}

// Serviço responsável por atualizar um pedido existente
export async function updateOrder(orderId, updates) {
  // Atualiza o pedido com base no orderId
  const updated = await Order.findOneAndUpdate(
    { orderId },       // Filtro: pedido com esse orderId
    { $set: updates }, // Atualizações a serem aplicadas
    { new: true }      // Retorna o documento atualizado
  );

  if (!updated) throw NotFound('Order not found'); // Se não encontrar, lança erro 404
  return updated; // Retorna o pedido atualizado
}

// Serviço responsável por remover um pedido
export async function deleteOrder(orderId) {
  // Deleta o pedido com base no orderId
  const res = await Order.deleteOne({ orderId });

  // Se nenhum documento foi deletado, significa que não encontrou o pedido
  if (res.deletedCount === 0) throw NotFound('Order not found');

  // Retorna confirmação da exclusão
  return { deleted: true };
}
