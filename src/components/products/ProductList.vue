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

</style>
