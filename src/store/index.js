import Vue from 'vue';
import Vuex from 'vuex';
import { firebaseAuth, dbPlayersRef } from '../store/firebase';
import { vuexfireMutations, firestoreAction } from 'vuexfire';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // players: [
    //   { id: 1, name: 'montini', wins: 5, losses: 3, rank: 6.3 },
    //   { id: 2, name: 'rokas', wins: 10, losses: 2, rank: 8.3 },
    //   { id: 3, name: 'Šaras', wins: 8, losses: 0, rank: 10 }
    // ],
    players: [],
    menu: [
      { name: 'About', path: '/about' },
      { name: 'Events', path: '/events' },
      { name: 'Locations', path: '/locations' },
      { name: 'Players', path: '/players' }
    ],
    user: null
  },

  mutations: {
    ...vuexfireMutations,
    SET_USER_DATA(state, userData) {
      state.user = userData;
      localStorage.setItem('user', JSON.stringify(userData));
      // add axios:
      // axios.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`;
    },
    CLEAR_USER_DATA(state) {
      state.user = null;
      localStorage.removeItem('user');
      // axios.defaults.headers.common['Authorization'] = null
      // location.reload();
    }
  },

  actions: {
    setPlayersRef: firestoreAction(context => {
      return context.bindFirestoreRef('players', dbPlayersRef);
    }),
    async login({ commit }, credentials) {
      try {
        await firebaseAuth.signInWithEmailAndPassword(
          credentials.email,
          credentials.password
        );
        // firebaseAuth.currentUser.updateProfile({
        //   displayName: credentials.name
        // });
        commit('SET_USER_DATA', firebaseAuth.currentUser);
        console.log('user data is ', firebaseAuth.currentUser);
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password');
        } else {
          alert(errorMessage);
        }
      }
    },
    async logout({ commit }) {
      await firebaseAuth.signOut();
      commit('CLEAR_USER_DATA');
      console.log(this.user);
    },
    async addPlayer(data) {
      await dbPlayersRef.add(data);
    }
  },

  modules: {},

  getters: {
    getPlayers: state => state.players,
    loggedIn: state => !!state.user,
    authUser: state => state.user
    // // Another way of doing this:
    // authUser(state) {
    //   return state.user;
    // }
  }
});
