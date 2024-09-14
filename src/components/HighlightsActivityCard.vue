<script>
import CrButton from './CrButton.vue'
export default {
  name: 'HighlightsActivityCard',
  components: { CrButton },
  props: {
    cardId: String,
    cardTitle: String,
    cardSubTitle: String,
    cardDescription: String,
    cardButtonLabel: String,
    cardRouteName: String
  }
}
</script>

<template>
  <div :id="cardId">
    <p class="text-sm text-gray-500 uppercase mb-4">{{ cardTitle }}</p>
    <p class="text-2xl md:text-4xl xl:text-5xl mb-4">{{ cardSubTitle }}</p>
    <div class="mb-14 text-sm md:text-lg leading-6 sm:leading-8">{{ cardDescription }}</div>
    <CrButton :buttonRoute="cardRouteName" />
  </div>
</template>

<script scoped></script>
