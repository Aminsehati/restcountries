<template>
  <form class="form-search">
    <div class="form-group">
      <input
        type="text"
        :placeholder="placeholder"
        @input="$emit('filterCountry',$event.target.value)"
      />
    </div>
  </form>
</template>

<script>
import "./SearchBox.css";
export default {
  name: "SearchBox",
  props: {
    value: {
      type: String,
    },
    placeholder: {
      type: String,
      default: "search for a country",
    },
  },
};
</script>

<style>
</style>