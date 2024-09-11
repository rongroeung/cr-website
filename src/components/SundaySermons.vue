<script>
import CrButton from './CrButton.vue'
import YoutubeCard from './YoutubeCard.vue'
export default {
  name: 'SundaySermons',
  components: { CrButton, YoutubeCard },
  data() {
    return {
      section5: null
    }
  },
  async created() {
    this.section5 = await this.getContentById('01005001')
  }
}
</script>
<template>
  <section class="SundaySermons flex-center flex-col bg-white py-20">
    <div id="01005001" class="h-fit w-4/5 flex items-center justify-center flex-col">
      <div id="our-sunday_sermons" class="h-fit w-full mb-6 items-center">
        <p
          class="w-full md:w-2/4 text-center md:text-start text-black text-2xl md:text-4xl xl:text-5xl mb-4 sm:mb-0"
        >
          Our Sunday Sermons
        </p>
      </div>
      <div v-if="section5" class="flex-center flex-wrap gap-6">
        <template v-for="video in section5.youtube" :key="video.id">
          <YoutubeCard :video="video" />
        </template>
      </div>
      <CrButton label="see-more" class="mt-6" buttonRoute="sunday_sermons" />
    </div>
  </section>
</template>
<style scoped></style>
