import { createRouter, createWebHistory } from "vue-router";
import BottomNav from "@/views/BottomNav.vue";
import HomeNav from "@/views/HomeNav.vue";
import HomeRecommend from "@/views/HomeRecommend.vue";
import HomeNote from "@/views/HomeNote.vue";
import HomeVideo from "@/views/HomeVideo.vue";
import HomeActivity from "@/views/HomeActivity.vue";
import HomeFfeeds from "@/views/HomeFfeeds.vue";

import CateView from "@/views/CateView.vue";
import ListView from "@/views/ListView.vue";
import FavView from "@/views/FavView.vue";
import MeView from "@/views/MeView.vue";

import SearchView from "@/views/SearchView.vue";
import RecipeDetail from "@/views/RecipeDetail.vue";
import NoteDetail from "@/views/NoteDetail.vue";
import LoginView from "@/views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('@/views/AboutView.vue')
    // }

    {
      path: "/",
      name: "bottom",
      component: BottomNav,

      children: [
        {
          path: "",
          name: "home",
          component: HomeNav,
          children: [
            {
              path: "",
              name: "recommend",
              component: HomeRecommend,
            },
            {
              path: "notes",
              name: "notes",
              component: HomeNote,
            },
            {
              path: "videos",
              name: "videos",
              component: HomeVideo,
            },
            {
              path: "activitys",
              name: "activitys",
              component: HomeActivity,
            },
            {
              path: "ffeeds",
              name: "ffeeds",
              component: HomeFfeeds,
            },
          ],
        },
        {
          path: "/cate",
          name: "cate",
          component: CateView,
        },
        {
          path: "/list",
          name: "list",
          component: ListView,
        },
        {
          path: "/fav",
          name: "fav",
          component: FavView,
          meta: {
            needLogin: true,
          },
        },
        {
          path: "/me",
          name: "me",
          component: MeView,
          meta: {
            needLogin: true,
          },
        },
      ],
    },

    {
      path: "/search",
      name: "search",
      component: SearchView,
    },
    {
      path: "/recipe",
      name: "recipe",
      component: RecipeDetail,
    },
    {
      path: "/note",
      name: "note",
      component: NoteDetail,
    },

    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
  ],
});

router.beforeEach((to, from) => {
  // @.
  // 返回 false 以取消导航
  // return false
  // console.log("路由跳转", to, from);
  let token = localStorage.getItem("token");
  if (to.meta.needLogin && !token) {
    console.log("需要登陆");
    router.push("/login?from=" + to.fullPath);
  }
});

export default router;
