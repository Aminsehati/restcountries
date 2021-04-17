<template>
  <div class="home">
    <div class="container">
      <SearchBox @filterCountry="updateValue" :value="value" />
      <div class="country">
        <CountryItem :countryList="filterCountry" />
      </div>
    </div>
  </div>
</template>

<script>
import SearchBox from "../components/SearchBox/SearchBox";
import CountryItem from "../components/CountryItem/CountryItem";

export default {
  name: "Home",
  components: {
    SearchBox,
    CountryItem,
  },
  data() {
    return {
      value: "",
      countryList: [],
    };
  },
  methods: {
    async apiQuery() {
      const res = await fetch("https://restcountries.eu/rest/v2/all");
      const data = await res.json();
      this.countryList = data;
    },
    updateValue(key){
      this.value = key;
    }

  },
  computed: {
    filterCountry(){
      return this.countryList.filter((item)=>{
        if(this.value){
          return item.name.toLowerCase().includes(this.value.toLowerCase());
        }else{
          return true 
        }
      });
    }
  },
  mounted() {
    this.apiQuery();
  },
};
</script>
<style scoped>
.home {
  padding-top: 30px;
}
.dark .home {
  background: #202d36;
}
.country {
  display: flex;
  flex-wrap: wrap;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
  padding-top: 40px;
}
</style>
