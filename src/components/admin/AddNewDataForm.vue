<script>
export default {
  name: 'AddNewDataForm',
  props: {
    contentId: String
  },
  data() {
    return {
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
      await this.updateContentById(this.formData)
    },
    async getData() {
      this.formData = await this.getContentAllLangById(this.contentId)
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
      <div v-if="formData.title" class="flex flex-col">
        <label for="title" class="font-medium">Title</label>
        <input
          type="text"
          v-model="formData.title"
          id="title"
          class="border rounded p-2"
          required
        />
      </div>
      <div v-if="formData.kh_title" class="flex flex-col">
        <label for="kh_title" class="font-medium">Title Kh</label>
        <input
          type="text"
          v-model="formData.kh_title"
          id="kh_title"
          class="border rounded p-2"
          required
        />
      </div>

      <!-- Sub Title -->
      <div v-if="formData.sub_title" class="flex flex-col">
        <label for="sub_title" class="font-medium">Sub Title</label>
        <input type="text" v-model="formData.sub_title" id="sub_title" class="border rounded p-2" />
      </div>
      <div v-if="formData.kh_sub_title" class="flex flex-col">
        <label for="kh_sub_title" class="font-medium">Sub Title Kh</label>
        <input
          type="text"
          v-model="formData.kh_sub_title"
          id="kh_sub_title"
          class="border rounded p-2"
        />
      </div>

      <!-- Description -->
      <div v-if="formData.description.length" class="flex flex-col">
        <label class="font-medium">Description</label>
        <div v-for="(desc, index) in formData.description" :key="index" class="flex flex-col mb-2">
          <div class="w-full flex-center mb-2">
            <p class="w-20">English</p>
            <input type="text" v-model="desc.text" class="border rounded p-2 w-full" />
          </div>
          <div class="w-full flex-center mb-2">
            <p class="w-20">Khmer</p>
            <input type="text" v-model="desc.kh_text" class="border rounded p-2 w-full" />
          </div>
        </div>
      </div>

      <!-- Media -->
      <div v-if="formData.media.length" class="flex flex-col">
        <label class="font-medium text-secondary">Media</label>
        <div v-for="(mediaItem, index) in formData.media" :key="index" class="flex flex-col mb-2">
          <div class="w-full flex-center mb-2">
            <p class="w-20">Url</p>
            <input
              type="text"
              v-model="mediaItem.url"
              placeholder="Media URL"
              class="border rounded p-2 w-full"
            />
          </div>
          <div class="w-full flex-center mb-2">
            <p class="w-20">Name</p>
            <input
              type="text"
              v-model="mediaItem.name"
              placeholder="Media Name"
              class="border rounded p-2 w-full"
            />
          </div>

          <ImagePreview :src="mediaItem.url" :alt="mediaItem.name" />
        </div>
      </div>

      <div v-if="formData.youtube.length" class="flex flex-col">
        <label class="font-medium">Youtube</label>
        <div
          v-for="(youtubeItem, index) in formData.youtube"
          :key="index"
          class="flex flex-col mb-2"
        >
          <!-- Title -->
          <div class="w-full flex-center mb-2">
            <p class="w-44">Title</p>
            <input
              type="text"
              v-model="youtubeItem.title"
              placeholder="Youtube Title"
              class="border rounded p-2 w-full w-full"
            />
          </div>
          <!-- Video Link -->
          <div class="w-full flex-center mb-2">
            <p class="w-44">Video Link</p>
            <input
              type="text"
              v-model="youtubeItem.video_url"
              placeholder="Video Url"
              class="border rounded p-2 w-full"
            />
          </div>
          <!-- Duration -->
          <div class="w-full flex-center mb-2">
            <p class="w-44">Duration</p>
            <input
              type="text"
              v-model="youtubeItem.duration"
              placeholder="Video Duration"
              class="border rounded p-2 w-full"
            />
          </div>
          <!-- Publish Date -->
          <div class="w-full flex-center mb-2">
            <p class="w-44">Publish Date</p>
            <input
              type="text"
              v-model="youtubeItem.publish_date"
              placeholder="Video Publish Date"
              class="border rounded p-2 w-full"
            />
          </div>
          <!-- Thumbnail Url -->
          <div class="w-full flex-center mb-2">
            <p class="w-44">Thumbnail Url</p>
            <input
              type="text"
              v-model="youtubeItem.thumbnail_url"
              placeholder="Thumbnail Url"
              class="border rounded p-2 w-full"
            />
          </div>
          <!-- Thumbnail Name -->
          <div class="w-full flex-center mb-2">
            <p class="w-44">Thumbnail Name</p>
            <input
              type="text"
              v-model="youtubeItem.thumbnail_name"
              placeholder="Thumbnail name"
              class="border rounded p-2 w-full"
            />
          </div>
          <ImagePreview :src="youtubeItem.thumbnail_url" :alt="youtubeItem.thumbnail_name" />
        </div>
      </div>
      <div class="w-full flex items-end">
        <button type="submit" class="bg-green-500 text-white w-full px-4 py-2 rounded ms-auto">
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
</style>
