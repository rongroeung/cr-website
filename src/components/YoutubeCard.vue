<script>
export default {
  name: 'YoutubeCard'
}
</script>
<template>
  <div class="col-span-12 sm:col-span-6 md:col-span-3">
    <card class="w-full flex flex-col">
      <div class="relative">
        <!-- Image Video -->
        <a href="#">
          <img src="https://picsum.photos/seed/59/300/200" class="w-80 h-auto rounded-lg" />
        </a>

        <p class="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">1:15</p>
      </div>

      <div class="flex flex-row mt-2 gap-2">
        <!-- Profile Picture -->
        <a href="#">
          <img src="https://picsum.photos/seed/1/40/40" class="rounded-full max-h-10 max-w-10" />
        </a>

        <!-- Description -->
        <div class="flex flex-col">
          <a href="#">
            <p class="text-black text-sm font-semibold">Learn CSS Box Model in 8 Minutes</p>
          </a>
          <a class="text-gray-400 text-xs mt-2 hover:text-gray-100" href="#">
            Web Dev Simplified
          </a>
          <p class="text-gray-400 text-xs mt-1">241K views . 3 years ago</p>
        </div>
      </div>
    </card>
  </div>
</template>
<style scoped>
</style>