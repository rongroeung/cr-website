<script>
import { RouterView } from 'vue-router'
export default {
  name: 'AdminLayout',
  components: { RouterView },
  data() {
    return {
      navigationItems: [
        { route: 'add-new-description', name: 'Add New Description' },
        { route: 'add-new-media', name: 'Add New Media' },
        { route: 'add-new-youtube', name: 'Add New Youtube' },
        { route: 'update-content-by-id', name: 'Update Content' },
        { route: 'add-new-content', name: 'Add New Content' }
      ],
      isCollapsed: false
    }
  },
  methods: {
    toggleNav() {
      this.isCollapsed = !this.isCollapsed
    },
    onClickLogo() {
      this.$router.push('/')
    },
    currentRoute(route) {
      return this.$route.name == route
    }
  }
}
</script>

<template>
  <div class="AdminLayout">
    <!-- Left Navigation -->
    <aside :class="{ collapsed: isCollapsed }" class="admin-nav">
      <button @click="toggleNav" class="toggle-btn">
        <span v-if="isCollapsed">→</span>
        <span v-else>←</span>
      </button>
      <nav :class="{ hidden: isCollapsed }" class="admin-nav-inner">
        <div class="navbar-logo-mobile">
          <img
            src="https://crossroadscambodia.church/cr-drive/cr-photos/cr-logo-001.png"
            alt="Crossroads Church Logo"
            @click="onClickLogo()"
          />
        </div>
        <ul>
          <template v-for="navigation in navigationItems" :key="navigation">
            <li class="list-item">
              <router-link
                :to="{ name: navigation.route }"
                :class="{ 'text-primary': currentRoute(navigation.route) }"
                >{{ navigation.name }}</router-link
              >
            </li>
          </template>
        </ul>
      </nav>
    </aside>

    <!-- Main Content Area -->
    <main class="admin-content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.AdminLayout {
  display: flex;
  height: 100vh;
}
.admin-nav-inner {
  margin: 1rem;
}

.admin-nav {
  width: 300px;
  background-color: var(--sub-secondary-color);
  color: white;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  transition: width 0.3s ease; /* Smooth transition for width */
  position: relative;
}

/* Collapsed state - shrink to 50px */
.admin-nav.collapsed {
  width: 0px;
}

/* Toggle button to collapse/expand the nav */
.toggle-btn {
  position: absolute;
  right: -55px;
  top: 10px;
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

.admin-nav ul {
  list-style-type: none;
  padding: 0;
}

.list-item {
  height: 50px;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  background-color: var(--secondary-color);
  text-decoration: none;
  color: var(--text-color);
  overflow: hidden;
  padding-right: 10px;
}

.list-item:hover {
  color: var(--primary-color);
  transition: 0.25s;
}

/* Right content area */
.admin-content {
  flex: 1;
  padding: 2rem;
  background-color: #c1c1c1;
  color: black;
  overflow-y: auto;
}
</style>
