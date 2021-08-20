import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import(/* webpackChunkName: "home" */ "../views/Home");
const Login = () => import(/* webpackChunkName: "login")home" */ "../views/Login");

Vue.use(VueRouter);

const routes = [
  {
    name: "home",
    path: "/home",
    component: Home,
  },
  {
    name: "login",
    path:'/login',
    component: Login,
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

// 路由导航守卫
router.beforeEach((to, from, next) => {
  if (to.path === "/") {
    next("/home");
  }
  next();
});

export default router;
