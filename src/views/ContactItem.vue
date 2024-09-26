
<script>
export default {
  name: 'ContactItem',
  props: {
    section: Object
  }
}
</script>

<template>
  <div
    :id="section.id"
    class="flex flex-col md:flex-row items-start justify-center w-full md:w-1/2 xl:w-2/5 p-4 min-h-40"
  >
    <!-- Icon -->
    <div class="flex-center w-full md:w-16 h-12 mb-4">
      <img
        loading="lazy"
        class="w-12 h-12 object-contain"
        :src="section.media[0].url"
        :alt="section.media[0].name"
      />
    </div>

    <!-- Content -->
    <div class="ml-0 md:ml-4 text-left w-full h-full">
      <p class="font-bold text-lg text-left mb-2">{{ section.title }}</p>
      <ul class="text-gray-400">
        <div v-for="description in section.description" :key="description">
          <li>{{ description.text }}</li>
        </div>
      </ul>
    </div>
  </div>
</template>


<style>
</style>