<script setup lang="ts">
import Header from "./components/Header.vue";
import Aos from "./components/Aos.vue";
import Banner from "./components/Banner.vue";
import Section from "./components/Section.vue";
</script>
<template>
  <Header></Header>
  <Section></Section>
  <Banner></Banner>
  <div class="flex items-center justify-center">
    <div class="container">
      <Aos></Aos>
    </div>
  </div>
  <footer
    class="w-full bg-gray-500 py-8 text-white flex justify-center items-center"
  >
    <div class="container flex text-3xl">
      <div class="mr-2">footer</div>
      <p>&copy; 2021</p>
    </div>
  </footer>
</template>

<style scoped></style>
