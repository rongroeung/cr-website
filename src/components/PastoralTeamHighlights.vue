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
          content: 'pastor-rathana-is-the-fruit-of-crossroads-ministry',
          image: '/src/assets/img/pastor.jpg',
          name: 'Pastor Moeun Rathana',
          role: 'senior-pastor'
        },
        {
          id: '2',
          content: 'pastor-rathana-is-the-fruit-of-crossroads-ministry',
          image: '/src/assets/img/pastor.jpg',
          name: 'Ptr. Chem Menghun',
          role: 'assistant-pastor'
        },
        {
          id: '3',
          content: 'pastor-rathana-is-the-fruit-of-crossroads-ministry',
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
  <section class="pastoral-team-highlights flex-center bg-cr-gray py-20">
    <div class="w-4/5 flex flex-row flex-wrap items-center justify-center gap-6">
      <template v-for="team in PastoralTeamHighlights" :key="team">
        <PastoralTeamHighlightCard :item="team" />
      </template>
    </div>
  </section>
</template>
<script scoped></script>
