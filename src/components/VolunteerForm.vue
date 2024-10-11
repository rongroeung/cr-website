<script>
import TextInput from './admin/TextInput.vue'
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
      disableSubmit: false
    }
  },
  methods: {
    async submitForm() {
      this.disableSubmit = true
      this.disableSubmit = false
    }
  }
}
</script>

<template>
  <div class="text-left p-4">
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
        <label for="description" class="font-medium mb-2" v-t="'What-would-you-like'"></label>
        <textarea
          id="description"
          v-model="formData.description"
          class="border rounded p-2"
          ref="textarea"
          required
        ></textarea>
      </div>

      <div class="w-full flex flex-col items-end">
        <p v-if="disableSubmit">Loading...</p>
        <button
          type="submit"
          :disabled="disableSubmit"
          :class="{ 'cursor-not-allowed opacity-50': disableSubmit }"
          class="bg-blue-500 text-white w-full px-4 py-2 rounded ms-auto"
          v-t="'submit'"
        ></button>
      </div>
    </form>
  </div>
</template>

<style scoped>
input {
  color: black;
  background-color: var(--cr-gray);
}

textarea {
  color: black;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
