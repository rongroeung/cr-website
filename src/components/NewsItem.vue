<script>
import { formatDateForDisplay } from '@/util/mixin.js'
export default {
  name: 'NewsItem',
  props: {
    section: Object
  },
  computed: {
    dynamicClass() {
      // Check if any description is long
      const hasLongDescription = this.section.description.some((content) =>
        this.isLongDescription(content.text)
      )
      return hasLongDescription ? 'mb-4' : 'mb-2'
    },
    getDate() {
      return formatDateForDisplay(this.section.create_time)
    }
  },
  methods: {
    isLongDescription(text) {
      return text.length > 100
    }
  }
}
</script>

<template>
  <div
    :id="section.id"
    class="w-full md:w-3/5 xl:w-1/2 flex flex-col items-start p-6 text-black text-cr-gray-darker"
  >
    <!-- Title -->
    <h1 class="w-full text-2xl md:text-3xl font-bold mb-6 text-center">
      {{ section.title }}
    </h1>

    <!-- Image -->
    <img
      :src="section.media[0].url"
      :alt="section.media[0].name"
      class="w-full h-13.43rem md:h-25.25rem object-cover rounded-lg shadow-lg"
    />

    <!-- Date -->
    <div class="flex items-center text-cr-gray-dark mb-4 mt-6">
      <img src="../assets/icon/clock.svg" alt="click icon" class="mr-2" />
      <span>{{ getDate }}</span>
    </div>

    <!-- Description -->
    <div v-for="description in section.description" :key="description.id" :class="dynamicClass">
      <div class="text-sm leading-6 md:leading-8 md:text-lg" v-html="description.text"></div>
    </div>
  </div>
</template>

<style></style>
