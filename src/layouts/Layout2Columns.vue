<script>
export default {
  name: 'Layout2Columns',
  props: {
    wrapReverse: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    wrapClass() {
      return this.wrapReverse ? 'flex-wrap-reverse' : 'flex-wrap'
    }
  }
}
</script>

<template>
  <section
    id="layout-2-columns"
    class="flex flex-row items-center min-h-96 p-12"
    :class="wrapClass"
  >
    <div class="left-content w-full lg:w-2/4 p-6">
      <slot name="left-content"></slot>
    </div>
    <div class="right-content w-full lg:w-2/4 p-6">
      <slot name="right-content"></slot>
    </div>
  </section>
</template>

<script scoped></script>
