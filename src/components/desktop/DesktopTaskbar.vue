<template>
  <ul class="taskbar">
    <li :key="panel.id" v-for="panel in panels" v-if="panel.hide !== 0">
      <desktop-taskbar-button :id="panel.id" :onClick="onRestore">Окно "{{panel.title}}"</desktop-taskbar-button>
    </li>
  </ul>
</template>

<script>
  import DesktopTaskbarButton from './DesktopTaskbarButton'

  export default {
    name: 'DesktopTaskbar',
    components: {
      DesktopTaskbarButton
    },
    props: {
      panels: {
        type: Array,
        required: true
      },
      onRestore: {
        type: Function,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .taskbar {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 34px;

    list-style-type: none;
    margin: 0;
    padding: 1px;
    overflow: hidden;
    background-color: #333;

    li {
      display: block;
      float: left;
      margin-right: 1px;
    }
  }
</style>
