<template>
  <div class="about-page main-layout">
    <div class="top-about-container">
      <h1>About Us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
        voluptates, in maiores tempora odio nisi repellat asperiores? Nemo,
        ipsa, sequi repellat placeat molestiae enim deleniti labore possimus
        minima, quis ad.
      </p>
    </div>
    <div class="branches-map-container">
      <div class="map-side-container">
        <div class="branch-container">
          <h2>Sorotzkin 15</h2>
          <h3>Jerusalem</h3>
        </div>
        <div class="branch-container">
          <h2>Kaplan 28</h2>
          <h3>Tel Aviv</h3>
        </div>
      </div>
      <google-map></google-map>
    </div>
  </div>
</template>

<script>
import googleMap from "../cmps/lib cmps/google-map.vue";
export default {
  components: {
    googleMap,
  },
};
</script>

<style lang="scss" scoped>
</style>