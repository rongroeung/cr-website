<script>
import YoutubeInput from './YouTubeInput.vue'
export default {
  name: 'AddNewYoutubeForm',
  components: { YoutubeInput },
  props: {
    contentId: String
  },
  data() {
    return {
      disableSubmit: false,
      sectionTitle: null,
      formData: {
        id: this.contentId,
        youtube: [
          {
            title: '',
            kh_title: '',
            video_url: '',
            duration: '',
            publish_date: '',
            thumbnail_url: '',
            thumbnail_name: ''
          }
        ]
      }
    }
  },

  async created() {
    const response = await this.getContentById(this.contentId)
    this.sectionTitle = response.title
  },
  methods: {
    async submitForm() {
      this.disableSubmit = true
      await this.addNewYoutubeApi(this.formData)
      this.disableSubmit = false
    },
    addNewYoutubeObject() {
      this.formData.youtube.push({
        title: '',
        kh_title: '',
        video_url: '',
        duration: '',
        publish_date: '',
        thumbnail_url: '',
        thumbnail_name: ''
      })
    },
    removeYoutube(id) {
      this.formData.youtube.splice(id, 1)
    }
  }
}
</script>

<template>
  <div class="text-left">
    <form @submit.prevent="submitForm" class="space-y-4">
      <p class="text-sm md:text-lg font-semibold">Title: {{ sectionTitle }}</p>

      <YoutubeInput
        v-if="formData.youtube.length"
        :youtube="formData.youtube"
        :remove-able="true"
        @remove="removeYoutube"
      />
      <button
        type="button"
        @click="addNewYoutubeObject()"
        class="bg-green-500 w-full text-white px-4 py-2 rounded"
      >
        Add new youtube
      </button>

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
