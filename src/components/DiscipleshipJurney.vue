<script>
import DiscipleshipCard from './DiscipleshipCard.vue'
export default {
  name: 'DiscipleshipJurney',
  components: { DiscipleshipCard },
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
          'biblical-octrines'
        ]
      }
    }
  }
}
</script>

<template>
  <section id="discipleship-journey" class="bg-secondary h-fit">
    <div class="flex flex-col items-center text-white py-7">
      <p
        class="text-2xl sm:text-3xl md:text-4xl xl:text-5xl p-4"
        v-t="discipleshipJourney.header"
      ></p>
      <ul class="sm:text-2xl xl:text-3xl w-fit text-center">
        <template v-for="content in discipleshipJourney.contents" :key="content">
          <li v-t="content"></li>
        </template>
      </ul>
    </div>
    <section class="flex flex-row flex-wrap justify-center border-1 text-black pb-6">
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
  line-height: 1.5;
}
</style>
