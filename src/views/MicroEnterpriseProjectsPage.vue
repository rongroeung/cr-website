<script>
import PageHeader from '@/components/PageHeader.vue'
import ContentSection from '../components/ContentSection.vue'
import ImagesGrid from '../components/ImagesGrid.vue'
export default {
  name: 'MicroEnterpriseProjectsPage',
  components: { ContentSection, PageHeader, ImagesGrid },
  data() {
    return {
      section1: null,
      section2: null,
      section3: null,
      section4: null
    }
  },
  async created() {
    this.section1 = await this.getContentById('12001001')
    this.section2 = await this.getContentById('12002001')
    this.section3 = await this.getContentById('12003001')
    this.section4 = await this.getContentById('12004001')
  }
}
</script>

<template>
  <section class="bg-cr-gray h-fit w-full flex-center flex-col">
    <div id="12001001" v-if="section1" class="w-full">
      <PageHeader :section="section1" />
    </div>
    <div class="content h-full text-black w-4/5">
      <div id="12002001" v-if="section2">
        <ContentSection :section="section2" />
      </div>
      <div id="12003001" v-if="section2">
        <ContentSection :section="section2" />
      </div>
      <div id="12004001" v-if="section2">
        <ContentSection :section="section2" />
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>