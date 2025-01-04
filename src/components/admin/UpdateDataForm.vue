<script>
import TextInput from '@/components/form/TextInput.vue'
import MediaInput from '@/components/form/MediaInput.vue'
import YouTubeInput from '@/components/form/YouTubeInput.vue'
import DescriptionInput from '@/components/form/DescriptionInput.vue'
import {
  formatDateForBackend,
  formatDateForDateInput,
  formatDateForDisplay
} from '@/util/dateFormatUtils.js'
export default {
  name: 'UpdateDataForm',
  components: { TextInput, MediaInput, YouTubeInput, DescriptionInput },
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
        create_time: '',
        description: [],
        media: [],
        youtube: []
      },
      dateInput: null
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
      if (this.formData.create_time != null) {
        this.dateInput = formatDateForDateInput(this.formData.create_time)
      }
    }
  },
  computed: {
    getDate() {
      return this.dateInput == null
        ? 'Preview Date'
        : formatDateForDisplay(this.formData.create_time)
    }
  },
  watch: {
    dateInput(oldValue, newValue) {
      if (oldValue != newValue) {
        this.formData.create_time = formatDateForBackend(this.dateInput)
      }
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
      <TextInput id="title" label="Title" v-model="formData.title" :required="true" />

      <TextInput id="kh_title" label="Title Kh" v-model="formData.kh_title" :required="true" />

      <!-- Sub Title -->
      <TextInput id="sub_title" label="Sub Title" v-model="formData.sub_title" />
      <TextInput id="kh_sub_title" label="Sub Title Kh" v-model="formData.kh_sub_title" />

      <!-- Create Time -->
      <div class="flex flex-col mb-4">
        <label for="create_time" class="font-medium mb-2">Date of News / Event</label>
        <input
          type="datetime-local"
          id="create_time"
          v-model="dateInput"
          class="border rounded p-2"
        />
        <p
          class="h-45-px border bg-white rounded mt-2 ps-2 flex items-center"
          :class="{ 'opacity-50': !dateInput }"
        >
          {{ getDate }}
        </p>
      </div>

      <!-- Description -->
      <DescriptionInput
        v-if="formData.description.length"
        :description="formData.description"
        :remove-able="false"
        :contentId="contentId"
        :remove-in-api="true"
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
          class="bg-blue-500 w-full px-4 py-2 rounded ms-auto mb-10"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
