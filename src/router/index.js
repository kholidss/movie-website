import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Blog from "../views/Blog.vue";
import About from "../views/About.vue";
import Lines from "../views/Lines.vue";
import Projects from "../views/Projects.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },

  {
    path: "/about",
    name: "About",
    component: About,
  },

  {
    path: "/lines",
    name: "Lines",
    component: Lines,
  },

  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
