<template>
  <div class="home">
    <div class="input">
      <v-text-field
        v-model="newMeetingTitle"
        @click:append="addMeeting"
        @keyup.enter="addMeeting"
        class="pa-3"
        outlined
        label="Add Meeting"
        append-icon="mdi-plus"
        hide-details
        clearable
      ></v-text-field>
    </div>
    <v-list two-line flat>
      <div v-for="meeting in meetings" :key="meeting.id">
        <v-list-item
          :class="{ 'blue lighten-5': meeting.done }"
          @click="doneMeeting(meeting.id)"
        >
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox
                :input-value="meeting.done"
                color="primary"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>{{ meeting.title }}</v-list-item-title>
              <!-- <v-list-item-subtitle>{{
                meeting.description
              }}</v-list-item-subtitle> -->
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon>
                <v-icon
                  @click.stop="deleteMeeting(meeting.id)"
                  color="red lighten-1"
                  >mdi-delete</v-icon
                >
              </v-btn>
            </v-list-item-action>
          </template>
        </v-list-item>
        <v-divider> </v-divider>
      </div>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "Meeting",
  data() {
    return {
      newMeetingTitle: "",
      meetings: [
        {
          id: 1,
          title: "Meeting 1 title",
          done: false,
        },
        {
          id: 2,
          title: "Meeting 2 title",
          done: false,
        },
        {
          id: 3,
          title: "Meeting 3 title",
          done: false,
        },
      ],
    };
  },

  methods: {
    addMeeting() {
      let newMeeting = {
        id: Date.now(),
        title: this.newMeetingTitle,
        done: false,
      };
      this.meetings.push(newMeeting);
      this.newMeetingTitle = "";
    },
    doneMeeting(id) {
      let meeting = this.meetings.filter((meeting) => meeting.id === id)[0];
      meeting.done = !meeting.done;
    },
    deleteMeeting(id) {
      this.meetings = this.meetings.filter((meeting) => meeting.id !== id);
    },
  },
};
</script>

<style scoped>
.input {
  width: 60%;
  margin: auto;
}

@media screen and (max-width: 600px) {
  .input {
    width: 90%;
  }
}
</style>
