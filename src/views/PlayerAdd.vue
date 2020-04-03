<template>
  <v-dialog
    v-model="dialog"
    width="500"
    @click:outside="cancel()"
    @keydown.esc="cancel()"
  >
    <v-card>
      <v-card-title class="headline grey lighten-2" primary-title>
        Add new player
      </v-card-title>

      <v-card-text>
        <v-form @submit.prevent="ok()">
          <v-text-field v-model="name" label="Name" type="text" required />
        </v-form>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn color="primary" outlined @click="cancel()">
          Cancel
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn color="primary" outlined @click="ok()">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { dbRefPlayers } from '../store/firebase';
export default {
  data: () => ({
    dialog: true,
    name: ''
  }),
  methods: {
    ok() {
      this.$store
        .dispatch('addPlayer', {
          name: this.name
        })
        .then(() => {
          this.dialog = false;
          this.$router.back();
          console.log('New player added: ' + this.name);
        })
        .catch(err => {
          this.error = err.response.data.error;
        });
    },
    cancel() {
      this.dialog = false;
      this.$router.back();
    }
  }
};
</script>

<style></style>
