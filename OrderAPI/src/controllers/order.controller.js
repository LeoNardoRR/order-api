// src/controllers/order.controller.js

// Importa os schemas de validação para criação e atualização de pedidos
import { incomingOrderSchema, updateOrderSchema } from '../validations/order.schema.js';

// Importa funções utilitárias que transformam os dados recebidos em modelos adequados para o banco
import { mapIncomingToOrderModel, mapUpdateIncomingToOrderModel } from '../utils/mapper.js';

// Importa a função de erro customizado BadRequest (erro 400)
import { BadRequest } from '../utils/errors.js';

// Importa todos os serviços relacionados a pedidos (create, get, list, update, delete)
import * as svc from '../services/order.service.js';

// Controller responsável por criar um novo pedido
export async function create(req, res, next) {
  try {
    // Valida o corpo da requisição com o schema de criação
    const { error, value } = incomingOrderSchema.validate(req.body, { abortEarly: false });
    // Se houver erro de validação, lança um BadRequest com todas as mensagens
    if (error) throw BadRequest(error.details.map(d => d.message).join('; '));

    // Mapeia os dados validados para o modelo de pedido
    const mapped = mapIncomingToOrderModel(value);

    // Chama o serviço para criar o pedido no banco
    const created = await svc.createOrder(mapped);

    // Retorna o pedido criado com status 201 (Created)
    return res.status(201).json(created);
  } catch (err) { 
    // Encaminha o erro para o middleware de tratamento
    next(err); 
  }
}

// Controller responsável por buscar um pedido específico pelo ID
export async function getOne(req, res, next) {
  try {
    const { orderId } = req.params; // Pega o ID do pedido da URL
    const order = await svc.getOrderById(orderId); // Busca no serviço
    return res.status(200).json(order); // Retorna o pedido encontrado
  } catch (err) { next(err); }
}

// Controller responsável por listar todos os pedidos
export async function list(req, res, next) {
  try {
    const orders = await svc.listOrders(); // Busca todos os pedidos
    return res.status(200).json(orders); // Retorna a lista
  } catch (err) { next(err); }
}

// Controller responsável por atualizar um pedido existente
export async function update(req, res, next) {
  try {
    const { orderId } = req.params; // ID do pedido a ser atualizado

    // Valida o corpo da requisição com o schema de atualização
    const { error, value } = updateOrderSchema.validate(req.body, { abortEarly: false });
    if (error) throw BadRequest(error.details.map(d => d.message).join('; '));

    // Mapeia os dados validados para o modelo de atualização
    const updates = mapUpdateIncomingToOrderModel(value);

    // Chama o serviço para atualizar o pedido
    const updated = await svc.updateOrder(orderId, updates);

    // Retorna o pedido atualizado
    return res.status(200).json(updated);
  } catch (err) { next(err); }
}

// Controller responsável por remover um pedido
export async function remove(req, res, next) {
  try {
    const { orderId } = req.params; // ID do pedido a ser removido
    const result = await svc.deleteOrder(orderId); // Chama o serviço para deletar
    return res.status(200).json(result); // Retorna o resultado da exclusão
  } catch (err) { next(err); }
}
