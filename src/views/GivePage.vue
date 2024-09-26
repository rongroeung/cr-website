<script>
import { loadScript } from '@paypal/paypal-js'
import PageHeader from '@/components/PageHeader.vue'
export default {
  name: 'GivePage',
  components: { PageHeader },
  data() {
    return {
      amount: 10,
      section1: null,
      section2: null
    }
  },
  mounted() {
    loadScript({
      'client-id':
        'AY-e_qtzOzSbzXLtTxAFqgAf8tAQ9_abzCInSlB0Hp2JVwTcGzCKiasYMKJ7jjzqRp9wrg8vjeAY7YGZ'
    })
      .then((paypal) => {
        paypal
          .Buttons({
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: this.amount // Amount to be charged
                    }
                  }
                ]
              })
            },
            onApprove: (data, actions) => {
              return actions.order.capture().then((details) => {
                alert(`Transaction completed by ${details.payer.name.given_name}`)
              })
            }
          })
          .render('#paypal-button-container')
      })
      .catch((err) => {
        console.error('Failed to load the PayPal JS SDK script', err)
      })
  },
  async created() {
    this.section1 = await this.getContentById('19001001')
    this.section2 = await this.getContentById('19002001')
  }
}
</script>

<template>
  <section class="bg-cr-gray h-fit w-full flex-center flex-col text-white">
    <div id="19001001" v-if="section1" class="w-full">
      <PageHeader :section="section1" />
    </div>
    <div class="content flex-center flex-col mx-auto mt-10 md:mt-20 mb-20">
      <div id="19002001" v-if="section2" class="flex-center flex-col">
        <p
          class="w-4/5 text-secondary text-2xl md:leading-snug md:text-4xl text-center font-normal mb-10 md:mb-20"
        >
          {{ section2.title }}
        </p>
        <div class="flex-center mb-20 w-full md:w-4/5 h-64 md:h-30rem">
          <iframe
            width="100%"
            height="100%"
            :src="section2.media[0].url"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div class="w-4/5 mb-6">
        <label for="large-input" class="block mb-2 text-lg font-medium text-secondary"
          >Amount in $</label
        >
        <input
          type="text"
          id="large-input"
          v-model="amount"
          class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg text-2xl"
        />
      </div>
      <div class="content w-60 sm:w-72 md:w-96 flex-center mb-20">
        <div id="paypal-button-container" class="w-full"></div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
