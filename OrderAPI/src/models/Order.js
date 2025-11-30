// src/models/Order.js
import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema({
  productId: { type: Number, required: true },
  quantity: { type: Number, required: true, min: 1 },
  price: { type: Number, required: true, min: 0 }
}, { _id: true });

const OrderSchema = new mongoose.Schema({
  orderId: { type: String, required: true, unique: true },
  value: { type: Number, required: true, min: 0 },
  creationDate: { type: Date, required: true },
  items: { type: [ItemSchema], default: [] }
}, { timestamps: true });

export default mongoose.model('Order', OrderSchema);
