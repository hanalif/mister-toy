<template>
  <section class="toy-filter">
    <h2>Filter toys by</h2>
    
    <input
      type="text"
      v-model="filterBy.name"
      placeholder="Search toy by name"
      @input="debouncedFilter"
    />
    <span>From price:</span>
    <input
      type="number"
      v-model="filterBy.fromPrice"
      @input="debouncedFilter"
    />
    <span>To price:</span>
    <input type="number" v-model="filterBy.toPrice" @input="debouncedFilter" />
    
   <div class="check-box-container">
      <div>
        <input
          type="radio"
          name="search"
          :value="null"
          v-model="filterBy.isInStock"
          @change="setFilters"
          checked
        />
        <label>In and Out of stock</label>
      </div>
      <div>
        <input
          type="radio"
          name="search"
          :value="true"
          v-model="filterBy.isInStock"
          @change="setFilters"
        />
        <label>In stock</label>
      </div>
      <div>
        <input
          type="radio"
          name="search"
          :value="false"
          v-model="filterBy.isInStock"
          @change="setFilters"
        />
        <label>Not in stock</label>
      </div>
    </div> 

    
    <select v-model="filterBy.type" @change="setFilters">
    <option value="all">All</option>
    <option value="vehicle">Vehicle</option>
    <option value="children">Children</option>
    <option value="sports">Sports</option>
    <option value="animals">Animals</option>
  </select>
   
  </section>
</template>

<script>

import { utilService } from "../services/util.service.js";
export default {
  data() {
    return {
      filterBy: {
        name: "",
        type: "all",
        fromPrice: 0,
        toPrice: null,
        isInStock: true,
      },
      debouncedFilter: null,
    };
  },
  methods: {
    setFilters() {
      this.$emit("setFilterBy", this.filterBy);
    },
    setInStockInFilterBy(isInStockFilterResults){
      this.filterBy.isInStock = isInStockFilterResults
      this.setFilters();
    },
    setSelectedTypeyInFilterBy(toysTypeSelectResults){
      console.log(toysTypeSelectResults)
         this.filterBy.type = toysTypeSelectResults
        this.setFilters();
    }
  },
  created() {
    this.debouncedFilter = utilService.debounce(this.setFilters);
  },
 
};
</script>

<style lang="scss" scoped>
</style>