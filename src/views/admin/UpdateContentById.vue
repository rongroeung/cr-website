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

    <div class="py-8 mx-auto flex flex-row text-center gap-4 h-screen min-h-90rem mt-6">
      <!-- Left Column -->
      <div class="h-full" :style="{ width: `${leftColumnWidth}%` }">
        <UpdateDataForm
          :contentId="selectedContentId"
          :key="selectedContentId"
          class="w-full h-full"
        />
      </div>
      <div class="resizer bg-primary w-2-px h-auto cursor-col-resize relative mx-2">
        <!-- Divider Line -->
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
      <div class="bg-white rounded-lg" :style="{ width: `${100 - leftColumnWidth}%` }">
        {{ websiteUrl }}
        <iframe :src="websiteUrl" title="description" width="100%" height="100%"></iframe>
      </div>
    </div>
  </section>
</template>

<style scoped>
.resize-btn {
  position: absolute;
  right: -20px;
  top: -45px;
  width: 45px;
  height: 45px;
  font-size: 18px;
  border: none;
  background-color: var(--primary-color);
  color: white;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s ease;
  text-align: center;
}
</style>
