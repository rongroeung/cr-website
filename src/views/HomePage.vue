<script>
import Carousel from '../components/Carousel.vue'
import DiscipleshipJourney from '../components/DiscipleshipJourney.vue'
import HighlightsActivity from '../components/HighlightsActivity.vue'
import SundaySermons from '../components/SundaySermons.vue'
import PastoralTeamHighlights from '../components/PastoralTeamHighlights.vue'
import ContactUsMap from '../components/ContactUsMap.vue'
export default {
  name: 'HomePage',
  components: {
    Carousel,
    DiscipleshipJourney,
    HighlightsActivity,
    SundaySermons,
    PastoralTeamHighlights,
    ContactUsMap
  }
}
</script> 

<template>
  <Carousel />
  <DiscipleshipJourney id="discipleship_journey" />
  <HighlightsActivity id="highlights_activities" />
  <SundaySermons id="sunday_sermons" />
  <PastoralTeamHighlights id="pastoral_team_highlights" />
  <ContactUsMap id="contact_us_map" />
</template>

<style scoped>
.border-1 {
  border: 1px solid black;
}
</style>
