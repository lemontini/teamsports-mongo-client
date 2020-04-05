<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <!-- logos etc. -->
    </div>
    <v-toolbar-title>TeamSports</v-toolbar-title>

    <v-spacer></v-spacer>

    <router-link
      v-for="menuItem in menu"
      :key="menuItem.name"
      :to="menuItem.path"
    >
      <v-btn text rounded>{{ menuItem.name }}</v-btn>
    </router-link>

    <v-btn
      rounded
      style="text-transform: none"
      v-if="loggedIn"
      @click="logout()"
    >
      {{ authUser.displayName }}
    </v-btn>
    <router-link v-else :to="{ name: 'Login' }">
      <v-btn rounded>Sign in</v-btn>
      <!-- <v-btn rounded @click.prevent="signIn">Sign in</v-btn> -->
    </router-link>
  </v-app-bar>
</template>

<script>
// import { firebaseAuth } from '../store/firebase';
import { authComputed } from '../store/helpers';

export default {
  name: 'NavBar',
  computed: {
    menu() {
      return this.$store.state.menu;
    },
    ...authComputed
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
    }
  }
};
</script>

<style>
a {
  text-decoration: none;
}
</style>
