import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AddABookAndUpdate from "../views/AddABookAndUpdate.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/addorupd",
    name: "Add a Book and Update ",
    component: AddABookAndUpdate 
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
