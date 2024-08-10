<script>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
export default {
  components: { Navbar, RouterView }
}
</script>

<template>
  <Navbar />
  <RouterView />
</template>

<style scoped>
</style>
