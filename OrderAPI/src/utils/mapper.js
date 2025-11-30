// src/utils/mapper.js

// Função que mapeia os dados recebidos (payload) para o formato do modelo Order.
// É usada na criação de pedidos, convertendo os nomes dos campos da requisição
// para os nomes esperados pelo banco de dados.
export function mapIncomingToOrderModel(payload) {
  return {
    // O campo "numeroPedido" vindo da requisição vira "orderId"
    orderId: payload.numeroPedido,

    // O campo "valorTotal" vira "value"
    value: payload.valorTotal,

    // O campo "dataCriacao" é convertido para objeto Date
    creationDate: new Date(payload.dataCriacao),

    // Os itens do pedido são mapeados para o formato esperado pelo banco
    items: (payload.items || []).map((i) => ({
      productId: Number(i.idItem),       // idItem vira productId (convertido para número)
      quantity: i.quantidadeItem,        // quantidadeItem vira quantity
      price: i.valorItem                 // valorItem vira price
    }))
  };
}

// Função que mapeia os dados recebidos para atualização de pedidos.
// Diferente da criação, aqui só mapeia os campos que foram enviados (parciais).
export function mapUpdateIncomingToOrderModel(payload) {
  const mapped = {};

  // Se o campo "valorTotal" foi enviado, atualiza "value"
  if (payload.valorTotal !== undefined) mapped.value = payload.valorTotal;

  // Se o campo "dataCriacao" foi enviado, atualiza "creationDate"
  if (payload.dataCriacao !== undefined) mapped.creationDate = new Date(payload.dataCriacao);

  // Se os itens foram enviados, mapeia cada item para o formato esperado
  if (payload.items !== undefined) {
    mapped.items = payload.items.map((i) => ({
      productId: Number(i.idItem),       // idItem vira productId
      quantity: i.quantidadeItem,        // quantidadeItem vira quantity
      price: i.valorItem                 // valorItem vira price
    }));
  }

  // Retorna apenas os campos que foram enviados para atualização
  return mapped;
}
