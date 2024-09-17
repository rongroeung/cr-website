<template>
  <div class="youtube-input">
    <div v-for="(youtubeItem, index) in youtube" :key="index" class="flex flex-col mb-2">
      <TextInput
        label="Title"
        v-model="youtubeItem.title"
        placeholder="YouTube Title"
        :id="'youtube_title_' + index"
      />
      <TextInput
        label="Video Link"
        v-model="youtubeItem.video_url"
        placeholder="Video URL"
        :id="'youtube_video_url_' + index"
      />
      <TextInput
        label="Duration"
        v-model="youtubeItem.duration"
        placeholder="Video Duration"
        :id="'youtube_duration_' + index"
      />
      <TextInput
        label="Publish Date"
        v-model="youtubeItem.publish_date"
        placeholder="Publish Date"
        :id="'youtube_publish_date_' + index"
      />
      <TextInput
        label="Thumbnail URL"
        v-model="youtubeItem.thumbnail_url"
        placeholder="Thumbnail URL"
        :id="'youtube_thumbnail_url_' + index"
      />
      <TextInput
        label="Thumbnail Name"
        v-model="youtubeItem.thumbnail_name"
        placeholder="Thumbnail Name"
        :id="'youtube_thumbnail_name_' + index"
      />
      <ImagePreview
        :src="youtubeItem.thumbnail_url"
        :alt="youtubeItem.thumbnail_name"
        class="mt-2"
      />
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
