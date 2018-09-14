<template>
    <div class="title">
        <a class="title__home" href="/" to="home">Домой</a>
        <h1 class="title__caption">{{ title }}</h1>
    </div>
</template>

<script>
  export default {
    name: 'ChildToolbar',
    props: {
      title: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .title {
        background-color: antiquewhite;
        text-align: left;
        height: 40px;
        margin: 0;
        &__home {
            display: block;
            float: left;
            color: #3F51B5;
            height: 16px;
            padding: 12px;
            font-size: 14px;
            text-transform: uppercase;
            font-weight: 700;
        }
        &__caption {
            display: block;
            float: left;
            margin: 8px 0;
            padding: 0 0 0 8px;
            font-size: 20px;
        }
    }
</style>
