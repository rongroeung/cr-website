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
      section3: null
    }
  },
  async created() {
    this.section1 = await this.getContentById('13001001')
    // Fetch all content IDs
    const response = await this.getAllContentId()
    const allContentIds = response.content_id

    // Filter IDs for Senior Pastors (starts with 04002)
    const section2Ids = this.filterSectionIds(allContentIds, '13002')
    this.section2 = await this.fetchUsersByIds(section2Ids)

    // // Filter IDs for Full-Time Co-Workers (starts with 040030)
    const section3Ids = this.filterSectionIds(allContentIds, '13003')
    this.section3 = await this.fetchUsersByIds(section3Ids)

    // // Filter IDs for Part-Time Co-Workers (starts with 040040)
    // const partTimeCoWorkersIds = this.filterSectionIds(allContentIds, '040040')
    // this.part_time_co_workers = await this.fetchUsersByIds(partTimeCoWorkersIds)
  },
  methods: {
    filterSectionIds(contentIds, sectionPrefix) {
      // Filter content IDs that start with the section prefix (e.g., 04002 for Senior Pastors)
      return contentIds.filter((id) => id.startsWith(sectionPrefix))
    },
    async fetchUsersByIds(ids) {
      let users = []
      for (let id of ids) {
        let user = await this.getContentById(id)
        if (user) {
          users.push(user)
        }
      }
      return users
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
          <div v-if="section.id == '13002001'" class="flex-center flex-col mt-20">
            <img :src="section.media[0].url" :alt="section.media[0].name" class="w-32 h-32 my-6" />
            <p class="text-2xl font-bold text-gray-800 mb-2 text-center">
              {{ section.title }}
            </p>
            <p class="text-2xl font-bold text-gray-800 mb-2 text-center">
              {{ section.sub_title }}
            </p>
            <p class="text-2xl font-bold text-gray-800 mb-2 text-center">
              {{ section.description[0].text }}
            </p>
          </div>
          <ContentSection v-else :section="section" :id="section.id" />
        </template>
        <template v-for="section in section3" :key="section.id">
          <div v-if="section.id == '13003001'" class="flex-center flex-col mt-20">
            <p class="text-2xl font-bold text-gray-800 mb-2 text-center">
              {{ section.title }}
            </p>
            <p class="text-2xl font-bold text-gray-800 mb-2 text-center">
              {{ section.sub_title }}
            </p>
            <p class="text-2xl font-bold text-gray-800 mb-2 text-center">
              {{ section.description[0].text }}
            </p>
          </div>
          <ContentSection v-else :section="section" :id="section.id" />
        </template>
      </div>
    </div>
  </section>
</template>

<script scoped></script>
