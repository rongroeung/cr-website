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
        header: 'the-school-of-missions',
        content: 'the-school-of-missions-is-a-theological-training',
        image: 'src/assets/img/The-school-of-missions.jpg',
        routeName: 'ministries'
      },
      worshipMinistryContent: {
        headerTag: 'worship-ministry',
        header: 'sunday-worship',
        content: 'our-worship-team-exists-to-not-only',
        image: 'src/assets/img/The-school-of-missions.jpg',
        routeName: 'worship-ministry'
      }
    }
  }
}
</script>

<template>
  <section id="highlights-activities" class="bg-white text-black">
    <layout-2-columns id="certificate-in-ministry-leadership" :wrapReverse="true">
      <template #left-content>
        <HighlightsActivityCard
          :cardHeaderTag="certificateInMinistryLeadershipContent.headerTag"
          :cardHeader="certificateInMinistryLeadershipContent.header"
          :cardContent="certificateInMinistryLeadershipContent.content"
          :cardRouteName="certificateInMinistryLeadershipContent.routeName"
        />
      </template>
      <template #right-content>
        <img
          :src="certificateInMinistryLeadershipContent.image"
          :alt="certificateInMinistryLeadershipContent.headerTag"
        />
      </template>
    </layout-2-columns>
    <layout-2-columns id="worship-ministry">
      <template #left-content>
        <img :src="worshipMinistryContent.image" :alt="worshipMinistryContent.headerTag" />
      </template>
      <template #right-content>
        <HighlightsActivityCard
          :cardHeaderTag="worshipMinistryContent.headerTag"
          :cardHeader="worshipMinistryContent.header"
          :cardContent="worshipMinistryContent.content"
          :cardRouteName="worshipMinistryContent.routeName"
        />
      </template>
    </layout-2-columns>
  </section>
</template>

<style scoped></style>
