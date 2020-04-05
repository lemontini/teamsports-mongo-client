<template>
  <v-app style="background: dimgrey;">
    <NavBar />
    <v-content>
      <v-container fluid>
        <v-row>
          <transition name="slide-fade">
            <router-view />
          </transition>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar';
import { dbPlayersRef } from './store/firebase';

export default {
  name: 'App',

  components: { NavBar },

  created() {
    this.$store.dispatch('setPlayersRef', dbPlayersRef);
  },

  data: () => ({})
};
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.4s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>

<style scoped>
.v-row {
  position: relative;
}
div {
  position: absolute;
  top: 0;
  width: 100%;
}
</style>
