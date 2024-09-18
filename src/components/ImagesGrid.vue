<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
    <template v-for="(image, index) in images" :key="index">
      <img :src="image.url" :alt="image.name" class="h-full object-cover" />
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