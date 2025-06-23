<template>
  <nav class="nav">
    <div class="container">
      <div class="nav-container">
        <NuxtLink to="/" class="logo">
          <div class="logo-wrapper">
            <span class="logo-ampersand">&</span>
            <div class="logo-letters">
              <span class="logo-letter">A</span>
              <span class="logo-letter">R</span>
            </div>
          </div>
          <div class="logo-subtitle">Together Forever</div>
        </NuxtLink>
        
        <ul class="nav-links" :class="{ active: mobileMenuOpen }">
          <li><a href="#home" @click="scrollToSection" class="nav-link">
            <span class="nav-text">Home</span>
          </a></li>
          <li><a href="#details" @click="scrollToSection" class="nav-link">
            <span class="nav-text">Details</span>
          </a></li>
          <li><a href="#story" @click="scrollToSection" class="nav-link">
            <span class="nav-text">Our Story</span>
          </a></li>
          <li><a href="#gallery" @click="scrollToSection" class="nav-link">
            <span class="nav-text">Gallery</span>
          </a></li>
          <li><a href="#qr" @click="scrollToSection" class="nav-link">
            <span class="nav-text">QR Code</span>
          </a></li>
        </ul>
        
        <div class="mobile-menu" @click="toggleMobileMenu" :class="{ active: mobileMenuOpen }">
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const scrollToSection = (e) => {
  e.preventDefault()
  
  // Get the href attribute from the clicked link
  const href = e.currentTarget.getAttribute('href')
  
  if (href) {
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    } else {
      // If target doesn't exist, scroll to top for #home
      if (href === '#home') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }
    }
  }
  
  // Close mobile menu after clicking
  mobileMenuOpen.value = false
}

onMounted(() => {
  // Close mobile menu when clicking outside
  const handleClickOutside = (e) => {
    if (!e.target.closest('.nav-container')) {
      mobileMenuOpen.value = false
    }
  }
  document.addEventListener('click', handleClickOutside)
  
  // Add scroll effect to navbar
  const nav = document.querySelector('.nav')
  const handleScroll = () => {
    if (window.scrollY > 50) {
      nav?.classList.add('scrolled')
    } else {
      nav?.classList.remove('scrolled')
    }
  }
  window.addEventListener('scroll', handleScroll)
  
  // Cleanup event listeners when component is unmounted
  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
    window.removeEventListener('scroll', handleScroll)
  })
})
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.nav {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  z-index: 1000;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border-bottom: 1px solid rgba(212, 175, 55, 0.15);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.05);
}

.nav.scrolled {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(212, 175, 55, 0.2);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  transition: all 0.3s ease;
}

.nav.scrolled .nav-container {
  padding: 10px 0;
}

/* Enhanced Logo Styles */
.logo {
  text-decoration: none;
  color: var(--primary-color, #8B4513);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease;
}

.logo:hover {
  transform: translateY(-2px);
}

.logo-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
}

.logo-ampersand {
  font-size: 3rem;
  font-weight: 100;
  font-family: 'Playfair Display', serif;
  color: var(--accent-color, #D4AF37);
  transform: rotate(-5deg);
  transition: all 0.3s ease;
  text-shadow: 0 2px 4px rgba(212, 175, 55, 0.2);
}

.logo:hover .logo-ampersand {
  transform: rotate(-5deg) scale(1.1);
  color: #B8860B;
}

.logo-letters {
  display: flex;
  flex-direction: column;
  gap: -5px;
}

.logo-letter {
  font-size: 2.2rem;
  font-weight: 700;
  font-family: 'Playfair Display', serif;
  color: var(--primary-color, #8B4513);
  letter-spacing: 2px;
  transition: all 0.3s ease;
  position: relative;
}

.logo-letter:first-child {
  transform: translateX(-3px);
}

.logo-letter:last-child {
  transform: translateX(3px);
}

.logo:hover .logo-letter {
  color: var(--accent-color, #D4AF37);
  text-shadow: 0 2px 4px rgba(212, 175, 55, 0.3);
}

.logo-subtitle {
  font-size: 0.7rem;
  font-weight: 300;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--text-light, #666);
  margin-top: 2px;
  opacity: 0.8;
  transition: all 0.3s ease;
}

.logo:hover .logo-subtitle {
  opacity: 1;
  letter-spacing: 4px;
}

/* Enhanced Navigation Links */
.nav-links {
  display: flex;
  list-style: none;
  gap: 35px;
  margin: 0;
  padding: 0;
}

.nav-link {
  text-decoration: none;
  color: var(--text-light, #666);
  font-size: 0.9rem;
  font-weight: 400;
  letter-spacing: 1px;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 25px;
  background: transparent;
  cursor: pointer;
}

.nav-link:hover {
  color: var(--accent-color, #D4AF37);
  background: rgba(212, 175, 55, 0.05);
  transform: translateY(-2px);
}

.nav-icon {
  font-size: 0.8rem;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s ease;
}

.nav-link:hover .nav-icon {
  opacity: 1;
  transform: translateX(0);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--accent-color, #D4AF37), transparent);
  transition: all 0.4s ease;
  transform: translateX(-50%);
  border-radius: 2px;
}

.nav-link:hover::after {
  width: 80%;
}

/* Enhanced Mobile Menu */
.mobile-menu {
  display: none;
  flex-direction: column;
  cursor: pointer;
  padding: 10px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.mobile-menu:hover {
  background: rgba(212, 175, 55, 0.1);
}

.hamburger-line {
  width: 28px;
  height: 3px;
  background: var(--primary-color, #8B4513);
  margin: 3px 0;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border-radius: 2px;
}

.mobile-menu.active .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
  background: var(--accent-color, #D4AF37);
}

.mobile-menu.active .hamburger-line:nth-child(2) {
  opacity: 0;
  transform: translateX(20px);
}

.mobile-menu.active .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
  background: var(--accent-color, #D4AF37);
}

/* Mobile Styles */
@media (max-width: 768px) {
  .nav-container {
    padding: 12px 20px;
  }
  
  .logo-ampersand {
    font-size: 2.5rem;
  }
  
  .logo-letter {
    font-size: 1.8rem;
  }
  
  .logo-subtitle {
    font-size: 0.6rem;
    letter-spacing: 2px;
  }
  
  .nav-links {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(20px);
    flex-direction: column;
    padding: 30px 20px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
    border-top: 1px solid rgba(212, 175, 55, 0.2);
    gap: 20px;
  }

  .nav-links.active {
    display: flex;
    animation: slideDown 0.3s ease-out;
  }
  
  .nav-link {
    justify-content: center;
    padding: 15px 20px;
    border-radius: 12px;
    background: rgba(212, 175, 55, 0.05);
    border: 1px solid rgba(212, 175, 55, 0.1);
  }
  
  .nav-link:hover {
    background: rgba(212, 175, 55, 0.1);
    transform: translateY(0) scale(1.02);
  }
  
  .nav-icon {
    opacity: 1;
    transform: translateX(0);
    font-size: 1rem;
  }

  .mobile-menu {
    display: flex;
  }
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Add some custom CSS variables if not defined */
:root {
  --primary-color: #8B4513;
  --accent-color: #D4AF37;
  --text-light: #666;
  --white: #ffffff;
  --transition: all 0.3s ease;
  --shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}
</style>