<script>
import AddNewMediaForm from '../../components/admin/AddNewMediaForm.vue'
export default {
  name: 'AddNewMedia',
  components: { AddNewMediaForm },
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
    <p class="text-2xl md:text-3xl text-center">Add new Media to existing content</p>

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
    <div class="py-8 px-8 mx-auto flex flex-col md:flex-row text-center gap-8">
      <AddNewMediaForm
        :contentId="selectedContentId"
        :key="selectedContentId"
        class="w-full md:w-1/2 h-full"
      />
      <div class="w-full md:w-1/2 h-75rem bg-white rounded-lg">
        {{ websiteUrl }}
        <iframe :src="websiteUrl" title="description" width="100%" height="100%"></iframe>
      </div>
    </div>
  </section>
</template>

<script scoped></script>
