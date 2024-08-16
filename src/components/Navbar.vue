<script>
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'
import router from '@/router'
import Field from '@/util/constant'
export default {
  name: 'Navbar',
  components: { LanguageSwitcher },
  data() {
    return {
      width: 0,
      showAbout: false,
      showMinistries: false,
      showMission: false,
      showGetInvolve: false,
      showNews: false,
      openOnce: false
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  unmounted() {
    window.removeEventListener('resize', this.handleResize)
  },
  watch: {
    width(newValue) {
      if (newValue > 1200) {
        this.resetNavbarState()
      }
    },
    currentRoute() {
      this.closeSidebar()
    }
  },
  methods: {
    handleNavbarClick(args) {
      if (this.isBelowTabletScreen) {
        event.preventDefault()
        if (this.openOnce) this.goToSelectedRoute(args)
        this.showSelectedDropdownMenu(args)
      }
    },
    showSelectedDropdownMenu(menu) {
      this.showAbout = menu === Field.ABOUT
      this.showMinistries = menu === Field.MINISTRIES
      this.showMission = menu === Field.MISSION
      this.showGetInvolve = menu === Field.GET_INVOLVED
      this.showNews = menu === Field.NEWS
      this.openOnce = true
    },
    goToSelectedRoute(route) {
      let RouteName
      if (this.showAbout && route == Field.ABOUT) {
        RouteName = Field.ABOUT
      } else if (this.showMinistries && route == Field.MINISTRIES) {
        RouteName = Field.MINISTRIES
      } else if (this.showMission && route == Field.MISSION) {
        RouteName = Field.MISSION
      } else if (this.showGetInvolve && route == Field.GET_INVOLVED) {
        RouteName = Field.GET_INVOLVED
      } else if (this.showNews && route == Field.NEWS) {
        RouteName = Field.NEWS
      }
      if (RouteName) router.push({ name: RouteName })
    },
    handleResize() {
      this.width = window.innerWidth
    },
    onClickLogo() {
      router.push('/')
    },
    closeSidebar() {
      this.openOnce = false
      this.resetNavbarState()
      this.$refs.sidebarActive.checked = false
    },
    resetNavbarState() {
      this.showAbout = false
      this.showMinistries = false
      this.showMission = false
      this.showGetInvolve = false
      this.showNews = false
    }
  },
  computed: {
    isBelowTabletScreen() {
      return this.width < 1200 // the same as CSS , @media (max-width: 1200px) {
    },
    currentRoute() {
      return this.$route.name
    }
  }
}
</script>

<template>
  <nav class="Navbar">
    <input type="checkbox" id="sidebar-active" ref="sidebarActive" />
    <div class="navbar-mobile">
      <div class="navbar-search-icon-mobile">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"
          ></path>
        </svg>
      </div>
      <div class="navbar-logo-mobile">
        <img src="../assets/img/crossroads-logo-01.png" alt="" @click="onClickLogo()" />
      </div>
      <label for="sidebar-active" class="open-sidebar-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="32px"
          viewBox="0 -960 960 960"
          width="32px"
          fill="#5f6368"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </label>
    </div>
    <label for="sidebar-active" class="overlay"></label>
    <div class="links-container">
      <label for="sidebar-active" class="close-sidebar-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="32px"
          viewBox="0 -960 960 960"
          width="32px"
          fill="#5f6368"
        >
          <path
            d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
          />
        </svg>
      </label>
      <div class="navbar-logo-desktop">
        <img src="../assets/img/crossroads-logo-01.png" alt="" @click="onClickLogo()" />
      </div>
      <div class="dropdown-menu">
        <span class="dropdown-menu-inline" @click="handleNavbarClick('about')">
          <a href="/about" v-t="'about'"> </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="32px"
            viewBox="0 -960 960 960"
            width="32px"
            fill="#5f6368"
          >
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
          </svg>
        </span>
        <div
          class="sub-menu sub-menu-about"
          :class="{ hidden: isBelowTabletScreen, 'flex-important': showAbout }"
        >
          <router-link :to="{ name: 'church-board' }" v-t="'church-board'"></router-link>
          <router-link :to="{ name: 'pastoral-team' }" v-t="'pastoral-team'"></router-link>
          <router-link :to="{ name: 'milestone' }" v-t="'milestone'"></router-link>
        </div>
      </div>
      <div class="dropdown-menu">
        <span class="dropdown-menu-inline" @click="handleNavbarClick('ministries')">
          <a href="/ministries" v-t="'ministries'"> </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="32px"
            viewBox="0 -960 960 960"
            width="32px"
            fill="#5f6368"
          >
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
          </svg>
        </span>
        <div
          class="sub-menu sub-menu-ministries"
          :class="{ hidden: isBelowTabletScreen, 'flex-important': showMinistries }"
        >
          <router-link :to="{ name: 'campus-ministry' }" v-t="'campus-ministry'"></router-link>
          <router-link :to="{ name: 'worship-ministry' }" v-t="'worship-ministry'"></router-link>
          <router-link :to="{ name: 'sport-ministry' }" v-t="'sport-ministry'"></router-link>
        </div>
      </div>
      <div class="dropdown-menu">
        <span class="dropdown-menu-inline" @click="handleNavbarClick('mission')">
          <a href="/mission" v-t="'mission'"> </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="32px"
            viewBox="0 -960 960 960"
            width="32px"
            fill="#5f6368"
          >
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
          </svg>
        </span>
        <div
          class="sub-menu sub-menu-mission"
          :class="{ hidden: isBelowTabletScreen, 'flex-important': showMission }"
        >
          <router-link :to="{ name: 'church-outreach' }" v-t="'church-outreach'"></router-link>
          <router-link
            :to="{ name: 'micro-enterprise-project' }"
            v-t="'micro-enterprise-project'"
          ></router-link>
          <router-link
            :to="{ name: 'certificate-in-ministry-leadership' }"
            v-t="'certificate-in-ministry-leadership'"
          ></router-link>
          <router-link :to="{ name: 'sponsor-a-child' }" v-t="'sponsor-a-child'"></router-link>
        </div>
      </div>
      <div class="dropdown-menu">
        <span class="dropdown-menu-inline" @click="handleNavbarClick('get-involved')">
          <a href="/get-involved" v-t="'get-involved'"> </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="32px"
            viewBox="0 -960 960 960"
            width="32px"
            fill="#5f6368"
          >
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
          </svg>
        </span>
        <div
          class="sub-menu sub-menu-get-involve"
          :class="{ hidden: isBelowTabletScreen, 'flex-important': showGetInvolve }"
        >
          <router-link
            :to="{ name: 'short-term-missions' }"
            v-t="'short-term-missions'"
          ></router-link>
          <router-link
            :to="{ name: 'professional-equipper' }"
            v-t="'professional-equipper'"
          ></router-link>
          <router-link :to="{ name: 'volunteer' }" v-t="'volunteer'"></router-link>
          <router-link :to="{ name: 'give' }" v-t="'give'"></router-link>
        </div>
      </div>
      <div class="dropdown-menu">
        <span class="dropdown-menu-inline" @click="handleNavbarClick('news')">
          <a href="/news" v-t="'news'"> </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="32px"
            viewBox="0 -960 960 960"
            width="32px"
            fill="#5f6368"
          >
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
          </svg>
        </span>
        <div
          class="sub-menu sub-menu-news"
          :class="{ hidden: isBelowTabletScreen, 'flex-important': showNews }"
        >
          <router-link :to="{ name: 'sunday-sermons' }" v-t="'sunday-sermons'"></router-link>
          <router-link :to="{ name: 'events' }" v-t="'events'"></router-link>
          <router-link :to="{ name: 'church-news' }" v-t="'church-news'"></router-link>
        </div>
      </div>
      <div class="dropdown-menu">
        <span class="dropdown-menu-inline">
          <router-link :to="{ name: 'contact' }" v-t="'contact'"></router-link>
        </span>
      </div>
      <div class="navbar-search-icon-desktop">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"
          ></path>
        </svg>
      </div>
      <div class="navbar-language-icon-desktop cursor-pointer">
        <LanguageSwitcher />
      </div>
    </div>
  </nav>
</template>

<style scoped>
.Navbar {
  height: var(--navbar-height);
  width: 100%;
  background-color: var(--secondary-color);
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.navbar-mobile {
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
}
.links-container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  z-index: 9999;
}
.dropdown-menu a {
  height: 100%;
  display: flex;
  align-items: center;
  color: var(--text-color);
  transition: 0.25s;
  text-transform: uppercase;
}
.dropdown-menu-inline {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.dropdown-menu:hover .contact {
  color: var(--primary-color);
}
.dropdown-menu-inline:hover a {
  color: var(--primary-color);
  transition: 0.25s;
}
.dropdown-menu-inline:hover svg {
  fill: var(--primary-color);
  transition: 0.25s;
}
.navbar-logo-mobile {
  display: flex;
  justify-content: center;
}
.navbar-logo-mobile img {
  max-height: var(--navbar-height);
  width: auto;
  cursor: pointer;
  padding: 3px 0;
}
.navbar-logo-desktop {
  display: flex;
  justify-content: center;
  margin-right: 120px;
}
.navbar-logo-desktop img {
  max-height: var(--navbar-height);
  width: auto;
  cursor: pointer;
  padding: 3px 0;
}
.navbar-search-icon-mobile {
  display: block;
  padding: 30px;
}
.navbar-search-icon-desktop {
  display: flex;
  justify-content: center;
  margin-left: 120px;
  cursor: pointer;
}
nav svg {
  fill: var(--text-color);
}
#sidebar-active {
  display: none;
}
.open-sidebar-button,
.close-sidebar-button {
  display: none;
}
.dropdown-menu {
  display: flex;
  position: relative;
  height: inherit;
}
.sub-menu {
  position: absolute;
  display: none;
  flex-direction: column;
  top: 100%;
  width: 260px;
  background-color: var(--secondary-color);
}
.sub-menu a {
  height: 60px;
  padding: 0 30px;
}
.sub-menu a:hover {
  background-color: var(--primary-color);
  color: var(--secondary-color);
}
.hero-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  color: var(--text-color);
  background-image: url(../assets/img/languages.jpg);
  background-size: cover;
}
/* Media query above tablet-screen */
@media (min-width: 1200px) {
  /* show sub-menu when hover */
  .dropdown-menu:hover .sub-menu {
    display: flex;
  }
  .navbar-search-icon-mobile {
    display: none;
  }
  .navbar-mobile {
    display: none;
  }
}
/* Media query below tablet-screen */
@media (max-width: 1200px) {
  nav {
    justify-content: flex-end;
  }
  .links-container {
    position: fixed;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    top: 0;
    right: -100%;
    z-index: 9999;
    width: 400px;
    height: 2000px;
    background-color: var(--secondary-color);
    box-shadow: -5px 0 5px rgba(0, 0, 0, 0.25);
    transition: 0.75s ease-out;
    gap: 0;
  }
  .navbar-logo-desktop {
    height: auto;
    width: 100%;
    margin: 0 0 20px;
  }
  .navbar-search-icon-desktop {
    display: none;
  }
  .navbar-language-icon-desktop {
    margin: 28px;
  }
  .dropdown-menu {
    flex-direction: column;
    height: auto;
    width: 100%;
    margin: 0 0 1px;
    padding: 16px 30px;
    border-bottom: solid 1px var(--border-color);
  }
  .dropdown-menu a {
    height: auto;
    width: fit-content;
    padding: 0;
  }
  .sub-menu {
    position: static;
    width: 100%;
  }
  .sub-menu a {
    height: auto;
    font-size: smaller;
    margin: 12px 20px 0;
    padding: 0;
  }
  .sub-menu a:hover {
    background-color: var(--secondary-color);
    color: var(--primary-color);
  }
  .hero-section {
    background-size: contain;
  }
  .open-sidebar-button,
  .close-sidebar-button {
    display: block;
    padding: 30px;
    cursor: pointer;
  }
  #sidebar-active:checked ~ .links-container {
    right: 0;
  }
  #sidebar-active:checked ~ .overlay {
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 9999;
  }
}
/* Media query below mobile-screen */
@media (max-width: 500px) {
  .links-container {
    width: 100%;
  }
}
</style>
