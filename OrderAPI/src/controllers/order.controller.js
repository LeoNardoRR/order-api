// src/controllers/order.controller.js
import { incomingOrderSchema, updateOrderSchema } from '../validations/order.schema.js';
import { mapIncomingToOrderModel, mapUpdateIncomingToOrderModel } from '../utils/mapper.js';
import { BadRequest } from '../utils/errors.js';
import * as svc from '../services/order.service.js';

export async function create(req, res, next) {
  try {
    const { error, value } = incomingOrderSchema.validate(req.body, { abortEarly: false });
    if (error) throw BadRequest(error.details.map(d => d.message).join('; '));
    const mapped = mapIncomingToOrderModel(value);
    const created = await svc.createOrder(mapped);
    return res.status(201).json(created);
  } catch (err) { next(err); }
}

export async function getOne(req, res, next) {
  try {
    const { orderId } = req.params;
    const order = await svc.getOrderById(orderId);
    return res.status(200).json(order);
  } catch (err) { next(err); }
}

export async function list(req, res, next) {
  try {
    const orders = await svc.listOrders();
    return res.status(200).json(orders);
  } catch (err) { next(err); }
}

export async function update(req, res, next) {
  try {
    const { orderId } = req.params;
    const { error, value } = updateOrderSchema.validate(req.body, { abortEarly: false });
    if (error) throw BadRequest(error.details.map(d => d.message).join('; '));
    const updates = mapUpdateIncomingToOrderModel(value);
    const updated = await svc.updateOrder(orderId, updates);
    return res.status(200).json(updated);
  } catch (err) { next(err); }
}

export async function remove(req, res, next) {
  try {
    const { orderId } = req.params;
    const result = await svc.deleteOrder(orderId);
    return res.status(200).json(result);
  } catch (err) { next(err); }
}
