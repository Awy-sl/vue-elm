import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import(/* webpackChunkName: "home" */ "../views/Home");
const Login = () =>
  import(/* webpackChunkName: "login")home" */ "../views/Login");
const City = () => import(/* webpackChunkName: "city")home" */ "../views/City");
const Msite = () =>
  import(/* webpackChunkName: "msite")home" */ "../views/Msite");
const Search = () =>
  import(/* webpackChunkName: "search")home" */ "../views/Search");
const Shop = () => import(/* webpackChunkName: "shop")home" */ "../views/Shop");
const ShopDetail = () =>
  import(
    /* webpackChunkName: "shopDetail")home" */ "../views/Shop/children/ShopDetail"
  );

Vue.use(VueRouter);

const routes = [
  {
    name: "home",
    path: "/home",
    component: Home,
  },
  {
    name: "login",
    path: "/login",
    component: Login,
  },
  {
    name: "city",
    path: "/city/:cityid",
    component: City,
  },
  {
    name: "msite",
    path: "/msite",
    component: Msite,
  },
  {
    name: "search",
    path: "/search/:geohash",
    component: Search,
  },
  {
    name: "shop",
    path: "/shop",
    component: Shop,
    children: [
      {
        path: "shopDetail",
        component: ShopDetail,
      },
    ],
  },
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
