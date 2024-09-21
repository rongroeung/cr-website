
<script>
export default {
  name: 'SelectContentIds',
  data() {
    return {
      content_ids: [],
      selectedContentId: '01001001'
    }
  },
  computed: {
    websiteUrl() {
      return (
        this.$websitePreviewUrl +
        this.$content_ids_mapper[this.shortSelectedContentId] +
        '#' +
        this.selectedContentId
      )
      // $websitePreviewUrl = http://localhost:5173
      // $content_ids_mapper[this.shortSelectedContentId] = /mission/micro-enterprise-project/
      // selectedContentId = /#12001001
    },
    shortSelectedContentId() {
      return this.selectedContentId.slice(0, 2)
    },
    selectOptionsObject() {
      return this.content_ids.map((id) => ({
        id,
        text: this.$content_ids_mapper[id.slice(0, 2)]
      }))
      // $content_ids_mapper[id.slice(0, 2)] = 'mission/micro-enterprise-project/'
    }
  },
  methods: {
    emitValues() {
      // Emitting two values as an object
      this.$emit('update:values', {
        selectedContentId: this.selectedContentId,
        websiteUrl: this.websiteUrl
      })
    }
  },
  async created() {
    const response = await this.getAllContentId()
    this.content_ids = response.content_id
  },
  watch: {
    selectedContentId() {
      this.emitValues() // emit selectedContentId and websiteUrl when user select content
    }
  }
}
</script>


<template>
  <div class="SelectContentIds dropdown-form mt-8">
    <form class="max-w-sm mx-auto">
      <label for="contentId" class="block mb-2 text-sm font-medium">Select a section</label>
      <select
        v-model="selectedContentId"
        id="contentId"
        class="text-sm block w-full rounded p-2 text-black"
      >
        <template v-for="content in selectOptionsObject" :key="content.id">
          <option :value="content.id">{{ content.id }} - {{ content.text }}</option>
        </template>
      </select>
    </form>
  </div>
</template>

<style>
</style>