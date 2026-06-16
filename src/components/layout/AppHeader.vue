<template>
  <header class="header">
    <div class="logo">
      <span class="green">P</span>Books
    </div>

    <div class="search">
      <input
        type="text"
        placeholder="Pesquisar livro..."
      />
    </div>

    <nav class="menu">
      <router-link to="/">Home</router-link>
      <a href="#">Livros</a>
      <a href="#">Favoritos</a>
    </nav>

    <div class="icons">
      <span>♡</span>
      <span>👤</span>

      <router-link to="/cart" class="cart">
        🛒
      </router-link>
    </div>
  </header>
</template>

<style scoped>
.header{
  display:flex;
  justify-content:space-between;
  align-items:center;

  padding:15px 40px;

  background:white;

  border-bottom:2px solid #2db55d;
}

.logo{
  font-size:24px;
  font-weight:bold;
}

.green{
  color:#2db55d;
}

.search{
  flex:1;
  display:flex;
  justify-content:center;
}

.search input{
  width:300px;

  padding:8px 12px;

  border:1px solid #ddd;
  border-radius:5px;

  outline:none;
}

.menu{
  display:flex;
  gap:20px;
}

.menu a{
  text-decoration:none;
  color:#333;
  font-size:14px;
}

.icons{
  display:flex;
  gap:15px;
  font-size:18px;
}

.cart{
  text-decoration:none;
}
</style>