// transforma payload externo para formato do bd
function mapIncomingToOrder(body) {
  if (!body || !body.numeroPedido) {
    const err = new Error('numeroPedido obrigatório');
    err.status = 400;
    throw err;
  }

  return {
    orderId: body.numeroPedido,
    value: body.valorTotal,
    creationDate: body.dataCriacao ? new Date(body.dataCriacao) : new Date(),
    items: Array.isArray(body.items) ? body.items.map(it => ({
      productId: Number(it.idItem),
      quantity: Number(it.quantidadeItem),
      price: Number(it.valorItem)
    })) : []
  };
}

// opcional: mapear saída do DB para retorno ao cliente
function mapOrderToResponse(orderDoc) {
  return {
    orderId: orderDoc.orderId,
    value: orderDoc.value,
    creationDate: orderDoc.creationDate,
    items: orderDoc.items
  };
}

module.exports = { mapIncomingToOrder, mapOrderToResponse };
