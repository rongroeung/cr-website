<script>
export default {
  name: 'AddNewContentForm',
  data() {
    return {
      initialFormData: {
        name: '',
        email: '',
        mobile: '',
        role: '',
        description: ''
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
        user_role: this.formData.role,
        user_desc: this.formData.description
      }
      this.sendVolunteerForm(templateParams).then(() => {
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

      <div class="w-full flex justify-end !mb-10">
        <LoadingButton :isLoading="isSubmitting" />
      </div>
    </form>
  </div>
</template>
