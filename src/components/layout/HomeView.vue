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

.banner{
    max-width:1200px;
    margin:40px auto;
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:40px;
    padding:20px;
}

.texto-banner{
    width:50%;
}

.texto-banner h1{
    font-size:48px;
    margin-bottom:20px;
    color:#222;
}

.texto-banner p{
    font-size:18px;
    color:#666;
    margin-bottom:30px;
    line-height:1.6;
}

.texto-banner button{
    background:#0b8a42;
    color:white;
    border:none;
    padding:14px 30px;
    border-radius:8px;
    font-size:17px;
    font-weight:bold;
}

.imagem-banner img{
    width:500px;
}

.secao-livros{
    margin-top:60px;
}

.titulo-secao{
    text-align:center;
    font-size:36px;
    margin-bottom:30px;
    color:#222;
}

@media(max-width:900px){

.banner{
    flex-direction:column;
}

.texto-banner{
    width:100%;
    text-align:center;
}

.imagem-banner img{
    width:100%;
    max-width:450px;
}

}

</style>
