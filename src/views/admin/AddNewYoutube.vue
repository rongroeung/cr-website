<script>
import AddNewYoutubeForm from '@/components/admin/AddNewYoutubeForm.vue'
import SelectContentIds from '@/components/admin/SelectContentIds.vue'

import DynamicShadow from '@/components/admin/DynamicShadow.vue'
export default {
  name: 'AddNewYoutube',
  components: { AddNewYoutubeForm, SelectContentIds, DynamicShadow },
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
    <DynamicShadow text="Add new Youtube" />
    <SelectContentIds @update:values="handleSelectContentIds" />
    <ResizableContainer>
      <template #left_container>
        <AddNewYoutubeForm
          :contentId="selectedContentId"
          :key="selectedContentId"
          class="w-full h-full"
        />
      </template>
      <template #right_container>
        <div class="h-full bg-white rounded-lg">
          {{ websiteUrl }}
          <iframe :src="websiteUrl" title="description" width="100%" height="100%"></iframe>
        </div>
      </template>
    </ResizableContainer>
  </section>
</template>

<script scoped></script>
