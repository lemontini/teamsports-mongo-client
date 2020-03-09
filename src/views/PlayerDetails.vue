<template>
  <v-col cols="6" justify="center" class="shrink">
    <transition name="slide-fade">
      <v-card v-show="expand">
        <v-card-title>JKFJKSFSJKD</v-card-title>
        <v-card-text></v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="goBack">
            OK
          </v-btn>
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
  methods: {
    goBack() {
      this.expand = false;
      this.$router.go(-1);
    }
  }
};
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.4s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
