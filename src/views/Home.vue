<template>
  <div class="home">
    <div id="nav">
      <router-link to="/desktop">Интерактивный рабочий стол</router-link>
      |
      <router-link to="/blockchain.v1">Взаимодействие с сервером по протоколу websocket v1</router-link>
      |
      <router-link to="/blockchain.v2">Взаимодействие с сервером по протоколу websocket v2</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home'
  }
</script>

<style lang="scss" scoped>
  #nav {
    margin-top: 24px;
    text-align: center;
  }
</style>
