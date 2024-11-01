<script>
import TextInput from './TextInput.vue'
import MediaInput from './MediaInput.vue'
import YouTubeInput from './YouTubeInput.vue'
import DescriptionInput from './DescriptionInput.vue'

import { formatDateForBackend, formatDateForDisplay } from '@/util/mixin'
export default {
  name: 'AddNewContentForm',
  components: { TextInput, MediaInput, YouTubeInput, DescriptionInput },
  props: {
    // We get data model from parent because we need to display JSON format
    modelValue: Object
  },
  data() {
    return {
      disableSubmit: false,
      dateInput: null
    }
  },
  computed: {
    formData: {
      get() {
        return this.modelValue
      },
      set(formData) {
        this.$emit('update:modelValue', formData)
      }
    },
    getDate() {
      return this.dateInput == null ? 'Preview Date' : formatDateForDisplay(this.dateInput)
    }
  },
  methods: {
    async submitForm() {
      if (this.formData.id.length !== 8) {
        this.$toast.warning('Id should be 8 characters')
        return
      }
      this.disableSubmit = true
      await this.addNewContent(this.formData)
      this.disableSubmit = false
    },
    addNewDesc() {
      this.formData.description.push({ text: '', kh_text: '' })
    },
    removeDescription(id) {
      this.formData.description.splice(id, 1)
    },
    addNewMedia() {
      this.formData.media.push({ url: '', name: '', note: '' })
    },
    removeMedia(id) {
      this.formData.media.splice(id, 1)
    },
    addNewYoutube() {
      this.formData.youtube.push({
        title: '',
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
  },
  watch: {
    formData: {
      deep: true,
      immediate: true,
      handler(oldValue, newValue) {
        if (oldValue == newValue) return
        this.formData = this.modelValue
      }
    },
    dateInput(oldValue, newValue) {
      if (oldValue != newValue) {
        this.formData.create_time = formatDateForBackend(this.dateInput)
      }
    }
  }
}
</script>

<template>
  <div class="text-left p-4">
    <form @submit.prevent="submitForm" class="space-y-4">
      <TextInput id="id" label="Id" v-model="formData.id" :required="true" type="number" />
      <!-- Title -->
      <TextInput id="title" label="Title" v-model="formData.title" :required="true" />

      <!-- Title KH -->

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
        :remove-able="true"
        @remove="removeDescription"
      />
      <button
        type="button"
        @click="addNewDesc()"
        class="bg-green-500 text-cr-gray-light px-4 py-2 rounded w-full"
      >
        Add new description
      </button>

      <!-- Media -->
      <MediaInput
        v-if="formData.media.length"
        :media="formData.media"
        :remove-able="true"
        @remove="removeMedia"
      />
      <button
        type="button"
        @click="addNewMedia()"
        class="bg-green-500 text-cr-gray-light px-4 py-2 rounded w-full"
      >
        Add new media
      </button>

      <YouTubeInput
        v-if="formData.youtube.length"
        :youtube="formData.youtube"
        :remove-able="true"
        @remove="removeYoutube"
      />
      <button
        type="button"
        @click="addNewYoutube()"
        class="bg-green-500 text-cr-gray-light px-4 py-2 rounded w-full"
      >
        Add new youtube
      </button>
      <div class="w-full flex flex-col items-end">
        <p v-if="disableSubmit">Loading...</p>
        <button
          type="submit"
          :disabled="disableSubmit"
          :class="{ 'cursor-not-allowed opacity-50': disableSubmit }"
          class="bg-blue-500 w-full px-4 py-2 rounded ms-auto"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
textarea {
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
