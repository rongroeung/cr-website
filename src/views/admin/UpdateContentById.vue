<script>
import UpdateDataForm from '../../components/admin/UpdateDataForm.vue'
import SelectContentIds from '@/components/SelectContentIds.vue'
import { adminResizeIframeMixin } from '@/util/mixin'
export default {
  name: 'UpdateContentById',
  components: { UpdateDataForm, SelectContentIds },
  mixins: [adminResizeIframeMixin],
  data() {
    // this data and methods must have in a parent component that use SelectContentIds because we need to manage the data to form and iframe
    return {
      selectedContentId: '01001001',
      websiteUrl: this.$websitePreviewUrl
    }
  },
  methods: {
    handleSelectContentIds(values) {
      this.selectedContentId = values.selectedContentId
      this.websiteUrl = values.websiteUrl
    }
  }
}
</script>

<template>
  <section>
    <p class="text-2xl md:text-3xl text-center">Update Content By Id</p>

    <SelectContentIds @update:values="handleSelectContentIds" />

    <div class="py-8 mx-auto flex text-center gap-4 h-full">
      <!-- Left Column -->
      <div class="h-full" :style="{ width: `${leftColumnWidth}%` }">
        <UpdateDataForm
          :contentId="selectedContentId"
          :key="selectedContentId"
          class="w-full h-full"
        />
      </div>
      <div class="resizer bg-primary w-2-px cursor-col-resize me-5">
        <button
          class="btn btn-danger bg-primary pe-4 py-2"
          @mousedown="startResizing"
          @touchstart="startResizing"
        >
          Hello
        </button>
        <!-- Divider Line -->
        <div @mousedown="startResizing" @touchstart="startResizing"></div>
      </div>

      <!-- Right Column -->
      <div class="bg-white rounded-lg" :style="{ width: `${100 - leftColumnWidth}%` }">
        {{ websiteUrl }}
        <iframe :src="websiteUrl" title="description" width="100%" height="100%"></iframe>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
