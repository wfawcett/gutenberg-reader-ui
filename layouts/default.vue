<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-btn text href="/">
          <v-img
            alt="Gutenberg reader Logo"
            class="shrink mr-2"
            contain
            src="/gr_logo.png"
            transition="scale-transition"
            width="400"
          />
        </v-btn>
      </div>

      <v-spacer />

      <v-btn href="/about/" text>
        <span class="mr-2">About</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>
