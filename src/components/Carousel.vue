<script>
import CrButton from './CrButton.vue'
import { initFlowbite } from 'flowbite'

export default {
  name: 'Carousel',
  components: { CrButton },
  data() {
    return {
      section1: null
    }
  },
  async created() {
    this.section1 = await this.getContentById('01001001')
  },
  mounted() {
    initFlowbite()
  }
}
</script>

<template>
  <div
    id="controls-carousel"
    class="relative w-full flex flex-col h-fit"
    data-carousel="slide"
    data-carousel-interval="8000"
    v-if="section1"
  >
    <!-- Carousel wrapper -->
    <div class="image-list relative overflow-hidden h-72 sm:h-96 lg:h-35rem xl:h-45rem h-carousel">
      <template v-for="(image, index) in section1.media" :key="index">
        <div class="carousel-item hidden linear" :data-carousel-item="index == 0 ? 'active' : ''">
          <img
            :src="image.url"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            :alt="image.name"
          />
        </div>
      </template>
    </div>
    <!-- Inner Content -->

    <div class="center-content-wrapper">
      <div id="01001001" class="center-content">
        <p class="text-white text-2xl md:text-3xl xl:text-4xl mb-4 lg:mb-5 xl:mb-7">
          {{ section1.title }}
        </p>
        <p class="text-white sm:text-xl xl:text-2xl mb-4 lg:mb-5 xl:mb-7">
          {{ section1.sub_title }}
        </p>
        <CrButton buttonRouter="home" buttonRouteId="discipleship_journey" />
      </div>
    </div>
    <!-- Slider indicators -->
    <div
      class="absolute z-50 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse text-secondary"
    >
      <button
        type="button"
        class="w-3 h-3 rounded-full"
        aria-current="true"
        aria-label="Slide 1"
        data-carousel-slide-to="0"
      ></button>
      <button
        type="button"
        class="w-3 h-3 rounded-full"
        aria-current="false"
        aria-label="Slide 2"
        data-carousel-slide-to="1"
      ></button>
      <button
        type="button"
        class="w-3 h-3 rounded-full"
        aria-current="false"
        aria-label="Slide 3"
        data-carousel-slide-to="2"
      ></button>
    </div>
  </div>
</template>

<style scoped>
.center-content-wrapper {
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-item {
  transition-duration: 4s;
}
.center-content {
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.btn-learn-more {
  background-color: var(--primary-color);
  width: 10rem;
  height: 3rem;
  color: white;
  text-transform: uppercase;
  text-align: center;
}

/* Media query below mobile-screen */
@media (max-width: 768px) {
  .btn-learn-more {
    width: 8rem;
    height: 2rem;
  }
}
</style>
