import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

import colors from 'vuetify/lib/util/colors';

export default new Vuetify({
  theme: {
    light: true,
    themes: {
      light: {
        primary: colors.amber.darken2,
        secondary: colors.grey,
        accent: colors.shades.black,
        error: colors.red.accent3,
        background: colors.indigo.base
      }
    }
  }
});
