<template>
  <v-col cols="12" sm="6" md="4" lg="3">
    <transition name="elevate" mode="in-out">
      <v-card raised class="ma-1">
        <v-card-title>Player: {{ players[id - 1].name }}</v-card-title>
        <v-card-text>
          <p>Wins: {{ players[id - 1].wins }}</p>
          <p>Losses: {{ players[id - 1].losses }}</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn rounded color="primary" @click="goBack">OK</v-btn>
        </v-card-actions>
      </v-card>
    </transition>
  </v-col>
</template>

<script>
export default {
  props: ['id'],
  data: () => ({
    expand: true
  }),
  computed: {
    players() {
      return this.$store.state.players;
    }
  },
  methods: {
    goBack() {
      // this.expand = false;
      this.$router.push({ path: '/players' });
    }
  }
};
</script>

<style scoped></style>
