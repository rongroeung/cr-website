<script>
import PageHeader from '@/components/PageHeader.vue'
import EventItem from '@/components/EventItem.vue'
import Pagination from '@/components/Pagination.vue'
export default {
  name: 'EventsPage',
  components: { PageHeader, EventItem, Pagination },
  data() {
    return {
      section1: null,
      contentIds: null,
      ItemToBeShow: null,
      currentPage: 1
    }
  },
  async created() {
    this.section1 = await this.getContentById('22001001')
    // Fetch all content IDs
    const response = await this.getAllContentId()

    this.contentIds = this.filterContentStartWithId(response.content_id, '22002')

    this.fetchItem()
  },
  computed: {
    totalItem() {
      return this.contentIds ? this.contentIds.length : 0
    },
    totalPage() {
      const number = Math.ceil(this.totalItem / this.$numberOfNewsAndEventsItemPerPage)
      return number == 0 ? 1 : number
    },
    IdItemsToBeShow() {
      const start = (this.currentPage - 1) * this.$numberOfNewsAndEventsItemPerPage
      const end = start + this.$numberOfNewsAndEventsItemPerPage
      return this.contentIds ? this.contentIds.slice(start, end) : []
    }
  },
  methods: {
    onSelectPage(page) {
      this.currentPage = page
      console.log(this.currentPage)

      this.fetchItem()
    },
    async fetchItem() {
      this.ItemToBeShow = await this.fetchContentByIds(this.IdItemsToBeShow)
      console.log(this.ItemToBeShow)
    }
  }
}
</script>
<template>
  <section class="bg-secondary h-fit w-full flex-center flex-col">
    <div id="22001001" v-if="section1" class="w-full">
      <PageHeader :section="section1" />
    </div>
    <div class="bg-cr-gray w-full h-full flex-col flex-center">
      <div class="w-4/5 flex justify-center items-start flex-row flex-wrap mt-14">
        <template v-for="section in ItemToBeShow" :key="section.id">
          <EventItem :section="section" />
        </template>
      </div>
      <div class="flex my-14">
        <Pagination :totalPage="totalPage" @on-select-page="onSelectPage" />
      </div>
    </div>
  </section>
</template>

<script scoped></script>
