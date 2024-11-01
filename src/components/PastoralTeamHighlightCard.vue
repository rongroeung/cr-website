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
  <div
    :id="item.id"
    class="PastoralTeamHighlightCard h-full bg-white rounded-lg flex flex-col p-6 max-w-24"
  >
    <div class="mb-8 text-sm text-cr-gray-dark grow leading-6">
      {{ item.description[0].text }}
    </div>
    <div class="profile-section flex">
      <img loading="lazy" :src="item.media[0].url" :alt="item.media[0].name" :class="cssClass" />
      <div class="flex flex-col justify-center text-left">
        <p class="text-cr-gray-darker text-md text-left">{{ item.title }}</p>
        <p class="uppercase text-md text-cr-gray-dark font-semibold">{{ item.sub_title }}</p>
      </div>
    </div>
  </div>
</template>
