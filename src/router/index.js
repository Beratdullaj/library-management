import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import { onAuthStateChanged, getAuth } from "firebase/auth";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Register.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
  // {
  //   path: "/list-users",
  //   name: "ListUsers",
  //   meta: {
  //     isAdmin: true,
  //   },
  //   component: () =>
  //     import(/* webpackChunkName: "list-users" */ "../views/ListUsers.vue"),
  // },
  {
    path: "/listing",
    name: "Listing",
    meta: {
     // isAuthenticated: true, 
    },
    component: () =>
      import(/* webpackChunkName: "listing" */ "../views/Listing.vue"),
  },
  {
    path: "/listing",
    name: "ListingNews",
    meta: {
     // isAuthenticated: true, 
    },
    component: () =>
      import(/* webpackChunkName: "listing" */ "../views/ListingNews.vue"),
  },
  {
    path: "/listing",
    name: "ListingAssets",
    meta: {
     // isAuthenticated: true, 
    },
    component: () =>
      import(/* webpackChunkName: "listing" */ "../views/ListingAssets.vue"),
  },
  {
    path: "/create",
    name: "Create",
    meta: {
      isAdmin: true,
    },
    component: () =>
      import(/* webpackChunkName: "create" */ "../views/Create.vue"),
  },
  {
    path: "/create",
    name: "CreateAssets",
    meta: {
      isAdmin: true,
    },
    component: () =>
      import(/* webpackChunkName: "create" */ "../views/CreateAssets.vue"),
  },
  {
    path: "/create",
    name: "CreateNews",
    meta: {
      isAdmin: true,
    },
    component: () =>
      import(/* webpackChunkName: "create" */ "../views/CreateNews.vue"),
  },
  {
    path: "/view/:id",
    name: "View",
    component: () => import(/* webpackChunkName: "view" */ "../views/View.vue"),
  },
  {
    path: "/view/:id",
    name: "ViewAssets",
    component: () => import(/* webpackChunkName: "view" */ "../views/ViewAssets.vue"),
  },
  {
    path: "/view/:id",
    name: "ViewNews",
    component: () => import(/* webpackChunkName: "view" */ "../views/ViewNews.vue"),
  },
  // {
  //   path: "/update/:id",
  //   name: "UpdateNews",
  //   meta: {
  //     isAuthenticated: true,
  //     isAdmin:true,
  //   },
  //   component: () => import(/* webpackChunkName: "view" */ "../views/UpdateNews.vue"),
  // },
  // {
  //   path: "/admin-panel",
  //   name: "AdminPanel",
  //   meta: {
  //     isAdmin: true,
  //   },
  //   component: () =>
  //     import(/* webpackChunkName: "AdminPanel" */ "../views/AdminPanel.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  onAuthStateChanged(getAuth(), async (user) => {
    const shouldBeLoggedIn = (record) =>
      record.meta.isAuthenticated || record.meta.isAdmin;

    if (to.matched.some((record) => shouldBeLoggedIn(record))) {
      if (!user) {
        next("/login");
      } else {
        const tokenResult = await getAuth().currentUser.getIdTokenResult();
        const isAdmin = tokenResult.claims.admin;
        if (isAdmin && to.matched.some((record) => !record.meta.isAdmin)) {
          next("/admin-panel");
        } else if (to.matched.some((record) => record.meta.isAdmin)) {
          if (!tokenResult.claims.admin) {
            next("/listing");
          } else {
            next();
          }
        } else {
          next();
        }
      }
    } else {
      next();
    }
  });
});

export default router;
