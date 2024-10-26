<script>
import PageHeader from '@/components/PageHeader.vue'
import NewsItem from '@/components/NewsItem.vue'
import Pagination from '@/components/Pagination.vue'
export default {
  name: 'NewsPage',
  components: { PageHeader, NewsItem, Pagination },
  data() {
    return {
      section1: null,
      contentIds: null,
      ItemToBeShow: null,
      currentPage: 1,
      selectedOption: 'date-desc'
    }
  },
  async created() {
    this.section1 = await this.getContentById('20001001')

    this.onCreateProcess()
  },
  watch: {
    selectedOption(oldValue, newValue) {
      if (oldValue != newValue) {
        this.onCreateProcess()
      }
    }
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
      this.fetchItem()
    },
    async fetchItem() {
      this.ItemToBeShow = await this.fetchContentByIds(this.IdItemsToBeShow)
    },
    async onCreateProcess() {
      // Fetch all content IDs
      const response = await this.getAllContentId(this.selectedOption)
      // Filter IDs for News (starts with 20002)
      this.contentIds = this.filterContentStartWithId(response.content_id, '20002')

      this.fetchItem()
    }
  }
}
</script>

<template>
  <section class="bg-secondary h-fit w-full flex-center flex-col">
    <div id="20001001" v-if="section1" class="w-full">
      <PageHeader :section="section1" />
    </div>
    <div class="bg-cr-gray flex-center flex-col w-full h-full pt-14">
      <div class="w-4/5 flex items-center mb-4 mt-8 justify-end">
        <p class="text-black text-md mr-3">Sort by:</p>
        <select
          id="sort"
          v-model="selectedOption"
          class="text-white bg-secondary font-medium rounded-lg text-sm px-3 py-2 text-center flex-center"
        >
          <option value="date-desc" selected>Newest</option>
          <option value="date-asc">Oldest</option>
        </select>
      </div>
      <template v-for="section in ItemToBeShow" :key="section.id">
        <NewsItem :section="section" />
      </template>
      <div class="flex my-14">
        <Pagination :totalPage="totalPage" @on-select-page="onSelectPage" />
      </div>
    </div>
  </section>
</template>

<script scoped></script>
