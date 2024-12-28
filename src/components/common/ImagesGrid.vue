<template>
  <div class="flex flex-center flex-row flex-wrap">
    <img
      v-for="(image, index) in images"
      :key="index"
      :src="image.url"
      :alt="image.name"
      class="lg:w-1/2 cr-img-md-16-9 px-0 py-2 lg:px-2"
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
