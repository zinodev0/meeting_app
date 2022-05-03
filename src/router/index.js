import Vue from "vue";
import VueRouter from "vue-router";
import MeetingView from "../views/MeetingView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Meeting",
    component: MeetingView,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${process.env.VUE_APP_TITLE} - ${to.name}`;
  next();
});

export default router;
