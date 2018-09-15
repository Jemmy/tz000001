<template>
  <button @click="click" class="button"></button>
</template>

<script>
  export default {
    name: 'PanelTitleButton',
    props: {
      click: {
        type: Function,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "vars";

  .button {
    background-color: #ffffff;
    border-radius: 3px;
    border: 1px solid #dcdcdc;
    display: inline-block;
    cursor: pointer;
    color: #666666;
    font-size: 11px;
    font-weight: bold;
    padding: 3px 6px;
    text-decoration: none;
    text-shadow: 0 1px 0 #ffffff;
    margin-right: 4px;

    &:before {
      content: 'X';
    }
    &:hover {
      background-color: #f6f6f6;
    }
    &:active {
      position: relative;
      top: 1px;
    }
  }
</style>
