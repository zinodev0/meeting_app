<template>
  <div class="no-meeting">
    <v-icon size="100" color="primary"> mdi-alert-octagon </v-icon>
    <div class="text-h5 primary--text">No Meeting</div>
  </div>
</template>

<script>
export default {
  name: "No-Meeting",
};
</script>

<style scoped>
.no-meeting {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 60%;
  text-align: center;
}
</style>
