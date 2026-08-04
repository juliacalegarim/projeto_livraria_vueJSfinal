<template>
  <header class="cabecalho">
    <div class="logo">
      <router-link to="/" class="logo-link">
        <img src="/logo.png" alt="IFbooks" class="imagem-logo">
        <span class="texto-logo">IFbooks</span>
      </router-link>
    </div>

    <nav class="menu">
      <router-link to="/" class="item-menu">
        Início
      </router-link>

      <a href="#" class="item-menu">
        Catálogo
      </a>

      <a href="#" class="item-menu">
        Sobre
      </a>
    </nav>

    <div class="acoes">
      <button class="botao-login">
        Login
      </button>

      <router-link to="/carrinho" class="icone">
        <i class="fa-solid fa-cart-shopping"></i>
      </router-link>

      <div class="icone">
        <i class="fa-regular fa-user"></i>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader"
}
</script>

<style scoped>
</style>
