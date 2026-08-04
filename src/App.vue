<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background-color: #ffffff;
  color: #333;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  cursor: pointer;
}

#app {
  min-height: 100vh;
}
</style>
