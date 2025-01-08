import emailjs from '@emailjs/browser'

emailjs.init({
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
})

const sendVolunteerForm = async (templateParams) => {
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_VOLUNTEER_ID
  return await send(templateId, templateParams)
}

const sendMailUsForm = async (templateParams) => {
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_MAIL_US
  return await send(templateId, templateParams)
}

async function send(templateId, templateParams) {
  await emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, templateId, templateParams).then(
    (response) => {
      if (response.status === 200 && response.text === 'OK') {
        // this.$toast.success('Email sent successfully!')
        return true
      }
    },
    (error) => {
      console.log('error', error)
      // this.$toast.error('Failed to send email. Please try again.', error)
      return false
    }
  )
}

export { sendVolunteerForm, sendMailUsForm }
