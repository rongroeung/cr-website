
<script>
import DescriptionInput from './DescriptionInput.vue'
export default {
  name: 'AddNewDescriptionForm',
  components: { DescriptionInput },
  props: {
    contentId: String
  },
  data() {
    return {
      sectionTitle: null,
      formData: {
        id: this.contentId,
        description: [
          {
            text: '',
            kh_text: ''
          }
        ]
      }
    }
  },
  methods: {
    async submitForm() {
      await this.addNewDescription(this.formData)
    },
    addNewDesc() {
      this.formData.description.push({ text: '', kh_text: '' })
    },
    removeDescription(id) {
      this.formData.description.splice(id, 1)
    }
  },
  async created() {
    const response = await this.getContentById(this.contentId)
    this.sectionTitle = response.title
  }
}
</script>

<template>
  <div class="text-left p-4">
    <form @submit.prevent="submitForm" class="space-y-4">
      <p class="text-sm md:text-lg font-semibold">Title: {{ sectionTitle }}</p>
      <!-- Description -->
      <div class="flex flex-col">
        <label class="font-medium">Description</label>
        <DescriptionInput
          v-if="formData.description.length"
          :description="formData.description"
          :remove-able="true"
          @remove="removeDescription"
        />
        <button
          type="button"
          @click="addNewDesc()"
          class="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add new description
        </button>
      </div>

      <div class="w-full flex items-end">
        <button type="submit" class="bg-blue-500 text-white w-full px-4 py-2 rounded ms-auto">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>


<style>
</style>