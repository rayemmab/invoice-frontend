import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Dashboard from "@/layouts/dashboard.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        layout: Dashboard,
      },
    },
    {
      path: "/clients",
      name: "client",
      component: () => import("../views/ClientView.vue"),
      meta: {
        layout: Dashboard,
      },
    },
    {
      path: "/users",
      name: "user",
      component: () => import("../views/UserView.vue"),
      meta: {
        layout: Dashboard,
      },
    },
    {
      path: "/currencies",
      name: "currency",
      component: () => import("../views/CurrencyView.vue"),
      meta: {
        layout: Dashboard,
      },
    }
    ,{
      path: "/invoices",
      name: "invoice",
      component: () => import("../views/InvoiceView.vue"),
      meta: {
        layout: Dashboard,
      },
    },
  ],
});

export default router;
