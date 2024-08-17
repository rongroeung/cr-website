<script>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import FooterSection from './components/FooterSection.vue'
export default {
  components: { Navbar, RouterView, FooterSection }
}
</script>

<template>
  <Navbar />
  <div class="app">
    <RouterView />
    <FooterSection />
  </div>
</template>

<style scoped>
.app {
  max-width: var(--max-width);
  margin-top: var(--navbar-height);
}
</style>
