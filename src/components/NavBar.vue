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
  </v-app-bar>
</template>

<script>
export default {
  name: 'NavBar',
  computed: {
    menu() {
      return this.$store.state.menu;
    }
  }
};
</script>

<style></style>
