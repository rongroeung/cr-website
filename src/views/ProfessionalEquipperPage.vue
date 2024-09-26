<script>
import PageHeader from '@/components/PageHeader.vue'
import ContentSection from '../components/ContentSection.vue'
import ImagesGrid from '../components/ImagesGrid.vue'
export default {
  name: 'ProfessionalEquipperPage',
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
    this.section1 = await this.getContentById('17001001')
    this.section2 = await this.getContentById('17002001')
    this.section3 = await this.getContentById('17003001')
    this.section4 = await this.getContentById('17004001')
  },
  methods: {
    header(description) {
      return description.split(':')[0]
    },
    text(description) {
      return description.split(':')[1]
    }
  }
}
</script>

<template>
  <section class="bg-cr-gray h-fit w-full flex-center flex-col">
    <div id="17001001" v-if="section1" class="w-full">
      <PageHeader :section="section1" />
    </div>
    <div class="content h-full text-black w-4/5">
      <div id="17002001" v-if="section2">
        <ContentSection :section="section2" />
      </div>
      <div id="17003001" v-if="section3">
        <p
          v-if="section3.title"
          class="text-3xl font-bold text-gray-800 mb-6 text-center md:text-left"
        >
          {{ section3.title }}
        </p>
        <p
          v-if="section3.sub_title"
          class="text-sm leading-6 md:leading-8 md:text-lg mb-6 text-left"
        >
          {{ section3.sub_title }}
        </p>
        <div class="p-4 pt-0">
          <ul class="list-disc m-2 font-normal">
            <template v-for="description in section3.description" :key="description">
              <li class="text-sm leading-6 md:leading-8 md:text-lg my-1">
                <b>{{ header(description.text) }}:</b>{{ text(description.text) }}
              </li>
            </template>
          </ul>
        </div>
      </div>
      <div id="17004001" v-if="section4" class="mb-20">
        <div v-for="content in section4.description" :key="content.id" :class="dynamicClass">
          <div class="text-sm leading-6 md:leading-8 md:text-lg mb-4">{{ content.text }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>