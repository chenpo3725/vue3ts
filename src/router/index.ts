import { createWebHistory, createRouter } from "vue-router";
const routes = [
  // { path: "/:catchAll(.*)", component: () => import("../components/notFound.vue"), },
  // { path: "/", name: "HelloWorld", component: () => import("../components/HelloWorld.vue"), },
  {
    path: "/",
    name: "home",
    component: () => import("@/components/home.vue"),
  },
];
const router = createRouter({ history: createWebHistory(), routes });
export default router;
