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

.card-livro{
    width:270px;
    background:#fff;
    border-radius:12px;
    overflow:hidden;
    box-shadow:0 2px 10px rgba(0,0,0,.08);
    transition:.3s;
    display:flex;
    flex-direction:column;
}

.card-livro:hover{
    transform:translateY(-5px);
}

.imagem-livro{
    width:100%;
    height:330px;
    object-fit:cover;
}

.informacoes{
    padding:18px;
    display:flex;
    flex-direction:column;
    gap:10px;
    flex:1;
}

.titulo{
    font-size:18px;
    color:#222;
}

.autor{
    color:#666;
    font-size:14px;
}

.descricao{
    color:#777;
    font-size:14px;
    line-height:1.5;
    flex:1;
}

.rodape-card{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-top:15px;
}

.preco{
    font-size:22px;
    font-weight:bold;
    color:#0b8a42;
}

.botao-comprar{
    background:#0b8a42;
    color:white;
    border:none;
    border-radius:8px;
    padding:10px 18px;
    font-weight:bold;
}

.botao-comprar:hover{
    background:#086d35;
}

</style>
