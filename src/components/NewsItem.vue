<script>
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
  <div :id="section.id" class="w-4/5 md:w-3/5 xl:w-1/2 flex flex-col items-start p-6 text-black">
    <!-- Title -->
    <h1 class="w-full text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
      {{ section.title }}
    </h1>

    <!-- Image -->
    <img
      :src="section.media[0].url"
      :alt="section.media[0].name"
      class="w-full max-w-4xl object-cover rounded-lg shadow-lg mb-6"
    />

    <!-- Date -->
    <div class="flex items-center text-gray-600 mb-4">
      <img src="../assets/icon/clock.svg" alt="click icon" class="mr-2" />
      <span>{{ section.sub_title }}</span>
    </div>

    <!-- Description -->
    <div v-for="description in section.description" :key="description.id" :class="dynamicClass">
      <div class="text-sm leading-6 md:leading-8 md:text-lg">{{ description.text }}</div>
    </div>
  </div>
</template>

<style></style>
