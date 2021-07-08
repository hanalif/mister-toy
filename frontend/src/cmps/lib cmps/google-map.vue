<template>
  <GmapMap
    :center="{ lat: 11, lng: 11 }"
    :zoom="5"
    map-type-id="terrain"
    style="width: 500px; height: 300px"
  >
    <GmapMarker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="center = m.position"
    />
  </GmapMap>
</template>

<script>
export default {
  data() {
    return {
      markers: [
        { position: { lat: 11, lng: 11 } },
        { position: { lat: 12, lng: 12 } },
        { position: { lat: 13, lng: 13 } },
      ],
    };
  },
};
</script>

<style>
</style>


