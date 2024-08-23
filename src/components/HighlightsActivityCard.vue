<script>
import CrButton from './CrButton.vue'
export default {
  name: 'HighlightsActivityCard',
  components: { CrButton },
  props: {
    cardHeaderTag: String,
    cardHeader: String,
    cardContent: String,
    cardButtonLabel: String,
    cardRouteName: String
  }
}
</script>

<template>
  <p v-if="cardHeaderTag" class="text-sm text-gray-500 uppercase mb-4" v-t="cardHeaderTag"></p>
  <p v-if="cardHeader" class="text-2xl md:text-4xl xl:text-5xl mb-4" v-t="cardHeader"></p>
  <div v-if="cardContent" class="mb-14 text-sm md:text-lg" v-t="cardContent"></div>
  <CrButton v-if="cardRouteName" :buttonRoute="cardRouteName" />
</template>

<script scoped></script>
