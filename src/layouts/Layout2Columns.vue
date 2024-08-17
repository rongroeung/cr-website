<script>
export default {
  name: 'Layout2Columns',
  props: {
    wrapReverse: {
      type: Boolean,
      default: false
    },
    cssWrapper: String,
    cssLeft: String,
    cssRight: String
  },
  computed: {
    wrapClass() {
      return this.wrapReverse
        ? `flex-wrap-reverse ${this.cssWrapper}`
        : `flex-wrap ${this.cssWrapper}`
    }
  }
}
</script>

<template>
  <section id="layout-2-columns" class="flex flex-row items-center min-h-96" :class="wrapClass">
    <div class="left-content w-full lg:w-2/4 p-6" :class="cssLeft">
      <slot name="left-content"></slot>
    </div>
    <div class="right-content w-full lg:w-2/4 p-6" :class="cssRight">
      <slot name="right-content"></slot>
    </div>
  </section>
</template>

<script scoped></script>
