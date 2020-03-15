<template>
  <v-dialog v-model="dialog" width="500">
    <v-card class="headline white lighten-2">
      <v-card-title primary-title>
        Login
      </v-card-title>
      <v-container>
        <v-form v-model="valid">
          <v-row align="center">
            <v-col cols="12" md="4">
              <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                :counter="10"
                :rules="nameRules"
                label="Username"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></template>

              <v-text-field
                v-model="email"
                :error-messages="emailErrors"
                label="Email"
                type="email"
                required
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
                >Email address
              </v-text-field>

              <v-text-field label="Password" type="password" required
                >Password
              </v-text-field>

              <v-row>
                <v-btn
                  :disabled="!valid"
                  color="default"
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
                  @click="submit"
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
export default {
  data: () => ({
    dialog: true,
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],
    select: null,
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
    checkbox: false,
    lazy: false
  }),
  methods: {
    validate() {
      this.$$refs.form.validate();
    }
  }
};
</script>

<style></style>
