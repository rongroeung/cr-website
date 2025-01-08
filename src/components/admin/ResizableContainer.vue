<script>
export default {
  data() {
    return {
      leftColumnWidth: 50,
      isDragging: false,
      startX: 0
    }
  },
  methods: {
    startResizing(event) {
      this.isDragging = true

      // Add event listeners for both mouse and touch events
      if (event.type === 'mousedown') {
        this.startX = event.clientX
        document.addEventListener('mousemove', this.resize)
        document.addEventListener('mouseup', this.stopResizing)
      } else if (event.type === 'touchstart') {
        this.startX = event.touches[0].clientX
        document.addEventListener('touchmove', this.resize)
        document.addEventListener('touchend', this.stopResizing)
      }
    },
    resize(event) {
      if (!this.isDragging) return

      let clientX = event.type === 'mousemove' ? event.clientX : event.touches[0].clientX

      // Calculate the new width of the left column based on the mouse/touch position
      const containerWidth = this.$el.offsetWidth
      const newLeftColumnWidth = (clientX / containerWidth) * 100

      // Set constraints on the column width (between 10% and 90%)
      if (newLeftColumnWidth >= 10 && newLeftColumnWidth <= 90) {
        this.leftColumnWidth = newLeftColumnWidth
      }
    },
    stopResizing() {
      this.isDragging = false

      // Remove mouse and touch event listeners
      document.removeEventListener('mousemove', this.resize)
      document.removeEventListener('mouseup', this.stopResizing)
      document.removeEventListener('touchmove', this.resize)
      document.removeEventListener('touchend', this.stopResizing)
    }
  }
}
</script>

<template>
  <div class="py-8 mx-auto flex text-center gap-4 h-screen">
    <!-- Left Container -->
    <div class="h-full" :style="{ width: `${leftColumnWidth}%` }">
      <slot name="left_container"></slot>
    </div>

    <!-- Divider Line -->
    <div class="relative mx-4 mt-6">
      <div
        @mousedown="startResizing"
        @touchstart="startResizing"
        class="resizer bg-primary w-2-px h-screen cursor-col-resize"
      ></div>

      <button
        class="resize-btn btn btn-danger bg-primary text-center"
        @mousedown="startResizing"
        @touchstart="startResizing"
      >
        <span>↔</span>
      </button>
    </div>
    <!-- Right Container -->
    <div class="h-full" :style="{ width: `${100 - leftColumnWidth}%` }">
      <slot name="right_container"></slot>
    </div>
  </div>
</template>

<style scoped>
.resize-btn {
  position: absolute;
  right: -20px;
  top: -25px;
  width: 45px;
  height: 45px;
  font-size: 18px;
  border: none;
  background-color: var(--primary-color);
  color: white;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s ease;
  text-align: center;
}
</style>
