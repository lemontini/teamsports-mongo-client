import Vue from 'vue';
import VueRouter from 'vue-router';
import Players from '../views/Players.vue';
import PlayerDetails from '../views/PlayerDetails.vue';
import PlayerAdd from '../views/PlayerAdd.vue';
import Login from '../views/Login.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/'
    // name: 'Login',
    // component: Login
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/players',
    name: 'Players',
    component: Players,
    // meta: { requiresAuth: true },
    children: [
      {
        name: 'player-details',
        path: ':id',
        component: PlayerDetails,
        props: true
      },
      {
        name: 'player-add',
        path: 'new',
        component: PlayerAdd
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

// Navigation guard checks if the route is restricted to authenticated users only
router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('user');

  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next('/');
  }
  next();
});

export default router;
