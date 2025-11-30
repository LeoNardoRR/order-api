const svc = require('../services/order.service');
const mapper = require('../utils/mapper');

async function create(req, res, next) {
  try {
    const mapped = mapper.mapIncomingToOrder(req.body);
    const created = await svc.createOrder(mapped);
    res.status(201).json(mapper.mapOrderToResponse(created));
  } catch (err) { next(err); }
}

async function getById(req, res, next) {
  try {
    const { orderId } = req.params;
    const order = await svc.getOrderById(orderId);
    if (!order) return res.status(404).json({ error: 'Pedido não encontrado' });
    res.json(mapper.mapOrderToResponse(order));
  } catch (err) { next(err); }
}

async function list(req, res, next) {
  try {
    const list = await svc.listOrders();
    res.json(list.map(mapper.mapOrderToResponse));
  } catch (err) { next(err); }
}

async function update(req, res, next) {
  try {
    const { orderId } = req.params;
    // aceitar body já no formato API externo e mapear de novo
    const mapped = mapper.mapIncomingToOrder(req.body);
    const updated = await svc.updateOrder(orderId, mapped);
    if (!updated) return res.status(404).json({ error: 'Pedido não encontrado' });
    res.json(mapper.mapOrderToResponse(updated));
  } catch (err) { next(err); }
}

async function remove(req, res, next) {
  try {
    const { orderId } = req.params;
    const deleted = await svc.deleteOrder(orderId);
    if (!deleted) return res.status(404).json({ error: 'Pedido não encontrado' });
    res.status(204).send();
  } catch (err) { next(err); }
}

module.exports = { create, getById, list, update, remove };
