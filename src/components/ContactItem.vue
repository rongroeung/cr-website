<script>
export default {
  name: 'ContactItem',
  props: {
    section: Object
  }
}
</script>

<template>
  <div :id="section.id" class="flex flex-row w-full gap-4">
    <!-- Icon -->
    <div class="flex-center min-w-12 h-12 mb-4 flex-shrink-0">
      <img
        loading="lazy"
        class="w-12 h-12 object-contain"
        :src="section.media[0].url"
        :alt="section.media[0].name"
      />
    </div>

    <!-- Content -->
    <div class="text-left h-full w-auto text-cr-gray-darker flex-grow-1">
      <p class="font-bold text-lg text-left mb-2">{{ section.title }}</p>
      <ul>
        <div v-for="description in section.description" :key="description">
          <li>{{ description.text }}</li>
        </div>
      </ul>
    </div>
  </div>
</template>

<style></style>
