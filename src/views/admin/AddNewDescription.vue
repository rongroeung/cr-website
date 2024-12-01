<script>
import AddNewDescriptionForm from '@/components/admin/AddNewDescriptionForm.vue'
import SelectContentIds from '@/components/SelectContentIds.vue'
import DynamicShadow from '@/components/DynamicShadow.vue'
export default {
  name: 'AddNewDescription',
  components: { AddNewDescriptionForm, SelectContentIds, DynamicShadow },
  data() {
    // this data and methods must have in a parent component that use SelectContentIds
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
    <DynamicShadow text="Add new Description" />
    <SelectContentIds @update:values="handleSelectContentIds" />
    <ResizableContainer>
      <template #left_container>
        <AddNewDescriptionForm
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
