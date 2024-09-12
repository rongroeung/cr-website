<script>
import { RouterView } from 'vue-router'
import Navbar from '../components/Navbar.vue'
import FooterSection from '../components/FooterSection.vue'
import ScrollTopButton from '../components/ScrollTopButton.vue'
export default {
  name: 'UserLayout',
  components: { Navbar, RouterView, FooterSection, ScrollTopButton }
}
</script>

<template>
  <Navbar />
  <div class="UserLayout">
    <RouterView />
    <FooterSection />
    <ScrollTopButton />
  </div>
</template>

<style scoped>
.UserLayout {
  margin-top: var(--navbar-height);
}
</style>
