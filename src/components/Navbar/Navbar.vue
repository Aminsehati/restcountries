<template>
  <div class="Navbar">
      <div class="container d-flex justify-between">
          <h2>
           <router-link to="/">
             Where in the World ?
           </router-link>
         </h2>
         <span @click="$emit('onclick')">
           Dark mode
         </span>
      </div>
  </div>
</template>

<script>
import './Navbar.css';
export default {
    name:'Navbar ',
    emits:['click'],
}
</script>