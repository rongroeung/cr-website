<script>
export default {
  name: 'Layout2Columns'
}
</script>

<template>
  <section id="layout-2-columns" class="flex flex-row flex-wrap items-center min-h-96 p-12">
    <div class="left-content w-full lg:w-2/4 pe-6">
      <slot name="left-content"></slot>
    </div>
    <div class="right-content w-full lg:w-2/4 ps-6">
      <slot name="right-content"></slot>
    </div>
  </section>
</template>

<script scoped></script>
