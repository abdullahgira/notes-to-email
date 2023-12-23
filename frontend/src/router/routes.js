import { getAuth } from "firebase/auth";
import { pathnames } from "./pathnames";

const routes = [
  {
    path: "/",
    beforeEnter: async () => {
      const auth = getAuth();
      const user = auth.currentUser;
      if (!user) return pathnames.login;

      return true;
    },
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },
  {
    path: pathnames.login,
    beforeEnter: async () => {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user) return pathnames.home;

      return true;
    },
    component: () => import("pages/LoginPage.vue"),
    children: [{ path: "", component: () => import("pages/LoginPage.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
