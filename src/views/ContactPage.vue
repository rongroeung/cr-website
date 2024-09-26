<script>
import PageHeader from '@/components/PageHeader.vue'
import ContactItem from './ContactItem.vue'
export default {
  name: 'ContactPage',
  components: { PageHeader, ContactItem },
  data() {
    return {
      section1: null,
      section2: []
    }
  },
  async created() {
    this.section1 = await this.getContentById('24001001')
    // Fetch all content IDs
    const response = await this.getAllContentId()
    const allContentIds = response.content_id

    const contactSectionId = this.filterSectionIds(allContentIds, '240020')
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
  <section class="bg-cr-gray h-fit w-full flex-center flex-col">
    <div id="24001001" v-if="section1" class="w-full">
      <PageHeader :section="section1" />
    </div>
    <div class="content w-4/5 h-full flex-center flex-row flex-wrap my-20">
      <template v-for="section in section2" :key="section">
        <ContactItem :section="section" />
      </template>
    </div>
  </section>
</template>

<script scoped></script>
