<template>
  <div>
    <Navbar />
    <div class="container mx-auto w-7/12 bg-green-100">
      <Image />
      <Text />
      <Paragraf />
      <Border />
      <!-- <div class="container"> -->
      <div class="flex justify-center items-center flex-wrap m-4">
        <div v-for="card in cards" :key="card.id">
          <img :src="cards.Poster" alt="image" :key="card.id" />
          <Text />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Image from "@/components/Image.vue";
import Text from "@/components/Text.vue";
import Paragraf from "@/components/Paragraf.vue";
import Border from "@/components/Border.vue";
// import Cards from "@/components/Cards.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Navbar,
    Image,
    Text,
    Paragraf,
    Border,
    // Cards,
    Footer,
  },
  data() {
    return {
      cards: [],
    };
  },
  async mounted() {
    const response = await axios.get(
      "http://www.omdbapi.com/?i=tt3896198&apikey=6b112e6a"
    );
    this.cards = response.data;
    // console.log(response.data);
  },
};
</script>