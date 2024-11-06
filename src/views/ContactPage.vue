<script>
import ContactItem from '@/views/ContactItem.vue'
export default {
  name: 'ContactPage',
  components: { ContactItem },
  data() {
    return {
      section1: null,
      contacts: []
    }
  },
  async created() {
    this.section1 = await this.getContentById('24001001')
    // Fetch all content IDs

    this.contacts = await this.getAllContentStartByIds('24002')
  }
}
</script>

<template>
  <section class="bg-cr-gray-light h-fit w-full flex-center flex-col">
    <div id="24001001" v-if="section1" class="w-full">
      <PageHeader :section="section1" />
    </div>
    <div class="content w-4/5 h-full flex-center flex-row flex-wrap my-20">
      <template v-for="contact in contacts" :key="contact">
        <ContactItem :section="contact" />
      </template>
    </div>
  </section>
</template>

<script scoped></script>
