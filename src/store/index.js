import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    search: null,
    meetings: [
      {
        id: 1,
        title: "Meeting 1 title",
        done: false,
        dueDate: "2022-05-16",
      },
      {
        id: 2,
        title: "Meeting 2 title",
        done: false,
        dueDate: "2020-11-24",
      },
      {
        id: 3,
        title: "Meeting 3 title",
        done: false,
        dueDate: null,
      },
    ],
    snackbar: {
      show: false,
      text: "alert",
    },
  },
  getters: {
    meetingsFiltered(state) {
      if (!state.search) {
        return state.meetings;
      }
      return state.meetings.filter((meeting) =>
        meeting.title.toLowerCase().includes(state.search.toLowerCase())
      );
    },
  },
  mutations: {
    setSearch(state, value) {
      state.search = value;
    },

    addMeeting(state, newMeetingTitle) {
      let newMeeting = {
        id: Date.now(),
        title: newMeetingTitle,
        done: false,
        dueDate: null,
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
    updateMeetingTitle(state, payload) {
      let meeting = state.meetings.filter(
        (meeting) => meeting.id === payload.id
      )[0];
      meeting.title = payload.title;
    },
    updateMeetingDueDate(state, payload) {
      let meeting = state.meetings.filter(
        (meeting) => meeting.id === payload.id
      )[0];
      meeting.dueDate = payload.dueDate;
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
    updateMeetingTitle({ commit }, payload) {
      commit("updateMeetingTitle", payload);
      commit("showSnackbar", " Meeting Updated");
    },
    updateMeetingDueDate({ commit }, payload) {
      commit("updateMeetingDueDate", payload);
      commit("showSnackbar", " Due Date Updated");
    },
  },
  modules: {},
});
