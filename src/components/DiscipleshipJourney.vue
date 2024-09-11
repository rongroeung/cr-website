<script>
import DiscipleshipCard from './DiscipleshipCard.vue'
import CrButton from './CrButton.vue'
export default {
  name: 'DiscipleshipJourney',
  components: { DiscipleshipCard, CrButton },
  data() {
    return {
      section2: null,
      section3: [],
      section3Item1: null,
      section3Item2: null,
      section3Item3: null,
      section3Item4: null
    }
  },
  async created() {
    this.section2 = await this.getContentById('01002001') //discipleshipJourney
    this.section3Item1 = await this.getContentById('01003001') //connect
    this.section3Item2 = await this.getContentById('01003002') //establish
    this.section3Item3 = await this.getContentById('01003003') //equip
    this.section3Item4 = await this.getContentById('01003004') //multiply
    if (this.section3Item1) {
      this.section3.push(
        this.section3Item1,
        this.section3Item2,
        this.section3Item3,
        this.section3Item4
      )
    }
  }
}
</script>
0d001

<template>
  <section class="bg-secondary h-fit flex-center flex-col">
    <section
      v-if="section2"
      id="01002001"
      class="section2 w-4/5 flex flex-col items-center text-white py-20"
    >
      <p class="text-2xl md:text-4xl xl:text-5xl pb-6">{{ section2.title }}</p>
      <ul class="text-base md:text-lg xl:text-lg w-fit text-center pb-8">
        <template v-for="content in section2.description" :key="content.id">
          <li>{{ content.text }}</li>
        </template>
      </ul>
      <div class="flex">
        <CrButton class="me-4" buttonRoute="home" buttonRouteId="highlights_activities" />
        <CrButton
          label="about-us"
          buttonColor="bg-secondary"
          buttonBorder="cr-border-button"
          buttonRoute="about"
          :allowHover="true"
        />
      </div>
    </section>
    <section
      v-if="section3"
      class="section3 w-4/5 flex flex-row flex-wrap justify-center text-black gap-6 pb-20"
    >
      <div v-for="content in section3" :key="content.id">
        <DiscipleshipCard
          :cardId="content.id"
          :cardIcon="content.media[0].url"
          :cardIconName="content.media[0].name"
          :cardHeader="content.title"
          :cardContents="content.description"
        />
      </div>
    </section>
  </section>
</template>

<style scoped>
li {
  line-height: 1.8;
}
</style>
