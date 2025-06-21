<template>
  <section id="gallery" class="section">
    <div class="container">
      <h2 class="section-title fade-in">Our Moments</h2>
      <div class="gallery-grid">
        <div 
          v-for="(photo, index) in photos" 
          :key="index"
          class="gallery-item fade-in"
          @click="openModal(photo)"
        >
          <div class="gallery-placeholder">{{ photo.emoji }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const photos = ref([
  { emoji: '📸', alt: 'Photo 1' },
  { emoji: '💕', alt: 'Photo 2' },
  { emoji: '🌅', alt: 'Photo 3' },
  { emoji: '💍', alt: 'Photo 4' },
  { emoji: '🎉', alt: 'Photo 5' },
  { emoji: '❤️', alt: 'Photo 6' }
])

const openModal = (photo) => {
  // Placeholder for modal functionality
  console.log('Opening photo:', photo.alt)
}
</script>

<style scoped>
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 60px;
}

.gallery-item {
  aspect-ratio: 1;
  background: var(--bg-light);
  border-radius: 10px;
  overflow: hidden;
  transition: var(--transition);
  cursor: pointer;
  position: relative;
}

.gallery-item:hover {
  transform: scale(1.05);
  box-shadow: var(--shadow);
}

.gallery-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-light);
  font-size: 3rem;
}
</style>