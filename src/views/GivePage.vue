<script>
import { loadScript } from '@paypal/paypal-js'
export default {
  name: 'GivePage',
  data() {
    return {
      amount: 10
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
  }
}
</script>

<template>
  <section class="bg-secondary h-fit w-full flex-center flex-col text-white">
    <div class="image-header h-300-px w-full flex-center">
      <p class="text-5xl" v-t="'give'"></p>
    </div>
    <div class="content w-4/5 flex-center flex-col mx-auto my-20">
      <div class="mb-6">
        <label for="large-input" class="block mb-2 text-lg font-medium">Amount in $</label>
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
  
  <script scoped>
</script>