<script>
import PastoralTeamHighlightCard from './PastoralTeamHighlightCard.vue'
export default {
  name: 'PastoralTeamHighlights',
  components: { PastoralTeamHighlightCard },
  data() {
    return {
      section6Item1: null,
      section6Item2: null,
      section6Item3: null,
      section6: [],
      PastoralTeamHighlights: [
        {
          id: '1',
          content: 'pastor-rathana-is-the-fruit-of-crossroads-ministry',
          image: `${this.$assetsPath}/img/Rathana-Profile.png`,
          name: 'Pastor Moeun Rathana',
          role: 'senior-pastor'
        },
        {
          id: '2',
          content: 'pastor-rathana-is-the-fruit-of-crossroads-ministry',
          image: `${this.$assetsPath}/img/Menghun-Profile.png`,
          name: 'Ptr. Chem Menghun',
          role: 'assistant-pastor'
        },
        {
          id: '3',
          content: 'pastor-rathana-is-the-fruit-of-crossroads-ministry',
          image: `${this.$assetsPath}/img/Dany-Profile.png`,
          name: 'Sis. Bin Dany',
          role: 'pastoral-team-member'
        }
      ]
    }
  },
  async created() {
    this.section6Item1 = await this.fetchData('01006001')
    this.section6Item2 = await this.fetchData('01006002')
    this.section6Item3 = await this.fetchData('01006003')
    if (this.section6Item1) {
      this.section6.push(this.section6Item1, this.section6Item2, this.section6Item3)
    }
  }
}
</script>
<template>
  <section class="flex-center flex-col bg-cr-gray py-20">
    <div class="h-fit w-4/5 mb-6">
      <p
        class="w-full md:w-2/4 text-center md:text-start text-black text-2xl md:text-4xl xl:text-5xl mb-4 sm:mb-0"
      >
        Pastoral Team
      </p>
    </div>
    <div v-if="section6" class="w-4/5 flex flex-row flex-wrap items-center justify-center gap-6">
      <template v-for="team in section6" :key="team.key">
        <PastoralTeamHighlightCard :item="team" />
      </template>
    </div>
  </section>
</template>
<script scoped></script>
