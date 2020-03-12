<template>
  <transition name="slide-fade" mode="out-in">
    <v-row justify="center">
      <transition name="player-details-slide" mode="out-in">
        <v-col cols="12" sm="4" md="3" lg="2">
          <PlayerCard
            v-for="player in players"
            :key="player.id"
            :player="player"
          />
        </v-col>
      </transition>
      <transition name="player-details-slide" mode="out-in">
        <router-view />
      </transition>
    </v-row>
  </transition>
</template>

<script>
// @ is an alias to /src
import PlayerCard from '@/components/PlayerCard.vue';

export default {
  name: 'Players',
  components: { PlayerCard },
  computed: {
    players() {
      return this.$store.state.players;
    }
  }
};
</script>

<style scoped>
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
