<script>
export default {
  name: 'UpdateDataForm',
  data() {
    return {
      fetchedData: null,
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
    submitForm() {
      console.log(this.formData)
    }
  },
  async created() {
    this.fetchedData = await this.fetchData('01003001')
    this.formData = Object.assign(this.fetchedData)
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

      <!-- Sub Title -->
      <div v-if="formData.sub_title" class="flex flex-col">
        <label for="sub_title" class="font-medium">Sub Title</label>
        <input type="text" v-model="formData.sub_title" id="sub_title" class="border rounded p-2" />
      </div>

      <!-- Description -->
      <div v-if="formData.description.length" class="flex flex-col">
        <label class="font-medium">Description</label>
        <div v-for="(desc, index) in formData.description" :key="index" class="flex flex-col mb-2">
          <input
            type="text"
            v-model="formData.description[index].text"
            class="border rounded p-2 mb-2"
          />
        </div>
      </div>

      <!-- Media -->
      <div v-if="formData.media.length" class="flex flex-col">
        <label class="font-medium">Media</label>
        <div v-for="(mediaItem, index) in formData.media" :key="index" class="flex flex-col mb-2">
          <input
            type="text"
            v-model="formData.media[index].url"
            placeholder="Media URL"
            class="border rounded p-2 mb-2"
          />
          <input
            type="text"
            v-model="formData.media[index].name"
            placeholder="Media Name"
            class="border rounded p-2 mb-2"
          />
        </div>
      </div>

      <div v-if="formData.youtube.length" class="flex flex-col">
        <label class="font-medium">Youtube</label>
        <div v-for="(mediaItem, index) in formData.youtube" :key="index" class="flex flex-col mb-2">
          <input
            type="text"
            v-model="formData.youtube[index].title"
            placeholder="Youtube Title"
            class="border rounded p-2 mb-2"
          />
          <input
            type="text"
            v-model="formData.youtube[index].video_url"
            placeholder="Video Url"
            class="border rounded p-2 mb-2"
          />
          <input
            type="text"
            v-model="formData.youtube[index].duration"
            placeholder="Video Duration"
            class="border rounded p-2 mb-2"
          />
          <input
            type="text"
            v-model="formData.youtube[index].publish_date"
            placeholder="Video Publish Date"
            class="border rounded p-2 mb-2"
          />
          <input
            type="text"
            v-model="formData.youtube[index].thumbnail_url"
            placeholder="Thumnal Url"
            class="border rounded p-2 mb-2"
          />
          <input
            type="text"
            v-model="formData.youtube[index].thumbnail_name"
            placeholder="Thumbnail name"
            class="border rounded p-2 mb-2"
          />
        </div>
      </div>

      <button type="submit" class="bg-green-500 text-white px-4 py-2 rounded">Submit</button>
    </form>
  </div>
</template>

<style scoped>
label {
  color: white;
}
input {
  color: black;
}
</style>
