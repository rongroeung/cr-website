<script>
import PageHeader from '@/components/PageHeader.vue'
import ContentSection from '@/components/ContentSection.vue'
import ContactItem from './ContactItem.vue'
import VolunteerForm from '@/components/VolunteerForm.vue'
export default {
  name: 'VolunteerPage',
  components: { PageHeader, ContentSection, ContactItem, VolunteerForm },
  data() {
    return {
      section1: null,
      section2: null,
      section3: null,
      section4: null
    }
  },
  async created() {
    this.section1 = await this.getContentById('18001001')

    this.section2 = await this.getContentById('18002001')

    this.section4 = await this.getContentById('18004001')

    // Fetch all content IDs
    const response = await this.getAllContentId()
    const allContentIds = response.content_id

    const contactSectionId = this.filterSectionIds(allContentIds, '18003')
    this.section3 = await this.fetchItemById(contactSectionId)
  },
  methods: {
    filterSectionIds(contentIds, sectionPrefix) {
      return contentIds.filter((id) => id.startsWith(sectionPrefix))
    },
    async fetchItemById(ids) {
      let items = []
      for (let id of ids) {
        let item = await this.getContentById(id)
        if (item) {
          items.push(item)
        }
      }
      return items
    }
  }
}
</script>
<template>
  <section class="bg-secondary h-fit w-full flex-center flex-col">
    <div id="18001001" v-if="section1" class="w-full">
      <PageHeader :section="section1" />
    </div>
    <div class="w-full h-full flex-center">
      <div class="bg-cr-gray flex justify-center items-start flex-row flex-wrap mb-20">
        <div id="18002001" v-if="section2" class="w-4/5">
          <ContentSection :section="section2" :margin="'mt-20 mb-10'" />
        </div>
        <div class="content w-4/5 xl:w-full h-full flex-center flex-row flex-wrap">
          <template v-for="section in section3" :key="section">
            <ContactItem :section="section" />
          </template>
        </div>
        <div id="18004001" v-if="section4" class="bg-white flex-center flex-col py-20">
          <ContentSection :section="section4" class="w-4/5" :margin="'m-0'" />
          <VolunteerForm class="w-full xl:w-1/2" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
