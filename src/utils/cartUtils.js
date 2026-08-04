export function adicionarProduto(carrinho, produto) {
  const item = carrinho.find(livro => livro.id === produto.id)

  if (item) {
    item.quantidade++
  } else {
    carrinho.push({
      ...produto,
      quantidade: 1
    })
  }
}

export function aumentarQuantidade(carrinho, id) {
  const item = carrinho.find(livro => livro.id === id)

  if (item) {
    item.quantidade++
  }
}

export function diminuirQuantidade(carrinho, id) {
  const item = carrinho.find(livro => livro.id === id)

  if (!item) return

  if (item.quantidade > 1) {
    item.quantidade--
  } else {
    removerProduto(carrinho, id)
  }
}

export function removerProduto(carrinho, id) {
  const indice = carrinho.findIndex(livro => livro.id === id)

  if (indice !== -1) {
    carrinho.splice(indice, 1)
  }
}

export function calcularSubtotal(item) {
  return item.preco * item.quantidade
}

export function calcularTotal(carrinho) {
  return carrinho.reduce((total, item) => {
    return total + item.preco * item.quantidade
  }, 0)
}
