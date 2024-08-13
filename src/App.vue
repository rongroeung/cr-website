<script>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import FooterSection from './components/FooterSection.vue';
export default {
  components: { Navbar, RouterView, FooterSection }
}
</script>

<template>
  <Navbar />
  <RouterView />
  <FooterSection />
</template>

<style scoped>
</style>
