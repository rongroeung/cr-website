<script>
export default {
  name: 'Layout2Columns'
}
</script>

<template>
  <section id="layout-2-columns" class="flex flex-row flex-wrap">
    <div class="left-content">
      <slot name="left-content"></slot>
    </div>
    <div class="right-content">
      <slot name="right-content"></slot>
    </div>
  </section>
</template>

<script scoped>
</script>