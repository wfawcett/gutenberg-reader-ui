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
          <ul id="mini-book">
            <li v-for="line in entireBook" :key="line">
              <pre @click="pickSection({line})" v-html="line" />
              <br>
            </li>
          </ul>
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
          <v-card fluid>
            {{ currentWord }}
          </v-card>
          <center>
            <div class="my-2">
              <v-btn color="primary" @click="runReader()">
                Start
              </v-btn>
            </div>
          </center>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      entireBook: [],
      currentSection: '',
      currentWord: ''
    }
  },
  async mounted () {
    const book = this.$route.query.b

    let { data } = await this.$axios.get(book)
    data = data.splice(0, 20)
    const markedUp = data.map((l) => {
      return l.replace(/\n/gms, '<br/>')
    })
    this.entireBook = markedUp
  },
  methods: {
    pickSection (selection) {
      let { line } = selection
      line = line.replace(/<.[^>]*>/gms, ' ')
      this.currentSection = line
      this.currentWord = line
    },
    runReader () {
      const words = this.currentSection.split(' ')
      alert(words.length)
      for (let index = 0; index < words.length; index++) {
        const word = words[index]
        setTimeout(function () { }, 2000)
        this.currentWord = word
      }
    }
  }

}
</script>
<style>
ul{
  font-size: 3px;
  list-style: none;
  cursor: pointer;
}
</style>
