<template>
  <section class="toy-preview">
    <h2>{{ toy.name }}</h2>
    <h3>Price: {{ toy.price }}$</h3>
    <button @click="removeToy">X</button>
    <router-link :to="'/toy/' + toy._id">Details</router-link>
  </section>
</template>

<script>
export default {
  props: {
    toy: {
      type: Object,
      default: null,
    },
  },
  methods: {
    removeToy() {
      this.$emit("removeToy", this.toy._id);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>