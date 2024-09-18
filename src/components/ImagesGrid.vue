<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4" v-if="images">
    <img
      v-for="(image, index) in images"
      :key="index"
      :src="image.url"
      :alt="image.name"
      class="w-full h-auto"
    />
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