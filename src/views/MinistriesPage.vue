<script>
import ContentSection from '../components/ContentSection.vue'
import PageHeader from '../components/PageHeader.vue'
export default {
  name: 'MinistriesPage',
  components: { ContentSection, PageHeader },
  data() {
    return {
      section1: null,
      section2: null,
      section3: null,
      section4: null
    }
  },
  async created() {
    this.section1 = await this.getContentById('06001001')
    this.section2 = await this.getContentById('06002001')
    this.section3 = await this.getContentById('06003001')
    this.section4 = await this.getContentById('06004001')
  }
}
</script>

<template>
  <section class="bg-cr-gray h-fit w-full flex-center flex-col">
    <div id="06001001" v-if="section1" class="w-full">
      <PageHeader :section="section1" />
    </div>

    <div class="content h-full text-black w-4/5">
      <div id="06002001" v-if="section2">
        <ContentSection :section="section2" />
      </div>
      <div id="06003001" v-if="section3">
        <ContentSection :section="section3" />
      </div>
      <div id="06004001" v-if="section4">
        <ContentSection :section="section4" />
      </div>
    </div>
  </section>
</template>

<script scoped></script>
