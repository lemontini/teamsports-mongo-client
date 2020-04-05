import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,

  // if the user is Authenticated, resume session on App start
  created() {
    const userString = localStorage.getItem('user');
    if (userString) {
      const userData = JSON.parse(userString);
      this.$store.commit('SET_USER_DATA', userData);
    }
    // // Safeguard in case of tampering with user object from the browser
    // axios.interceptors.response.use(
    //   response => response,
    //   error => {
    //     if (error.response.status === 401) {
    //       this.$store.dispatch('logout');
    //     }
    //     return Promise.reject(error);
    //   }
    // );
  },

  render: h => h(App)
}).$mount('#app');
