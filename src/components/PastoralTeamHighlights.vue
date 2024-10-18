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
      section6: []
    }
  },
  async created() {
    this.section6Item1 = await this.getContentById('01006001')
    this.section6Item2 = await this.getContentById('01006002')
    this.section6Item3 = await this.getContentById('01006003')
    if (this.section6Item1) {
      this.section6.push(this.section6Item1, this.section6Item2, this.section6Item3)
    }
  }
}
</script>
<template>
  <section class="PastoralTeamHighlights h-full flex-center flex-col bg-cr-gray py-20">
    <div class="w-4/5 mb-6">
      <p
        class="w-full md:w-2/4 text-center md:text-start text-black text-2xl md:text-4xl xl:text-5xl mb-4 sm:mb-0"
        v-t="'pastoral-team'"
      ></p>
    </div>
    <div v-if="section6" class="section6 w-4/5 flex flex-row flex-wrap justify-center gap-6">
      <div v-for="item in section6" :key="item.id">
        <PastoralTeamHighlightCard :item="item" />
      </div>
    </div>
  </section>
</template>
<script scoped></script>
