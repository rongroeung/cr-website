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
  <section class="pastoral-team-highlight-card bg-white rounded-lg p-6 max-w-24">
    <div class="mb-8 text-sm text-gray-600" v-t="item.content"></div>
    <div class="profile-section flex">
      <img :src="item.image" :class="cssClass" />
      <div class="flex flex-col justify-center">
        <p class="text-secondary text-sm">{{ item.name }}</p>
        <p v-t="item.role" class="uppercase text-sm md:text-lg text-gray-500 font-semibold"></p>
      </div>
    </div>
  </section>
</template>
<script scoped></script>
