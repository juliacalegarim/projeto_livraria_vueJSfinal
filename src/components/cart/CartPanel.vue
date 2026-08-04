<template>
  <section class="painel-carrinho">

    <div class="lista-carrinho">

      <h2 class="titulo">
        Meu Carrinho
      </h2>

      <p v-if="carrinho.length === 0" class="carrinho-vazio">
        Seu carrinho está vazio.
      </p>

      <CartItem
        v-for="item in carrinho"
        :key="item.id"
        :item="item"
        @aumentar="aumentar"
        @diminuir="diminuir"
      />

    </div>

    <CartSummary
      :total="totalCarrinho"
      :frete="0"
    />

  </section>
</template>

<script>
import CartItem from './CartItem.vue'
import CartSummary from './CartSummary.vue'

import {
  aumentarQuantidade,
  diminuirQuantidade,
  calcularTotal
} from '../../utils/cartUtils'

export default {
  name: 'CartPanel',

  components: {
    CartItem,
    CartSummary
  },

  props: {
    carrinho: {
      type: Array,
      required: true
    }
  },

  computed: {
    totalCarrinho() {
      return calcularTotal(this.carrinho)
    }
  },

  methods: {
    aumentar(id) {
      aumentarQuantidade(this.carrinho, id)
    },

    diminuir(id) {
      diminuirQuantidade(this.carrinho, id)
    }
  }
}
</script>

<style scoped>
</style>
