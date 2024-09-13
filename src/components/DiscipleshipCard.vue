<script>
export default {
  name: 'DiscipleshipCard',
  props: {
    cardId: String,
    cardIcon: String,
    cardIconName: String,
    cardHeader: String,
    cardContents: Array
  }
}
</script>

<template>
  <div
    :id="cardId"
    class="h-full p-6 bg-white border rounded-lg shadow text-center"
    style="max-width: 17.8rem"
  >
    <div v-if="cardHeader" class="flex items-center">
      <img loading="lazy" :src="cardIcon" :alt="cardIconName" class="w-12" />
      <p class="ms-2 text-base lg:text-xl uppercase font-bold">{{ cardHeader }}</p>
    </div>
    <ol v-if="cardContents" class="list-decimal text-left text-sm sm:text-base m-2">
      <template v-for="content in cardContents" :key="content.id">
        <li>{{ content.text }}</li>
      </template>
    </ol>
  </div>
</template>

<style scoped></style>
