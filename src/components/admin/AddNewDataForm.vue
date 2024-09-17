<script>
import TextInput from './TextInput.vue'
import MediaInput from './MediaInput.vue'
import YouTubeInput from './YouTubeInput.vue'
import DescriptionInput from './DescriptionInput.vue'
export default {
  name: 'AddNewDataForm',
  components: { TextInput, MediaInput, YouTubeInput, DescriptionInput },
  props: {
    modelValue: Object
  },
  computed: {
    formData: {
      get() {
        return this.modelValue
      },
      set(formData) {
        this.$emit('update:modelValue', formData)
      }
    }
  },
  methods: {
    async submitForm() {
      await this.addNewContent(this.formData)
    },
    addNewDescription() {
      this.formData.description.push({ text: '', kh_text: '' })
    },
    removeDescription(id) {
      this.formData.description.splice(id, 1)
    },
    addNewMedia() {
      this.formData.media.push({ url: '', name: '' })
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
    }
  }
}
</script>

<template>
  <div class="text-left p-4">
    <form @submit.prevent="submitForm" class="space-y-4">
      <TextInput v-if="formData.id" id="id" label="Id" v-model="formData.id" :required="true" />
      <!-- Title -->
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
        v-if="formData.sub_title !== 'null'"
        id="sub_title"
        label="Sub Title"
        v-model="formData.sub_title"
      />
      <TextInput
        v-if="formData.kh_sub_title !== 'null'"
        id="kh_sub_title"
        label="Sub Title Kh"
        v-model="formData.kh_sub_title"
      />

      <!-- Description -->
      <div class="flex flex-col">
        <label class="font-medium text-primary">Description</label>
        <DescriptionInput
          v-if="formData.description.length"
          :description="formData.description"
          :remove-able="true"
          @remove="removeDescription"
        />
        <button
          type="button"
          @click="addNewDescription()"
          class="bg-green-500 text-white px-4 py-2 rounded mt-4"
        >
          Add new description
        </button>
      </div>

      <!-- Media -->
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

      <div class="flex flex-col">
        <label class="font-medium">Youtube</label>
        <YouTubeInput
          v-if="formData.youtube.length"
          :youtube="formData.youtube"
          :remove-able="true"
          @remove="removeYoutube"
        />
        <button
          type="button"
          @click="addNewYoutube()"
          class="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add new youtube
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

<style scoped>
label {
  color: var(--primary-color);
  font-size: medium;
  margin-bottom: 0.5rem;
}
input {
  color: black;
  background-color: var(--cr-gray);
}

textarea {
  color: black;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
