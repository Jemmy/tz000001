<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style lang="scss">
    body, html {
        width: 100%;
        height: 100%;
        min-height: 100%;
        min-width: 100%;
        padding: 0;
        margin: 0;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        width: 100%;
        height: 100%;
        min-height: 100%;
        min-width: 100%;
    }

    a {
        color: #3F51B5;
    }
</style>
