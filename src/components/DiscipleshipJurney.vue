<script>
import DiscipleshipCard from './DiscipleshipCard.vue'
export default {
  name: 'DiscipleshipJurney',
  components: { DiscipleshipCard },
  data() {
    return {
      items: [
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
      ]
    }
  }
}
</script>

<template>
  <section id="discipleship-journey" class="bg-secondary h-fit">
    <div class="flex flex-col items-center text-white py-7">
      <p class="text-2xl sm:text-3xl md:text-4xl xl:text-5xl p-4">Our Discipleship Journey</p>
      <ul class="sm:text-2xl xl:text-3xl w-fit text-center">
        <li>Devotional Disciples</li>
        <li>Discipleship Character</li>
        <li>Discipleship Skills</li>
        <li>Biblical Doctrines</li>
      </ul>
    </div>
    <section class="flex flex-row flex-wrap justify-center border-1 text-black pb-6">
      <div v-for="item in items" :key="item.id">
        <DiscipleshipCard
          :iconPath="item.icon"
          :cardHeader="item.header"
          :cardContents="item.contents"
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
