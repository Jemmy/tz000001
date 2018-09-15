<template>
  <div class="title" v-bind:class="{ active: active }">
    <panel-title-button :click="close"></panel-title-button>
    <slot></slot>
  </div>
</template>

<script>
  import PanelTitleButton from './PanelTitleButton'

  export default {
    name: 'PanelTitle',
    components: {
      PanelTitleButton
    },
    props: {
      active: {
        type: Boolean,
        required: true,
        default: false
      },
      close: {
        type: Function,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "vars";

  .title {
    height: 32px;
    overflow-x: hidden;
    overflow-y: hidden;
    overflow-wrap: break-spaces;
    line-height: 32px;
    text-align: left;
    padding-left: 8px;
    border-bottom: $borderSize solid $borderColor;

    &.active {
      border-color: $borderActiveColor;
      background-color: #d5d2ff;
    }
  }
</style>
