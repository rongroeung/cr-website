<script>
import AddNewContentForm from '@/components/admin/AddNewContentForm.vue'
import { adminResizeIframeMixin } from '@/util/mixin'
export default {
  name: 'AddNewContent',
  components: { AddNewContentForm },
  mixins: [adminResizeIframeMixin],
  data() {
    return {
      data: {
        id: '',
        title: '',
        kh_title: '',
        sub_title: '',
        kh_sub_title: '',
        description: [],
        media: [],
        youtube: []
      }
    }
  },
  computed: {
    dynamicClass() {
      // Check if any description is long
      const hasLongDescription = this.data.description.some((content) => content.text.length > 100)
      return hasLongDescription ? 'mb-4' : 'mb-2'
    }
  }
}
</script>
<template>
  <section>
    <p class="text-2xl md:text-3xl text-center">Add new content</p>
    <div class="mx-auto flex flex-row text-center gap-4 h-screen min-h-90rem mt-12">
      <div class="h-full" :style="{ width: `${leftColumnWidth}%` }">
        <AddNewContentForm v-model="data" />
      </div>

      <!-- Divider Line -->
      <div class="resizer bg-primary w-2-px h-auto cursor-col-resize relative mx-2">
        <div @mousedown="startResizing" @touchstart="startResizing" class=""></div>

        <button
          class="resize-btn btn btn-danger bg-primary text-center"
          @mousedown="startResizing"
          @touchstart="startResizing"
        >
          <span>↔</span>
        </button>
      </div>

      <!-- Right Column -->
      <div class="text-cr-gray-light rounded-lg" :style="{ width: `${100 - leftColumnWidth}%` }">
        <p class="text-center text-black text-xl">Content preview</p>
        <div class="p-4 rounded-lg border-1">
          <p
            class="text-xl md:text-2xl xl:text-3xl font-bold text-cr-gray-darker mb-6 text-center md:text-left"
          >
            {{ data.title }}
          </p>
          <p
            class="text-xl md:text-2xl xl:text-3xl font-bold text-cr-gray-darker mb-6 text-center md:text-left"
          >
            {{ data.kh_title }}
          </p>
          <p class="text-sm leading-6 md:leading-8 md:text-lg mb-6 text-left text-cr-gray-darker">
            {{ data.sub_title }}
          </p>
          <p class="text-sm leading-6 md:leading-8 md:text-lg mb-6 text-left text-cr-gray-darker">
            {{ data.kh_sub_title }}
          </p>
          <div v-for="description in data.description" :key="description" :class="dynamicClass">
            <div
              class="text-sm leading-6 md:leading-8 md:text-lg text-cr-gray-darker text-left"
              v-html="description.text"
            ></div>
          </div>
          <div class="flex flex-row flex-wrap justify-center gap-4">
            <template v-for="(image, index) in data.media" :key="index">
              <img
                :src="image.url"
                :alt="image.name"
                class="w-full h-14.7rem md:h-25.25rem object-cover"
              />
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.resize-btn {
  top: -20px;
}
</style>
