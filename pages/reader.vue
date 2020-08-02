<template>
  <v-container class="grey lighten-5" fluid>
    <v-row no-gutters>
      <v-col
        cols="12"
        sm="3"
      >
        <v-card
          class="pa-2 scroll"
          outlined
          tile
          height="400"
        >
          <ul id="mini-book" height="100px">
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
          <v-card fluid :class="{isReading}">
            {{ currentWord }}
          </v-card>
          <center>
            <div class="my-2">
              <v-btn color="primary" @click="runReader()">
                Start
              </v-btn>
              |
              <v-btn color="red" @click="stopReader()">
                Stop
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
      currentWord: '',
      isReading: false,
      continueReading: false
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
      this.isReading = false
      this.continueReading = false
      let { line } = selection
      line = line.replace(/<.[^>]*>/gms, ' ')
      this.currentSection = line
      this.currentWord = line
    },
    runReader () {
      const words = this.currentWord.split(' ')
      this.displayWord(words, 0)
      this.continueReading = true
    },
    stopReader () {
      this.isReading = false
      this.continueReading = false
    },
    displayWord (wordlist, index) {
      setTimeout(() => {
        if (index < wordlist.length && this.continueReading) {
          this.isReading = true
          this.currentWord = wordlist[index]
          this.displayWord(wordlist, index + 1)
        } else {
          this.isReading = false
          this.continueReading = false
        }
      }, 300)
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
.isReading{
  text-align: center;
  font-size: 40px;
}
</style>
