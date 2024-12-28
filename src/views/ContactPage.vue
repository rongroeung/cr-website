<script>
import ContactItem from '@/components/ContactItem.vue'
import AccordingItem from '@/components/common/AccordingItem.vue'
export default {
  name: 'ContactPage',
  components: { ContactItem, AccordingItem },
  data() {
    return {
      section1: null,
      contacts: []
    }
  },
  async created() {
    this.section1 = await this.getContentById('24001001')
    this.contacts = await this.getAllContentStartByIds('24002')
  }
}
</script>

<template>
  <section class="bg-cr-gray-light h-fit w-full flex-center flex-col">
    <div id="24001001" v-if="section1" class="w-full">
      <PageHeader :section="section1" />
    </div>
    <div class="content w-4/5 h-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
      <ContactItem v-for="contact in contacts" :key="contact" :section="contact" />
    </div>
    <div class="content w-4/5 h-full my-20">
      <p
        class="w-full text-center md:text-start text-cr-gray-darker text-2xl md:text-3xl xl:text-4xl mb-4"
      >
        Reach Out
      </p>
      <p class="w-full text-center md:text-start text-cr-gray-darker text-xl xl:text-2xl">
        Have a specific need?
      </p>

      <AccordingItem />
    </div>
  </section>
</template>

<script scoped></script>
