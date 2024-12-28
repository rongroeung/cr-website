<script>
import CarouselContainer from '@/components/home/CarouselContainer.vue'
import DiscipleshipJourney from '@/components/home/DiscipleshipJourney.vue'
import HighlightsActivity from '@/components/home/HighlightsActivity.vue'
import SundaySermons from '@/components/home/SundaySermons.vue'
import PastoralTeamHighlights from '@/components/home/PastoralTeamHighlights.vue'
import ContactUsMap from '@/components/home/ContactUsMap.vue'
export default {
  name: 'HomePage',
  components: {
    CarouselContainer,
    DiscipleshipJourney,
    HighlightsActivity,
    SundaySermons,
    PastoralTeamHighlights,
    ContactUsMap
  }
}
</script>

<template>
  <CarouselContainer />
  <DiscipleshipJourney id="discipleship_journey" />
  <HighlightsActivity id="highlights_activities" />
  <SundaySermons id="sunday-sermons" />
  <PastoralTeamHighlights id="pastoral_team_highlights" />
  <ContactUsMap id="contact_us_map" />
</template>

<style scoped>
.border-1 {
  border: 1px solid black;
}
</style>
