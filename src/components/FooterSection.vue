<script>
export default {
  name: 'FooterSection',
  data() {
    return {
      cssHeader: 'font-semibold uppercase hover:underline'
    }
  }
}
</script>

<template>
  <footer class="bg-secondary text-white">
    <div class="container w-4/5 mx-auto px-6">
      <div class="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <img src="../assets/img/crossroads-logo-01.png" alt="Sydney Logo" class="h-24 mb-4" />
        </div>
        <div>
          <router-link :to="{ name: 'about' }" v-t="'about'" :class="cssHeader"></router-link>
          <ul class="mt-3">
            <li><a href="#" class="hover:underline">Services</a></li>
            <li><a href="#" class="hover:underline">Portfolio</a></li>
            <li><a href="#" class="hover:underline">About</a></li>
            <li><a href="#" class="hover:underline">Careers</a></li>
          </ul>
        </div>
        <div>
          <router-link
            :to="{ name: 'ministries' }"
            v-t="'ministries'"
            :class="cssHeader"
          ></router-link>
          <ul class="mt-3">
            <li><a href="#" class="hover:underline">Amsterdam</a></li>
            <li><a href="#" class="hover:underline">London</a></li>
            <li><a href="#" class="hover:underline">Paris</a></li>
            <li><a href="#" class="hover:underline">New York</a></li>
          </ul>
        </div>
        <div>
          <router-link :to="{ name: 'mission' }" v-t="'mission'" :class="cssHeader"></router-link>
          <ul class="mt-3">
            <li><a href="#" class="hover:underline">Privacy</a></li>
            <li><a href="#" class="hover:underline">Cookie policy</a></li>
            <li><a href="#" class="hover:underline">Terms & conditions</a></li>
            <li><a href="#" class="hover:underline">About us</a></li>
          </ul>
        </div>
      </div>
      <div class="flex justify-between items-center flex-wrap">
        <p class="text-sm mb-6">&copy; 2024 Crossroads Church of Cambodia.</p>
        <div class="space-x-4 flex flex-row mb-6">
          <a href="#"><img src="../assets/icon/connect.svg" alt="Facebook" class="h-6" /></a>
          <a href="#"><img src="../assets/icon/connect.svg" alt="Twitter" class="h-6" /></a>
          <a href="#"><img src="../assets/icon/connect.svg" alt="Instagram" class="h-6" /></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script scoped>
</script>