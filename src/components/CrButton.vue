<script>
export default {
  name: 'CrButton',
  props: {
    label: { type: String, default: 'learn-more' },
    buttonRoute: String,
    buttonRouteId: String,
    buttonColor: { type: String, default: 'bg-sub-primary' },
    buttonBorder: String,
    allowHover: { type: Boolean, default: false }
  },
  methods: {},
  computed: {
    ButtonSize() {
      return 'btn-md h-10 md:h-12 lg:h-14 w-36 md:w-40 lg:w-44'
    },
    cssClass() {
      return `${this.ButtonSize} ${this.buttonColor} ${this.buttonBorder} ${
        this.allowHover ? 'cr-button-hover' : ''
      }`
    },
    getHash() {
      return this.buttonRouteId ? `#${this.buttonRouteId}` : ''
    }
  }
}
</script>

<template>
  <div class="cr-button flex-center cursor-pointer" :class="cssClass">
    <router-link
      :to="{ name: buttonRoute, hash: getHash }"
      v-t="label"
      class="w-full h-full span-text uppercase font-semibold flex-center text-center text-sm"
    ></router-link>
  </div>
</template>

<style scoped>
.cr-button {
  color: white;
}
.cr-button-hover:hover {
  color: var(--secondary-color);
  background-color: var(--text-color);
  transition: 0.3s;
}
</style>
