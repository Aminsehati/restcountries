<template>
  <div class="country">
    <div class="container">
      <router-link to="/" class="back"> back </router-link>
      <div class="row pt-40">
        <div class="country-image">
          <img :src="dataCountry.flag" />
        </div>
        <div class="country-content">
          <h2>
            {{ dataCountry.name }}
          </h2>
          <div class="row">
            <div class="country__item">
              <p>
                Native Name : <span>{{ dataCountry.nativeName }}</span>
              </p>
            </div>
            <div class="country__item">
              <p>
                Top level Domain :
                <span>{{ dataCountry.topLevelDomain &&  dataCountry.topLevelDomain[0]}}</span>
              </p>
            </div>
            <div class="country__item">
              <p>
                Population : <span>{{ dataCountry.population }}</span>
              </p>
            </div>
            <div class="country__item">
              <p>
                Curreencies : <span>{{ dataCountry.currencies &&  dataCountry.currencies[0].name}}</span>
              </p>
            </div>
            <div class="country__item">
              <p>
                Region : <span>{{ dataCountry.region }}</span>
              </p>
            </div>
            <div class="country__item">
              <p class="d-inline-block">languages :</p>
              <languagesCountry :lanCountry="dataCountry.languages" />
            </div>
            <div class="country__item col-12">
              <p>
                sub Region: <span>{{ dataCountry.subregion }}</span>
              </p>
            </div>
            <div class="country__item col-12">
              <p>
                Capital: <span>{{ dataCountry.capital }}</span>
              </p>
            </div>
            <div class="country__item col-12">
              <p class="d-inline-block">
                border Countries:
              </p>
              <BorderCountry :BorderCountry="dataCountry.borders"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import languagesCountry from "../components/languagesCountry/languagesCountry";
import BorderCountry from '../components/BorderCountry/BorderCountry';
export default {
  name: "Country",
  components: { languagesCountry ,BorderCountry },
  data() {
    return {
      name: null,
      dataCountry: [],
    };
  },
  methods: {
    async getCountryData(name) {
      //https://restcountries.eu/rest/v2/name/name
      const resp = await fetch(`https://restcountries.eu/rest/v2/name/${name}`);
      const respData = await resp.json();
      this.dataCountry = respData[0];
    },
  },
  mounted() {
    this.name = this.$route.params.name ?? null;
    this.getCountryData(this.name);
  },
  computed: {
    getData() {
      return {
        name: null,
        topLevelDomain: [],
        ...this.dataCountry,
      };
    },
  },
};
</script>

<style scoped>
.dark .country{
  background: #202d36;
}
.country {
  padding-top: 40px;
  padding-bottom:180px ;
}
.dark .country .country-content{
  color: #fff;
}
.dark .country .country-content .country-content .country__item p{
  color: #fff;
}
.dark .country .country-content  .country__item p span{
  opacity: 0.6;
}
.pt-40 {
  padding-top: 40px;
}
.dark .country .back{
  background: #2b3743;
  color: #fff;
}
.country .back {
  background: #fff;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  padding: 0.25rem 1.6rem;
  color: black;
  border-radius: 3px;
}
.country-image {
  flex: 0 0 50%;
  max-width: 50%;
  padding-left: 20px;
  padding-right: 15px;
}
.country-image img {
  border-radius: 4px;
  display: block;
  width: 100%;
}
.country-content {
  flex: 0 0 50%;
  max-width: 50%;
  padding-right: 15px;
  padding-left: 15px;
}
.country-content h2 {
  margin-bottom: 20px;
}
.country-content .country__item {
  flex: 0 0 50%;
  max-width: 50%;
  padding-right: 15px;
  padding-left: 15px;
  margin-bottom: 20px;
}
.country-content .country__item p {
  font-weight: 600;
}
.country-content .country__item p span {
  font-weight: 400;
}
.country__item.col-12 {
  flex: 0 0 100%;
  max-width: 100%;
}
@media screen and (max-width:1188px){
  .country .country-content .country__item.col-12 p.d-inline-block{
    display: block;
    margin-bottom: 12px;
  }
}
@media screen and (max-width:1108px){
  .country .country-image{
    flex: 0 0 100%;
    max-width: 100%;
    margin-bottom: 20px;
  } 
  .country .country-image img{
    width: 60%;
    margin: 0 auto;
  }
  .country .country-content{
    flex: 0 0 100%;
    max-width: 100%;
  }
}
@media screen and (max-width:646px){
  .country .country-content .country__item{
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>