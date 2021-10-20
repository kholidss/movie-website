<template>
  <div>   
        <img :src="movie.Poster" alt="Image" class="m-auto">
        <div class="mt-4">
            <p class="text-center text-5xl font-medium">{{ movie.Title }}</p>
            <p class="text-center text-4xl font-normalx` mt-3">{{ movie.Year }}</p>
        </div>
        <div>
            <p class="text-center mt-5 leading-8">{{ movie.Plot }}</p>
        </div>
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
        const response = await axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=e99d5d2f&t=peaky')
        this.movie = response.data
    }
}
</script>

<style>

</style>