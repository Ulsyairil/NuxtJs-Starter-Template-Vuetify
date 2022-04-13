<template>
  <v-app :dark="setTheme">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="changeDrawer" />

      <v-btn icon @click.stop="changeMiniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>

      <v-btn icon @click.stop="changeClipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>

      <v-btn icon @click.stop="changeFixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>

      <v-toolbar-title v-text="title" />

      <v-spacer />

      <v-btn class="mx-3" elevation="3" fab small @click.stop="changeTheme()">
        <v-icon v-if="darkMode == false"> dark_mode </v-icon>
        <v-icon v-else> brightness_5 </v-icon>
      </v-btn>

      <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-width="200"
        transition="slide-y-transition"
        offset-y
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn elevation="3" small fab v-bind="attrs" v-on="on">
            <v-avatar size="40">
              <v-img src="https://i.pravatar.cc/300?img=55" alt="My Avatar" />
            </v-avatar>
          </v-btn>
        </template>

        <v-card>
          <v-list>
            <v-list-item>
              <v-list-item-avatar>
                <img src="https://i.pravatar.cc/300?img=55" alt="My Avatar" />
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>John Leider</v-list-item-title>
                <v-list-item-subtitle>Founder of Vuetify</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list>
            <v-list-item href="javascript:void(0)">
              <v-list-item-action>
                <v-icon color="primary"> account_circle </v-icon>
              </v-list-item-action>
              <v-list-item-title> Profile </v-list-item-title>
            </v-list-item>

            <v-list-item href="javascript:void(0)">
              <v-list-item-action>
                <v-icon color="error"> logout </v-icon>
              </v-list-item-action>
              <v-list-item-title> Sign Out </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
    </v-app-bar>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer :absolute="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      title: 'Vuetify.js',
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      menu: false,
    }
  },
  computed: {
    darkMode() {
      return this.$store.state.layout.darkMode
    },
    clipped() {
      return this.$store.state.layout.clipped
    },
    drawer: {
      get() {
        return this.$store.state.layout.drawer
      },
      set(newValue) {
        this.$store.dispatch('layout/changeDrawer', newValue)
      },
    },
    fixed() {
      return this.$store.state.layout.fixed
    },
    miniVariant() {
      return this.$store.state.layout.miniVariant
    },
    setTheme() {
      return this.darkMode == true
        ? (this.$vuetify.theme.dark = true)
        : (this.$vuetify.theme.dark = false)
    },
  },
  methods: {
    changeTheme() {
      this.darkMode == true
        ? this.$store.dispatch('layout/changeDarkMode', false)
        : this.$store.dispatch('layout/changeDarkMode', true)
    },
    changeClipped() {
      this.clipped == true
        ? this.$store.dispatch('layout/changeClipped', false)
        : this.$store.dispatch('layout/changeClipped', true)
    },
    changeDrawer() {
      this.drawer == true
        ? this.$store.dispatch('layout/changeDrawer', false)
        : this.$store.dispatch('layout/changeDrawer', true)
    },
    changeFixed() {
      this.fixed == true
        ? this.$store.dispatch('layout/changeFixed', false)
        : this.$store.dispatch('layout/changeFixed', true)
    },
    changeMiniVariant() {
      this.miniVariant == true
        ? this.$store.dispatch('layout/changeMiniVariant', false)
        : this.$store.dispatch('layout/changeMiniVariant', true)
    },
  },
}
</script>
