<script>
import PageHeader from '@/components/PageHeader.vue'
export default {
  name: 'NewsPage',
  components: { PageHeader },
  data() {
    return {
      section1: null
    }
  },
  async created() {
    this.section1 = await this.getContentById('20001001')
  }
}
</script>

<template>
  <section class="bg-secondary h-fit w-full flex-center flex-col">
    <div id="20001001" v-if="section1" class="w-full">
      <PageHeader :section="section1" />
    </div>
    <div class="bg-cr-gray content w-full h-full">
      <div class="flex justify-center items-center h-30rem">
        <div class="max-w-sm rounded-lg border border-gray-200 shadow-lg bg-white">
          <div class="p-6">
            <div class="flex items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/2048px-Telegram_2019_Logo.svg.png"
                alt="Telegram"
                class="w-12 h-12 mr-4"
              />
              <div>
                <h2 class="text-lg font-semibold">Join Our Telegram Channel</h2>
                <p class="text-gray-600">Stay updated with the latest news and alerts!</p>
              </div>
            </div>
            <a href="https://t.me/crossroadscommunity" target="_blank">
              <button
                class="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition ease-in-out"
              >
                Join Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script scoped></script>
