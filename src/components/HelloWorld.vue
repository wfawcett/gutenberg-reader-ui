<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-row
          :align="alignment"
          :justify="justify"
          class="grey lighten-1"
          style="height: 300px;"
        >
          <div>
            <span class="display-2">Gutenberg Reader:</span><br />
            <span class="display-1">An RSVP Reader for Project Gutenberg</span>
          </div>
          <v-img src="../assets/Gutenberg.jpg" max-width="15%"></v-img>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      alignment: "center",
      justify: "space-around"
    };
  }
};
</script>
<style>
.col,
.container,
.col-12 {
  padding: 0 !important;
}
</style>
