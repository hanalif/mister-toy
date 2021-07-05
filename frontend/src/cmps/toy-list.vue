<template>
  <section class="toy-list">
    <toy-preview
      v-for="toy in toys"
      :toy="toy"
      :key="toy._id"
      @removeToy="removeToy"
    >
    </toy-preview>
  </section>
</template>

<script>
import toyPreview from '@/cmps/toy-preview.vue';
export default {
  props: {
    toys: {
      type: Array,
      default: []
    },
  },
  methods: {
      removeToy(toyId){
            this.$emit('removeToy', toyId)
        },
  },
   components: {
      toyPreview
    },
};
</script>

<style lang="scss" scoped>
</style>