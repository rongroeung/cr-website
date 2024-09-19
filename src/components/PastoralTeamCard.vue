<script>
export default {
  name: 'PastoralTeamCard',
  props: {
    section: Object
  }
}
</script>

<template>
  <div :id="section.id" class="flex flex-col items-center space-x-4 max-w-34">
    <div v-if="section.media.length" class="w-180-px h-180-px">
      <img
        loading="lazy"
        :src="section.media[0].url"
        :alt="section.media[0].name"
        class="w-full h-full rounded-full object-contain"
      />
    </div>
    <div class="text-black">
      <h2 class="text-xl font-semibold text-gray-800 my-4">{{ section.title }}</h2>
      <template v-for="content in section.description" :key="content.id">
        <div class="text-sm leading-6 md:leading-8 md:text-lg mb-4">{{ content.text }}</div>
      </template>
    </div>
  </div>
</template>

<style></style>
