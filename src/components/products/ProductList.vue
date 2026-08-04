<template>
  <section class="lista-livros">

    <ProductCard
      v-for="produto in produtos"
      :key="produto.id"
      :produto="produto"
      @comprar="adicionarCarrinho"
    />

  </section>
</template>

<script>
import ProductCard from './ProductCard.vue'

export default {
  name: 'ProductList',

  components: {
    ProductCard
  },

  props: {
    produtos: {
      type: Array,
      required: true
    }
  },

  methods: {
    adicionarCarrinho(produto) {
      this.$emit('comprar', produto)
    }
  }
}
</script>

<style scoped>

.lista-livros{
    max-width:1200px;
    margin:50px auto;
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(260px,1fr));
    gap:30px;
    padding:0 20px;
}

</style>
