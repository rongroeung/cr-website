<script>
export default {
  name: 'YoutubeCard',
  props: {
    video: Object
  },
  data() {
    return {
      youtube: {
        profile_picture:
          'https://raw.githubusercontent.com/rongroeung/cr-website/development/src/assets/img/channel_logo.jpg',
        profile_name: 'ccoc online'
      }
    }
  }
}
</script>
<template>
  <a class="cursor-pointer flex-center flex-col" target="_blank" :href="video.video_url">
    <div class="w-11/12 sm:w-full">
      <div class="relative">
        <!-- Image Video -->
        <img
          loading="lazy"
          :src="video.thumbnail_url"
          :alt="video.thumbnail_name"
          class="w-full rounded-lg object-cover"
          style="height: 180px"
        />

        <p class="absolute right-2 bottom-2 bg-gray-700 text-gray-100 text-xs px-1 py rounded-sm">
          {{ video.duration }}
        </p>
      </div>

      <div class="flex flex-row mt-2 gap-2">
        <!-- Profile Picture -->
        <img
          loading="lazy"
          :src="youtube.profile_picture"
          :alt="youtube.profile_name"
          class="rounded-full max-h-10 max-w-10"
        />

        <!-- Description -->
        <div class="flex flex-col w-17rem text-cr-gray-dark">
          <p class="text-cr-gray-darker text-sm font-semibold truncate text-left">
            {{ video.title }}
          </p>
          <p class="text-xs mt-2 text-left">
            {{ youtube.profile_name }}
          </p>
          <p class="text-xs mt-2 flex">
            {{ video.publish_date }}
          </p>
        </div>
      </div>
    </div>
  </a>
</template>
<style scoped></style>
