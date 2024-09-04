<script>
import Layout2Columns from '@/layouts/Layout2Columns.vue'
import HighlightsActivityCard from './HighlightsActivityCard.vue'
export default {
  name: 'HighlightsActivity',
  components: { Layout2Columns, HighlightsActivityCard },
  data() {
    return {
      section4Item1: null,
      section4Item2: null
      // certificateInMinistryLeadershipContent: {
      //   headerTag: 'certificate-in-ministry-leadership',
      //   title: 'the-school-of-missions',
      //   descriptions: 'the-school-of-missions-is-a-theological-training',
      //   image: '/src/assets/img/The-school-of-missions.jpg',
      //   routeName: 'ministries'
      // },
      // worshipMinistryContent: {
      //   headerTag: 'worship-ministry',
      //   title: 'sunday-worship',
      //   descriptions: 'our-worship-team-exists-to-not-only',
      //   image: '/src/assets/img/sunday-worship.jpg',
      //   routeName: 'worship-ministry'
      // }
    }
  },
  async created() {
    this.section4Item1 = await this.fetchData('01004001') // Certificate In Ministry Leadership
    this.section4Item2 = await this.fetchData('01004002') // Worship Ministry
  }
}
</script>

<template>
  <section class="bg-cr-gray flex-center flex-col text-black">
    <layout-2-columns
      v-if="section4Item1"
      key="1"
      id="certificate-in-ministry-leadership"
      :wrapReverse="true"
      cssWrapper="w-4/5 py-12 pb-0"
      cssLeft="pb-0 lg:ps-0"
      cssRight="lg:pe-0"
    >
      <template #left-content>
        <HighlightsActivityCard
          :cardTitle="section4Item1.title"
          :cardSubTitle="section4Item1.sub_title"
          :cardDescription="section4Item1.description[0].text"
          cardRouteName="ministries"
        />
      </template>
      <template #right-content>
        <img :src="section4Item1.media[0].url" :alt="section4Item1.media[0].name" />
      </template>
    </layout-2-columns>
    <layout-2-columns
      v-if="section4Item2"
      key="2"
      id="worship-ministry"
      cssWrapper="w-4/5 py-12"
      cssLeft="lg:ps-0"
      cssRight="lg:pe-0"
    >
      <template #left-content>
        <img :src="section4Item2.media[0].url" :alt="section4Item2.media[0].name" />
      </template>
      <template #right-content>
        <HighlightsActivityCard
          :cardTitle="section4Item2.title"
          :cardSubTitle="section4Item2.sub_title"
          :cardDescription="section4Item2.description[0].text"
          cardRouteName="worship-ministry"
        />
      </template>
    </layout-2-columns>
  </section>
</template>

<style scoped></style>
