// src/validations/order.schema.js
import Joi from 'joi';

export const incomingOrderSchema = Joi.object({
  numeroPedido: Joi.string().trim().required(),
  valorTotal: Joi.number().min(0).required(),
  dataCriacao: Joi.string().isoDate().required(),
  items: Joi.array().items(
    Joi.object({
      idItem: Joi.string().required(),
      quantidadeItem: Joi.number().integer().min(1).required(),
      valorItem: Joi.number().min(0).required()
    })
  ).default([])
});

export const updateOrderSchema = Joi.object({
  valorTotal: Joi.number().min(0),
  dataCriacao: Joi.string().isoDate(),
  items: Joi.array().items(
    Joi.object({
      idItem: Joi.string().required(),
      quantidadeItem: Joi.number().integer().min(1).required(),
      valorItem: Joi.number().min(0).required()
    })
  )
}).min(1);
