<template>
  <div class="title">Казуальные</div>
<div class="container" >
  <div class="category" v-for="i in games" :key="i">
  <img  :src="require(`@/${i.image}`)" />
  <div class="name">{{i.name}}</div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Categories',
  data(){
    return {
      games: [
        {
          name: "Plants vs Zombies",
          image: "assets/plantsvszombies.jpg",
          exe: "plantsvszombies.exe"
        },
        {
          name: "Аркада",
          image: "assets/arcadescategory.jpg"
        },
        {
          name: "Азартные",
          image: "assets/azartcategory.jpg"
        },
        {
          name: "Приключения",
          image: "assets/adventurecategory.jpg"
        },
        {
          name: "Симуляторы",
          image: "assets/simulatorcategory.jpeg"
        },
        {
          name: "Стратегии",
          image: "assets/strategiescategory.jpg"
        },
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container{
  max-width: 1100px;
  margin: 0 auto;
  padding-top: 30px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-row-gap: 50px;
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
.name{
  text-align: center;
  color:white;
  font-size: 20px;
}
img{
  height: 185px;
  width: 185px;
}
</style>
