<template>
  <div class="w-80 h-80 mt-8">
    <img :src="image" alt="Image" class="m-auto" width="190" />
    <div class="mt-1">
      <p class="text-center font-normal text-2xl">{{ title }}</p>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        image: {
            type: String,
            default: ""
        },

        title: {
            type: String,
            default: ""
        }
    }
};
</script>

<style>
</style>