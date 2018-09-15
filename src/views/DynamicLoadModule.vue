<template>
  <div class="blockchain">
    <child-toolbar :title="title"></child-toolbar>
    <div class="blockchain__container">
      <h3>Проверка динамической загрузки модулей</h3>
    </div>
  </div>
</template>

<script>
  // @ алиас к папке /src
  import ChildToolbar from '@/components/layout/ChildToolbar.vue'
  import store from '@/_store'

  // Установка флага загрузки модуля
  store.dispatch('module/loaded', true)

  export default {
    name: 'blockchain-v2',
    components: {
      ChildToolbar
    },
    data () {
      return {
        title: ' Тестирование подгружаемого модуля'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .blockchain {
    &__container {
      padding-top: 32px;
      text-align: center;
    }
  }
</style>
