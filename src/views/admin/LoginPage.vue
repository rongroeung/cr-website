
<script>
import TextInput from '@/components/admin/TextInput.vue'
export default {
  name: 'LoginPage',
  components: { TextInput },
  data() {
    return {
      formData: {
        username: '',
        password: ''
      },
      showPassword: false,
      disableSubmit: false,
      users: null
    }
  },
  async created() {
    const response = await this.getContentAllLangById('88888888')
    this.users = response.description
  },
  methods: {
    onClickLogo() {
      this.$router.push('/')
    },
    submitForm() {
      this.disableSubmit = true
      if (this.users == null) {
        return
      }
      this.users.forEach((user) => {
        if (user.text == this.formData.username && user.kh_text == this.formData.password) {
          localStorage.setItem('adminToken', user.text)
          this.$router.push('/admin')
          this.$toast.success('Login Success')
        }
      })
      if (!localStorage.getItem('adminToken')) {
        this.$toast.error('Login Failed')
      }
      this.disableSubmit = false
    }
  }
}
</script>

<template>
  <section class="bg-secondary h-screen w-full flex-center flex-col text-white">
    <div class="flex-center mb-10">
      <img
        src="https://crossroadscambodia.church/cr-drive/cr-photos/cr-logo-001.png"
        alt="Crossroads Church Logo"
        class="w-auto h-24 cursor-pointer"
        @click="onClickLogo()"
      />
    </div>
    <div class="md:w-80 bg-gray mb-24">
      <form class="max-w-md" @submit.prevent="submitForm">
        <div class="mb-5">
          <TextInput
            id="username"
            label="Username"
            placeholder="username"
            v-model="formData.username"
            :required="true"
          />
        </div>
        <div class="mb-5">
          <TextInput
            id="password"
            label="Password"
            :type="showPassword ? 'text' : 'password'"
            placeholder="••••••"
            v-model="formData.password"
            :required="true"
          />
        </div>
        <div class="flex items-start mb-5">
          <div class="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              v-model="showPassword"
              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            />
            <label for="remember" class="ms-2 text-sm font-medium text-white">Show Password</label>
          </div>
        </div>
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded text-sm w-full px-5 py-2.5"
        >
          Submit
        </button>
        <p v-if="disableSubmit" class="text-end my-2">Loading...</p>
      </form>
    </div>
  </section>
</template>


<style>
</style>