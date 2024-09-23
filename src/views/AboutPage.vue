<script>
import PageHeader from '@/components/PageHeader.vue'
import ContentSection from '@/components/ContentSection.vue'
export default {
  name: 'AboutPage',
  components: { PageHeader, ContentSection },
  data() {
    return {
      data: null,
      section1: null,
      section2: null,
      section3: null,
      section4: null,
      section5: null
    }
  },
  async created() {
    this.section1 = await this.getContentById('02001001')
    this.section2 = await this.getContentById('02002001')
    this.section3 = await this.getContentById('02003001')
    this.section4 = await this.getContentById('02004001')
    this.section5 = await this.getContentById('02005001')
  }
}
</script>

<template>
  <section id="about-page" class="bg-white h-fit w-full flex-center flex-col">
    <div id="02001001" v-if="section1" class="w-full">
      <PageHeader :section="section1" />
    </div>
    <div class="about-content text-gray-600 flex-center flex-col">
      <div id="02002001" v-if="section2" class="w-4/5">
        <ContentSection :section="section2" />
      </div>
      <div id="02003001" v-if="section3" class="bg-cr-gray flex-center">
        <ContentSection :section="section3" class="w-4/5" />
      </div>
      <div id="02004001" v-if="section4" class="w-4/5">
        <ContentSection :section="section4" />
      </div>
      <div id="02005001" v-if="section5" class="bg-cr-gray w-full flex-center">
        <div class="w-4/5 flex-col my-20">
          <p class="text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">
            {{ section5.title }}
          </p>
          <ul class="list-disc m-2 flex justify-center flex-wrap gap-6">
            <template v-for="content in section5.description" :key="content.id">
              <li class="text-sm leading-6 md:leading-8 md:text-lg h-fit w-full sm:w-2/5">
                {{ content.text }}
              </li>
            </template>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
