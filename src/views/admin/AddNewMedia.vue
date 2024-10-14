<script>
import AddNewMediaForm from '../../components/admin/AddNewMediaForm.vue'
import SelectContentIds from '../../components/SelectContentIds.vue'
import { adminResizeIframeMixin } from '@/util/mixin'
export default {
  name: 'AddNewMedia',
  components: { AddNewMediaForm, SelectContentIds },
  mixins: [adminResizeIframeMixin],
  data() {
    // this data (selectedContentId, websiteUrl )and methods (handleSelectContentIds) must have in a parent component that use SelectContentIds because we need to manage the data to form and iframe
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
    <p class="text-2xl md:text-3xl text-center">Add new Media to existing content</p>
    <SelectContentIds @update:values="handleSelectContentIds" />
    <div class="py-8 mx-auto flex text-center gap-4 h-screen max-h-90rem">
      <!-- Left Column -->
      <div class="h-full" :style="{ width: `${leftColumnWidth}%` }">
        <AddNewMediaForm
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

<script scoped></script>
