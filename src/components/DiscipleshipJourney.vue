<script>
import DiscipleshipCard from './DiscipleshipCard.vue'
import CrButton from './CrButton.vue'
export default {
  name: 'DiscipleshipJourney',
  components: { DiscipleshipCard, CrButton },
  data() {
    return {
      discipleshipCardContents: [
        {
          id: 1,
          icon: '/src/assets/icon/connect.svg',
          header: 'connect',
          contents: [
            'share-the-gospel-with-them',
            'identify-their-spiritual-interest',
            'clarify-the-gospel-and-remove-barriers',
            'bring-them-to-a-decision-point-about-christ',
            'thoroughly-follow-up-if-they-indicate-belief-and-repentance'
          ]
        },
        {
          id: 2,
          icon: '/src/assets/icon/establish.svg',
          header: 'establish',
          contents: [
            'helping-them-developing-a-right-relationship-with-god',
            'helping-them-develop-a-right-relationship-with-self',
            'helping-them-develop-a-right-relationship-with-others'
          ]
        },
        {
          id: 3,
          icon: '/src/assets/icon/equip.svg',
          header: 'equip',
          contents: [
            'training-them-to-evangelize-and-establish-others',
            'leading-them-in-personal-ministry',
            'helping-them-begin-to-understand-and-develop-vision',
            'identifying-their-character-needs-and-helping-them-mature-and-christ-likeness'
          ]
        },
        {
          id: 4,
          icon: '/src/assets/icon/multiply.svg',
          header: 'multiply',
          contents: [
            'helping-them-begin-to-discern-their-unique-role-in-the-church-kingdom',
            'developing-a-personalized-ministry-plan-with-them',
            'connecting-them-with-people-and-opportunities'
          ]
        }
      ],
      discipleshipJourney: {
        header: 'our-discipleship-journey',
        contents: [
          'devotional-disciples',
          'discipleship-character',
          'discipleship-skills',
          'biblical-doctrines'
        ]
      }
    }
  }
}
</script>

<template>
  <section id="discipleship-journey" class="bg-secondary h-fit flex-center flex-col">
    <div class="w-4/5 flex flex-col items-center text-white py-20">
      <p class="text-2xl md:text-4xl xl:text-5xl pb-6" v-t="discipleshipJourney.header"></p>
      <ul class="text-base md:text-lg xl:text-lg w-fit text-center pb-8">
        <template v-for="content in discipleshipJourney.contents" :key="content">
          <li v-t="content"></li>
        </template>
      </ul>
      <div class="flex">
        <CrButton class="me-4" />
        <CrButton
          label="about-us"
          buttonColor="bg-secondary"
          buttonBorder="cr-border-button"
          buttonRoute="about"
          :allowHover="true"
        />
      </div>
    </div>
    <section class="w-4/5 flex flex-row flex-wrap justify-center border-1 text-black gap-6 pb-20">
      <div v-for="content in discipleshipCardContents" :key="content.id">
        <DiscipleshipCard
          :iconPath="content.icon"
          :cardHeader="content.header"
          :cardContents="content.contents"
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
