import {
  createRouter,
  createWebHashHistory,
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
      },
      {
        path: "about",
        name: "ABOUT",
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/about/index.vue")
      }
    ]
  },
  {
    path: "/message",
    name: "MESSAGE",
    component: () =>
      import("../views/message/index.vue")
  },
  {
    path: "/map_echart",
    name: "MAPECHART",
    component: () =>
      import("../views/mapEchart/index.vue")
  },
]

const router = createRouter({
  // 页面刷新路丢失 方案一 改服务器 方案二 使用Hash
  history: createWebHashHistory(), //createWebHistory(process.env.BASE_URL),
  routes
});

export default router
