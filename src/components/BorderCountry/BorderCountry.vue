<template>
  <div class="BorderCountry" v-for="(BorderCountryItem,index) in BorderCountry" :key="index">
      <a href="#">
          {{BorderCountryItem}}
      </a>
  </div>
</template>

<script>
export default {
    name:'BorderCountry',
    props:{
        BorderCountry:{
            type:Object
        }
    }
}
</script>

<style scoped>
.BorderCountry{
    display: inline-block;
}
.BorderCountry a{
    color: black;
    display: inline-block;
     background: #fff;
    box-shadow: rgb(60 64 67 / 30%) 0px 1px 2px 0px, rgb(60 64 67 / 15%) 0px 1px 3px 1px;
     margin-left: 10px;
    padding: 0.5rem 1rem;
}
@media screen and (max-width:473px){
    .BorderCountry a{
        margin-bottom: 10px;
    }
}
</style>