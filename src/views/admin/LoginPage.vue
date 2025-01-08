<script>
import { setItemWithExpiry, getItemWithExpiry } from '@/util/localStorageUtils.js'
export default {
  name: 'LoginPage',
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
          let r = Math.random().toString(36).slice(2, 10)
          setItemWithExpiry('adminToken', `${r}${user.text}`, 86400000) // 1 day in milliseconds
          this.$toast.success('Login Success')
          this.$router.push('/admin')
          return
        }
      })
      if (!getItemWithExpiry('adminToken')) {
        this.$toast.error('Login Failed')
      }
      this.disableSubmit = false
    }
  }
}
</script>

<template>
  <section class="bg-secondary h-screen max-h-screen w-full flex-center flex-col login-screen">
    <div class="flex-center mb-10">
      <img
        :src="this.$logoUrl"
        alt="Crossroads Church Logo"
        class="w-auto h-24 cursor-pointer"
        @click="onClickLogo()"
      />
    </div>
    <div class="w-80 bg-gray mb-24">
      <form @submit.prevent="submitForm">
        <div class="mb-5">
          <TextInput
            id="username"
            label="Username"
            labelCss="text-cr-gray-light"
            placeholder="username"
            v-model="formData.username"
          />
        </div>
        <div class="mb-5">
          <TextInput
            id="password"
            label="Password"
            labelCss="text-cr-gray-light"
            :type="showPassword ? 'text' : 'password'"
            placeholder="••••••"
            v-model="formData.password"
          />
        </div>
        <div class="flex items-start mb-5">
          <div class="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              v-model="showPassword"
              class="w-4 h-4 border border-gray-300 rounded bg-gray-50 cursor-pointer"
            />
            <label
              for="remember"
              class="ms-2 text-sm font-medium label-cr-gray-light cursor-pointer"
              >Show Password</label
            >
          </div>
        </div>
        <button type="submit" class="bg-cr-primary font-medium rounded text-sm w-full px-5 py-2.5">
          Submit
        </button>
        <p v-if="disableSubmit" class="text-end my-2">Loading...</p>
      </form>
    </div>
  </section>
</template>

<style scoped>
.login-screen {
  overflow-x: hidden;
}
.label-cr-gray-light {
  color: var(--color-cr-gray-light) !important;
}
</style>
