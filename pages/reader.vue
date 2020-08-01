<template>
  <v-container class="grey lighten-5" fluid>
    <v-row no-gutters>
      <v-col
        cols="12"
        sm="3"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          <pre style="font-size:1px">{{ entireBook }}</pre>
          </pre>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        sm="9"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          One of three columns
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      entireBook: []
    }
  },
  async mounted () {
    let { data } = await this.$axios.get('http://127.0.0.1:8080/files/4357/4357.txt')

    data = data.splice(0, 20)

    let markedUp = ''
    markedUp = data.map((line) => {
      // line = line.replace(/[\n|\r]/gms, '<br/>')
      return `<a href="#">${line}</a>`
    })

    this.entireBook = markedUp.join('\n')
  }
}
</script>
<style>
pre a{
  font-size: 3px;
  line-height: 1px;
  height: 1px;
}
</style>
