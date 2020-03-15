<template>
  <v-dialog v-model="dialog" width="500" @click:outside="cancel()">
    <v-card>
      <v-card-title class="headline grey lighten-2" primary-title>
        Add new player
      </v-card-title>

      <v-card-text>
        <v-form>
          <v-text-field label="Name" type="text" required />
        </v-form>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
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
    dialog: true
  }),
  methods: {
    ok() {
      this.dialog = false;
      this.$router.back();
    },
    cancel() {
      this.dialog = false;
      this.$router.back();
    }
  }
};
</script>

<style></style>
