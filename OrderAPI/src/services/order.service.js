// src/services/order.service.js
import Order from '../models/Order.js';
import { Conflict, NotFound } from '../utils/errors.js';

export async function createOrder(orderData) {
  const exists = await Order.findOne({ orderId: orderData.orderId });
  if (exists) throw Conflict('orderId already exists');
  const created = await Order.create(orderData);
  return created;
}

export async function getOrderById(orderId) {
  const order = await Order.findOne({ orderId });
  if (!order) throw NotFound('Order not found');
  return order;
}

export async function listOrders() {
  return Order.find().sort({ creationDate: -1 });
}

export async function updateOrder(orderId, updates) {
  const updated = await Order.findOneAndUpdate(
    { orderId },
    { $set: updates },
    { new: true }
  );
  if (!updated) throw NotFound('Order not found');
  return updated;
}

export async function deleteOrder(orderId) {
  const res = await Order.deleteOne({ orderId });
  if (res.deletedCount === 0) throw NotFound('Order not found');
  return { deleted: true };
}
