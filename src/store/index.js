import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    players: [
      { id: 1, name: 'montini', wins: 5, losses: 3, rank: 6.3 },
      { id: 2, name: 'rokas', wins: 10, losses: 2, rank: 8.3 },
      { id: 3, name: 'Šaras', wins: 8, losses: 0, rank: 10 }
    ],
    menu: [
      { name: 'Events', path: '/events' },
      { name: 'Locations', path: '/locations' },
      { name: 'Players', path: '/players' }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
