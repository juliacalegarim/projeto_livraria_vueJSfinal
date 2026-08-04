<template>
  <div class="item-carrinho">

    <img
      :src="item.capa"
      :alt="item.titulo"
      class="imagem-livro"
    >

    <div class="informacoes">

      <h3 class="titulo">
        {{ item.titulo }}
      </h3>

      <p class="autor">
        {{ item.autor }}
      </p>

      <p class="preco">
        {{ formatarMoeda(item.preco) }}
      </p>

    </div>

    <div class="quantidade">

      <button
        class="botao"
        @click="$emit('diminuir', item.id)"
      >
        -
      </button>

      <span>{{ item.quantidade }}</span>

      <button
        class="botao"
        @click="$emit('aumentar', item.id)"
      >
        +
      </button>

    </div>

    <div class="subtotal">
      {{ formatarMoeda(item.preco * item.quantidade) }}
    </div>

  </div>
</template>

<script>
import { formatarMoeda } from '../../utils/currencyUtils'

export default {
  name: 'CartItem',

  props: {
    item: {
      type: Object,
      required: true
    }
  },

  methods: {
    formatarMoeda
  }
}
</script>

<style scoped>
</style>
