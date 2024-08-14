<script>
export default {
  name: 'CrButton',
  props: {
    label: { type: String, default: 'learn-more' },
    buttonRoute: String,
    buttonSize: { type: String, default: 'md' },
    buttonColor: { type: String, default: 'bg-primary' },
    labelColor: String
  },
  methods: {},
  computed: {
    ButtonSize() {
      return this.buttonSize == 'lg'
        ? 'btn-lg h-12 md:h-16 lg:h-16 w-36 md:w-40 lg:w-44' // lg
        : 'btn-md h-8 md:h-12 lg:h-14 w-36 md:w-40 lg:w-44' // md
    }
  }
}
</script>

<template>
  <div
    class="cr-button flex-center bg-sub-primary text-white cursor-pointer"
    :class="ButtonSize"
    :color="buttonColor"
  >
    <span class="uppercase font-bold">
      <router-link :to="{ name: buttonRoute }" v-t="label"></router-link>
    </span>
  </div>
</template>

<script scoped></script>
