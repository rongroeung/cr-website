<script>
export default {
  name: 'ScrollTopButton',
  data() {
    return {
      cssStyle: 'block-important'
    }
  },
  methods: {
    scrollFunction() {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        this.cssStyle = 'block-important'
      } else {
        this.cssStyle = 'hidden'
      }
    },
    smoothScrollToTop() {
      const duration = 1500
      const targetScrollY = 0
      const startScrollY = window.scrollY

      const startTime = performance.now()

      function animation(currentTime) {
        const elapsedTime = currentTime - startTime
        const progress = Math.min(elapsedTime / duration, 1)
        const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t)
        const easedProgress = easeInOutQuad(progress)
        window.scrollTo(0, startScrollY + (targetScrollY - startScrollY) * easedProgress)

        if (elapsedTime < duration) {
          requestAnimationFrame(animation)
        }
      }
      requestAnimationFrame(animation)
    }
  },
  created() {
    window.addEventListener('scroll', this.scrollFunction)
    this.scrollFunction()
  },
  unmounted() {
    window.removeEventListener('scroll', this.scrollFunction)
  }
}
</script>

<template>
  <div @click="smoothScrollToTop()" id="myBtn" ref="ScrollToTop" class="hidden" :class="cssStyle">
    <img loading="lazy" src="../assets/icon/top-arrow.svg" />
  </div>
</template>

<style scoped>
#myBtn {
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  font-size: 18px;
  border: none;
  outline: none;
  background-color: var(--primary-color);
  color: white;
  cursor: pointer;
  padding: 10px;
  border-radius: 4px;
}
</style>
