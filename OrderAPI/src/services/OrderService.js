const Order = require('../models/order.model');

async function createOrder(orderData) {
  const order = new Order(orderData);
  return order.save();
}

async function getOrderById(orderId) {
  return Order.findOne({ orderId }).lean();
}

async function listOrders() {
  return Order.find().lean();
}

async function updateOrder(orderId, updateData) {
  return Order.findOneAndUpdate({ orderId }, updateData, { new: true });
}

async function deleteOrder(orderId) {
  return Order.findOneAndDelete({ orderId });
}

module.exports = { createOrder, getOrderById, listOrders, updateOrder, deleteOrder };
