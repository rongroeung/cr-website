<script>
import CrButton from '@/components/common/CrButton.vue'
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
  <div :id="cardId" class="text-cr-gray-darker">
    <p class="text-sm text-cr-gray-dark uppercase mb-4 text-left">{{ cardTitle }}</p>
    <p class="text-2xl md:text-3xl xl:text-4xl mb-4 text-left">{{ cardSubTitle }}</p>
    <div class="mb-14 text-sm leading-6 md:leading-8 md:text-lg">{{ cardDescription }}</div>
    <CrButton :buttonRoute="cardRouteName" />
  </div>
</template>

<script scoped></script>
