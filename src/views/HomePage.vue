<script>
import Carousel from '@/components/Carousel.vue'
import DiscipleshipJurney from '@/components/DiscipleshipJurney.vue';
import HighlightsActivity from '@/components/HighlightsActivity.vue';
import SundaySermons from '@/components/SundaySermons.vue';
import PastoralTeamHighlights from '@/components/PastoralTeamHighlights.vue'
import ContactUsMap from '@/components/ContactUsMap.vue';
export default {
  name: 'HomePage',
  components: { Carousel ,DiscipleshipJurney,HighlightsActivity, SundaySermons, PastoralTeamHighlights, ContactUsMap}
}
</script>

<template>
  <main>
    <Carousel />
    <DiscipleshipJurney/>
    <HighlightsActivity/>
    <SundaySermons/>
    <PastoralTeamHighlights/>
    <ContactUsMap/>
  </main>
</template>

<style scoped>
.border-1 {
  border: 1px solid black;
}
</style>
