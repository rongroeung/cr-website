<script>
import { windowResizeMixin } from '@/util/mixin'
import PageHeader from '@/components/PageHeader.vue'
export default {
  name: 'MilestonePage',
  components: { PageHeader },
  mixins: [windowResizeMixin],
  data() {
    return {
      section1: null,
      section2: []
    }
  },
  async created() {
    this.section1 = await this.getContentById('05001001')

    // Fetch all content IDs
    const response = await this.getAllContentId()
    const allContentIds = response.content_id

    const milestoneSectionIds = this.filterContentStartWithId(allContentIds, '05002')
    this.section2 = await this.fetchContentByIds(milestoneSectionIds)
  },
  computed: {
    cssBefore() {
      return this.width < 768 ? 'card-wrapper' : 'card-wrapper-right' // width data in mixin
    }
  },
  methods: {
    filterContentStartWithId(allIds, sectionPrefix) {
      return allIds.filter((id) => id.startsWith(sectionPrefix))
    },
    async fetchContentByIds(ids) {
      let contents = []
      for (let id of ids) {
        let content = await this.getContentById(id)
        if (content) {
          contents.push(content)
        }
      }
      return contents
    }
  }
}
</script>

<template>
  <section class="bg-secondary h-fit w-full flex-center flex-col">
    <div id="05001001" v-if="section1" class="w-full">
      <PageHeader :section="section1" />
    </div>
    <div class="content w-4/5 flex-center my-20">
      <div
        class="space-y-8 relative before:absolute before:inset-0 before:ml-8 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent"
      >
        <template v-for="(section, index) in section2" :key="section.id">
          <div
            :id="section.id"
            class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group text-white font-semibold"
          >
            <!-- Icon for year -->
            <div
              class="flex items-center justify-center w-16 h-16 rounded-full border border-white bg-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"
            >
              {{ section.title }}
            </div>
            <!-- Card -->
            <div
              :class="index % 2 == 0 ? 'card-wrapper' : cssBefore"
              class="w-[calc(100%-6rem)] md:w-[calc(50%-4rem)] bg-white p-4 rounded border border-slate-200 text-black shadow"
            >
              <div class="flex-center flex-col mb-1">
                <img
                  loading="lazy"
                  class="w-auto h-auto rounded mb-4"
                  :src="section.media[0].url"
                  :alt="section.media[0].name"
                />
                <div class="font-bold text-black text-start">
                  {{ section.sub_title }}
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card-wrapper {
  position: relative;
  z-index: 1;
}
.card-wrapper:before {
  content: ' ';
  z-index: -1;
  position: absolute;
  background: white;
  width: 30px;
  height: 30px;
  top: calc(50% - 15px);
  margin-left: -30px;
  transform: rotate(45deg);
}
.card-wrapper-right {
  position: relative;
  z-index: 1;
}
.card-wrapper-right:after {
  content: ' ';
  z-index: -1;
  position: absolute;
  background: white;
  width: 30px;
  height: 30px;
  top: calc(50% - 15px);
  right: 0;
  margin-right: -15px;
  transform: rotate(45deg);
}
</style>
