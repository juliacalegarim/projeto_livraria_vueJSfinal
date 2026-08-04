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

.item-carrinho{
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:20px;
    padding:20px;
    border-bottom:1px solid #e5e5e5;
}

.imagem-livro{
    width:90px;
    height:130px;
    object-fit:cover;
    border-radius:8px;
}

.informacoes{
    flex:1;
}

.titulo{
    font-size:20px;
    margin-bottom:8px;
    color:#222;
}

.autor{
    color:#666;
    margin-bottom:10px;
}

.preco{
    color:#0b8a42;
    font-weight:bold;
    font-size:18px;
}

.quantidade{
    display:flex;
    align-items:center;
    gap:12px;
}

.botao{
    width:35px;
    height:35px;
    border:none;
    border-radius:6px;
    background:#0b8a42;
    color:white;
    font-size:18px;
    cursor:pointer;
}

.botao:hover{
    background:#08753a;
}

.subtotal{
    width:130px;
    text-align:right;
    font-size:20px;
    font-weight:bold;
    color:#0b8a42;
}

</style>
