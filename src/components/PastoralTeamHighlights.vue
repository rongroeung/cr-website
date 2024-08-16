<script>
import PastoralTeamHighlightCard from './PastoralTeamHighlightCard.vue'
export default {
  name: 'PastoralTeamHighlights',
  components: { PastoralTeamHighlightCard },
  data() {
    return {
      PastoralTeamHighlights: [
        {
          id: '1',
          content: 'pastor-ratana-is-the-fruit-of-crossroads-ministry',
          image: '/src/assets/img/pastor.jpg',
          name: 'Pastor Moeun Rathana',
          role: 'senior-pastor'
        },
        {
          id: '2',
          content: 'pastor-ratana-is-the-fruit-of-crossroads-ministry',
          image: '/src/assets/img/pastor.jpg',
          name: 'Ptr. Chem Menghun',
          role: 'assistant-pastor'
        },
        {
          id: '3',
          content: 'pastor-ratana-is-the-fruit-of-crossroads-ministry',
          image: '/src/assets/img/pastor.jpg',
          name: 'Sis. Bin Dany',
          role: 'pastoral-team-member'
        }
      ]
    }
  }
}
</script>
<template>
  <section
    class="pastoral-team-highlights flex flex-col md:flex-row flex-wrap justify-center items-center"
  >
    <template v-for="team in PastoralTeamHighlights" :key="team">
      <PastoralTeamHighlightCard :item="team" />
    </template>
  </section>
</template>
<script scoped></script>
