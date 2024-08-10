<template>
  <nav class="Navbar">
    <input type="checkbox" id="sidebar-active" />
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

      <div class="navbar-logo">
        <img src="../assets/img/crossroads-logo-01.png" alt="" onclick="" />
      </div>

      <div class="dropdown-menu">
        <a href="#"
          >About<svg
            xmlns="http://www.w3.org/2000/svg"
            height="32px"
            viewBox="0 -960 960 960"
            width="32px"
            fill="#5f6368"
          >
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg
        ></a>
        <div class="sub-menu">
          <a href="#">Vision</a>
          <a href="#">Team</a>
          <a href="#">Milestone</a>
        </div>
      </div>
      <div class="dropdown-menu">
        <a href="#"
          >Ministries<svg
            xmlns="http://www.w3.org/2000/svg"
            height="32px"
            viewBox="0 -960 960 960"
            width="32px"
            fill="#5f6368"
          >
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg
        ></a>
        <div class="sub-menu">
          <a href="#">Campus Ministry</a>
          <a href="#">Worship Ministry</a>
          <a href="#">Sport Ministry</a>
        </div>
      </div>
      <div class="dropdown-menu">
        <a href="#"
          >Mission<svg
            xmlns="http://www.w3.org/2000/svg"
            height="32px"
            viewBox="0 -960 960 960"
            width="32px"
            fill="#5f6368"
          >
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg
        ></a>
        <div class="sub-menu">
          <a href="#">Church Outreach</a>
          <a href="#">Micro-Enterprise Projects</a>
          <a href="#">Certificate In Ministry Leadership</a>
          <a href="#">Sponsor A Child</a>
        </div>
      </div>
      <div class="dropdown-menu">
        <a href="#"
          >Get Involved<svg
            xmlns="http://www.w3.org/2000/svg"
            height="32px"
            viewBox="0 -960 960 960"
            width="32px"
            fill="#5f6368"
          >
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg
        ></a>
        <div class="sub-menu">
          <a href="#">Short-Term Missions</a>
          <a href="#">Professional Equipper</a>
          <a href="#">Volunteer</a>
          <a href="#">Give</a>
        </div>
      </div>
      <div class="dropdown-menu">
        <a href="#"
          >News<svg
            xmlns="http://www.w3.org/2000/svg"
            height="32px"
            viewBox="0 -960 960 960"
            width="32px"
            fill="#5f6368"
          >
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" /></svg
        ></a>
        <div class="sub-menu">
          <a href="#">Sunday Sermons</a>
          <a href="#">Events</a>
          <a href="#">Church News</a>
        </div>
      </div>
      <div class="dropdown-menu"><a href="#">Contact</a></div>

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
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
html {
  font-size: 1rem;
  font-family: Poppins, Segoe UI, Tahoma, sans-serif;
}

.Navbar {
  height: var(--navbar-height);
  background-color: var(--secondary-color);
  display: flex;
  justify-content: center;
  align-items: center;
}

.links-container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.dropdown-menu a {
  height: 100%;
  display: flex;
  align-items: center;
  color: var(--text-color);
  transition: 0.25s;
  text-transform: uppercase;
}

.dropdown-menu a:hover {
  color: var(--primary-color);
}

.dropdown-menu a:hover svg {
  fill: var(--primary-color);
}

.navbar-logo {
  display: flex;
  justify-content: center;
  margin-right: 100px;
}

.navbar-logo img {
  max-height: var(--navbar-height);
  width: auto;
  cursor: pointer;
  padding: 3px 0;
}

.navbar-search-icon-desktop {
  display: flex;
  justify-content: center;
  margin-left: 100px;
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

.dropdown-menu:hover .sub-menu {
  display: flex;
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

@media (max-width: 1100px) {
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
    z-index: 10;
    width: 300px;
    background-color: var(--secondary-color);
    box-shadow: -5px 0 5px rgba(0, 0, 0, 0.25);
    transition: 0.75s ease-out;
    gap: 0;
  }

  .navbar-logo {
    height: auto;
    width: 100%;
    margin: 0 0 20px;
  }

  .navbar-search-icon-desktop {
    display: none;
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
    z-index: 9;
  }
}
</style>
