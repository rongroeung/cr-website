<script>
import UpdateDataForm from '../../components/admin/UpdateDataForm.vue'
import { adminResizeIframeMixin } from '@/util/mixin'
export default {
  name: 'UpdateContentById',
  components: { UpdateDataForm },
  mixins: [adminResizeIframeMixin],
  data() {
    return {
      content_ids: [],
      selectedContentId: '01001001'
    }
  },
  computed: {
    websiteUrl() {
      return (
        this.$websitePreviewUrl +
        this.$content_ids_mapper[this.pageId] +
        '#' +
        this.selectedContentId
      )
      //http://localhost:5173/about/#02001001
    },
    pageId() {
      return this.selectedContentId.slice(0, 2)
    }
  },
  async created() {
    const response = await this.getAllContentId()
    this.content_ids = response.content_id
  }
}
</script>

<template>
  <section>
    <p class="text-2xl md:text-3xl text-center">Update Content By Id</p>

    <div class="dropdown-form mt-8">
      <form class="max-w-sm mx-auto">
        <label for="contentId" class="block mb-2 text-sm font-medium">Select a section</label>
        <select
          v-model="selectedContentId"
          id="contentId"
          class="text-sm block w-full rounded p-2 text-black"
        >
          <template v-for="contentId in this.content_ids" :key="contentId.id">
            <option :value="contentId">{{ contentId }}</option>
          </template>
        </select>
      </form>
    </div>
    <div class="py-8 mx-auto flex text-center gap-4 h-full">
      <!-- Left Column -->
      <div class="h-full" :style="{ width: `${leftColumnWidth}%` }">
        <UpdateDataForm
          :contentId="selectedContentId"
          :key="selectedContentId"
          class="w-full h-full"
        />
      </div>

      <!-- Divider Line -->
      <div class="resizer bg-primary w-2-px cursor-col-resize" @mousedown="startResizing"></div>

      <!-- Right Column -->
      <div class="bg-white rounded-lg" :style="{ width: `${100 - leftColumnWidth}%` }">
        {{ websiteUrl }}
        <iframe :src="websiteUrl" title="description" width="100%" height="100%"></iframe>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
