<script>
import CrButton from '@/components/CrButton.vue'
export default {
  name: 'NotFoundPage',
  components: { CrButton }
}
</script>

<template>
  <section class="bg-cr-gray mt-20">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-sm flex-center flex-col text-center my-20">
        <h1 class="text-7xl tracking-tight font-extrabold lg:text-9xl text-secondary">404</h1>
        <p class="mb-6 text-lg font-light text-secondary">Sorry, we can't find that page.</p>
        <CrButton label="back-to-homepage" buttonRoute="home" />
      </div>
    </div>
  </section>
</template>

<script scoped></script>
