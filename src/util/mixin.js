import axios from "axios"

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
  },
}

const fetchDataMixin = {
  methods: {
    async fetchData(id) {

      const lang = localStorage.getItem('lang') || 'en';
      const buildUrl = this.$backendUrl + 'getContentById?id=' + id + '&lang=' + lang;
      try {
        const response = await axios({
          method: 'get',
          url: buildUrl,
          headers: {
            Accept: '*/*'
          }
        })
        if (response.data.message === "Success") {
          return response.data.data;
        } else {
          console.error(response.data.message);
          return null;
        }
      } catch (error) {
        console.error("Error occurred:", error);
        return null;
      }
    },
  }
}

export { windowResizeMixin, fetchDataMixin }