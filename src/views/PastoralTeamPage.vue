<script>
import PastoralTeamCard from '@/components/PastoralTeamCard.vue'
import PageHeader from '@/components/common/PageHeader.vue'
export default {
  name: 'PastoralTeamPage',
  components: { PastoralTeamCard, PageHeader },
  data() {
    return {
      section1: null,
      senior_pastors: [],
      full_time_co_workers: [],
      part_time_co_workers: []
    }
  },
  async created() {
    this.section1 = await this.getContentById('04001001')

    // Filter IDs for Senior Pastors (starts with 04002)
    this.senior_pastors = await this.getAllContentStartByIds('04002')

    // Filter IDs for Full-Time Co-Workers (starts with 040030)
    this.full_time_co_workers = await this.getAllContentStartByIds('04003')

    // Filter IDs for Part-Time Co-Workers (starts with 040040)
    this.part_time_co_workers = await this.getAllContentStartByIds('04004')
  }
}
</script>

<template>
  <section class="PastoralTeamPage bg-cr-gray-light h-fit w-full flex-center flex-col">
    <div id="04001001" v-if="section1" class="w-full">
      <PageHeader :section="section1" />
    </div>
    <div class="content w-4/5 mx-auto my-20">
      <p
        class="text-center text-3xl font-bold text-cr-gray-darker mb-12"
        v-t="'Senior Pastors'"
      ></p>
      <div class="flex justify-center flex-wrap gap-20">
        <template v-for="item in senior_pastors" :key="item.id">
          <PastoralTeamCard :section="item" />
        </template>
      </div>
      <p
        class="text-center text-3xl font-bold text-cr-gray-darker my-12"
        v-t="'Full-Time Co-Workers'"
      ></p>
      <div class="flex justify-center flex-wrap gap-20">
        <template v-for="item in full_time_co_workers" :key="item.id">
          <PastoralTeamCard :section="item" />
        </template>
      </div>
      <p
        class="text-center text-3xl font-bold text-cr-gray-darker my-12"
        v-t="'Part-Time Co-Workers'"
      ></p>
      <div class="flex justify-center flex-wrap gap-20">
        <template v-for="item in part_time_co_workers" :key="item.id">
          <PastoralTeamCard :section="item" />
        </template>
      </div>
    </div>
  </section>
</template>

<script scoped></script>
