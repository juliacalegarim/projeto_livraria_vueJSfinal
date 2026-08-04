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

.cabecalho{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:20px 70px;
    background:#ffffff;
    border-bottom:1px solid #e5e5e5;
}

.logo-link{
    display:flex;
    align-items:center;
    gap:10px;
    text-decoration:none;
    color:#000;
}

.imagem-logo{
    width:45px;
}

.texto-logo{
    font-size:26px;
    font-weight:bold;
    color:#0b8a42;
}

.menu{
    display:flex;
    gap:35px;
}

.item-menu{
    text-decoration:none;
    color:#333;
    font-size:17px;
    font-weight:500;
}

.item-menu:hover{
    color:#0b8a42;
}

.acoes{
    display:flex;
    align-items:center;
    gap:20px;
}

.botao-login{
    background:#0b8a42;
    color:white;
    border:none;
    padding:10px 22px;
    border-radius:6px;
    font-size:15px;
}

.botao-login:hover{
    background:#097538;
}

.icone{
    color:#333;
    font-size:22px;
    text-decoration:none;
}

.icone:hover{
    color:#0b8a42;
}

</style>
