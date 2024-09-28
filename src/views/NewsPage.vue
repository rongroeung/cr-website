<script>
import PageHeader from '@/components/PageHeader.vue'
import NewsItem from '@/components/NewsItem.vue'
export default {
  name: 'NewsPage',
  components: { PageHeader, NewsItem },
  data() {
    return {
      section1: null,
      section2: null
    }
  },
  async created() {
    this.section1 = await this.getContentById('20001001')
    // Fetch all content IDs
    const response = await this.getAllContentId()
    const allContentIds = response.content_id

    const contactSectionId = this.filterSectionIds(allContentIds, '20002')
    this.section2 = await this.fetchContactById(contactSectionId)
  },
  methods: {
    filterSectionIds(contentIds, sectionPrefix) {
      return contentIds.filter((id) => id.startsWith(sectionPrefix))
    },
    async fetchContactById(ids) {
      let contacts = []
      for (let id of ids) {
        let contact = await this.getContentById(id)
        if (contact) {
          contacts.push(contact)
        }
      }
      return contacts
    }
  }
}
</script>

<template>
  <section class="bg-secondary h-fit w-full flex-center flex-col">
    <div id="20001001" v-if="section1" class="w-full">
      <PageHeader :section="section1" />
    </div>
    <div class="bg-cr-gray flex-center flex-col w-full h-full py-14">
      <template v-for="section in section2" :key="section.id">
        <NewsItem :section="section" />
      </template>
    </div>
  </section>
</template>

<script scoped></script>
