<template>
  <div class="home">
      <div id="nav">
          <router-link to="/desktop">Интерактивный рабочий стол</router-link>
          |
          <router-link to="/blockchain">Взаимодействие с сервером по протоколу websocket</router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>
