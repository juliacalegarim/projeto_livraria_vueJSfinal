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

.resumo-carrinho{
    width:320px;
    background:#fff;
    border-radius:12px;
    padding:25px;
    box-shadow:0 2px 10px rgba(0,0,0,.08);
}

.titulo{
    font-size:24px;
    margin-bottom:25px;
    color:#222;
}

.linha{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin:18px 0;
    font-size:17px;
}

.total{
    font-size:22px;
    font-weight:bold;
    color:#0b8a42;
}

hr{
    border:none;
    border-top:1px solid #ddd;
    margin:20px 0;
}

.botao-finalizar{
    width:100%;
    margin-top:25px;
    padding:14px;
    border:none;
    border-radius:8px;
    background:#0b8a42;
    color:white;
    font-size:17px;
    font-weight:bold;
    cursor:pointer;
}

.botao-finalizar:hover{
    background:#08753a;
}

</style>
