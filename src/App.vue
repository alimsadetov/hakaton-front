<template>
  <div id="app">
  <Categories />
  </div>
</template>

<script>
import Categories from './components/Categories.vue'

export default {
  name: 'App',
  components: {
    Categories
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #000000;
  background-image: linear-gradient(315deg, #000000 0%, #414141 74%);
  width: 100%;
  height: 100%;
}
</style>
