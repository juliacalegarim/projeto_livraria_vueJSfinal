export function adicionarProduto(carrinho, produto) {

  const item = carrinho.find(p => p.id === produto.id)

  if (item) {
    item.quantidade++
  } else {
    carrinho.push({
      ...produto,
      quantidade: 1
    })
  }

}

export function removerProduto(carrinho, id) {

  const indice = carrinho.findIndex(p => p.id === id)

  if (indice !== -1) {
    carrinho.splice(indice, 1)
  }

}

export function aumentarQuantidade(carrinho, id) {

  const item = carrinho.find(p => p.id === id)

  if (item) {
    item.quantidade++
  }

}

export function diminuirQuantidade(carrinho, id) {

  const item = carrinho.find(p => p.id === id)

  if (!item) return

  item.quantidade--

  if (item.quantidade <= 0) {
    removerProduto(carrinho, id)
  }

}

export function calcularTotal(carrinho) {

  return carrinho.reduce((total, item) => {
    return total + (item.preco * item.quantidade)
  }, 0)

}