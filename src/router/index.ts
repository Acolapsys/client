import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import store from "@/store";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/cd-home.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/cd-login.vue")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/cd-register.vue")
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../views/cd-dashboard.vue")
  },
  {
    path: "/files",
    name: "files",
    component: () => import("../views/files/cd-files.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  
  const publicPages = ["/login", "/register", "/"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = store.state.user.isAuth
  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next("/login");
  } else {
    next();
  }
});

export default router;
