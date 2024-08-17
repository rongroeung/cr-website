<script>
export default {
  name: 'YoutubeCard',
  props: {
    video: Object
  }
}
</script>
<template>
  <a
    class="col-span-12 sm:col-span-6 md:col-span-3 cursor-pointer"
    target="_blank"
    :href="video.url"
  >
    <div class="w-80 flex flex-col">
      <div class="relative">
        <!-- Image Video -->
        <img :src="video.thumbnail" class="w-80 h-auto rounded-lg" />

        <p class="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
          {{ video.duration }}
        </p>
      </div>

      <div class="flex flex-row mt-2 gap-2">
        <!-- Profile Picture -->
        <img :src="video.profileImage" class="rounded-full max-h-10 max-w-10" />

        <!-- Description -->
        <div class="flex flex-col w-17rem">
          <p class="text-black text-sm font-semibold truncate">{{ video.title }}</p>
          <p class="text-gray-400 text-xs mt-2">
            {{ video.profileName }}
          </p>
          <p class="text-gray-400 text-xs mt-1 flex">
            {{ video.views }} views
            <img src="../assets/icon/dot.svg" />
            {{ video.date }}
          </p>
        </div>
      </div>
    </div>
  </a>
</template>
<style scoped>
</style>