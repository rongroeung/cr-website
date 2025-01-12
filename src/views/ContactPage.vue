<script>
import ContactItem from '@/components/contact/ContactItem.vue'
import AccordingItem from '@/components/common/AccordingItem.vue'
import MailUsForm from '@/components/contact/MailUsForm.vue'
import PrayerRequestForm from '@/components/form/PrayerRequestForm.vue'
export default {
  name: 'ContactPage',
  components: { ContactItem, AccordingItem, MailUsForm, PrayerRequestForm },
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
    <div class="w-full lg:w-4/5 flex-center">
      <div class="content w-4/5 h-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 mb-10">
        <ContactItem v-for="contact in contacts" :key="contact" :section="contact" />
      </div>
    </div>
    <div class="bg-white w-full flex-center">
      <div class="w-full lg:w-4/5 h-full mb-20 mt-10 text-secondary">
        <p class="w-full text-center md:text-start text-2xl md:text-3xl xl:text-4xl font-bold mt-4">
          Reach Out
        </p>
        <p class="w-full text-center md:text-start text-xl xl:text-2xl mt-4">
          Have a specific need?
        </p>
        <AccordingItem title="Mail-Us" class="mt-4">
          <MailUsForm />
        </AccordingItem>
        <AccordingItem title="Ask-for-Prayer">
          <PrayerRequestForm />
        </AccordingItem>
        <router-link :to="{ name: 'volunteer' }" class="mt-4">
          <AccordingItem title="volunteer" />
        </router-link>
      </div>
    </div>
  </section>
</template>

<script scoped></script>
