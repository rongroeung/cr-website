<script>
export default {
  name: 'ImagePreview',
  props: {
    src: String,
    alt: String
  }
}
</script>
<template>
  <div class="image-preview flex-center w-full h-44 object-contain border-1 rounded-lg mb-2">
    <img loading="lazy" :src="src" :alt="alt" class="h-auto max-h-40 w-auto" />
  </div>
</template>



<style>
</style>