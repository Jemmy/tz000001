<template>
    <div class="desktop">
        <child-toolbar :title="title"></child-toolbar>
    </div>
</template>

<script>
  // @ is an alias to /src
  import ChildToolbar from '@/components/layout/ChildToolbar.vue'

  export default {
    name: 'desktop',
    components: {
      ChildToolbar
    },
    data () {
      return {
        title: 'Интерактивный рабочий стол'
      }
    }
  }
</script>
