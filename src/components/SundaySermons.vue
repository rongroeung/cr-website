<script>
import CrButton from '@/components/CrButton.vue'
import YoutubeCard from '@/components/YoutubeCard.vue'
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
    this.section5.youtube.sort((a, b) => {
      return new Date(b.publish_date) - new Date(a.publish_date)
    })
  }
}
</script>
<template>
  <section class="SundaySermons flex-center flex-col bg-white py-12 md:py-20">
    <div
      v-if="section5"
      id="01005001"
      class="h-fit w-4/5 flex items-center justify-center flex-col"
    >
      <div id="our-sunday-sermons" class="h-fit w-full mb-6 items-center">
        <p
          class="w-full md:w-2/4 text-center md:text-start text-cr-gray-darker text-2xl md:text-3xl xl:text-4xl mb-4 sm:mb-0"
        >
          {{ section5.title }}
        </p>
      </div>
      <div class="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        <YoutubeCard v-for="video in section5.youtube" :key="video.id" :video="video" />
      </div>
      <CrButton label="see-more" class="mt-6" buttonRoute="sunday-sermons" />
    </div>
  </section>
</template>
<style scoped></style>
