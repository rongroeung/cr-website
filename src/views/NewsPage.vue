<script>
import PageHeader from '@/components/PageHeader.vue'
export default {
  name: 'NewsPage',
  components: { PageHeader },
  data() {
    return {
      section1: null,
      section2: null
    }
  },
  async created() {
    this.section1 = await this.getContentById('20001001')
    this.section2 = await this.getContentById('20002001')
  }
}
</script>

<template>
  <section class="bg-secondary h-fit w-full flex-center flex-col">
    <div id="20001001" v-if="section1" class="w-full">
      <PageHeader :section="section1" />
    </div>
    <div class="bg-cr-gray content w-full h-full">
      <div class="flex justify-center items-center h-35rem">
        <div
          id="20002001"
          v-if="section2"
          class="max-w-sm rounded-lg border border-gray-200 shadow-lg bg-white p-6 m-4"
        >
          <div class="flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/2048px-Telegram_2019_Logo.svg.png"
              alt="Telegram"
              class="w-12 h-12 mr-4"
            />
            <div>
              <h2 class="text-lg font-semibold">{{ section2.title }}</h2>
            </div>
          </div>
          <div class="flex-center flex-col text-center">
            <img
              :src="section2.media[0].url"
              :alt="section2.media[0].name"
              class="h-1/2 w-1/2 my-4"
            />
            <div>
              <h2 class="text-lg font-semibold my-2">{{ section2.sub_title }}</h2>
              <p class="">
                {{ section2.description[0].text }}
              </p>
            </div>
          </div>
          <a href="https://t.me/crossroadscommunity" target="_blank">
            <button
              class="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition ease-in-out"
              v-t="'Join-Now'"
            ></button>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script scoped></script>
