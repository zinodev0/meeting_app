import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
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
  },
  getters: {},
  mutations: {
    addMeeting(state, newMeetingTitle) {
      let newMeeting = {
        id: Date.now(),
        title: newMeetingTitle,
        done: false,
      };
      state.meetings.push(newMeeting);
    },
    doneMeeting(state, id) {
      let meeting = state.meetings.filter((meeting) => meeting.id === id)[0];
      meeting.done = !meeting.done;
    },
    deleteMeeting(state, id) {
      state.meetings = state.meetings.filter((meeting) => meeting.id !== id);
    },
  },
  actions: {},
  modules: {},
});
