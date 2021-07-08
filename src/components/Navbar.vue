<template>
  <header class="flex justify-between align-center p-3">
    <router-link to="/">
      <h1 class="text-black-500 text-4xl">NORDIC ROSE</h1>
    </router-link>

    <div class="flex mx-2 px-2">

       <router-link to="/blog" class="mx-5">
        <h1 class="text-black-500"><span>BLOG</span></h1>
      </router-link>

      <router-link to="/about" class="mx-5">
        <h1 class="text-black-500"><span>ABOUT</span></h1>
      </router-link>

      <router-link to="/lines" class="mx-5">
        <h1 class="text-black-500"><span>LINES</span></h1>
      </router-link>

      <router-link to="/projects" class="mx-5">
        <h1 class="text-black-500"><span>PROJECTS</span></h1>
      </router-link>
    </div>
  </header>
  <main>
    <router-view/>
  </main>

</template>

<script>
export default {

}
</script>

<style>

</style>