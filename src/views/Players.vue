<template>
  <v-row justify="center">
    <v-col cols="3">
      <PlayerCard v-for="player in players" :key="player.id" :player="player" />
    </v-col>
    <router-view></router-view>
  </v-row>
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
