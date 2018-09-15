<template>
  <div class="home">
    <div id="nav">
      <ol>
        <li>
          <router-link to="/desktop">Интерактивный рабочий стол</router-link>
        </li>
        <li>
          <router-link to="/blockchain">Взаимодействие с сервером по протоколу websocket</router-link>
        </li>
        <li>
          <router-link to="/dynamic">Тестирование подгружаемого модуля</router-link>
        </li>
      </ol>
    </div>
    <div id="content">
      <div v-if="isLoadModule">
        Модуль <strong>DynamicLoadModule.vue</strong> загружен.
      </div>
      <div v-else>
        Модуль <strong>DynamicLoadModule.vue</strong> не загружен.
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'home',
    computed: {
      ...mapGetters({
        isLoadModule: 'module/getState'
      })
    }
  }
</script>

<style lang="scss" scoped>
  .home {
    max-width: 80%;
    margin: 0 auto;
  }
  #nav {
    margin-top: 24px;
  }

  #content {
    padding-top: 24px;
    padding-left: 24px;
  }
</style>
