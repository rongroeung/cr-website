<template>
  <div id="paypal-container-7DXNCEKJAMG3L" class="w-full"></div>
</template>

<script>
export default {
  name: 'PayPal',
  mounted() {
    // Ensure the PayPal SDK script is loaded before rendering the button
    const script = document.createElement('script')
    script.src =
      'https://www.paypal.com/sdk/js?client-id=BAAV6A3y2BxsqcVyM7bFlmJdO74WoRxooZmFavnG0xV2lyC_uccaMuaRAh-Shvk0nv9JP94mlKp0xQDA0U&components=hosted-buttons&disable-funding=venmo&currency=USD'
    script.onload = this.initializePayPalButton
    document.body.appendChild(script)
  },
  methods: {
    initializePayPalButton() {
      if (window.paypal && window.paypal.HostedButtons) {
        paypal
          .HostedButtons({
            hostedButtonId: '7DXNCEKJAMG3L'
          })
          .render('#paypal-container-7DXNCEKJAMG3L')
      } else {
        console.error('PayPal SDK failed to load.')
      }
    }
  }
}
</script>

<style scoped></style>
