<script>
import TextInput from '@/components/form/TextInput.vue'
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
        user_name: this.formData.name,
        user_email: this.formData.email,
        user_mobile: this.formData.mobile,
        user_role: this.formData.role,
        user_desc: this.formData.description
      }

      emailjs.init({
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      })

      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_VOLUNTEER_ID,
          templateParams
        )
        .then(
          (response) => {
            if (response.status === 200 && response.text === 'OK') {
              this.$toast.success('Email sent successfully!')
            }
          },
          (error) => {
            this.$toast.error('Failed to send email. Please try again.', error)
          }
        )
        .finally(() => {
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
        <p v-if="disableSubmit" class="text-cr-gray-dark">Loading...</p>
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
