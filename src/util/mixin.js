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
    async getContentById(content_id) {
      const lang = localStorage.getItem('lang') || 'en'
      const buildUrl = this.$backendUrl + 'getContentById?id=' + content_id + '&lang=' + lang
      // https://crossroadscambodia.church:7002/cr-web-backend/api/v1/getContentById?id=01001001&lang=en

      try {
        const response = await axios({
          method: 'get',
          url: buildUrl,
          headers: {
            'Content-Type': 'application/json'
          },
          timeout: 5000
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
    },
    async getContentAllLangById(content_id) {
      const buildUrl = this.$backendUrl + 'getContentAllLangById?id=' + content_id
      //https://crossroadscambodia.church:7002/cr-web-backend/api/v1/getContentAllLangById?id=01001001

      const response = await axios({
        method: 'get',
        url: buildUrl,
        headers: {
          'Content-Type': 'application/json'
        },
        timeout: 5000
      })
      if (response.data.message === 'Success') {
        return response.data.data
      } else {
        console.error(response.data.message)
        return null
      }
    },
    async updateContentById(contentObject) {
      const buildUrl = this.$backendUrl + 'updateContentById?id=' + contentObject.id
      //https://crossroadscambodia.church:7002/cr-web-backend/api/v1/updateContentById?id=01001001

      const response = await axios({
        method: 'post',
        url: buildUrl,
        headers: {
          'Content-Type': 'application/json'
        },
        data: contentObject,
        timeout: 5000
      })
      if (response.data.code == 200) {
        this.$toast.success(response.data.message)
      } else {
        this.$toast.error(response.data.message)
      }

    },
    async getAllContentId() {
      const buildUrl = this.$backendUrl + 'getAllContentId'
      // https://crossroadscambodia.church:7002/cr-web-backend/api/v1/getAllContentId

      const response = await axios({
        method: 'get',
        url: buildUrl,
        headers: {
          'Content-Type': 'application/json'
        },
        timeout: 5000
      })
      if (response.data.message === 'Success') {
        return response.data.data
      } else {
        console.error(response.data.message)
        return null
      }
    },
  }
}

export { windowResizeMixin, fetchDataMixin }
