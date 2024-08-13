<script>
import Layout2Columns from '@/layouts/Layout2Columns.vue'
export default {
  name: 'HighlightsActivity',
  components: { Layout2Columns },
  data() {
    return {
      items: [
        {
          headerTag: 'certificate-in-ministry-leadership',
          header: 'the-school-of-missions',
          content: 'the-school-of-missions-is-a-theological-training',
          image: 'src/assets/img/The-school-of-missions.jpg'
        },
        {
          headerTag: 'worship-ministry',
          header: 'sunday-worship',
          content: 'our-worship-team-exists-to-not-only',
          image: 'src/assets/img/The-school-of-missions.jpg'
        }
      ]
    }
  }
}
</script>

<template>
  <section id="highlights-activities" class="bg-white text-black">
    <img src="../assets/img/image2.png" alt="" />
    <layout-2-columns>
      <template #left-content>
        <h1>Hello Left</h1>
      </template>
      <template #right-content>
        <h1>Hello Right</h1>
      </template>
    </layout-2-columns>
  </section>
</template>


<style scoped>
</style>