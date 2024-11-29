<template>
  <div class="flex flex-center flex-row flex-wrap">
    <template v-for="(image, index) in images" :key="index">
      <img :src="image.url" :alt="image.name" class="w-full lg:w-1/2 cr-img-md-3-2 p-2" />
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
