import {
  createRouter,
  createWebHistory,
  Router,
  RouteRecordRaw
} from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "LAYOUT",
    redirect: "/home",
    component: () =>
      import(/* webpackChunkName: "layout" */ "../views/layout/index.vue"),
    children: [
      {
        path: "home",
        name: "HOME",
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/home/index.vue")
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router
