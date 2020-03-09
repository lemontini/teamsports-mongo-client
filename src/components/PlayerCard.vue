<template>
  <v-card class="ma-1">
    <router-link
      class="player-link"
      :to="{ name: 'player-details', params: { id: player.id } }"
    >
      <v-card-title class="">{{ player.name }}</v-card-title>
      <v-card-subtitle>Rank: {{ player.rank }}</v-card-subtitle>
    </router-link>
  </v-card>
</template>

<script>
export default {
  props: {
    player: Object
  }
};
</script>

<style scoped>
.player-link {
  text-decoration: none;
}
</style>
