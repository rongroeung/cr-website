<script>
import PageHeader from '@/components/PageHeader.vue'
import YoutubeCard from '@/components/YoutubeCard.vue'
export default {
  name: 'SundaySermonsPage',
  components: { PageHeader, YoutubeCard },
  data() {
    return {
      section1: null,
      section2: null
    }
  },
  async created() {
    this.section1 = await this.getContentById('21001001')
    this.section2 = await this.getContentById('21002001')
  }
}
</script>

<template>
  <section class="SundaySermonsPage bg-secondary h-fit w-full flex-center flex-col">
    <div id="21001001" v-if="section1" class="w-full">
      <PageHeader :section="section1" />
    </div>
    <div class="bg-cr-gray w-full h-full">
      <div v-if="section2" class="flex-center flex-wrap gap-6 my-20">
        <template v-for="video in section2.youtube" :key="video.id">
          <YoutubeCard :video="video" />
        </template>
      </div>
    </div>
  </section>
</template>

<script scoped></script>
