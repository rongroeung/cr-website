<script>
export default {
  name: 'MailUsForm',
  data() {
    return {
      initialFormData: {
        name: '',
        email: '',
        mobile: '',
        prayer_request: ''
      },
      formData: {},
      isSubmitting: false
    }
  },
  created() {
    this.resetForm()
  },
  methods: {
    async submitForm() {
      this.isSubmitting = true
      const templateParams = {
        user_name: this.formData.name,
        user_email: this.formData.email,
        user_mobile: this.formData.mobile,
        user_prayer_request: this.formData.prayer_request
      }

      this.sendMailForm(templateParams).then(() => {
        this.resetForm()
        this.isSubmitting = false
      })
    },
    resetForm() {
      this.formData = { ...this.initialFormData }
    }
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

      <!-- Prayer Request -->
      <div class="flex flex-col my-4">
        <div class="flex flex-row mb-2">
          <label for="user_prayer_request" class="font-medium" v-t="'Your-Prayer-Request'"></label>
          <p class="text-red-500 ml-2 text-sm self-center italic" v-t="'Required'"></p>
        </div>

        <textarea
          id="user_prayer_request"
          v-model="formData.prayer_request"
          class="border rounded p-2"
          ref="textarea"
          required
        ></textarea>
      </div>

      <div class="w-full flex justify-end">
        <LoadingButton :isLoading="isSubmitting" />
      </div>
    </form>
  </div>
</template>
<style></style>
