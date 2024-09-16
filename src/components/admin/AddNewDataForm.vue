<script>
export default {
  name: 'AddNewDataForm',
  props: {
    data: Object
  },
  methods: {
    async submitForm() {
      await this.addNewContent(this.data)
    },
    addNewDescription() {
      this.data.description.push({ text: '', kh_text: '' })
    },
    addNewMedia() {
      this.data.media.push({ url: '', name: '' })
    },
    addNewYoutube() {
      this.data.youtube.push({
        title: '',
        video_url: '',
        duration: '',
        publish_date: '',
        thumbnail_url: '',
        thumbnail_name: ''
      })
    }
  }
}
</script>

<template>
  <div class="text-left p-4">
    <form @submit.prevent="submitForm" class="space-y-4">
      <div class="flex flex-col">
        <label for="id" class="font-medium">Id</label>
        <input type="text" v-model="data.id" id="id" class="border rounded p-2" required />
      </div>
      <!-- Title -->
      <div class="flex flex-col">
        <label for="title" class="font-medium">Title</label>
        <input type="text" v-model="data.title" id="title" class="border rounded p-2" required />
      </div>
      <div class="flex flex-col">
        <label for="kh_title" class="font-medium">Title Kh</label>
        <input
          type="text"
          v-model="data.kh_title"
          id="kh_title"
          class="border rounded p-2"
          required
        />
      </div>

      <!-- Sub Title -->
      <div class="flex flex-col">
        <label for="sub_title" class="font-medium">Sub Title</label>
        <input type="text" v-model="data.sub_title" id="sub_title" class="border rounded p-2" />
      </div>
      <div class="flex flex-col">
        <label for="kh_sub_title" class="font-medium">Sub Title Kh</label>
        <input
          type="text"
          v-model="data.kh_sub_title"
          id="kh_sub_title"
          class="border rounded p-2"
        />
      </div>

      <!-- Description -->
      <div class="flex flex-col">
        <label class="font-medium">Description</label>
        <div v-for="(desc, index) in data.description" :key="index" class="flex flex-col mb-2">
          <div class="w-full flex-center mb-2">
            <p class="w-20">English</p>
            <textarea rows="3" v-model="desc.text" class="border rounded p-2 w-full"> </textarea>
          </div>
          <div class="w-full flex-center mb-2">
            <p class="w-20">Khmer</p>
            <textarea rows="3" v-model="desc.kh_text" class="border rounded p-2 w-full"> </textarea>
          </div>

          <button
            @click="data.description.splice(index, 1)"
            class="bg-red-500 text-white px-4 py-2 rounded w-24 ms-auto"
          >
            Remove
          </button>
        </div>
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
        <label class="font-medium text-secondary">Media</label>
        <div v-for="(mediaItem, index) in data.media" :key="index" class="flex flex-col mb-2">
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

          <button
            @click="data.media.splice(index, 1)"
            class="bg-red-500 text-white px-4 py-2 rounded mb-4 w-24 ms-auto"
          >
            Remove
          </button>
        </div>
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
        <div v-for="(youtubeItem, index) in data.youtube" :key="index" class="flex flex-col mb-2">
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
          <button
            @click="data.youtube.splice(index, 1)"
            class="bg-red-500 text-white px-4 py-2 rounded mb-4 w-24 ms-auto"
          >
            Remove
          </button>
        </div>
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
