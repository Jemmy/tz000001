<template>
  <button @click="onClick(id)" class="button">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'DesktopTaskbarButton',
    props: {
      id: {
        type: Number,
        required: true
      },
      onClick: {
        type: Function,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .button {
    display: block;
    color: #333;
    text-align: center;
    padding: 8px 16px;
    text-decoration: none;
    &:hover {
      color: #fff;
      background-color: #111;
    }
  }
</style>
