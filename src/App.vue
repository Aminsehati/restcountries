<template>
  <div :class="{'dark':darkMode}">
      <Navbar @onclick="darkMode=!darkMode" />
      <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar/Navbar';
export default {
  name:'App',
  components:{Navbar},
  data(){
    return {
      darkMode:false,
    }
  }
}
</script>

<style>
.row{
  margin-left: -15px;
  margin-right: -15px;
  display: flex;
  flex-wrap: wrap;
}
.d-inline-block{
  display: inline-block;
}
</style>