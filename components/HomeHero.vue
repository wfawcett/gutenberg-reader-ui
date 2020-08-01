<template>
  <v-container fluid class="grey lighten-1" style="height: 300px;">
    <v-row style="padding:15px">
      <v-col cols="9">
        <div>
          <span class="display-2">Gutenberg Reader:</span><br>
          <span class="display-1">An RSVP Reader for Project Gutenberg</span>
        </div>
        <v-text-field
          v-model="searchPhrase"
          label="Solo"
          placeholder="Search books"
          solo
          style="max-width:50%"
          append-icon="mdi-magnify"
          @keydown.enter="doSearch({searchPhrase})"
          @click:append="doSearch({searchPhrase})"
        />
      </v-col>
      <v-col cols="3">
        <v-img src="Gutenberg.jpg" max-width="200px" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      searchPhrase: ''
    }
  },
  methods: {
    doSearch (s) {
      this.$router.push({ path: 'results', query: { q: s.searchPhrase } })
    }
  }
}
</script>
<style>
.col,
.container,
.col-12 {
  padding: 0 !important;
}
</style>
