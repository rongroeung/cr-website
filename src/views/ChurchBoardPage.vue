<script>
import PageHeader from '@/components/PageHeader.vue'
export default {
  name: 'ChurchBoardPage',
  components: { PageHeader },
  data() {
    return {
      section1: null,
      section2: null,
      section2item2: null,
      section3: null
    }
  },
  async created() {
    this.section1 = await this.getContentById('03001001')
    this.section2 = await this.getContentById('03002001')
    this.section2item2 = await this.getContentById('03002002')
    this.section3 = await this.getContentById('03003001')
  },
  methods: {
    header(description) {
      return description.split(':')[0]
    },
    text(description) {
      return description.split(':')[1]
    }
  }
}
</script>

<template>
  <section id="church_board" class="h-fit w-full flex-center flex-col bg-cr-gray text-black">
    <div id="03001001" v-if="section1" class="w-full">
      <PageHeader :section="section1" />
    </div>
    <div class="content w-4/5 mx-auto my-20">
      <div v-if="section2" id="03002001">
        <p class="text-secondary text-2xl md:text-4xl xl:text-5xl text-center mb-2 font-normal">
          {{ section2.title }}
        </p>
        <p class="text-sm leading-6 md:leading-8 md:text-lg my-8 text-left">
          {{ section2.sub_title }}
        </p>
      </div>
      <div v-if="section2item2" id="03002002">
        <p class="text-sm leading-6 md:leading-8 md:text-lg my-8 text-left">
          {{ section2item2.title }}
        </p>

        <div class="p-4 pt-0">
          <ul class="list-disc m-2 font-normal">
            <template v-for="description in section2item2.description" :key="description">
              <li class="text-sm leading-6 md:leading-8 md:text-lg my-1">
                <b>{{ header(description.text) }}:</b>{{ text(description.text) }}
              </li>
            </template>
          </ul>
        </div>
      </div>

      <div v-if="section3" id="03003001">
        <div class="flex-center flex-col">
          <img
            loading="lazy"
            :src="section3.media[0].url"
            :alt="section3.media[0].name"
            class="w-4/5"
          />
          <p class="text-sm leading-6 my-2">
            {{ section3.title }}
          </p>
        </div>
        <div class="p-4 pt-0">
          <ul class="list-disc m-2 italic">
            <template v-for="description in section3.description" :key="description">
              <li class="text-sm leading-6 md:leading-8 md:text-lg my-1">
                {{ description.text }}
              </li>
            </template>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script scoped></script>
