<template>
  <v-list two-line flat>
    <meeting
      v-for="meeting in $store.state.meetings"
      :key="meeting.id"
      :meeting="meeting"
    />
  </v-list>
</template>

<script>
export default {
  name: "ListMeetings",
  components: {
    meeting: require("@/components/Meeting/Meeting.vue").default,
  },
};
</script>

<style></style>
