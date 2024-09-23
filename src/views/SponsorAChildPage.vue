<script>
import PageHeader from '@/components/PageHeader.vue'
import ContentSection from '../components/ContentSection.vue'
export default {
  name: 'SponsorAChildPage',
  components: { ContentSection, PageHeader },
  data() {
    return {
      section1: null,
      section2: null
    }
  },

  async created() {
    this.section1 = await this.getContentById('14001001')
    this.section2 = await this.getContentById('14002001')
  }
}
</script>

<template>
  <section class="bg-cr-gray h-fit w-full flex-center flex-col">
    <div id="14001001" v-if="section1" class="w-full">
      <PageHeader :section="section1" />
    </div>
    <div class="content h-full text-black w-4/5">
      <div id="14002001" v-if="section2">
        <ContentSection :section="section2" />
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>