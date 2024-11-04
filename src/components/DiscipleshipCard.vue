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
    class="h-full p-6 bg-cr-gray-light border rounded-lg shadow text-center"
    style="max-width: 17.8rem"
  >
    <div v-if="cardHeader" class="flex items-center">
      <img loading="lazy" :src="cardIcon" :alt="cardIconName" class="w-12" />
      <p class="ms-2 text-base lg:text-lg uppercase font-bold text-cr-gray-darker">
        {{ cardHeader }}
      </p>
    </div>
    <ul
      v-if="cardContents"
      class="list-decimal ps-4 text-left text-sm leading-6 m-2 text-cr-gray-darker"
    >
      <template v-for="content in cardContents" :key="content.id">
        <li>{{ content.text }}</li>
      </template>
    </ul>
  </div>
</template>

<style scoped></style>
