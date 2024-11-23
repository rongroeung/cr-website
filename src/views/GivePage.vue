<script>
import Paypal from '@/components/Paypal.vue'
import PageHeader from '@/components/PageHeader.vue'
export default {
  name: 'GivePage',
  components: { PageHeader, Paypal },
  data() {
    return {
      section1: null,
      section2: null,
      section3: null,
      isGlobalPage: true,
      cssTab:
        'w-1/2 md:w-2/5 inline-block px-4 py-3 text-lg text-cr-gray-darker hover:text-gray-700 bg-cr-gray-light hover:bg-gray-200 cursor-pointer',
      cssSelectedTab:
        'Selected w-1/2 md:w-2/5 inline-block px-4 py-3 text-lg  bg-cr-gray-dark hover:bg-gray-500 active cursor-pointer'
    }
  },
  async created() {
    this.section1 = await this.getContentById('19001001')
    this.section2 = await this.getContentById('19002001')
    this.section3 = await this.getContentById('19003001')
  }
}
</script>

<template>
  <section class="bg-white h-fit w-full flex-center flex-col">
    <div id="19001001" v-if="section1" class="w-full">
      <PageHeader :section="section1" />
    </div>
    <div class="content flex-center flex-col mx-auto my-10 md:my-20">
      <div id="19002001" v-if="section2" class="flex-center flex-col">
        <p
          class="w-4/5 text-cr-gray-darker text-2xl md:leading-snug md:text-4xl text-center font-normal mb-10 md:mb-20"
        >
          {{ section2.title }}
        </p>
        <div class="flex-center mb-10 md:mb-20 w-full md:w-4/5 h-64 md:h-30rem">
          <iframe
            width="100%"
            height="100%"
            :src="section2.media[0].url"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div class="give-section w-4/5">
        <ul class="flex-center text-sm font-medium text-center w-full">
          <li
            :class="[isGlobalPage ? cssSelectedTab : cssTab, 'rounded-l-lg']"
            @click="isGlobalPage = true"
            v-t="'Global'"
          ></li>
          <li
            :class="[!isGlobalPage ? cssSelectedTab : cssTab, 'rounded-r-lg']"
            @click="isGlobalPage = false"
            v-t="'Local'"
          ></li>
        </ul>
        <div v-if="section3" class="Paypal w-full h-fit flex-center">
          <Paypal v-show="isGlobalPage" class="mt-8 md:mt-16 text-cr-gray-darker" />
          <div v-show="!isGlobalPage" class="max-w-screen-lg mt-10 md:mt-20">
            <img :src="section3.media[0].url" :alt="section3.media[0].name" class="h-100" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
