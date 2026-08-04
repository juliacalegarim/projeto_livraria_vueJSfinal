<template>
  <div class="resumo-carrinho">

    <h2 class="titulo">
      Resumo da Compra
    </h2>

    <div class="linha">
      <span>Produtos</span>
      <span>{{ formatarMoeda(total) }}</span>
    </div>

    <div class="linha">
      <span>Frete</span>
      <span>{{ formatarMoeda(frete) }}</span>
    </div>

    <hr>

    <div class="linha total">
      <span>Total</span>
      <span>{{ formatarMoeda(total + frete) }}</span>
    </div>

    <button class="botao-finalizar">
      Finalizar Compra
    </button>

  </div>
</template>

<script>
import { formatarMoeda } from '../../utils/currencyUtils'

export default {
  name: 'CartSummary',

  props: {
    total: {
      type: Number,
      required: true
    },

    frete: {
      type: Number,
      default: 0
    }
  },

  methods: {
    formatarMoeda
  }
}
</script>

<style scoped>
</style>
