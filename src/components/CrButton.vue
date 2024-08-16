<script>
export default {
  name: 'CrButton',
  props: {
    label: { type: String, default: 'learn-more' },
    buttonRoute: String,
    buttonColor: { type: String, default: 'bg-sub-primary' },
    buttonBorder: String
  },
  methods: {},
  computed: {
    ButtonSize() {
      return 'btn-md h-10 md:h-12 lg:h-14 w-36 md:w-40 lg:w-44'
    },
    cssClass() {
      return `${this.ButtonSize} ${this.buttonColor} ${this.buttonBorder}`
    }
  }
}
</script>

<template>
  <div class="cr-button flex-center text-white cursor-pointer" :class="cssClass">
    <span class="span-text uppercase font-semibold flex-center text-center text-sm">
      <router-link :to="{ name: buttonRoute }" v-t="label"></router-link>
    </span>
  </div>
</template>

<style scoped>
</style>
