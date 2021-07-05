<template>
  <section v-if="toyToEdit" class="toy-edit app-main">
    <h3>{{ title }}</h3>
    <form @submit.prevent="save">
      <input type="text" placeholder="toy name" v-model="toyToEdit.name" />
       <input type="text" placeholder="toy type" v-model="toyToEdit.type" />
      <input type="number" placeholder="toy price" v-model="toyToEdit.price" />
      <button>Save</button>
    </form>
  </section>
</template>

<script>
import { toyService } from '@/services/toy.service.js';
import { showMsg } from '@/services/eventBus.service.js';
export default {
  data() {
    return {
      toyToEdit: null,
    };
  },
  methods: {
    save() {
      this.$store.dispatch({ type: "saveToy", toy: JSON.parse(JSON.stringify( this.toyToEdit)) });
      this.$router.push("/toy-app");
    },
  },
  computed: {
    title() {
      return this.toyId ? "Toy Edit" : "Toy Add";
    },
    toyId() {
      return this.$route.params.toyId;
    },
  },
  created() {
    if (this.toyId) {
      this.$store
        .dispatch({ type: "getToyById", toyId: this.toyId })
        .then((t) => {
          showMsg(`toy by id loaded`);
          this.toyToEdit = t;
        })
        .catch((err) => {
          showMsg("Cannot load toy, try again later", "danger");
        });
    } else {
      this.toyToEdit = toyService.getEmptyToy();
    }
  },
};
</script>

<style lang="scss" scoped>
</style>