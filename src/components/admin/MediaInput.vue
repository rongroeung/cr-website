<template>
  <div class="media-input">
    <div v-for="(mediaItem, index) in media" :key="index" class="flex flex-col mb-2">
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
      <button
        v-if="removeAble"
        @click="$emit('remove', index)"
        class="bg-red-500 text-white px-4 py-2 rounded my-4 w-24 ms-auto"
      >
        Remove
      </button>
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
