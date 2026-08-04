<template>
  <div>

    <AppHeader />

    <section class="banner">

      <div class="texto-banner">
        <h1>Descubra o seu próximo livro favorito</h1>

        <p>
          Encontre livros de programação e tecnologia com os melhores preços.
        </p>

        <button>Explorar Catálogo</button>
      </div>

      <div class="imagem-banner">
        <img src="/banner.png" alt="Banner IFbooks">
      </div>

    </section>

    <section class="secao-livros">

      <h2 class="titulo-secao">
        Livros Disponíveis
      </h2>

      <ProductList
        :produtos="produtos"
        @comprar="comprarLivro"
      />

    </section>

    <AppFooter />

  </div>
</template>

<script>
import AppHeader from '../components/layout/AppHeader.vue'
import AppFooter from '../components/layout/AppFooter.vue'

import ProductList from '../components/products/ProductList.vue'

import { produtos } from '../data/products'

import { adicionarProduto } from '../utils/cartUtils'

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

      adicionarProduto(this.carrinho, produto)

      localStorage.setItem(
        'carrinho',
        JSON.stringify(this.carrinho)
      )

    }

  },

  mounted() {

    const carrinhoSalvo = localStorage.getItem('carrinho')

    if (carrinhoSalvo) {

      this.carrinho = JSON.parse(carrinhoSalvo)

    }

  }

}
</script>

<style scoped>
</style>
