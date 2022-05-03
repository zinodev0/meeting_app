import Vue from "vue";
import Vuex from "vuex";
import Localbase from "localbase";

let db = new Localbase("db");
db.config.debug = false;

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    appTitle: process.env.VUE_APP_TITLE,
    search: null,
    meetings: [
      // {
      //   id: 1,
      //   title: "Meeting 1 title",
      //   done: false,
      //   dueDate: "2022-05-16",
      // },
      // {
      //   id: 2,
      //   title: "Meeting 2 title",
      //   done: false,
      //   dueDate: "2020-11-24",
      // },
      // {
      //   id: 3,
      //   title: "Meeting 3 title",
      //   done: false,
      //   dueDate: null,
      // },
    ],
    snackbar: {
      show: false,
      text: "alert",
    },
    sorting: false,
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

    addMeeting(state, newMeeting) {
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
    setMeetings(state, meetings) {
      state.meetings = meetings;
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

    toggleSorting(state) {
      state.sorting = !state.sorting;
    },
  },
  actions: {
    async addMeeting({ commit }, newMeetingTitle) {
      let newMeeting = {
        id: Date.now(),
        title: newMeetingTitle,
        done: false,
        dueDate: null,
      };
      await db.collection("meetings").add(newMeeting);

      commit("addMeeting", newMeeting);
      commit("showSnackbar", "Meeting Added");
    },
    async doneMeeting({ state, commit }, id) {
      let meeting = state.meetings.filter((meeting) => meeting.id === id)[0];
      await db.collection("meetings").doc({ id }).update({
        done: !meeting.done,
      });
      commit("doneMeeting", id);
    },

    async deleteMeeting({ commit }, id) {
      await db.collection("meetings").doc({ id }).delete();
      commit("deleteMeeting", id);
      commit("showSnackbar", "Meeting Deleted");
    },
    async updateMeetingTitle({ commit }, payload) {
      await db.collection("meetings").doc({ id: payload.id }).update({
        title: payload.title,
      });
      commit("updateMeetingTitle", payload);
      commit("showSnackbar", " Meeting Updated");
    },
    async updateMeetingDueDate({ commit }, payload) {
      await db.collection("meetings").doc({ id: payload.id }).update({
        dueDate: payload.dueDate,
      });
      commit("updateMeetingDueDate", payload);
      commit("showSnackbar", " Due Date Updated");
    },

    setMeetings({ commit }, meetings) {
      db.collection("meetings").set(meetings);
      commit("setMeetings", meetings);
    },
    async getMeetings({ commit }) {
      let meetings = await db.collection("meetings").get();

      commit("setMeetings", meetings);
    },
  },
  modules: {},
});
