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
      // discipleshipCardContents: [
      //   {
      //     id: 1,
      //     icon: '/src/assets/icon/connect.svg',
      //     title: 'connect',
      //     descriptions: [
      //       'share-the-gospel-with-them',
      //       'identify-their-spiritual-interest',
      //       'clarify-the-gospel-and-remove-barriers',
      //       'bring-them-to-a-decision-point-about-christ',
      //       'thoroughly-follow-up-if-they-indicate-belief-and-repentance'
      //     ]
      //   },
      //   {
      //     id: 2,
      //     icon: '/src/assets/icon/establish.svg',
      //     title: 'establish',
      //     descriptions: [
      //       'helping-them-developing-a-right-relationship-with-god',
      //       'helping-them-develop-a-right-relationship-with-self',
      //       'helping-them-develop-a-right-relationship-with-others'
      //     ]
      //   },
      //   {
      //     id: 3,
      //     icon: '/src/assets/icon/equip.svg',
      //     title: 'equip',
      //     descriptions: [
      //       'training-them-to-evangelize-and-establish-others',
      //       'leading-them-in-personal-ministry',
      //       'helping-them-begin-to-understand-and-develop-vision',
      //       'identifying-their-character-needs-and-helping-them-mature-and-christ-likeness'
      //     ]
      //   },
      //   {
      //     id: 4,
      //     icon: '/src/assets/icon/multiply.svg',
      //     title: 'multiply',
      //     descriptions: [
      //       'helping-them-begin-to-discern-their-unique-role-in-the-church-kingdom',
      //       'developing-a-personalized-ministry-plan-with-them',
      //       'connecting-them-with-people-and-opportunities'
      //     ]
      //   }
      // ],
      // discipleshipJourney: {
      //   title: 'our-discipleship_journey',
      //   description: [
      //     'devotional-disciples',
      //     'discipleship-character',
      //     'discipleship-skills',
      //     'biblical-doctrines'
      //   ]
      // }
    }
  },
  async created() {
    this.section2 = await this.fetchData('01002001') //discipleshipJourney
    // this.section2 = this.$fallbackData.page1.section2
    this.section3Item1 = await this.fetchData('01003001') //connect
    this.section3Item2 = await this.fetchData('01003002') //establish
    this.section3Item3 = await this.fetchData('01003003') //equip
    this.section3Item4 = await this.fetchData('01003004') //multiply
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
    <section v-if="section2" class="section2 w-4/5 flex flex-col items-center text-white py-20">
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
      class="section3 w-4/5 flex flex-row flex-wrap justify-center border-1 text-black gap-6 pb-20"
    >
      <div v-for="content in section3" :key="content.id">
        <DiscipleshipCard
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
