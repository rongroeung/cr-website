<template>
  <div class="flex flex-row flex-wrap justify-center gap-4">
    <template v-for="(image, index) in images" :key="index">
      <img
        :src="image.url"
        :alt="image.name"
        class="h-full w-full lg:w-49 h-14.7rem md:h-25.25rem object-cover"
      />
    </template>
  </div>
</template>

<script>
export default {
  name: 'ImagesGrid',
  props: {
    images: {
      type: Array,
      required: true
    }
  }
}
</script>
