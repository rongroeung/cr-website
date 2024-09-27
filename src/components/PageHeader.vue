<template>
  <div class="PageHeader h-300-px w-full flex-center" :style="bannerBgImage(section.media[0].url)">
    <p class="text-5xl text-white">{{ section.title }}</p>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    section: Object
  },
  methods: {
    bannerBgImage(imageUrl) {
      return {
        'background-image': `url('${imageUrl}')`,
        backgroundPosition: '80%'
      }
    }
  }
}
</script>

<style></style>
