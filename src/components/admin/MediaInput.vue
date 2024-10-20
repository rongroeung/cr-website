<template>
  <div class="media-input flex flex-col border-rounded-sub-primary">
    <label class="font-medium text-center text-2xl">Media</label>

    <div v-for="(mediaItem, index) in media" :key="index" class="mb-2 p-3">
      <b class="text-secondary">Media {{ index + 1 }}</b>
      <TextInput
        label="Url"
        v-model="mediaItem.url"
        placeholder="Media URL"
        :id="'media_url_' + index"
      />
      <TextInput
        label="Name"
        v-model="mediaItem.name"
        placeholder="Media Name"
        :id="'media_name_' + index"
      />
      <ImagePreview :src="mediaItem.url" :alt="mediaItem.name" class="mt-2" />
      <div class="w-full flex items-end my-4">
        <button
          v-if="removeAble"
          @click="$emit('remove', index)"
          type="button"
          class="bg-red-500 text-white px-4 py-2 rounded w-24 ms-auto"
        >
          Remove
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import TextInput from './TextInput.vue'
import ImagePreview from '../ImagePreview.vue'

export default {
  props: {
    media: {
      type: Array,
      required: true
    },
    removeAble: {
      type: Boolean,
      required: false
    }
  },
  components: {
    TextInput,
    ImagePreview
  }
}
</script>
