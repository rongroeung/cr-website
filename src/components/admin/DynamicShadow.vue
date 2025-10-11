<template>
  <div class="flex justify-center items-center">
    <div class="shine">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: 'DynamicShadow',
  props: {
    text: String
  }
}
</script>

<style scoped>
.shine {
  font-size: 3em;
  font-weight: bold;
}

/* Re-defined .shine to include modern CSS features */
.shine {
  /* Initial background color */
  background: var(--secondary-color);
  /* Standard linear gradient syntax */
  background-image: linear-gradient(to right, #222, #222, #fff 50%, #222);

  /* Vendor-prefixed gradient for older WebKit/Chrome/Safari */
  background-image: -webkit-linear-gradient(left, #222, #222, #fff 50%, #222);

  background-position: 0 0;
  background-repeat: no-repeat;

  /* Standard background size, replacing -webkit-background-size */
  background-size: 150px;

  color: rgba(255, 255, 255, 0.3);

  /* Standard background clip, replacing -webkit-background-clip */
  background-clip: text;
  /* WebKit prefix is still often necessary for text clipping */
  -webkit-background-clip: text;

  /* Standard animation properties */
  animation-name: shine;
  animation-duration: 5s;
  animation-iteration-count: infinite;

  /* WebKit prefixed animation properties */
  -webkit-animation-name: shine;
  -webkit-animation-duration: 5s;
  -webkit-animation-iteration-count: infinite;

  text-shadow: 0 0px 0px rgba(255, 255, 255, 0.5);
}

/* Standard keyframes block */
@keyframes shine {
  0%,
  10% {
    background-position: -1000px;
  }
  20% {
    background-position: top left;
  }
  90% {
    background-position: top right;
  }
  100% {
    background-position: 1000px;
  }
}

/* WebKit keyframes block for compatibility */
@-webkit-keyframes shine {
  0%,
  10% {
    background-position: -1000px;
  }
  20% {
    background-position: top left;
  }
  90% {
    background-position: top right;
  }
  100% {
    background-position: 1000px;
  }
}
</style>
