<script>
import Layout2Columns from '@/layouts/Layout2Columns.vue'
import HighlightsActivityCard from './HighlightsActivityCard.vue'
export default {
  name: 'HighlightsActivity',
  components: { Layout2Columns, HighlightsActivityCard },
  data() {
    return {
      certificateInMinistryLeadershipContent: {
        headerTag: 'certificate-in-ministry-leadership',
        title: 'the-school-of-missions',
        descriptions: 'the-school-of-missions-is-a-theological-training',
        image: '/src/assets/img/The-school-of-missions.jpg',
        routeName: 'ministries'
      },
      worshipMinistryContent: {
        headerTag: 'worship-ministry',
        title: 'sunday-worship',
        descriptions: 'our-worship-team-exists-to-not-only',
        image: '/src/assets/img/sunday-worship.jpg',
        routeName: 'worship-ministry'
      }
    }
  }
}
</script>

<template>
  <section class="bg-cr-gray flex-center flex-col text-black">
    <layout-2-columns
      id="certificate-in-ministry-leadership"
      :wrapReverse="true"
      cssWrapper="w-4/5 py-12 pb-0"
      cssLeft="pb-0 lg:ps-0"
      cssRight="lg:pe-0"
    >
      <template #left-content>
        <HighlightsActivityCard
          :cardHeaderTag="certificateInMinistryLeadershipContent.headerTag"
          :cardHeader="certificateInMinistryLeadershipContent.title"
          :cardContent="certificateInMinistryLeadershipContent.descriptions"
          :cardRouteName="certificateInMinistryLeadershipContent.routeName"
        />
      </template>
      <template #right-content>
        <img
          src="../assets/img/The-school-of-missions.jpg"
          :alt="certificateInMinistryLeadershipContent.headerTag"
        />
      </template>
    </layout-2-columns>
    <layout-2-columns
      id="worship-ministry"
      cssWrapper="w-4/5 py-12"
      cssLeft="lg:ps-0"
      cssRight="lg:pe-0"
    >
      <template #left-content>
        <img src="../assets/img/sunday-worship.jpg" :alt="worshipMinistryContent.headerTag" />
      </template>
      <template #right-content>
        <HighlightsActivityCard
          :cardHeaderTag="worshipMinistryContent.headerTag"
          :cardHeader="worshipMinistryContent.title"
          :cardContent="worshipMinistryContent.descriptions"
          :cardRouteName="worshipMinistryContent.routeName"
        />
      </template>
    </layout-2-columns>
  </section>
</template>

<style scoped></style>
