<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <div class="row">
        <v-btn-toggle
          v-model="text"
          tile
          group
        >
          <v-btn to="/" >
            <span>Home</span>
          
            <v-icon>mdi-home-circle</v-icon>
          </v-btn>
    
          <v-btn to="/data" >
            <span>Data Table</span>
          
            <v-icon>mdi-table</v-icon>
          </v-btn>

          <v-btn to="/about" >
            <span>About</span>
          
            <v-icon>mdi-information</v-icon>
          </v-btn>
        </v-btn-toggle>
      </div>

    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
