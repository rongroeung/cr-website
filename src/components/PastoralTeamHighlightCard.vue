<script>
export default {
  name: 'PastoralTeamHighlightCard',
  props: {
    item: Object
  },
  data() {
    return {
      cssClass: 'rounded-full w-16 h-16 me-4 object-cover'
    }
  }
}
</script>
<template>
  <div class="PastoralTeamHighlightCard h-full bg-white rounded-lg flex flex-col p-6 max-w-24">
    <div class="mb-8 text-sm text-gray-600 grow">{{ item.description[0].text }}</div>
    <div class="profile-section flex">
      <img :src="item.media[0].url" :alt="item.media[0].name" :class="cssClass" />
      <div class="flex flex-col justify-center">
        <p class="text-secondary text-md">{{ item.title }}</p>
        <p class="uppercase text-md text-gray-500 font-semibold">{{ item.sub_title }}</p>
      </div>
    </div>
  </div>
</template>
