<script>
import CrButton from './CrButton.vue'
import YoutubeCard from './YoutubeCard.vue'
export default {
  name: 'SundaySermons',
  components: { CrButton, YoutubeCard },
  data() {
    return {}
  }
}
</script>
<template>
  <section id="sunday-sermons" class="flex-center flex-col bg-white py-20">
    <div class="h-fit w-4/5 flex items-center justify-center flex-col">
      <div id="our-sunday-sermons" class="h-fit w-full mb-6 flex-center flex-col sm:flex-row">
        <p class="w-2/4 text-black text-2xl md:text-4xl xl:text-5xl mb-4 sm:mb-0">
          Our Sunday Sermons
        </p>
        <CrButton label="sunday-sermons" :class="'sm:ml-auto'" buttonRoute="sunday-sermons" />
      </div>
      <div class="flex-center flex-wrap gap-6">
        <template v-for="item in 4" :key="item">
          <YoutubeCard />
        </template>
      </div>
    </div>
  </section>
</template>
<style scoped>
</style>