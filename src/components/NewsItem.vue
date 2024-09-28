
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
      // You can customize the condition for "long" descriptions (e.g., by word count, character count, etc.)
      // Here, we'll check if the text exceeds 100 characters, you can adjust this based on your needs.
      return text.length > 100 // or define your own logic for "long"
    }
  }
}
</script>

<template>
  <div :id="section.id" class="w-4/5 md:w-3/5 xl:w-1/2 flex flex-col items-start p-6 text-black">
    <!-- Title -->
    <h1 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">
      {{ section.title }}
    </h1>

    <!-- Image -->
    <img
      :src="section.media[0].url"
      :alt="section.media[0].name"
      class="w-full max-w-4xl object-cover rounded-lg shadow-lg mb-6"
    />

    <!-- Description -->
    <div v-for="description in section.description" :key="description.id" :class="dynamicClass">
      <div class="text-sm leading-6 md:leading-8 md:text-lg">{{ description.text }}</div>
    </div>

    <!-- Date -->
    <div class="flex items-center text-gray-600">
      <img src="../assets/icon/clock.svg" alt="click icon" class="mr-2" />
      <span>{{ section.sub_title }}</span>
    </div>
  </div>
</template>


<style>
</style>