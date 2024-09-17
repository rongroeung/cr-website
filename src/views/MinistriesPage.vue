<script>
import ContentSection from '@/components/ContentSection.vue'
export default {
  name: 'MinistriesPage',
  components: { ContentSection },
  data() {
    return {
      section1: null,
      section2: null,
      section3: null,
      section4: null
    }
  },
  async created() {
    this.section1 = await this.getContentById('06001001')
    this.section2 = await this.getContentById('06002001')
    this.section3 = await this.getContentById('06003001')
    this.section4 = await this.getContentById('06004001')
  }
}
</script>

<template>
  <section class="bg-cr-gray h-fit w-full flex-center flex-col">
    <div
      id="06001001"
      v-if="section1"
      class="image-header h-300-px w-full flex-center"
      :style="{ backgroundImage: `url(${section1.media[0].url})` }"
    >
      <p class="text-5xl">{{ section1.title }}</p>
    </div>
    <div class="content h-full text-black w-4/5">
      <div id="06002001" v-if="section2" class="my-20">
        <ContentSection :section="section2" />
      </div>
      <div id="06003001" v-if="section3" class="my-20">
        <ContentSection :section="section3" />
      </div>
      <div id="06004001" v-if="section4" class="my-20">
        <ContentSection :section="section4" />
      </div>
    </div>
  </section>
</template>

<script scoped></script>
