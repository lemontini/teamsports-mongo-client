<template>
  <v-app>
    <NavBar />
    <v-content>
      <v-container>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar';

export default {
  name: 'App',

  components: { NavBar },

  data: () => ({})
};
</script>
