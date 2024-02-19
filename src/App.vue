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

      <div class="row" style="text-align: left;">
        <a href="/" class="custom-btn" style="color: white; margin-right: 10px;">
          <span>Home</span>
        </a>
        <a href="/data" class="custom-btn" style="color: white; margin-right: 10px;">
          <span>Data</span>
        </a>
        <a href="/about" class="custom-btn" style="color: white;">
          <span>About</span>
        </a>
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
