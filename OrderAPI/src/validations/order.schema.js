// src/validations/order.schema.js

// Importa o Joi, biblioteca usada para validação de dados
import Joi from 'joi';

// Schema de validação para criação de pedidos (incomingOrderSchema)
// Define como os dados devem ser recebidos na requisição de criação
export const incomingOrderSchema = Joi.object({
  // Campo obrigatório: número do pedido (string sem espaços extras)
  numeroPedido: Joi.string().trim().required(),

  // Campo obrigatório: valor total do pedido (número >= 0)
  valorTotal: Joi.number().min(0).required(),

  // Campo obrigatório: data de criação do pedido (string em formato ISO de data)
  dataCriacao: Joi.string().isoDate().required(),

  // Lista de itens do pedido
  items: Joi.array().items(
    Joi.object({
      // ID do item (string obrigatória)
      idItem: Joi.string().required(),

      // Quantidade do item (inteiro >= 1)
      quantidadeItem: Joi.number().integer().min(1).required(),

      // Valor do item (número >= 0)
      valorItem: Joi.number().min(0).required()
    })
  ).default([]) // Se não for enviado, assume lista vazia
});

// Schema de validação para atualização de pedidos (updateOrderSchema)
// Permite atualizar apenas alguns campos (não todos são obrigatórios)
export const updateOrderSchema = Joi.object({
  // Valor total pode ser atualizado (>= 0)
  valorTotal: Joi.number().min(0),

  // Data de criação pode ser atualizada (string ISO de data)
  dataCriacao: Joi.string().isoDate(),

  // Lista de itens pode ser atualizada
  items: Joi.array().items(
    Joi.object({
      idItem: Joi.string().required(),
      quantidadeItem: Joi.number().integer().min(1).required(),
      valorItem: Joi.number().min(0).required()
    })
  )
})
// .min(1) garante que pelo menos um campo seja enviado para atualização
.min(1);
