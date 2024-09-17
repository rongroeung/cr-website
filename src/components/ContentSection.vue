<template>
  <div class="ContentSection">
    <p class="text-3xl font-bold text-gray-800 mb-6">{{ section.title }}</p>
    <p class="text-sm md:text-lg leading-6 sm:leading-8 mb-6">{{ section.sub_title }}</p>
    <template v-for="content in section.description" :key="content.id">
      <div class="text-sm md:text-lg leading-6 sm:leading-8">- {{ content.text }}</div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'ContentSection',
  props: {
    section: {
      type: Object,
      required: true,
      default: () => ({
        title: '',
        subTitle: '',
        description: []
      })
    }
  }
}
</script>

<style scoped>
</style>
