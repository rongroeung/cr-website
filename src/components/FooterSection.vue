<script>
export default {
  name: 'FooterSection',
  data() {
    return {
      cssHeader: 'font-semibold uppercase hover:text-primary'
    }
  },
  methods: {
    onClickLogo() {
      this.$router.push('/')
    }
  }
}
</script>

<template>
  <footer class="bg-secondary text-white">
    <div class="container w-4/5 mx-auto px-6">
      <div class="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="flex items-center justify-center md:justify-start">
          <img
            src="../assets/img/crossroads-logo-01.png"
            alt="Crossroads Church Logo"
            class="h-24 cursor-pointer"
            @click="onClickLogo()"
          />
        </div>
        <div>
          <router-link :to="{ name: 'about' }" v-t="'about'" :class="cssHeader"></router-link>
          <ul class="mt-3">
            <li><router-link :to="{ name: 'church-board' }" v-t="'church-board'"></router-link></li>
            <li>
              <router-link :to="{ name: 'pastoral-team' }" v-t="'pastoral-team'"></router-link>
            </li>
            <li><router-link :to="{ name: 'milestone' }" v-t="'milestone'"></router-link></li>
          </ul>
        </div>
        <div>
          <router-link
            :to="{ name: 'ministries' }"
            v-t="'ministries'"
            :class="cssHeader"
          ></router-link>
          <ul class="mt-3">
            <li>
              <router-link :to="{ name: 'campus-ministry' }" v-t="'campus-ministry'"></router-link>
            </li>

            <li>
              <router-link
                :to="{ name: 'worship-ministry' }"
                v-t="'worship-ministry'"
              ></router-link>
            </li>
            <li>
              <router-link :to="{ name: 'sport-ministry' }" v-t="'sport-ministry'"></router-link>
            </li>
          </ul>
        </div>
        <div>
          <router-link :to="{ name: 'mission' }" v-t="'mission'" :class="cssHeader"></router-link>
          <ul class="mt-3">
            <li>
              <router-link :to="{ name: 'church-outreach' }" v-t="'church-outreach'"></router-link>
            </li>
            <li>
              <router-link
                :to="{ name: 'micro-enterprise-project' }"
                v-t="'micro-enterprise-project'"
              ></router-link>
            </li>
            <li>
              <router-link
                :to="{ name: 'certificate-in-ministry-leadership' }"
                v-t="'certificate-in-ministry-leadership'"
              ></router-link>
            </li>
            <li>
              <router-link :to="{ name: 'sponsor-a-child' }" v-t="'sponsor-a-child'"></router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex justify-between items-center flex-wrap">
        <p class="text-sm mb-6">&copy; 2024 Crossroads Church of Cambodia.</p>
        <div class="space-x-4 flex flex-row mb-6">
          <a target="_blank" href="https://facebook.com/onlinechurch.crossroads"
            ><img src="../assets/icon/facebook.svg" alt="Facebook" class="h-6"
          /></a>
          <a target="_blank" href="https://www.youtube.com/@ccoconline"
            ><img src="../assets/icon/youtube.svg" alt="Youtube" class="h-6"
          /></a>
          <a target="_blank" href="mailto:ccoconline7@gmail.com"
            ><img src="../assets/icon/gmail.svg" alt="Email" class="h-6"
          /></a>
          <a target="_blank" href="https://www.tiktok.com/@ccoconline"
            ><img src="../assets/icon/tiktok.svg" alt="Tiktok" class="h-6"
          /></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  width: 100vw;
  max-width: 1519px;
}
li:hover {
  color: var(--primary-color);
}
</style>