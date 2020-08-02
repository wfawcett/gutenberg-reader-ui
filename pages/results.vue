<template>
  <v-card>
    <v-container>
      <v-row>
        <v-col>
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
      </v-row>
      <v-row>
        <v-col
          v-for="(item, i) in searchResults"
          :key="i"
          cols="12"
        >
          <v-card
            color="#EEE"
            @click="loadBook({item})"
          >
            <div class="d-flex flex-no-wrap justify-space-between" style="margin-top:8px">
              <div>
                <v-card-title
                  class="headline"
                  v-text="item.title"
                />

                <v-card-subtitle v-text="item.author" />
              </div>

              <v-avatar
                class="ma-3"
                size="125"
                tile
              >
                <v-img :src="item.icon" />
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>

export default {
  data () {
    return {
      searchPhrase: '',
      searchResults: []
    }
  },
  async mounted () {
    await this.getResults()
  },
  methods: {
    doSearch (s) {
      this.$router.push({ path: 'results', query: { q: s.searchPhrase } }, this.getResults)
    },
    async getResults (s) {
      this.searchResults = null
      const query = this.$route.query.q
      this.searchPhrase = query
      const { data: { results } } = await this.$axios.get(`https://0d81l0rbi6.execute-api.us-west-2.amazonaws.com/Prod/catalog/search?phrase=${query}`)
      this.searchResults = results
    },
    loadBook (handler) {
      this.$router.push({ path: 'reader', query: { b: handler.item.url } })
    }
  }

}
</script>
