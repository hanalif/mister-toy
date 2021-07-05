<template>
  <section class="toy-app">
    <toy-filter @setFilterBy="setFilterBy"></toy-filter>
    <toy-list :toys="toys" @removeToy="removeToy"> </toy-list>
    <router-link to="/toy/edit">Add new toy</router-link>
  </section>
</template>

<script>
import toyList from "@/cmps/toy-list.vue";
import toyFilter from "@/cmps/toy-filter.vue";
export default {
  methods: {
    removeToy(toyId) {
      this.$store.dispatch({ type: "removeToy", toyId });
    },
    setFilterBy(filterBy) {
      this.$store.commit({ type: "setFilter", filterBy });
      this.$store.dispatch({ type: 'loadToys' });
    },
  },
  computed: {
    toys() {
      return this.$store.getters.toysToShow;
    },
    filterBy() {
      return this.$store.getters.filterBy;
    },
  },
  components: {
    toyList,
    toyFilter,
  },
};
</script>

<style lang="scss" scoped>
</style>
