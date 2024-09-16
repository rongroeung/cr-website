<script>
import CrButton from './CrButton.vue'
export default {
  name: 'Carousel',
  components: { CrButton },
  data() {
    return {
      section1: null,
      currentIndex: 0, // Current active slide index
      autoSlideInterval: null,
      images: null
    }
  },
  mounted() {
    this.autoSlide() // Start auto-slide when component is mounted
  },
  async created() {
    this.section1 = await this.getContentById('01001001')
    this.images = this.section1.media
  },
  methods: {
    plusSlides(n) {
      clearInterval(this.autoSlideInterval) // Stop auto-sliding temporarily
      this.showSlides(this.currentIndex + n)
      this.autoSlide() // Restart auto-sliding after manual interaction
    },
    currentSlide(index) {
      clearInterval(this.autoSlideInterval) // Stop auto-sliding temporarily
      this.showSlides(index)
      this.autoSlide() // Restart auto-sliding after manual interaction
    },
    showSlides(index) {
      if (index >= this.images.length) {
        this.currentIndex = 0 // Go back to the first slide
      } else if (index < 0) {
        this.currentIndex = this.images.length - 1 // Go to the last slide
      } else {
        this.currentIndex = index
      }
    },
    autoSlide() {
      this.autoSlideInterval = setInterval(() => {
        this.showSlides(this.currentIndex + 1)
      }, 7000) // Auto-slide every 7 seconds
    }
  },
  beforeDestroy() {
    clearInterval(this.autoSlideInterval) // Clean up when component is destroyed
  }
}
</script>


<template>
  <div class="slideshow-container w-full h-72 sm:h-30rem lg:h-35rem xl:h-50rem">
    <template v-if="section1">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="mySlides fade h-100"
        v-show="currentIndex === index"
      >
        <div class="numbertext">{{ index + 1 }} / {{ images.length }}</div>

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
        <img :src="image.url" :alt="image.name" class="w-auto h-100 img-item" />
      </div>
    </template>

    <a class="prev" @click="plusSlides(-1)">❮</a>
    <a class="next" @click="plusSlides(1)">❯</a>
  </div>
</template>

<style scoped>
.slideshow-container {
  width: 100%;
  position: relative;
  margin: auto;
  overflow: hidden;
}

.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

.center-content-wrapper {
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: center;
}

.center-content {
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  z-index: 50;
}

.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

.img-item {
  object-fit: cover;
}
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}
</style>