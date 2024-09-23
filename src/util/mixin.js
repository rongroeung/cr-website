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

const adminResizeIframeMixin = {
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

const fetchDataMixin = {
  methods: {
    async getContentById(content_id) {
      const lang = localStorage.getItem('lang') || 'en'
      const buildUrl = this.$backendUrl + 'getContentById?id=' + content_id + '&lang=' + lang
      // https://crossroadscambodia.church:7002/cr-web-backend/api/v1/getContentById?id=01001001&lang=en

      // return fall back data base on id
      // return fallbackData.find((data) => data.id == content_id)

      try {
        const response = await axios({
          method: 'get',
          url: buildUrl,
          headers: {
            'Content-Type': 'application/json'
          }
        })
        if (response.data.message === 'Success') {
          return response.data.data
        } else {
          console.error(response.data.message)
          return null
        }
      } catch (error) {
        return null
      }
    },
    async getContentAllLangById(content_id) {
      const buildUrl = this.$backendUrl + 'getContentAllLangById?id=' + content_id
      //https://crossroadscambodia.church:7002/cr-web-backend/api/v1/getContentAllLangById?id=01001001

      try {
        const response = await axios({
          method: 'get',
          url: buildUrl,
          headers: {
            'Content-Type': 'application/json'
          }
        })
        if (response.data.message === 'Success') {
          return response.data.data
        }
      } catch (error) {
        this.$toast.error(error.response.data.message)
        return null
      }
    },
    async updateContentById(contentObject) {
      const buildUrl = this.$backendUrl + 'updateContentById?id=' + contentObject.id
      //https://crossroadscambodia.church:7002/cr-web-backend/api/v1/updateContentById?id=01001001

      try {
        const response = await axios({
          method: 'post',
          url: buildUrl,
          headers: {
            'Content-Type': 'application/json'
          },
          data: contentObject
        })
        if (response.data.code == 200) {
          this.$toast.success(response.data.message)
        }
      } catch (error) {
        this.$toast.error(error.response.data.message)
      }
    },
    async getAllContentId() {
      const buildUrl = this.$backendUrl + 'getAllContentId'
      // https://crossroadscambodia.church:7002/cr-web-backend/api/v1/getAllContentId

      try {
        const response = await axios({
          method: 'get',
          url: buildUrl,
          headers: {
            'Content-Type': 'application/json'
          }
        })
        if (response.data.message === 'Success') {
          return response.data.data
        }
      } catch (error) {
        this.$toast.error(error.response.data.message)
        return null
      }
    },
    async addNewContent(contentObject) {
      const buildUrl = this.$backendUrl + 'addNewContent'
      // https://crossroadscambodia.church:7002/cr-web-backend/api/v1/addNewContent
      try {
        const response = await axios({
          method: 'post',
          url: buildUrl,
          headers: {
            'Content-Type': 'application/json'
          },
          data: contentObject
        })
        if (response.data.code == 200) {
          this.$toast.success(response.data.message)
        }
      } catch (error) {
        this.$toast.error(error.response.data.message)
      }
    },
    async addNewDescription(contentObject) {
      const buildUrl = this.$backendUrl + 'addNewDescription'
      // https://crossroadscambodia.church:7002/cr-web-backend/api/v1/addNewDescription
      try {
        const response = await axios({
          method: 'post',
          url: buildUrl,
          headers: {
            'Content-Type': 'application/json'
          },
          data: contentObject
        })
        if (response.data.code == 200) {
          this.$toast.success(response.data.message)
        }
      } catch (error) {
        this.$toast.error(error.response.data.message)
      }
    },
    async addNewMediaApi(contentObject) {
      const buildUrl = this.$backendUrl + 'addNewMedia'
      // https://crossroadscambodia.church:7002/cr-web-backend/api/v1/addNewMedia
      try {
        const response = await axios({
          method: 'post',
          url: buildUrl,
          headers: {
            'Content-Type': 'application/json'
          },
          data: contentObject
        })
        if (response.data.code == 200) {
          this.$toast.success(response.data.message)
        }
      } catch (error) {
        this.$toast.error(error.response.data.message)
      }
    }
  }
}

export { windowResizeMixin, fetchDataMixin, adminResizeIframeMixin }
