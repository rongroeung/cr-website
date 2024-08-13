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
          header: 'connect',
          contents: [
            'share-the-gospel-with-them',
            'indentify-their-spiritual-interest',
            'clarify-the-gospel-and-remove-barriers',
            'bring-them-to-a-decision-point-about-christ',
            'thoroughly-follow-up-if-they-indicate-belief-and-repentance'
          ]
        },
        {
          id: 2,
          header: 'establish',
          contents: [
            'share-the-gospel-with-them',
            'indentify-their-spiritual-interest',
            'clarify-the-gospel-and-remove-barriers',
            'bring-them-to-a-decision-point-about-christ',
            'thoroughly-follow-up-if-they-indicate-belief-and-repentance'
          ]
        },
        {
          id: 3,
          header: 'equip',
          contents: [
            'share-the-gospel-with-them',
            'indentify-their-spiritual-interest',
            'clarify-the-gospel-and-remove-barriers',
            'bring-them-to-a-decision-point-about-christ',
            'thoroughly-follow-up-if-they-indicate-belief-and-repentance'
          ]
        },
        {
          id: 4,
          header: 'multiply',
          contents: [
            'share-the-gospel-with-them',
            'indentify-their-spiritual-interest',
            'clarify-the-gospel-and-remove-barriers',
            'bring-them-to-a-decision-point-about-christ',
            'thoroughly-follow-up-if-they-indicate-belief-and-repentance'
          ]
        }
      ]
    }
  }
}
</script>

<template>
  <section id="discipleship-jurney" class="text-white text-center bg-secondary h-fit">
    <p class="text-xl sm:text-2xl md:text-3xl xl:text-5xl p-4">Our Discipleship Jurney</p>
    <ul class="text-sm sm:text-xl xl:text-2xl">
      <li>Devotional Disciples</li>
      <li>Discipleship Character</li>
      <li>Discipleship Skills</li>
      <li>Biblical Doctrines</li>
    </ul>
    <section class="flex flex-row flex-wrap justify-center border-1 text-black mt-6">
      <div v-for="item in items" :key="item.id">
        <DiscipleshipCard :cardHeader="item.header" :cardContents="item.contents" />
      </div>
    </section>
  </section>
</template>

<style scoped></style>
