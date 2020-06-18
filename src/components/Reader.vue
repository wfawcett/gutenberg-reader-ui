<template>
  <div class="reader_window">
    {{ current_word }}
    <button @click="go">+</button>
    <textarea v-model="wordString"></textarea>
  </div>
</template>
<script>
export default {
  methods: {
    go() {
      this.all_words = this.wordString.split(" ");
      this.displayWord(this.all_words, 0);
    },
    displayWord(wordList, index) {
      setTimeout(() => {
        if (index < wordList.length) {
          this.current_word = wordList[index];
          this.displayWord(wordList, index + 1);
        }
      }, 200);
    }
  },
  data() {
    return {
      current_word: "test",
      wordString: "",
      all_words: []
    };
  }
};
</script>
<style></style>
