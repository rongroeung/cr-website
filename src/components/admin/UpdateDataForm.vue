<script>
import TextInput from './TextInput.vue'
import TextareaInput from './TextareaInput.vue'
import MediaInput from './MediaInput.vue'
import YouTubeInput from './YouTubeInput.vue'
import DescriptionInput from './DescriptionInput.vue'
export default {
  name: 'UpdateDataForm',
  components: { TextInput, TextareaInput, MediaInput, YouTubeInput, DescriptionInput },
  props: {
    contentId: String
  },
  data() {
    return {
      disableSubmit: false,
      formData: {
        id: '',
        title: '',
        sub_title: '',
        description: [],
        media: [],
        youtube: []
      }
    }
  },
  methods: {
    async submitForm() {
      this.disableSubmit = true
      await this.updateContentById(this.formData)
      this.disableSubmit = false
    },
    async getData() {
      this.formData = await this.getContentAllLangById(this.contentId)
    },
    isEmpty(data) {
      return data || data == 'null'
    }
  },
  async created() {
    this.getData()
  }
}
</script>

<template>
  <div class="text-left">
    <form @submit.prevent="submitForm" class="space-y-4">
      <!-- Title -->
      <TextInput
        v-if="formData.title"
        id="title"
        label="Title"
        v-model="formData.title"
        :required="true"
      />

      <TextInput
        v-if="formData.kh_title"
        id="kh_title"
        label="Title Kh"
        v-model="formData.kh_title"
        :required="true"
      />

      <!-- Sub Title -->
      <TextInput
        v-if="isEmpty(formData.sub_title)"
        id="sub_title"
        label="Sub Title"
        v-model="formData.sub_title"
      />
      <TextInput
        v-if="isEmpty(formData.kh_sub_title)"
        id="kh_sub_title"
        label="Sub Title Kh"
        v-model="formData.kh_sub_title"
      />

      <!-- Description -->
      <DescriptionInput
        v-if="formData.description.length"
        :description="formData.description"
        :remove-able="false"
      />

      <!-- Media -->
      <MediaInput v-if="formData.media.length" :media="formData.media" />

      <!-- YouTube -->
      <YouTubeInput v-if="formData.youtube.length" :youtube="formData.youtube" />

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

<style scoped></style>
