<template>
  <v-dialog
    v-model="dialog"
    width="500"
    @click:outside="cancel()"
    @keydown.esc="cancel()"
  >
    <v-card class="headline white lighten-2">
      <v-card-title primary-title>Login</v-card-title>
      <v-container>
        <v-form v-model="valid" ref="signInForm" @submit.stop.prevent="login">
          <v-row align="center">
            <v-col>
              <!-- <v-text-field
                v-model="name"
                :counter="15"
                :rules="nameRules"
                label="Player Name"
                required
              /> -->

              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Email"
                required
              />

              <v-text-field
                v-model="password"
                :rules="passwordRules"
                label="Password"
                required
              />

              <!-- TODO: implement password matching validation -->
              <!-- <v-text-field
                v-model="repeatPassword"
                :rules="repeatPasswordRules"
                label="Repeat password"
                required
              /> -->

              <v-row>
                <v-btn
                  :disabled="!valid"
                  color="primary"
                  class="mx-3"
                  @click="clear"
                >
                  Clear form
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn
                  :disabled="!valid"
                  color="success"
                  class="mx-3"
                  type="submit"
                >
                  OK
                </v-btn>
              </v-row>
            </v-col>
          </v-row>
        </v-form>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
// import { firebaseAuth } from '../store/firebase';
// import { mapState } from 'vuex';

export default {
  data: () => ({
    dialog: true,
    valid: true,
    // name: '',
    // nameRules: [
    //   v => !!v || 'Player name is required',
    //   v =>
    //     (v && v.length <= 15) || 'Player name must be less than 15 characters'
    // ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],
    password: '',
    passwordRules: [
      v => !!v || 'Password is required',
      v => (v && v.length >= 6) || 'Name must be more than 6 characters'
    ],
    error: null
    // TODO: implement password matching validation
    // repeatPassword: '',
    // repeatPasswordRules: [
    //   v => !!v || 'Password is required',
    //   v => (v && v.length >= 6) || 'Name must be more than 6 characters',
    //   v => v == this.password || 'Passwords must match'
    // ]
  }),

  // computed: mapState({
  //   user: 'user'
  // }),

  methods: {
    // submit() {
    //   this.$refs.signInForm.validate();
    // },
    clear() {
      this.$refs.signInForm.reset();
    },
    login() {
      this.$refs.signInForm.validate();
      this.$store
        .dispatch('login', {
          email: this.email,
          password: this.password
        })
        .then(() => {
          // console.log('Signed in as: ' + firebaseAuth.currentUser.email);
          this.$router.back();
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
