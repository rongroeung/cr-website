<template>
  <div class="flex flex-row flex-wrap justify-center">
    <template v-for="(image, index) in images" :key="index">
      <img :src="image.url" :alt="image.name" class="h-full w-full md:w-1/2 object-cover p-2" />
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