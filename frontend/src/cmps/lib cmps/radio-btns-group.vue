<template>
   <el-radio-group v-model="radio"  @change="setInStockInFilterBy">
  <el-radio :label="true">In stock</el-radio>
  <el-radio :label="false">Not in stock</el-radio>
  <el-radio :label="null">In and Out of stock</el-radio>
</el-radio-group>
</template>

<script>
  export default {
    data () {
      return {
        radio: true
      };
    },
     methods: {
    setInStockInFilterBy() {
      this.$emit("setInStockInFilterBy", this.radio);
    },
  },
    
  }
</script>





