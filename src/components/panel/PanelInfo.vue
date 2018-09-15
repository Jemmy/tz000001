<template>
  <div class="info">
    <div>position: <strong>{{l}}x{{t}}</strong></div>
    <div>size: <strong>{{w}}x{{h}}</strong></div>
  </div>
</template>

<script>
  export default {
    name: 'PanelInfo',
    props: {
      l: {
        type: Number,
        default: 0
      },
      t: {
        type: Number,
        default: 0
      },
      w: {
        type: Number,
        default: 0
      },
      h: {
        type: Number,
        default: 0
      }
    }
  }
</script>

<style lang="scss" scoped>
  .info {
    position: absolute;
    text-align: left;
    right: 8px;
    bottom: 4px;
    font-size: 10px;
    & > div {
      width: 120px;
      strong {
        display: inline-block;
        float: right;
      }
    }
  }
</style>
