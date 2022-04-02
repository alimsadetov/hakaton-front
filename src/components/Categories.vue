<template>
<div class="title">Категории</div>
<div class="container" >
  <img class="category" v-for="i in categories" :key="i" :src="require(`@/${i.image}`)" />
</div>
</template>

<script lang="js">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Categories',
  data(){
    return {
      categories: [
        {
          name: "Казуальные",
          image: "assets/casualcategory.jpg"
        },
        {
          name: "Аркада",
          image: "../assets/arcadescategory.jpg"
        },
        {
          name: "Азартные",
          image: "../assets/azartcategory.jpg"
        },
        {
          name: "Приключения",
          image: "../assets/adventurecategory.jpg"
        },
        {
          name: "Симуляторы",
          image: "../assets/simulatorcategory.jpeg"
        },
        {
          name: "Стратегии",
          image: "../assets/strategiescategory.jpg"
        },
      ]
    }
  }
});
</script>

<style lang="scss" scoped>
.container{
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-row-gap: 40px;
}

.category{
  height: 185px;
  width: 185px;
  background-color: white;
  align-text: center;
  box-shadow: 0 20px 50px rgba(0,0,0,.8);
  justify-self: center;
}

.category:hover{
  box-shadow: 0 0px 10px rgba(255,255,255);
}

.title{
  padding-top: 50px;
  margin: 0 auto;
  font-size: 30px;
  color: white;
}


  
</style>
