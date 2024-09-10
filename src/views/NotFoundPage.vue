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
      <div class="mx-auto max-w-screen-sm flex-center flex-col text-center">
        <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-secondary">404</h1>
        <p
          class="mb-4 text-3xl tracking-tight font-bold text-secondary md:text-4xl"
          v-t="'something-missing'"
        >
          Something's missing.
        </p>
        <p class="mb-4 text-lg font-light text-secondary">
          Sorry, we can't find that page. You'll find lots to explore on the home page.
        </p>
        <CrButton label="back-to-homepage" buttonRoute="home" />
      </div>
    </div>
  </section>
</template>

<script scoped></script>
