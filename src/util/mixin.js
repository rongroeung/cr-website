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
    async getAllContentStartByIds(id) {
      const response = await this.getAllContentId()
      const content_ids = response.content_id
      const filteredContentIds = this.filterContentStartWithId(content_ids, id)
      const contents = await this.fetchContentByIds(filteredContentIds)

      if (!contents) return null
      return contents
    },
    filterContentStartWithId(contentIds, sectionPrefix) {
      return contentIds.filter((id) => id.startsWith(sectionPrefix))
    },
    async fetchContentByIds(ids) {
      let contents = []
      for (let id of ids) {
        let content = await this.getContentById(id)
        if (content) {
          contents.push(content)
        }
      }
      return contents
    },
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

    async getAllContentId(sort = '') {
      let buildUrl = this.$backendUrl + 'getAllContentId'
      // https://crossroadscambodia.church:7002/cr-web-backend/api/v1/getAllContentId
      // Add sort parameter if provided date-desc or date-asc
      if (sort) {
        buildUrl += '?sort=' + sort
      }

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
    },
    async addNewYoutubeApi(contentObject) {
      const buildUrl = this.$backendUrl + 'addNewYoutube'
      // https://crossroadscambodia.church:7002/cr-web-backend/api/v1/addNewYoutube
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

    async removeDescriptionFromContentApi(descId, contentId) {
      const buildUrl =
        this.$backendUrl + 'removeDescription?id=' + descId + '&content_id=' + contentId
      // https://crossroadscambodia.church:7002/cr-web-backend/api/v1/removeDescription?id={id}&content_id={content_id}
      try {
        const response = await axios({
          method: 'get',
          url: buildUrl,
          headers: {
            'Content-Type': 'application/json'
          }
        })
        if (response.data.code == 200) {
          this.$toast.success(response.data.message)
          return true
        }
      } catch (error) {
        const message = error.response.data.message
        const errorMessage = error.response.data.error
        this.$toast.error(message + ' ' + errorMessage)
        return false
      }
    }
  }
}

export {
  windowResizeMixin,
  fetchDataMixin,
}
