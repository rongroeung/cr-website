<script>
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
    <h1 class="text-xl md:text-2xl font-bold text-gray-800 my-3 text-center w-full">
      {{ section.title }}
    </h1>

    <!-- Image -->
    <img
      :src="section.media[0].url"
      :alt="section.media[0].name"
      class="w-full max-w-4xl object-cover rounded-lg shadow-lg mb-6 h-32 md:h-56 xl:h-72"
    />

    <!-- Date -->
    <div class="flex items-center text-gray-600">
      <img src="../assets/icon/clock.svg" alt="click icon" class="mr-2" />
      <span>{{ section.description[0].text }}</span>
    </div>

    <!-- Location -->
    <div class="flex items-center text-gray-600 mb-3">
      <img src="../assets/icon/location.svg" alt="click icon" />
      <span>{{ section.sub_title }}</span>
    </div>

    <!-- Description -->
    <div class="ps-1">
      <template v-for="(description, index) in section.description" :key="index">
        <div v-if="index == 1" :class="dynamicClass">
          <div class="text-sm leading-6 md:leading-8 md:text-lg">
            {{ description.text }}
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style></style>
