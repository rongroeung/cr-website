
<script>
export default {
  name: 'PastoralTeamCard',
  props: {
    item: Object
  }
}
</script>


<template>
  <div class="flex flex-col items-center space-x-4 max-w-md">
    <div class="w-180-px h-180-px">
      <img :src="item.image" :alt="item.name" class="w-full h-full rounded-full object-contain" />
    </div>
    <div>
      <h2 class="text-xl font-semibold text-gray-800 my-4">{{ item.name }}</h2>
      <p class="text-gray-600 text-sm md:text-base leading-6" v-html="$t(item.description)"></p>
    </div>
  </div>
</template>


<style>
</style>