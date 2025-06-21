<template>
  <nav class="nav">
    <div class="container">
      <div class="nav-container">
        <NuxtLink to="/" class="logo">
          <span class="logo-text italic font-black">A & R</span>
        </NuxtLink>
        <ul class="nav-links" :class="{ active: mobileMenuOpen }">
          <li><a href="#home" @click="scrollToSection">Home</a></li>
          <li><a href="#details" @click="scrollToSection">Details</a></li>
          <li><a href="#story" @click="scrollToSection">Our Story</a></li>
          <li><a href="#gallery" @click="scrollToSection">Gallery</a></li>
          <li><a href="#qr" @click="scrollToSection">QR</a></li>
        </ul>
        <div class="mobile-menu" @click="toggleMobileMenu">
          <span/>
          <span/>
          <span/>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const scrollToSection = (e) => {
  e.preventDefault()
  const target = document.querySelector(e.target.getAttribute('href'))
  if (target) {
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
  mobileMenuOpen.value = false
}

onMounted(() => {
  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-container')) {
      mobileMenuOpen.value = false
    }
  })
})
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255,255,255,0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  transition: var(--transition);
  border-bottom: 1px solid rgba(212,175,55,0.1);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
}

.logo {
  font-size: 1.5rem;
  font-weight: 300;
  color: var(--primary-color);
  text-decoration: none;
  letter-spacing: 2px;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 40px;
}

.nav-links a {
  text-decoration: none;
  color: var(--text-light);
  font-size: 0.9rem;
  font-weight: 300;
  letter-spacing: 1px;
  transition: var(--transition);
  position: relative;
}

.nav-links a:hover {
  color: var(--accent-color);
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--accent-color);
  transition: var(--transition);
}

.nav-links a:hover::after {
  width: 100%;
}

.mobile-menu {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.mobile-menu span {
  width: 25px;
  height: 2px;
  background: var(--primary-color);
  margin: 3px 0;
  transition: var(--transition);
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: var(--white);
    flex-direction: column;
    padding: 20px;
    box-shadow: var(--shadow);
  }

  .nav-links.active {
    display: flex;
  }

  .mobile-menu {
    display: flex;
  }
}
</style>