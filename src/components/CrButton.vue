<script>
export default {
  name: 'CrButton',
  props: {
    label: { type: String, default: 'learn-more' },
    buttonRoute: String,
    buttonSize: { type: String, default: 'md' },
    buttonColor: { type: String, default: 'bg-primary' },
    labelColor: String
  },
  methods: {},
  computed: {
    ButtonSize() {
      return this.buttonSize == 'lg'
        ? 'btn-lg h-12 md:h-16 lg:h-16 w-36 md:w-40 lg:w-44' // lg
        : 'btn-md h-8 md:h-12 lg:h-14 w-36 md:w-40 lg:w-44' // md
    }
  }
}
</script>

<template>
  <div
    class="cr-button flex-center bg-sub-primary text-white cursor-pointer"
    :class="ButtonSize"
    :color="buttonColor"
  >
    <span class="span-text uppercase font-bold flex-center text-center">
      <router-link :to="{ name: buttonRoute }" v-t="label"></router-link>
    </span>
  </div>
</template>

<style scoped>
.span-text {
  position: absolute;
  text-decoration: none;
  transition: all 0.35s ease;
  width: inherit;
  height: inherit;

  &::after {
    content: '';
    position: absolute;
    width: 80%;
    height: 2px;
    bottom: 14px;
    left: 10%;
    margin-left: auto;
    background-color: white;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }

  &:hover {
    color: white;

    &::after {
      visibility: visible;
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }
  }
}
</style>
