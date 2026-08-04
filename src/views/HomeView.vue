<template>
  <div>
    <AppHeader />

    <section class="banner">
      <div class="texto-banner">
        <h1>Descubra o seu próximo livro favorito</h1>

        <p>Encontre livros de programação e tecnologia com os melhores preços.</p>

        <button>Explorar Catálogo</button>
      </div>
    </section>

    <section class="secao-livros">
      <h2 class="titulo-secao">Livros Disponíveis</h2>

      <ProductList :produtos="produtos" @comprar="comprarLivro" />
    </section>

    <AppFooter />
  </div>
</template>

<script>

  import AppHeader from '../components/layout/AppHeader.vue'
  import AppFooter from '../components/layout/AppFooter.vue'

  import ProductList from '../components/products/ProductList.vue'

  import { produtos } from '../data/product.js'

  export default {
  name: 'HomeView',

  components: {
    AppHeader,
    AppFooter,
    ProductList
  },

  data() {
    return {
      produtos,

      carrinho: []
    }
  },

  methods: {
  comprarLivro(produto) {

    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || []

    const item = carrinho.find(p => p.id === produto.id)

    if (item) {
      item.quantidade++
    } else {
      carrinho.push({
        ...produto,
        quantidade: 1
      })
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho))

    this.$router.push("/carrinho")
  }
},

mounted() {

  const carrinhoSalvo = localStorage.getItem("carrinho")

  if (carrinhoSalvo) {
    this.carrinho = JSON.parse(carrinhoSalvo)
  }

}
}
</script>


<style scoped>
</style>
