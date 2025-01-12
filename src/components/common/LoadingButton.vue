<template>
  <div class="flex items-center h-10 space-x-4">
    <Loader v-if="isLoading" :dark="true" />
    <button
      type="submit"
      :disabled="isLoading"
      :class="{ 'cursor-not-allowed opacity-50': isLoading }"
      class="bg-secondary w-fit px-4 py-2 rounded ms-auto"
      v-t="isLoading ? 'submitting' : 'submit'"
    ></button>
  </div>
</template>

<script>
import Loader from './Loader.vue'
export default {
  name: 'LoadingButton',
  components: { Loader },
  props: {
    isLoading: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
</style>