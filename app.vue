<template>
  <div>
    <audio id="bg-music" autoplay loop>
      <source src="/public/music/pachelbel.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
    <AppNavigation />
    <NuxtPage />
    <AppFooter />
  </div>
</template>

<script setup>
// Global styles and meta
useHead({
  title: 'Anne & Ryan',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ]
})
onMounted(() => {
  const audio = document.getElementById('bg-music')
  audio.volume = 0 // Start silent

  const tryPlay = () => {
    audio.play().then(() => {
      console.log("Music playing")

      // Fade in the volume gradually (e.g., 0 -> 1 in 5 seconds)
      let volume = 0
      const fadeIn = setInterval(() => {
        if (volume < 1) {
          volume += 0.02
          audio.volume = Math.min(volume, 1)
        } else {
          clearInterval(fadeIn)
        }
      }, 100) // 100ms steps = smooth 5s fade
    }).catch((err) => {
      console.warn("Autoplay blocked:", err)
    })

    document.removeEventListener('click', tryPlay)
  }

  document.addEventListener('click', tryPlay)
})

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary-color: #2c3e50;
  --accent-color: #d4af37;
  --text-light: #666;
  --bg-light: #fafafa;
  --white: #ffffff;
  --shadow: 0 4px 20px rgba(0,0,0,0.08);
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

body {
  font-family: 'Georgia', serif;
  line-height: 1.6;
  color: var(--primary-color);
  background: var(--white);
  overflow-x: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section {
  padding: 100px 0;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 300;
  margin-bottom: 60px;
  color: var(--primary-color);
  letter-spacing: 2px;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease-out;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Mobile Styles */
@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
}
</style>