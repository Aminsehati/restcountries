<template>
  <div class="languagesCountry" v-for="languagesCountryItem in lanCountry" :key="languagesCountryItem.id">
      <span>
          {{languagesCountryItem.name}}
      </span>
  </div>
</template>

<script>
export default {
    name:'languagesCountry',
    props:{
        lanCountry:{
            type:Object,
        }
    }
}
</script>

<style scoped>
.languagesCountry{
    display: inline-block;
    margin-left: 5px;
}
</style>