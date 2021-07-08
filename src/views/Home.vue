<template>

  <!-- div content  -->
  <div class= "m-auto mt-2 pt-6 w-7/12">

    <!-- Component HomeHeader -->
    <HomeHeader/>

    <!-- div garis bawah -->
    <div class="bg-green-700 h-1 m-auto mt-4"></div>

    <!-- Component HomeArticle -->
    <HomeArticle/>
  </div>

</template>

<script>
import HomeHeader from "@/components/HomeHeader.vue";
import HomeArticle from "@/components/HomeArticle.vue";

export default {
  components: {
    HomeHeader,
    HomeArticle,
  }
  
}
</script>
