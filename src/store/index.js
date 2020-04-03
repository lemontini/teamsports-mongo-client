import Vue from 'vue';
import Vuex from 'vuex';
import { firebaseAuth, dbPlayersRef } from '../store/firebase';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    players: [
      { id: 1, name: 'montini', wins: 5, losses: 3, rank: 6.3 },
      { id: 2, name: 'rokas', wins: 10, losses: 2, rank: 8.3 },
      { id: 3, name: 'Šaras', wins: 8, losses: 0, rank: 10 }
    ],
    menu: [
      { name: 'About', path: '/about' },
      { name: 'Events', path: '/events' },
      { name: 'Locations', path: '/locations' },
      { name: 'Players', path: '/players' }
    ],
    user: null
  },

  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData;
      localStorage.setItem('user', JSON.stringify(userData));
      // add axios:
      // axios.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`;
    },
    CLEAR_USER_DATA() {
      // try {
      //   firebaseAuth.signOut();
      // } catch (error) {

      // }
      // firebaseAuth.signOut()
      //   .then()
      //   .catch(error){
      //   const errorCode = error.code
      //   const errorMessage = error.message
      // }
      firebaseAuth.signOut();
      console.log(this.user);

      // state.user = null;
      localStorage.removeItem('user');
      // axios.defaults.headers.common['Authorization'] = null
      location.reload();
    },
    ADD_NEW_PLAYER(state, name) {
      state.players.push({
        id: state.players.length + 1,
        name: name,
        wins: 0,
        losses: 0
      });
    }
  },

  actions: {
    login({ commit }, credentials) {
      try {
        firebaseAuth.signInWithEmailAndPassword(
          credentials.email,
          credentials.password
        );
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password');
        } else {
          alert(errorMessage);
        }
      }
      // console.log('user data is ', firebaseAuth.currentUser);
      commit('SET_USER_DATA', firebaseAuth.currentUser);
    },
    logout({ commit }) {
      commit('CLEAR_USER_DATA');
    },
    addPlayer({ commit }, data) {
      // TODO: dbPlayersRef.add(this.ne)
      commit('ADD_NEW_PLAYER', data.name);
    }
  },

  modules: {},

  getters: {
    loggedIn(state) {
      return !!state.user;
    },
    authUser(state) {
      return state.user;
    }
  }
});
