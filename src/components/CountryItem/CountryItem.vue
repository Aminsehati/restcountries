<template>
  <div class="country-item" v-for="country in countryList" :key="country.id">
    <div class="country-inner">
      <div class="country-image">
        <router-link :to="'/country/' + country.name">
          <img :src="country.flag" />
        </router-link>
      </div>
      <div class="country-title">
        <h2>
          {{ country.name }}
        </h2>
        <p>
          Population : <span>{{ country.population }}</span>
        </p>
        <p>
          Region : <span>{{ country.region }}</span>
        </p>
        <p>
          Capital : <span>{{ country.capital }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CountryItem",
  props: {
    countryList: {
      type: Object,
    },
  },
};
</script>

<style scoped>
@import "./CountryItem.css";
</style>