<script>
export default {
  name: 'Pagination',
  props: {
    totalPage: {
      type: Number,
      default: 3
    }
  },
  data() {
    return {
      cssText:
        'flex items-center justify-center px-4 h-10 leading-tight text-gray-500 hover:text-gray-700 bg-white hover:bg-gray-200 cursor-pointer',
      cssSelectedText:
        'Selected flex items-center justify-center px-4 h-10 leading-tight text-white bg-gray-400 hover:bg-gray-500 cursor-pointer',
      currentPage: 1
    }
  },
  methods: {
    onSelectPage(page) {
      this.currentPage = page
      this.$emit('onSelectPage', page)
    }
  }
}
</script>

<template>
  <nav aria-label="Page navigation example">
    <ul class="flex items-center-space-x-px h-10 text-base">
      <li v-for="page in totalPage" :key="page">
        <p
          @click="onSelectPage(page)"
          :class="[
            page == currentPage ? cssSelectedText : cssText,
            page === 1 ? 'rounded-l-md' : '',
            page === totalPage ? 'rounded-r-md' : ''
          ]"
        >
          {{ page }}
        </p>
      </li>
    </ul>
  </nav>
</template>

<style></style>
