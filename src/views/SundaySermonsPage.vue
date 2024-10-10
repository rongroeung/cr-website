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
      currentPage: 1
    }
  },
  async created() {
    this.section1 = await this.getContentById('21001001')
    this.section2 = await this.getContentById('21002001')
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
    }
  }
}
</script>

<template>
  <section class="SundaySermonsPage bg-secondary h-fit w-full flex-center flex-col">
    <div id="21001001" v-if="section1" class="w-full">
      <PageHeader :section="section1" />
    </div>
    <div class="bg-cr-gray w-full h-full flex-col flex-center">
      <div v-if="section2" class="flex-center flex-wrap gap-6 mt-20 mb-10">
        <template v-for="video in ItemToBeShow" :key="video.id">
          <YoutubeCard :video="video" />
        </template>
      </div>
      <div class="flex mb-20">
        <Pagination :totalPage="totalPage" @on-select-page="onSelectPage" />
      </div>
    </div>
  </section>
</template>

<script scoped></script>
