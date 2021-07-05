<template>
  <section v-if="toy" class="toy-details app-main">
    <h2>{{ toy.name }}</h2>
    <h3>Price: {{ toy.price }}$</h3>
    <router-link :to="'/toy/edit/' + toy._id">Edit</router-link>
    <router-link to="/toy-app">Back</router-link>
  </section>
</template>

<script>
import { showMsg } from '@/services/eventBus.service.js';
export default {
  data() {
    return {
      toy: null,
    };
  },
  methods: {
    loadToy() {
      const id = this.$route.params.toyId;
      this.$store
        .dispatch({ type: "getToyById", toyId: id })
        .then((t) => {
          showMsg(`toy by id loaded`);
          this.toy = t;
        })
        .catch((err) => {
          showMsg("Cannot load toy, try again later", "danger");
        });
    },
  },
  created(){
        this.loadToy()
    }
};
</script>

<style lang="scss" scoped>
</style>