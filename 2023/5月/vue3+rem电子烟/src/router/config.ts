import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "首页",
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("@/pages/home"),
      },
      {
        path: "/userguide",
        name: "userguide",
        component: () => import("@/pages/faq2"),
      },
      {
        path: "/login",
        name: "login",
        component: () => import("@/pages/login"),
      },
      {
        path: "/house",
        name: "house",
        component: () => import("@/pages/house"),
      },
      {
        path: "/become",
        name: "become",
        component: () => import("@/pages/become"),
      },
      {
        path: "/faq",
        name: "faq",
        component: () => import("@/pages/faq"),
      },
      {
        path: "/privacy",
        name: "privacy",
        component: () => import("@/pages/privacy"),
      },
      {
        path: "/terms",
        name: "terms",
        component: () => import("@/pages/terms"),
      },
      {
        path: "/rules",
        name: "rules",
        component: () => import("@/pages/rules"),
      },
      {
        path: "/contactUs",
        name: "contactUs",
        component: () => import("@/pages/contactUs"),
      },
      {
        path: "/shipping",
        name: "shipping",
        component: () => import("@/pages/shipping"),
      },
      {
        path: "/detail",
        name: "detail",
        component: () => import("@/pages/detail"),
      },
      {
        path: "/shopping",
        name: "shopping",
        component: () => import("@/pages/shopping"),
      },
      {
        path: "/aboutUs",
        name: "aboutUs",
        component: () => import("@/pages/aboutUs"),
      },
      {
        path: "/added",
        name: "added",
        component: () => import("@/pages/added"),
      },
      {
        path: "/service",
        name: "service",
        component: () => import("@/pages/service"),
      },
      {
        path: "/payment",
        name: "payment",
        component: () => import("@/pages/payment"),
      },
      {
        path: "/profile",
        name: "profile",
        component: () => import("@/pages/profile"),
      },
      {
        path: "/register",
        name: "register",
        component: () => import("@/pages/register"),
      },
    ],
    
  },
 
  {
    path: "/404",
    name: "404",
    component: () => import("@/pages/home"),//首页暂代404
  },
  {
      path: "/:error*",
      redirect:"/404"
  },
];

export default routes;
