<script>
import UpdateDataForm from '@/components/admin/UpdateDataForm.vue'
export default {
  name: 'AdminPage',
  components: { UpdateDataForm },
  data() {
    return {
      contentIds: [
        '01001001',
        '01002001',
        '01003001',
        '01003002',
        '01003003',
        '01003004',
        '01004001',
        '01004002',
        '01005001',
        '01006001',
        '01006002',
        '01006003',
        '01007001'
      ],
      contentIdsMapper: {
        '01001001': 'home_carousel',
        '01002001': 'discipleship_journey',
        '01003001': '01003001',
        '01003002': '01003002',
        '01003003': '01003003',
        '01003004': '01003004',
        '01004001': 'certificate-in-ministry-leadership',
        '01004002': 'worship-ministry',
        '01005001': 'sunday_sermons',
        '01006001': '01006001',
        '01006002': '01006002',
        '01006003': '01006003',
        '01007001': '01007001'
      },
      selectedContentId: '01001001',
      // baseUrl: 'http://localhost:5173/'
      baseUrl: 'https://crossroadscambodia.church/'
    }
  },
  computed: {
    getSelectedContentId() {
      return this.selectedContentId
    },
    websiteUrl() {
      return this.baseUrl + '#' + this.contentIdsMapper[this.selectedContentId]
    }
  }
}
</script>

<template>
  <section class="bg-secondary">
    <div class="dropdown-form mt-8">
      <form class="max-w-sm mx-auto">
        <label for="contentId" class="block mb-2 text-sm font-medium text-cr-gray"
          >Select an section</label
        >
        <select
          v-model="selectedContentId"
          id="contentId"
          class="text-sm block w-full rounded p-2 text-black"
        >
          <template v-for="contentId in this.contentIds" :key="contentId.id">
            <option :value="contentId">{{ contentId }}</option>
          </template>
        </select>
      </form>
    </div>
    <div class="py-8 px-4 mx-auto max-w-screen-xl flex flex-col md:flex-row text-center">
      <UpdateDataForm
        :contentId="getSelectedContentId"
        :key="selectedContentId"
        class="w-full md:w-1/2 h-full"
      />
      <div class="w-full md:w-1/2 bg-white text-black h-screen">
        {{ websiteUrl }}
        <iframe :src="websiteUrl" title="description" width="100%" height="100%"></iframe>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
