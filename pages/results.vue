<template>
  <v-container>
    <v-row no-gutters>
      <v-text-field
        v-model="searchPhrase"
        label="Solo"
        placeholder="Search books"
        solo
        style="max-width:50%"
      />
    </v-row>
  </v-container>
</template>

<script>

export default {
  data () {
    return {
      searchPhrase: 'unset',
      searchResults: {}
    }
  },
  async beforeMount () {
    const query = this.$route.query.q
    this.searchPhrase = query
    this.searchResults = await this.$axios.get(`https://0d81l0rbi6.execute-api.us-west-2.amazonaws.com/Prod/catalog/search?phrase=${query}`)
    this.searchPhrase = JSON.stringify(this.searchResults)
  }

}
</script>
