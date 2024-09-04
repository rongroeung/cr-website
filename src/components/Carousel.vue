<script>
import CrButton from './CrButton.vue'
import { initFlowbite } from 'flowbite'

export default {
  name: 'Carousel',
  components: { CrButton },
  data() {
    return {
      data: null
    }
  },
  async created() {
    this.data = await this.fetchData('01001001')
  },
  mounted() {
    initFlowbite()
  }
}
</script>

<template>
  <div
    id="controls-carousel"
    class="relative w-full flex flex-col"
    data-carousel="slide"
    data-carousel-interval="8000"
  >
    <!-- Carousel wrapper -->
    <div class="relative overflow-hidden h-64 md:h-96 lg:h-35rem xl:h-45rem 2xl:h-50rem">
      <!-- Item 1 -->
      <div class="carousel-item hidden linear" data-carousel-item="active">
        <img
          src="../assets/img/slideshow-01.jpg"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="..."
        />
      </div>
      <!-- Item 2 -->
      <div class="carousel-item hidden linear" data-carousel-item>
        <img
          src="../assets/img/About--Cover-001.jpg"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="..."
        />
      </div>
      <!-- Item 3 -->
      <div class="carousel-item hidden linear" data-carousel-item>
        <img
          src="../assets/img/About--Cover-002.jpg"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          alt="..."
        />
      </div>
    </div>
    <!-- Slider controls -->
    <div class="center-content-wrapper">
      <button
        type="button"
        class="absolute top-0 start-0 z-30 flex-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
        >
          <svg
            class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <!-- Inner Content -->
      <div class="center-content">
        <p
          class="text-white text-2xl md:text-3xl xl:text-4xl mb-4 lg:mb-5 xl:mb-7"
          v-t="'rebuilding-cambodia'"
        ></p>
        <p
          class="text-white sm:text-xl xl:text-2xl mb-4 lg:mb-5 xl:mb-7"
          v-t="'love-god-love-other'"
        ></p>
        <CrButton buttonRouter="home" buttonRouteId="discipleship_journey" />
      </div>
      <button
        type="button"
        class="absolute top-0 end-0 z-30 flex-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
        >
          <svg
            class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
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
