<template>
  <div class="home">
    <add-meeting-input />
    <list-meetings v-if="$store.state.meetings.length" />
    <no-meeting v-else />

    <button-done-sorting v-if="$store.state.sorting" />
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
    "button-done-sorting": require("@/components/Meeting/ButtonDoneSorting.vue")
      .default,
  },
};
</script>
