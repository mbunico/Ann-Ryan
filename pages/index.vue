<template>
  <div>
    <HeroSection />
    <WeddingDetails />
    <LoveStory />
    <PhotoGallery />
    <QRSection />
  </div>
</template>

<script setup>
// Intersection Observer for fade-in animations
onMounted(() => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, observerOptions)

  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el)
  })
})
</script>