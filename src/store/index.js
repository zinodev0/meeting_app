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
    snackbar: {
      show: false,
      text: "alert",
    },
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
    showSnackbar(state, text) {
      let timeout = 0;
      if (state.snackbar.show) {
        state.snackbar.show = false;
        timeout = 300;
      }
      setTimeout(() => {
        state.snackbar.show = true;
        state.snackbar.text = text;
      }, timeout);
    },
    hideSnackbar(state) {
      state.snackbar.show = false;
    },
  },
  actions: {
    addMeeting({ commit }, newMeetingTitle) {
      commit("addMeeting", newMeetingTitle);
      commit("showSnackbar", "Meeting Added");
    },

    deleteMeeting({ commit }, id) {
      commit("deleteMeeting", id);
      commit("showSnackbar", "Meeting Deleted");
    },
  },
  modules: {},
});
