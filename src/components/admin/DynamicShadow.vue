<template>
  <div ref="hero" class="hero" @mousemove="shadow">
    <h1 ref="text">{{ text }}</h1>
  </div>
</template>

<script>
export default {
  name: 'DynamicShadow',
  props: {
    text: String
  },
  data() {
    return {
      range: 20 // 20px * 2
    }
  },
  methods: {
    shadow(e) {
      const hero = this.$refs.hero
      const text = this.$refs.text

      if (!hero || !text) return

      let x = e.offsetX
      let y = e.offsetY

      // Handle nested element offset
      if (e.target !== hero) {
        x = x + e.target.offsetLeft
        y = y + e.target.offsetTop
      }

      const width = hero.offsetWidth
      const height = hero.offsetHeight

      const xRange = Math.round((x / width) * this.range - this.range / 2)
      const yRange = Math.round((y / height) * this.range - this.range / 2)

      text.style.textShadow = `${xRange}px ${yRange}px 5px rgba(245, 168, 7, 0.7)`
    }
  }
}
</script>

<style scoped>
html {
  color: black;
  font-family: sans-serif;
}

body {
  margin: 0;
}

.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
}

h1 {
  text-shadow: 10px 10px 10px rgba(245, 168, 7, 0.7);
  font-size: 2.5rem;
}
</style>
