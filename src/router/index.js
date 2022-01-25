import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/communities",
    name: "Communities",
    component: () => import("../views/Communities.vue"),
  },
  {
    path: "/polls",
    name: "Polls",
    component: () => import("../views/Polls.vue"),
  },
  {
    path: "/groups",
    name: "Groups",
    component: () => import("../views/Groups.vue"),
  },
  {
    path: "/users",
    name: "Users",
    component: () => import("../views/Users.vue"),
  },
  {
    path: "/help",
    name: "Help",
    component: () => import("../views/Help.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
