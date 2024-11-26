<script>
import Layout2Columns from '@/layouts/Layout2Columns.vue'
import HighlightsActivityCard from '@/components/HighlightsActivityCard.vue'
export default {
  name: 'HighlightsActivity',
  components: { Layout2Columns, HighlightsActivityCard },
  data() {
    return {
      section4Item1: null,
      section4Item2: null
    }
  },
  async created() {
    this.section4Item1 = await this.getContentById('01004001') // Certificate In Ministry Leadership
    this.section4Item2 = await this.getContentById('01004002') // Worship Ministry
  }
}
</script>

<template>
  <section class="HighlightsActivity bg-cr-gray-light flex-center flex-col text-black">
    <layout-2-columns
      v-if="section4Item1"
      key="1"
      id="certificate-in-ministry-leadership"
      :wrapReverse="true"
      cssWrapper="w-4/5 py-12 pb-0"
      cssLeft="pb-0 lg:ps-0"
      cssRight="lg:pe-0"
    >
      <template #left-content>
        <HighlightsActivityCard
          :cardId="'01004001'"
          :cardTitle="section4Item1.title"
          :cardSubTitle="section4Item1.sub_title"
          :cardDescription="section4Item1.description[0].text"
          cardRouteName="certificate-in-ministry-leadership"
        />
      </template>
      <template #right-content>
        <img
          loading="lazy"
          :src="section4Item1.media[0].url"
          :alt="section4Item1.media[0].name"
          class="w-full h-48 md:h-25.25rem object-cover"
        />
      </template>
    </layout-2-columns>
    <layout-2-columns
      v-if="section4Item2"
      key="2"
      id="sunday-fellowship"
      cssWrapper="w-4/5 py-12"
      cssLeft="lg:ps-0"
      cssRight="lg:pe-0"
    >
      <template #left-content>
        <img
          loading="lazy"
          :src="section4Item2.media[0].url"
          :alt="section4Item2.media[0].name"
          class="w-full h-48 md:h-25.25rem object-cover"
        />
      </template>
      <template #right-content>
        <HighlightsActivityCard
          :cardId="'01004002'"
          :cardTitle="section4Item2.title"
          :cardSubTitle="section4Item2.sub_title"
          :cardDescription="section4Item2.description[0].text"
          cardRouteName="sunday-fellowship"
        />
      </template>
    </layout-2-columns>
  </section>
</template>

<style scoped></style>
