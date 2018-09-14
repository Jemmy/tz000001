<template>
    <div class="blockchain">
        <child-toolbar :title="title"></child-toolbar>
    </div>
</template>

<script>
  // @ is an alias to /src
  import ChildToolbar from '@/components/layout/ChildToolbar.vue'

  export default {
    name: 'blockchain',
    components: {
      ChildToolbar
    },
    data () {
      return {
        title: 'Взаимодействие с сервером по протоколу websocket'
      }
    }
  }
</script>
