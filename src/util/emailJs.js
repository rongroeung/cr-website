import emailjs from '@emailjs/browser'

emailjs.init({
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
})

const sendMailMixin = {
  methods: {
    async sendVolunteerForm(templateParams) {
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_VOLUNTEER_ID
      return await this.sendEmail(templateId, templateParams)
    },
    async sendMailForm(templateParams) {
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_MAIL
      return await this.sendEmail(templateId, templateParams)
    },
    async sendEmail(templateId, templateParams) {
      await emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, templateId, templateParams).then(
        (response) => {
          if (response.status === 200 && response.text === 'OK') {
            this.$toast.success('Email sent successfully!')
            return true
          }
        },
        (error) => {
          console.log('error', error)
          this.$toast.error('Failed to send email. Please try again.', error)
          return false
        }
      )
    }
  }
}


export { sendMailMixin }
