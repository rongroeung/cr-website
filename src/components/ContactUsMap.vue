<script>
import Layout2Columns from '@/layouts/Layout2Columns.vue'
import CrButton from './CrButton.vue'
export default {
  name: 'ContactUsMap',
  components: { CrButton, Layout2Columns }
}
</script>

<template>
  <section id="contact-us " class="flex-center flex-col">
    <div id="contact-us-map" class="h-60 w-4/5 flex-center flex-col sm:flex-row">
      <p
        class="w-2/4 text-2xl md:text-4xl xl:text-5xl mb-4 sm:mb-0 font-semibold"
        v-t="'want-to-get-in-touch'"
      ></p>
      <CrButton label="contact-us" :class="'sm:ml-auto'" buttonRoute="contact" />
    </div>
    <div class="h-96 w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15634.811191003451!2d104.8750444359375!3d11.573150569248698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095181e3acb525%3A0x210670bdf19d7414!2sThe%20Crossroads%20Church%20of%20Cambodia!5e0!3m2!1sen!2skh!4v1723479500090!5m2!1sen!2skh"
        width="100%"
        height="100%"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </section>
</template>

<script scoped>
</script>