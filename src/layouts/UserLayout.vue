<script>
import { RouterView } from 'vue-router'
import Navbar from '@/components/common/Navbar.vue'
import FooterSection from '@/components/common/FooterSection.vue'
import ScrollTopButton from '@/components/common/ScrollTopButton.vue'
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

@media (max-width: 640px) {
  /*medium*/
  .UserLayout {
    margin-top: var(--navbar-height-mobile);
  }
}
</style>
