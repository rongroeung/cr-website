<script>
import MediaInput from './MediaInput.vue'
export default {
  name: 'AddNewMediaForm',
  components: { MediaInput },
  props: {
    contentId: String
  },
  data() {
    return {
      disableSubmit: false,
      sectionTitle: null,
      formData: {
        id: this.contentId,
        media: [
          {
            url: '',
            name: ''
          }
        ]
      }
    }
  },
  methods: {
    async submitForm() {
      this.disableSubmit = true
      await this.addNewMediaApi(this.formData)
      this.disableSubmit = false
    },
    addNewMedia() {
      this.formData.media.push({ url: '', name: '' })
    },
    removeMedia(id) {
      this.formData.media.splice(id, 1)
    }
  },
  async created() {
    const response = await this.getContentById(this.contentId)
    this.sectionTitle = response.title
  }
}
</script>

<template>
  <div class="text-left">
    <form @submit.prevent="submitForm" class="space-y-4">
      <p class="text-sm md:text-lg font-semibold">Title: {{ sectionTitle }}</p>
      <!-- Description -->
      <div class="flex flex-col">
        <label class="font-medium">Media</label>
        <MediaInput
          v-if="formData.media.length"
          :media="formData.media"
          :remove-able="true"
          @remove="removeMedia"
        />
        <button
          type="button"
          @click="addNewMedia()"
          class="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add new media
        </button>
      </div>

      <div class="w-full flex flex-col items-end">
        <p v-if="disableSubmit">Loading...</p>
        <button
          type="submit"
          :disabled="disableSubmit"
          :class="{ 'cursor-not-allowed opacity-50': disableSubmit }"
          class="bg-blue-500 text-white w-full px-4 py-2 rounded ms-auto"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<style></style>
