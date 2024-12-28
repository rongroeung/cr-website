<template>
  <section class="text-cr-gray-dark">
    <h2 id="accordion-flush-heading-1">
      <button
        type="button"
        class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 gap-3"
        @click="toggleBody()"
      >
        <span>Mail Us</span>
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
    <div id="accordion-flush-body-1" ref="accordingBody">
      <div class="py-5 border-b border-gray-200">
        <p class="mb-2 text-gray-500">
          Flowbite is an open-source library of interactive components built on top of Tailwind CSS
          including buttons, dropdowns, modals, navbars, and more.
        </p>
        <p class="text-gray-500">
          Check out this guide to learn how to
          <a href="/docs/getting-started/introduction/" class="text-blue-600 hover:underline"
            >get started</a
          >
          and start developing websites even faster with components on top of Tailwind CSS.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AccordingItem',
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

<style>
</style>