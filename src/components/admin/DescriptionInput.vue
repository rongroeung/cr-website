<template>
  <div class="description-input flex flex-col w-full">
    <label class="font-medium text-center text-2xl">Description</label>
    <div v-for="(desc, index) in description" :key="index" class="flex flex-col mb-2">
      <b class="text-secondary">Description {{ index + 1 }}</b>
      <TextareaInput label="English" v-model="desc.text" :id="'description' + index" />
      <TextareaInput label="Khmer" v-model="desc.kh_text" :id="'kh_description' + index" />
      <button
        v-if="removeAble"
        type="button"
        @click="$emit('remove', index)"
        class="bg-red-500 text-cr-gray-light px-4 py-2 rounded my-4 w-24 ms-auto"
      >
        Remove
      </button>
      <button
        v-if="removeInApi"
        type="button"
        @click="removeDescFromContent(desc.id)"
        class="bg-red-500 text-cr-gray-light px-4 py-2 rounded my-4 min-w-50 h-10 ms-auto flex-center"
      >
        <Loader v-if="isLoading" />
        <span v-else>Remove from Content</span>
      </button>
    </div>
  </div>
</template>

<script>
import Loader from '../Loader.vue'
import TextareaInput from './TextareaInput.vue'
export default {
  props: {
    contentId: {
      type: String
    },
    description: {
      type: Array,
      required: true
    },
    removeAble: {
      type: Boolean,
      required: false
    },
    removeInApi: {
      type: Boolean,
      required: false
    }
  },
  components: {
    TextareaInput,
    Loader
  },
  data() {
    return {
      isLoading: false
    }
  },
  methods: {
    async removeDescFromContent(descId) {
      this.isLoading = true
      const response = await this.removeDescriptionFromContentApi(descId, this.contentId)
      if (response) {
        this.isLoading = false
      }
    }
  }
}
</script>
