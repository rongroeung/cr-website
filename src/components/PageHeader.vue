<template>
  <div
    class="PageHeader image-header h-300-px w-full flex-center"
    :style="{ backgroundImage: `url(${section.media[0].url})` }"
  >
    <p class="text-5xl text-white">{{ section.title }}</p>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    section: Object
  }
}
</script>

<style>
</style>