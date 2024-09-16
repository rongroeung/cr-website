<script>
export default {
  name: 'AboutPage',
  data() {
    return {
      data: null,
      section1: null,
      section2: null,
      section3: null,
      section4: null
    }
  },
  async created() {
    this.section1 = await this.getContentById('02001001')
    this.section2 = await this.getContentById('02002001')
    this.section3 = await this.getContentById('02003001')
    this.section4 = await this.getContentById('02004001')
  }
}
</script>

<template>
  <section id="about-page" class="bg-white h-fit w-full flex-center flex-col">
    <div
      id="02001001"
      v-if="section1"
      class="image-header h-300-px w-full flex-center"
      :style="{ backgroundImage: `url(${section1.media[0].url})` }"
    >
      <p class="text-5xl">{{ section1.title }}</p>
    </div>
    <div class="about-content text-gray-600 flex-center flex-col">
      <div id="02002001" v-if="section2" class="my-20 w-4/5">
        <p class="text-3xl font-bold text-gray-800 mb-6">{{ section2.title }}</p>
        <template v-for="content in section2.description" :key="content.id">
          <div class="text-sm md:text-lg leading-6 sm:leading-8 mb-6">{{ content.text }}</div>
        </template>
      </div>
      <div id="02003001" v-if="section3" class="bg-cr-gray flex-center">
        <div class="w-4/5 my-20">
          <p class="text-3xl font-bold text-gray-800 mb-6">{{ section3.title }}</p>
          <template v-for="content in section3.description" :key="content.id">
            <div class="text-sm md:text-lg leading-6 sm:leading-8 mb-6">{{ content.text }}</div>
          </template>
        </div>
      </div>
      <div id="02004001" v-if="section4" class="w-4/5 my-20">
        <p class="text-3xl font-bold text-gray-800 mb-6">{{ section4.title }}</p>
        <ul class="list-disc m-2 flex justify-center flex-wrap gap-6">
          <template v-for="content in section4.description" :key="content.id">
            <li class="text-sm md:text-lg leading-6 sm:leading-8 h-fit w-full sm:w-2/5">
              {{ content.text }}
            </li>
          </template>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
