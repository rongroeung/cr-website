<script>
import PageHeader from '@/components/PageHeader.vue'
import ContentSection from '../components/ContentSection.vue'
import ImagesGrid from '../components/ImagesGrid.vue'
export default {
  name: 'ChurchesOutreachPage',
  components: { ContentSection, PageHeader, ImagesGrid },
  data() {
    return {
      section1: null,
      section2: null,
      section3Item1: null,
      section3Item2: null,
      section3Item3: null
    }
  },
  async created() {
    this.section1 = await this.getContentById('11001001')
    this.section2 = await this.getContentById('11002001')
    this.section3Item1 = await this.getContentById('11003001')
    this.section3Item2 = await this.getContentById('11003002')
    this.section3Item3 = await this.getContentById('11003003')
  }
}
</script>

<template>
  <section class="ChurchesOutreachPage bg-cr-gray h-fit w-full flex-center flex-col">
    <div id="11001001" v-if="section1" class="w-full">
      <PageHeader :section="section1" />
    </div>
    <div class="content h-full text-black w-4/5">
      <div id="1102001" v-if="section2">
        <ContentSection :section="section2" />
      </div>
      <div id="1103001" v-if="section3Item1">
        <ContentSection :section="section3Item1" />
      </div>
      <div id="1103002" v-if="section3Item2">
        <ContentSection :section="section3Item2" />
      </div>
      <div id="1103003" v-if="section3Item3">
        <ContentSection :section="section3Item3" />
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>