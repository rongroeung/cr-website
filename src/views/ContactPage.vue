<script>
import ContactItem from '@/components/ContactItem.vue'
import { initFlowbite } from 'flowbite'

export default {
  name: 'ContactPage',
  components: { ContactItem },
  data() {
    return {
      section1: null,
      contacts: []
    }
  },
  async created() {
    initFlowbite()
    this.section1 = await this.getContentById('24001001')
    this.contacts = await this.getAllContentStartByIds('24002')
  }
}
</script>

<template>
  <section class="bg-cr-gray-light h-fit w-full flex-center flex-col">
    <div id="24001001" v-if="section1" class="w-full">
      <PageHeader :section="section1" />
    </div>
    <div class="content w-4/5 h-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
      <ContactItem v-for="contact in contacts" :key="contact" :section="contact" />
    </div>
    <div class="content w-4/5 h-full my-20">
      <p
        class="w-full text-center md:text-start text-cr-gray-darker text-2xl md:text-3xl xl:text-4xl mb-4"
      >
        Reach Out
      </p>
      <p class="w-full text-center md:text-start text-cr-gray-darker text-xl xl:text-2xl">
        Have a specific need?
      </p>

      <div
        id="accordion-flush"
        data-accordion="collapse"
        data-active-classes="bg-white  text-gray-900 "
        data-inactive-classes="text-gray-500 "
      >
        <h2 id="accordion-flush-heading-1">
          <button
            type="button"
            class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 gap-3"
            data-accordion-target="#accordion-flush-body-1"
            aria-expanded="true"
            aria-controls="accordion-flush-body-1"
          >
            <span>Mail Us</span>
            <svg
              data-accordion-icon
              class="w-3 h-3 rotate-180 shrink-0"
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
        <div id="accordion-flush-body-1" class="hidden" aria-labelledby="accordion-flush-heading-1">
          <div class="py-5 border-b border-gray-200">
            <p class="mb-2 text-gray-500">
              Flowbite is an open-source library of interactive components built on top of Tailwind
              CSS including buttons, dropdowns, modals, navbars, and more.
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
        <h2 id="accordion-flush-heading-2">
          <button
            type="button"
            class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 gap-3"
            data-accordion-target="#accordion-flush-body-2"
            aria-expanded="false"
            aria-controls="accordion-flush-body-2"
          >
            <span>Ask for Prayer</span>
            <svg
              data-accordion-icon
              class="w-3 h-3 rotate-180 shrink-0"
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
        <div id="accordion-flush-body-2" class="hidden" aria-labelledby="accordion-flush-heading-2">
          <div class="py-5 border-b border-gray-200">
            <p class="mb-2 text-gray-500">
              Flowbite is first conceptualized and designed using the Figma software so everything
              you see in the library has a design equivalent in our Figma file.
            </p>
            <p class="text-gray-500">
              Check out the
              <a href="https://flowbite.com/figma/" class="text-blue-600 hover:underline"
                >Figma design system</a
              >
              based on the utility classes from Tailwind CSS and components from Flowbite.
            </p>
          </div>
        </div>
        <h2 id="accordion-flush-heading-3">
          <button
            type="button"
            class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 gap-3"
            data-accordion-target="#accordion-flush-body-3"
            aria-expanded="false"
            aria-controls="accordion-flush-body-3"
          >
            <span>Volunteer</span>
            <svg
              data-accordion-icon
              class="w-3 h-3 rotate-180 shrink-0"
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
        <div id="accordion-flush-body-3" class="hidden" aria-labelledby="accordion-flush-heading-3">
          <div class="py-5 border-b border-gray-200">
            <p class="mb-2 text-gray-500">
              The main difference is that the core components from Flowbite are open source under
              the MIT license, whereas Tailwind UI is a paid product. Another difference is that
              Flowbite relies on smaller and standalone components, whereas Tailwind UI offers
              sections of pages.
            </p>
            <p class="mb-2 text-gray-500">
              However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI
              as there is no technical reason stopping you from using the best of two worlds.
            </p>
            <p class="mb-2 text-gray-500">Learn more about these technologies:</p>
            <ul class="ps-5 text-gray-500 list-disc">
              <li>
                <a href="https://flowbite.com/pro/" class="text-blue-600 hover:underline"
                  >Flowbite Pro</a
                >
              </li>
              <li>
                <a
                  href="https://tailwindui.com/"
                  rel="nofollow"
                  class="text-blue-600 hover:underline"
                  >Tailwind UI</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script scoped></script>
