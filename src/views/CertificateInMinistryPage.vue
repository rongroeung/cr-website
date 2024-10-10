<script>
import PageHeader from '../components/PageHeader.vue'
import ContentSection from '../components/ContentSection.vue'
export default {
  name: 'CertificateInMinistryPage',
  components: { PageHeader, ContentSection },
  data() {
    return {
      section1: null,
      section2: null,
      section3: null,
      section4: null,
      section5: null,
      cssClass: 'text-xl xl:text-2xl font-bold text-gray-800 mb-2 text-center'
    }
  },
  async created() {
    this.section1 = await this.getContentById('13001001')
    this.section5 = await this.getContentById('13005001')
    // Fetch all content IDs
    const response = await this.getAllContentId()
    const allContentIds = response.content_id

    const section2Ids = this.filterContentStartWithId(allContentIds, '13002')
    this.section2 = await this.fetchContentByIds(section2Ids)

    const section3Ids = this.filterContentStartWithId(allContentIds, '13003')
    this.section3 = await this.fetchContentByIds(section3Ids)

    const section4Ids = this.filterContentStartWithId(allContentIds, '13004')
    this.section4 = await this.fetchContentByIds(section4Ids)
  },
  methods: {
    filterContentStartWithId(allIds, sectionPrefix) {
      return allIds.filter((id) => id.startsWith(sectionPrefix))
    },
    async fetchContentByIds(ids) {
      let contents = []
      for (let id of ids) {
        let content = await this.getContentById(id)
        if (content) {
          contents.push(content)
        }
      }
      return contents
    }
  }
}
</script>

<template>
  <section class="h-fit w-full flex-center flex-col">
    <div id="13001001" v-if="section1" class="w-full">
      <PageHeader :section="section1" />
    </div>
    <div class="bg-cr-gray flex-center flex-col h-full text-black">
      <div class="w-4/5">
        <template v-for="section in section2" :key="section.id">
          <div v-if="section.id == '13002001'" class="flex-center flex-col mt-10">
            <img :src="section.media[0].url" :alt="section.media[0].name" class="w-32 h-32 mb-10" />
            <p :class="cssClass">
              {{ section.title }}
            </p>
            <p :class="cssClass">
              {{ section.sub_title }}
            </p>
            <p :class="cssClass">
              {{ section.description[0].text }}
            </p>
          </div>
          <ContentSection v-else :section="section" :id="section.id" />
        </template>
        <p class="text-left font-semibold">Appendix 1</p>
        <template v-for="section in section3" :key="section.id">
          <div v-if="section.id == '13003001'" class="flex-center flex-col mt-20">
            <p :class="cssClass">
              {{ section.title }}
            </p>
            <p :class="cssClass">
              {{ section.sub_title }}
            </p>
            <p :class="cssClass">
              {{ section.description[0].text }}
            </p>
          </div>
          <ContentSection v-else :section="section" :id="section.id" />
        </template>
        <p class="text-left font-semibold">Appendix 2</p>
        <template v-for="section in section4" :key="section.id">
          <div v-if="section.id == '13004001'" class="flex-center flex-col mt-20">
            <p :class="cssClass">
              {{ section.title }}
            </p>
            <p :class="cssClass">
              {{ section.sub_title }}
            </p>
          </div>
          <ContentSection v-else :section="section" :id="section.id" />
        </template>
      </div>
      <div v-if="section5" id="13005001" class="flex-center my-10">
        <a
          :href="section5.media[0].url"
          target="_blank"
          class="cr-button flex-center cursor-pointer bg-sub-primary font-semibold btn-md h-10 md:h-12 lg:h-14 w-36 md:w-40 lg:w-44"
        >
          {{ section5.title }}
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cr-button {
  color: white;
}
.cr-button-hover:hover {
  color: var(--secondary-color);
  background-color: var(--text-color);
  transition: 0.3s;
}
</style>
