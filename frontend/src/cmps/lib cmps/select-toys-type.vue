
<template>
  <el-select
    v-model="value"
    @change="setSelectedTypeyInFilterBy"
    placeholder="Select"
  >

    <el-option 
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
    </el-option>
  </el-select>
</template>


<script>
export default {
  data() {
    return {
      options: [
        {
          value: "all",
          label: "All",
        },
        {
          value: "vehicle",
          label: "Vehicle",
        },
        {
          value: "children",
          label: "Children",
        },
        {
          value: "sports",
          label: "Sports",
        },
        {
          value: "animals",
          label: "Animals",
        },
      ],
      value: "",
    };
  },
  methods: {
    setSelectedTypeyInFilterBy() {
      this.$emit("setSelectedTypeyInFilterBy", this.value);
    },
  },
};
</script>






