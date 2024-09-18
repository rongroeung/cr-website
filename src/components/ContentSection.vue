<template>
  <div class="ContentSection my-20">
    <p v-if="section.title" class="text-3xl font-bold text-gray-800 mb-6">{{ section.title }}</p>
    <p v-if="section.sub_title" class="text-sm md:text-lg leading-6 sm:leading-8 mb-6">
      {{ section.sub_title }}
    </p>
    <template v-for="content in section.description" :key="content.id">
      <div v-if="showAsList" class="text-sm md:text-lg leading-6 sm:leading-8 mb-2">
        - {{ content.text }}
      </div>

      <div v-else class="text-sm md:text-lg leading-6 sm:leading-8 mb-4">{{ content.text }}</div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'ContentSection',
  props: {
    section: {
      type: Object,
      required: true
    },
    showAsList: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
</style>
