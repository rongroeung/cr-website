<script>
import ContactItem from '@/components/ContactItem.vue'
import VolunteerForm from '@/components/VolunteerForm.vue'
export default {
  name: 'VolunteerPage',
  components: { ContactItem, VolunteerForm },
  data() {
    return {
      section1: null,
      section2: null,
      section3: null,
      section4: null
    }
  },
  async created() {
    this.section1 = await this.getContentById('18001001')
    this.section2 = await this.getContentById('18002001')
    this.section4 = await this.getContentById('18004001')

    // Fetch all content IDs
    this.section3 = await this.getAllContentStartByIds('18003')
  }
}
</script>
<template>
  <section class="bg-secondary h-fit w-full flex-center flex-col">
    <div id="18001001" v-if="section1" class="w-full">
      <PageHeader :section="section1" />
    </div>
    <div class="w-full h-full flex-center">
      <div class="bg-cr-gray-light flex justify-center items-start flex-row flex-wrap">
        <div id="18002001" v-if="section2" class="w-4/5">
          <ContentSection :section="section2" margin="mt-20 mb-0" />
        </div>
        <div class="content w-4/5 h-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <template v-for="section in section3" :key="section">
            <ContactItem :section="section" />
          </template>
        </div>
        <div id="18004001" v-if="section4" class="bg-white flex-center flex-col">
          <ContentSection :section="section4" class="w-4/5" margin="mt-10 mb-0" />
          <VolunteerForm class="w-4/5" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
