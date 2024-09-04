import axios from 'axios'

const windowResizeMixin = {
  data() {
    return {
      width: 0
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  unmounted() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.width = window.innerWidth
    }
  }
}

const fetchDataMixin = {
  methods: {
    async fetchData(content_id) {
      const lang = localStorage.getItem('lang') || 'en'
      const buildUrl = this.$backendUrl + 'getContentById?id=' + content_id + '&lang=' + lang
      // http://38.47.39.132:7001/cr-web-backend/api/v1/getContentById?id=01001001&lang=en

      try {
        const response = await axios({
          method: 'get',
          url: buildUrl,
          headers: {
            'Content-Type': 'application/json'
          },
          timeout: 3000
        })
        if (response.data.message === 'Success') {
          return response.data.data
        } else {
          console.error(response.data.message)
          return null
        }
      } catch (error) {
        // return fall back data base on id
        return this.$fallbackData.find((data) => data.id == content_id)
      }
    }
  }
}

export { windowResizeMixin, fetchDataMixin }
