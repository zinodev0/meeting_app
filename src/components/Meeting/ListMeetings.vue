<template>
  <v-list two-line flat>
    <draggable
      @start="isDragging = true"
      @end="isDragging = false"
      v-model="meetings"
      handle=".handle"
    >
      <transition-group type="transition" name="flip-list">
        <meeting
          v-for="meeting in meetings"
          :key="meeting.id"
          :meeting="meeting"
        />
      </transition-group>
    </draggable>
  </v-list>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "ListMeetings",
  components: {
    meeting: require("@/components/Meeting/Meeting.vue").default,
    draggable,
  },
  computed: {
    meetings: {
      get() {
        return this.$store.getters.meetingsFiltered;
      },
      set(value) {
        this.$store.dispatch("setMeetings", value);
      },
    },
  },
};
</script>

<style>
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
</style>
