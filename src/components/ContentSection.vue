<template>
  <div class="ContentSection my-20">
    <p v-if="section.title" class="text-3xl font-bold text-gray-800 mb-6">{{ section.title }}</p>
    <p v-if="section.sub_title" class="text-sm leading-6 md:leading-8 md:text-lg mb-6">
      {{ section.sub_title }}
    </p>
    <div v-for="content in section.description" :key="content.id" :class="dynamicClass">
      <div class="text-sm leading-6 md:leading-8 md:text-lg">{{ content.text }}</div>
    </div>
    <ImagesGrid v-if="section.media.length" :images="section.media" />
  </div>
</template>

<script>
import ImagesGrid from './ImagesGrid.vue'
export default {
  name: 'ContentSection',
  components: { ImagesGrid },
  props: {
    section: {
      type: Object,
      required: true
    }
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

<style scoped>
</style>
