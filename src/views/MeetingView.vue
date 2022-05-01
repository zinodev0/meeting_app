<template>
  <div class="home">
    <add-meeting-input />
    <list-meetings v-if="$store.state.meetings.length" />
    <no-meeting v-else />
  </div>
</template>

<script>
export default {
  name: "Meeting",

  components: {
    "add-meeting-input": require("@/components/Meeting/AddMeetingInput.vue")
      .default,
    "list-meetings": require("@/components/Meeting/ListMeetings.vue").default,
    "no-meeting": require("@/components/Meeting/NoMeeting.vue").default,
  },
};
</script>
