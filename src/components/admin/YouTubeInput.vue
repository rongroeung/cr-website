<template>
  <div class="youtube-input">
    <div v-for="(youtubeItem, index) in youtube" :key="index" class="flex flex-col mb-2">
      <b class="text-secondary">Youtube {{ index + 1 }}</b>

      <TextInput id="title" label="Title" v-model="youtubeItem.title" :required="true" />

      <!-- Title KH -->
      <TextInput id="kh_title" label="Title Kh" v-model="youtubeItem.kh_title" :required="true" />

      <!-- Video URL -->
      <TextInput
        id="video_url"
        label="Video URL"
        v-model="youtubeItem.video_url"
        :required="true"
      />

      <!-- Video Duration -->
      <TextInput
        id="duration"
        label="Video Duration"
        v-model="youtubeItem.duration"
        :required="true"
      />

      <!-- Video Publish Date -->
      <TextInput
        id="publish_date"
        label="Video Publish Date"
        v-model="youtubeItem.publish_date"
        :required="true"
      />

      <!-- Video Thumbnail Url -->
      <TextInput
        id="thumbnail_url"
        label="Video Thumbnail Url"
        v-model="youtubeItem.thumbnail_url"
        :required="true"
      />

      <!-- Video Thumbnail Describe -->
      <TextInput
        id="thumbnail_name"
        label="Video Thumbnail Describe"
        v-model="youtubeItem.thumbnail_name"
        :required="true"
      />
      <ImagePreview
        :src="youtubeItem.thumbnail_url"
        :alt="youtubeItem.thumbnail_name"
        class="mt-2"
      />
      <button
        v-if="removeAble"
        @click="$emit('remove', index)"
        type="button"
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
    youtube: {
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
