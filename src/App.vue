<script>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import FooterSection from './components/FooterSection.vue'
import ScrollTopButton from './components/ScrollTopButton.vue'
export default {
  name: 'app',
  components: { Navbar, RouterView, FooterSection, ScrollTopButton }
}
</script>

<template>
  <Navbar />
  <div class="app">
    <RouterView />
    <FooterSection />
    <ScrollTopButton />
  </div>
</template>

<style scoped>
.app {
  width: 100%;
  max-width: var(--max-width);
  margin-top: var(--navbar-height);
}
</style>
