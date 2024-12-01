<script>
import DynamicShadow from '@/components/DynamicShadow.vue'
import UpdateDataForm from '@/components/admin/UpdateDataForm.vue'
import SelectContentIds from '@/components/SelectContentIds.vue'
export default {
  name: 'UpdateContentById',
  components: { UpdateDataForm, SelectContentIds, DynamicShadow },
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
    <DynamicShadow text="Update Content" />

    <SelectContentIds @update:values="handleSelectContentIds" />

    <ResizableContainer>
      <template #left_container>
        <UpdateDataForm
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

<style scoped>
</style>
