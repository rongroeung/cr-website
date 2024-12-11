<script>
import TextInput from './admin/TextInput.vue'
import emailjs from '@emailjs/browser'
export default {
  name: 'AddNewContentForm',
  components: { TextInput },
  data() {
    return {
      formData: {
        name: '',
        email: '',
        mobile: '',
        role: '',
        description: ''
      },
      disableSubmit: false,
      statusMessage: ''
    }
  },
  methods: {
    resetForm() {
      this.formData.name = ''
      this.formData.email = ''
      this.formData.mobile = ''
      this.formData.role = ''
      this.formData.description = ''
    },
    async submitForm() {
      this.disableSubmit = true
      this.statusMessage = ''
      this.messageClass = ''
      const templateParams = {
        from_name: this.formData.name,
        from_email: this.formData.email,
        message: 'description: ' + this.formData.description + ' role: ' + this.formData.role,
        mobile: this.formData.mobile
      }

      emailjs.init({
        publicKey: 'NBUw0ugIqWNRRmFF_'
      })

      emailjs
        .send(
          'service_69e1qwv', // Replace with your EmailJS service ID
          'template_77estnt', // Replace with your EmailJS template ID
          templateParams
        )
        .then(
          (response) => {
            // Reset form
            this.name = ''
            this.email = ''
            this.message = ''
            if (response.statusMessage == 200) {
              this.$toast.success('Email sent successfully!')
            }
            console.log('response', response)
          },
          (error) => {
            // Error handling
            console.error('Email send failed:', error)
            this.statusMessage = 'Failed to send email. Please try again.'
            this.messageClass = 'error-message'
            this.$toast.error(error)
          }
        )
        .finally(() => {
          // Re-enable submit button
          this.disableSubmit = false
        })
    }
  }
}
</script>

<template>
  <div class="text-left">
    <form @submit.prevent="submitForm" class="space-y-4">
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

      <!-- Role -->
      <TextInput
        id="role"
        label="What-ministry-or-role-are-you-interested-in"
        :translate="true"
        v-model="formData.role"
        :required="true"
      />

      <!-- Description -->
      <div class="flex flex-col my-4">
        <div class="flex flex-row mb-2">
          <label for="description" class="font-medium" v-t="'What-would-you-like'"></label>
          <p class="text-red-500 ml-2 text-sm self-center italic" v-t="'Required'"></p>
        </div>

        <textarea
          id="description"
          v-model="formData.description"
          class="border rounded p-2"
          ref="textarea"
          required
        ></textarea>
      </div>

      <div class="w-full flex flex-col items-end">
        <p v-if="disableSubmit" class="text-cr-gray-light">Loading...</p>
        <button
          type="submit"
          :disabled="disableSubmit"
          :class="{ 'cursor-not-allowed opacity-50': disableSubmit }"
          class="bg-secondary w-24 px-4 py-2 rounded ms-auto mb-10"
          v-t="'submit'"
        ></button>
      </div>
      <div v-if="statusMessage" :class="messageClass">
        {{ statusMessage }}
      </div>
    </form>
  </div>
</template>

<style scoped>
textarea {
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
