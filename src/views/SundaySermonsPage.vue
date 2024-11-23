<script>
import PageHeader from '@/components/PageHeader.vue'
import YoutubeCard from '@/components/YoutubeCard.vue'
import Pagination from '@/components/Pagination.vue'
export default {
  name: 'SundaySermonsPage',
  components: { PageHeader, YoutubeCard, Pagination },
  data() {
    return {
      section1: null,
      section2: null,
      currentPage: 1,
      selectedOption: 'newest'
    }
  },
  async created() {
    this.section1 = await this.getContentById('21001001')
    // fetch and sort Item
    this.processSortYoutube()
  },
  watch: {
    selectedOption(oldValue, newValue) {
      if (oldValue != newValue) {
        this.processSortYoutube()
      }
    }
  },
  computed: {
    totalItem() {
      return this.section2 ? this.section2.youtube.length : 0
    },
    totalPage() {
      const number = Math.ceil(this.totalItem / this.$numberOfSundaySermonPerPage)
      return number == 0 ? 1 : number
    },
    ItemToBeShow() {
      if (!this.section2) return []
      const start = (this.currentPage - 1) * this.$numberOfSundaySermonPerPage
      const end = start + this.$numberOfSundaySermonPerPage
      return this.section2.youtube.slice(start, end)
    }
  },
  methods: {
    onSelectPage(page) {
      this.currentPage = page
    },
    async processSortYoutube() {
      this.section2 = await this.getContentById('21002001')
      if (this.selectedOption == 'newest') {
        this.section2.youtube.sort((a, b) => {
          return new Date(b.publish_date) - new Date(a.publish_date)
        })
      } else {
        this.section2.youtube.sort((a, b) => {
          return new Date(a.publish_date) - new Date(b.publish_date)
        })
      }
    }
  }
}
</script>

<template>
  <section class="SundaySermonsPage bg-secondary h-fit w-full flex-center flex-col">
    <div id="21001001" v-if="section1" class="w-full">
      <PageHeader :section="section1" />
    </div>
    <div class="bg-cr-gray-light w-full h-full flex-col flex-center">
      <div class="w-4/5 flex items-center my-8 justify-end">
        <p class="text-cr-gray-darker text-md mr-3">Sort by:</p>
        <select
          id="sort"
          v-model="selectedOption"
          class="bg-secondary font-medium rounded-lg text-sm px-3 py-2 text-center flex-center"
        >
          <option value="newest" selected>Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>
      <div v-if="section2" class="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <YoutubeCard v-for="video in ItemToBeShow" :key="video.id" :video="video" />
      </div>
      <div class="flex mb-20">
        <Pagination :totalPage="totalPage" @on-select-page="onSelectPage" />
      </div>
    </div>
  </section>
</template>

<script scoped></script>
