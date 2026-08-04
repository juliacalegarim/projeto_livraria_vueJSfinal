<template>
  <div>

    <AppHeader />

    <main class="pagina-carrinho">

      <h1 class="titulo-pagina">
        Meu Carrinho
      </h1>

      <CartPanel
        :carrinho="carrinho"
      />

    </main>

    <AppFooter />

  </div>
</template>

<script>
import AppHeader from '../components/layout/AppHeader.vue'
import AppFooter from '../components/layout/AppFooter.vue'
import CartPanel from '../components/cart/CartPanel.vue'

export default {
  name: 'CarrinhoView',

  components: {
    AppHeader,
    AppFooter,
    CartPanel
  },

  data() {
    return {
      carrinho: []
    }
  },

  mounted() {
    this.carregarCarrinho()
  },

  methods: {

    carregarCarrinho() {

      const carrinhoSalvo = localStorage.getItem('carrinho')

      if (carrinhoSalvo) {
        this.carrinho = JSON.parse(carrinhoSalvo)
      }

    }

  },

  watch: {

    carrinho: {

      deep: true,

      handler(novoCarrinho) {

        localStorage.setItem(
          'carrinho',
          JSON.stringify(novoCarrinho)
        )

      }

    }

  }

}
</script>

<style scoped>

.pagina-carrinho{
    max-width:1200px;
    margin:40px auto;
    padding:20px;
}

.titulo-pagina{
    font-size:38px;
    margin-bottom:30px;
    color:#222;
}

</style>
