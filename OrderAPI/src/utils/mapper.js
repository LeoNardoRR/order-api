// src/utils/mapper.js
export function mapIncomingToOrderModel(payload) {
  return {
    orderId: payload.numeroPedido,
    value: payload.valorTotal,
    creationDate: new Date(payload.dataCriacao),
    items: (payload.items || []).map((i) => ({
      productId: Number(i.idItem),
      quantity: i.quantidadeItem,
      price: i.valorItem
    }))
  };
}

export function mapUpdateIncomingToOrderModel(payload) {
  const mapped = {};
  if (payload.valorTotal !== undefined) mapped.value = payload.valorTotal;
  if (payload.dataCriacao !== undefined) mapped.creationDate = new Date(payload.dataCriacao);
  if (payload.items !== undefined) {
    mapped.items = payload.items.map((i) => ({
      productId: Number(i.idItem),
      quantity: i.quantidadeItem,
      price: i.valorItem
    }));
  }
  return mapped;
}
