<template>
<div class="body">
  <Categories />
  </div>
</template>

<script lang="js">
import { defineComponent } from 'vue';
import Categories from './components/Categories.vue';

export default defineComponent({
  name: 'App',
  components: {
    Categories
  }
});
</script>

<style lang="scss">
.body{
  background-color: #000000;
  background-image: linear-gradient(315deg, #000000 0%, #414141 74%);
  width: 100%;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
