

<script>
import TextInput from '@/components/form/TextInput.vue'
export default {
  name: 'MailUsForm',
  components: { TextInput },
  data() {
    return {
      formData: {
        name: '',
        email: '',
        mobile: '',
        message: ''
      },
      disableSubmit: false,
      statusMessage: ''
    }
  },
  methods: {
    async submitForm() {}
  }
}
</script>
<template>
  <div class="text-left">
    <form @submit.prevent="submitForm">
      <!-- Name -->
      <TextInput
        id="name"
        label="Your-Name"
        :translate="true"
        v-model="formData.name"
        :required="true"
      />

      <!-- Email -->
      <TextInput
        id="email"
        label="Your-Email"
        :translate="true"
        v-model="formData.email"
        :required="true"
      />

      <!-- Mobile -->
      <TextInput
        id="mobile"
        label="Your-Mobile"
        :translate="true"
        v-model="formData.mobile"
        :required="true"
      />

      <!-- Message -->
      <div class="flex flex-col my-4">
        <div class="flex flex-row mb-2">
          <label for="description" class="font-medium" v-t="'Message'"></label>
          <p class="text-red-500 ml-2 text-sm self-center italic" v-t="'Required'"></p>
        </div>

        <textarea
          id="description"
          v-model="formData.message"
          class="border rounded p-2"
          ref="textarea"
          required
        ></textarea>
      </div>
    </form>
  </div>
</template>
<style>
</style>