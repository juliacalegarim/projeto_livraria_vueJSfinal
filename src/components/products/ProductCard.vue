<template>
  <div class="card-livro">

    <img
      :src="produto.capa"
      :alt="produto.titulo"
      class="imagem-livro"
    >

    <div class="informacoes">

      <h3 class="titulo">
        {{ produto.titulo }}
      </h3>

      <p class="autor">
        {{ produto.autor }}
      </p>

      <p class="descricao">
        {{ produto.resenha }}
      </p>

      <div class="rodape-card">

        <span class="preco">
          {{ formatarMoeda(produto.preco) }}
        </span>

        <button
          class="botao-comprar"
          @click="$emit('comprar', produto)"
        >
          Comprar
        </button>

      </div>

    </div>

  </div>
</template>

<script>
import { formatarMoeda } from '../../utils/currencyUtils'

export default {
  name: 'ProductCard',

  props: {
    produto: {
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
