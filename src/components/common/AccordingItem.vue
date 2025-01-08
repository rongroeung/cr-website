<template>
  <section class="text-cr-gray-dark">
    <h2 id="accordion-flush-heading-1">
      <button
        type="button"
        class="flex items-center justify-between w-full text-secondary py-5 font-medium rtl:text-right border-b border-gray-200 gap-3 hover:bg-gray-200 px-4"
        @click="toggleBody()"
      >
        <span v-t="title"></span>
        <svg
          ref="accordionIcon"
          class="w-3 h-3 shrink-0"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5 5 1 1 5"
          />
        </svg>
      </button>
    </h2>
    <div id="accordion-flush-body-1" ref="accordingBody" class="hidden p-4">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  name: 'AccordingItem',
  props: {
    title: String
  },
  data() {
    return {}
  },
  methods: {
    toggleBody() {
      this.$refs.accordingBody.classList.toggle('hidden')
      this.$refs.accordionIcon.classList.toggle('rotate-180')
    }
  }
}
</script>

<style></style>
