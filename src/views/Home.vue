<template>

  <!-- div content  -->
  <div class= "m-auto mt-2 pt-6 w-7/12">
    <HomeHeader/>

    <!-- div garis bawah -->
    <div class="bg-green-700 h-1 m-auto mt-4"></div>
  </div>

</template>

<script>
import HomeHeader from "@/components/HomeHeader.vue";

export default {
  components: {
    HomeHeader,
  }
  
}
</script>
