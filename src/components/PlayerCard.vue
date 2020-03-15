<template>
  <v-card class="mb-1">
    <router-link
      class="player-link"
      :to="{ name: 'player-details', params: { id: player.id } }"
    >
      <v-card-title class="">{{ player.name }}</v-card-title>
      <v-card-subtitle>Rank: {{ player.rank }}</v-card-subtitle>
      <!-- <transition name="player-details-slide" mode="out-in" appear>
        <router-view v-if="this.$route.params.id == '2'" />
      </transition> -->
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
.player-details-slide-enter-active {
  transition: all 0.2s ease;
}
.player-details-slide-leave-active {
  transition: all 0.2s ease;
}
.player-details-slide-enter,
.player-details-slide-leave-to {
  transform: translateX(50vw);
  opacity: 0;
}
</style>
