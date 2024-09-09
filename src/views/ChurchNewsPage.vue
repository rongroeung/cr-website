<script>
export default {
  name: 'ChurchNewsPage'
}
</script>

<template>
  <section class="bg-secondary h-fit w-full flex-center flex-col">
    <div class="image-header h-300-px w-full flex-center">
      <p class="text-4xl xl:text-5xl" v-t="'church-news'"></p>
    </div>
    <div class="content w-full h-screen">
      <ComingSoon />
    </div>
  </section>
</template>

<script scoped></script>
