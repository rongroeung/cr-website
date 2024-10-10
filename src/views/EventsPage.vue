<script>
import PageHeader from '@/components/PageHeader.vue'
import EventItem from '@/components/EventItem.vue'
export default {
  name: 'EventsPage',
  components: { PageHeader, EventItem },
  data() {
    return {
      section1: null,
      section2: null
    }
  },
  async created() {
    this.section1 = await this.getContentById('22001001')
    // Fetch all content IDs
    const response = await this.getAllContentId()
    const allContentIds = response.content_id

    const contactSectionId = this.filterContentStartWithId(allContentIds, '22002')
    this.section2 = await this.fetchContentByIds(contactSectionId)
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
  <section class="bg-secondary h-fit w-full flex-center flex-col">
    <div id="22001001" v-if="section1" class="w-full">
      <PageHeader :section="section1" />
    </div>
    <div class="bg-cr-gray w-full flex-center">
      <div class="w-4/5 flex justify-center items-start flex-row flex-wrap my-20">
        <template v-for="section in section2" :key="section.id">
          <EventItem :section="section" />
        </template>
      </div>
    </div>
  </section>
</template>

<script scoped></script>
