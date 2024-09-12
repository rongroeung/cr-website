<script>
import { RouterView } from 'vue-router'
export default {
  name: 'AdminLayout',
  components: { RouterView },
  data() {
    return {
      navigationItems: [
        { route: 'add-new-content', name: 'AddNewContent' },
        { route: 'add-new-description', name: 'AddNewDescription' },
        { route: 'add-new-media', name: 'AddNewMedia' },
        { route: 'add-new-youtube', name: 'AddNewYoutube' },
        { route: 'update-content-by-id', name: 'UpdateContentById' }
      ],
      isCollapsed: false // State to manage collapsed navigation
    }
  },
  methods: {
    toggleNav() {
      this.isCollapsed = !this.isCollapsed // Toggle the collapsed state
    }
  }
}
</script>

<template>
  <div class="AdminLayout">
    <!-- Left Navigation -->
    <aside :class="{ collapsed: isCollapsed }" class="admin-nav">
      <button @click="toggleNav" class="toggle-btn">
        <!-- Use an icon or text for toggle -->
        <span v-if="isCollapsed">→</span>
        <span v-else>←</span>
      </button>
      <nav>
        <ul>
          <template v-for="navigation in navigationItems" :key="navigation">
            <li class="list-item">
              <router-link :to="{ name: navigation.route }">{{ navigation.name }}</router-link>
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
  height: 100vh; /* Full screen height */
}

/* Left navigation panel */
.admin-nav {
  width: 300px;
  background-color: #2c3e50;
  color: white;
  padding: 1rem;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  transition: width 0.3s ease; /* Smooth transition for width */
  position: relative;
}

/* Collapsed state - shrink to 50px */
.admin-nav.collapsed {
  width: 70px;
}

/* Toggle button to collapse/expand the nav */
.toggle-btn {
  position: absolute;
  top: 10px;
  right: -25px;
  background-color: #34495e;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.admin-nav ul {
  list-style-type: none;
  padding: 0;
}

.list-item {
  margin: 10px 0;
  padding: 15px 10px;
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
  background-color: var(--secondary-color);
  overflow-y: auto;
}

/* Responsive for smaller screens */
@media (max-width: 768px) {
  .admin-nav ul {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .admin-nav li {
    margin: 5px 0;
  }
}
</style>
