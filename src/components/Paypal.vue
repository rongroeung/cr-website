<script>
import { loadScript } from '@paypal/paypal-js'
export default {
  name: 'PayPal',
  props: {
    client_id: String
  },
  data() {
    return {
      amount: 10
    }
  },
  mounted() {
    loadScript({
      'client-id': this.client_id
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
  <div class="Paypal w-full md:w-3/5 lg:w-1/2">
    <div class="form-control w-full mb-6">
      <label
        for="number"
        class="block mb-2 text-lg font-medium text-secondary"
        v-t="'Amount-In-USD'"
      ></label>
      <input
        type="number"
        id="number"
        v-model="amount"
        class="flex w-full p-4 text-gray-900 border border-gray-300 rounded-lg text-2xl"
      />
    </div>
    <div class="flex-center">
      <div id="paypal-button-container" class="w-full"></div>
    </div>
  </div>
</template>

<style scoped></style>
