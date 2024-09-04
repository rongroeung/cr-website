<script>
import CrButton from './CrButton.vue'
export default {
  name: 'HighlightsActivityCard',
  components: { CrButton },
  props: {
    cardTitle: String,
    cardSubTitle: String,
    cardDescription: String,
    cardButtonLabel: String,
    cardRouteName: String
  }
}
</script>

<template>
  <p v-if="cardTitle" class="text-sm text-gray-500 uppercase mb-4">{{ cardTitle }}</p>
  <p v-if="cardSubTitle" class="text-2xl md:text-4xl xl:text-5xl mb-4">{{ cardSubTitle }}</p>
  <div v-if="cardDescription" class="mb-14 text-sm md:text-lg">{{ cardDescription }}</div>
  <CrButton v-if="cardRouteName" :buttonRoute="cardRouteName" />
</template>

<script scoped></script>
