<template>
  <div>
      <img v-for="movie in movies" :key="movie.id">
      <p>{{ movie.poster }}</p>
      <p>{{ movie.title }}</p>
  </div>
</template>

<script>

import axios from 'axios'

export default {
    data() {
        return {
            movie: []
        }
    },

    async mounted() {
        const response = await axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=e99d5d2f')
        this.movie = response.data
    }
}
</script>

<style>

</style>