<script>
import TextInput from './TextInput.vue'
import TextareaInput from './TextareaInput.vue'
import MediaInput from './MediaInput.vue'
import YouTubeInput from './YouTubeInput.vue'
export default {
  name: 'UpdateDataForm',
  components: { TextInput, TextareaInput, MediaInput, YouTubeInput },
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
  <div class="text-left p-4">
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
      <div v-if="formData.description.length" class="flex flex-col">
        <label class="font-medium text-primary">Description</label>
        <div v-for="(desc, index) in formData.description" :key="index" class="flex flex-col mb-2">
          <TextareaInput v-if="desc.text" id="description" label="English" v-model="desc.text" />
          <TextareaInput
            v-if="desc.kh_text"
            id="kh_description"
            label="Khmer"
            v-model="desc.kh_text"
          />
        </div>
      </div>

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
