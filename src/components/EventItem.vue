<script>
import { formatDateForDisplay } from '@/util/dateFormatUtils.js'
export default {
  name: 'EventItem',
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
  <div :id="section.id" class="w-full md:w-1/2 flex flex-col items-start p-6 text-black">
    <!-- Title -->
    <h1 class="text-xl md:text-2xl font-bold text-cr-gray-darker my-3 text-center w-full">
      {{ section.title }}
    </h1>

    <!-- Image -->
    <img
      :src="section.media[0].url"
      :alt="section.media[0].name"
      class="cr-img-md-16-9 rounded-lg shadow-lg"
    />

    <!-- Date -->
    <div class="flex items-center text-cr-gray-dark mb-2 mt-6">
      <img src="../assets/icon/clock.svg" alt="click icon" class="mr-2" />
      <span>{{ getDate }}</span>
    </div>

    <!-- Location -->
    <div class="flex items-center text-cr-gray-dark mb-3">
      <img src="../assets/icon/location.svg" alt="click icon" class="mr-2" />
      <span>{{ section.sub_title }}</span>
    </div>

    <!-- Description -->
    <div class="ps-1">
      <template v-for="(description, index) in section.description" :key="index">
        <div
          class="text-sm leading-6 md:leading-8 md:text-lg"
          :class="dynamicClass"
          v-html="description.text"
        ></div>
      </template>
    </div>
  </div>
</template>

<style></style>
