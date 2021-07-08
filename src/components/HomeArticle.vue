<template>

    <div class="mt-14 mb-5">
        <p class="text-center text-4xl font-semibold mb-9">All movies</p>
        <div class="flex justify-around items-center flex-wrap">

            <!-- <div class="w-80 h-80 mt-8" v-for="(card,index) in cards" :key="index">      
                {{card}}
                <img :src="card.Poster" alt="Image" class="m-auto" width="190">                
                <div class="mt-1">
                    <p class="text-center font-normal text-2xl">{{ movie.Title }}</p>
                </div>
                {}
            </div> -->

          

            <div class="w-80 h-80 mt-8" v-for="(movie, index) in movies" :key="index">              
                <img :src="movie.Poster" alt="Image" class="m-auto" width="190">
                <div class="mt-1">
                    <p class="text-center font-normal text-2xl">{{ movie.Title }}</p>
                </div>
            </div>

            <!-- <div class="w-80 h-80 mt-8">               
                <img :src="movie.Poster" alt="Image" class="m-auto" width="190">
                <div class="mt-1">
                    <p class="text-center font-normal text-2xl">{{ movie.Title }}</p>
                </div>
            </div>

            <div class="w-80 h-80 mt-8">               
                <img :src="movie.Poster" alt="Image" class="m-auto" width="190">
                <div class="mt-1">
                    <p class="text-center font-normal text-2xl">{{ movie.Title }}</p>
                </div>
            </div> -->

        </div>
    </div>
    
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            movies: [],
        }
    },

    async mounted() {
        const response = await axios.get('http://www.omdbapi.com/?apikey=e99d5d2f&s=batman')
        this.movies = response.data.Search
    }

}
</script>

<style>

</style>