<script>
export default {
  name: 'SundaySermonsPage'
}
</script>

<template>
  <section class="SundaySermonsPage bg-secondary h-fit w-full flex-center flex-col">
    <div class="image-header h-300-px w-full flex-center">
      <p class="text-4xl xl:text-5xl" v-t="'sunday-sermons'"></p>
    </div>
    <div class="content w-full h-full">
      <ComingSoon />
    </div>
  </section>
</template>

<script scoped></script>
