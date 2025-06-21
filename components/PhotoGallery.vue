<template>
  <section id="gallery" class="section">
    <div class="container">
      <h2 class="section-title fade-in">Our Moments</h2>
      <div class="floating-gallery">
        <div 
          v-for="(photo, index) in photos" 
          :key="index"
          class="floating-photo fade-in"
          :style="photo.style"
          @click="openModal(index)"
        >
          <img :src="photo.src" :alt="photo.alt" />
        </div>
      </div>
    </div>

    <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <button class="close-btn" @click="closeModal">&times;</button>
        <button class="nav-btn left" @click.stop="prevSlide">&#10094;</button>
        <transition name="fade" mode="out-in">
          <img
            :key="currentPhoto.src"
            :src="currentPhoto.src"
            :alt="currentPhoto.alt"
            class="modal-img"
          />
        </transition>
        <button class="nav-btn right" @click.stop="nextSlide">&#10095;</button>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, computed } from 'vue'

const photos = ref([
  {
    src: "/images/1.jpg",
    alt: "Photo 1",
    style: "top: 20px; left: 10%; transform: rotate(-3deg); width: 180px;"
  },
  {
    src: "/images/3.jpg",
    alt: "Photo 2",
    style: "top: 100px; right: 10%; transform: rotate(5deg); width: 220px;"
  },
  {
    src: "/images/2.jpg",
    alt: "Photo 3",
    style: "top: 220px; left: 20%; transform: rotate(-2deg); width: 200px;"
  },
  {
    src: "/images/4.jpg",
    alt: "Photo 4",
    style: "top: 320px; right: 15%; transform: rotate(3deg); width: 190px;"
  },
])

const showModal = ref(false)
const currentIndex = ref(0)

const currentPhoto = computed(() => photos.value[currentIndex.value])

const openModal = (index) => {
  currentIndex.value = index
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
}

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % photos.value.length
}

const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + photos.value.length) % photos.value.length
}
</script>
<style scoped>
.section {
  background-image: url("/images/3116361.jpg");
  position: relative;
  padding: 50px 0;
}

.floating-gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 60px;
  padding: 20px;
}

.floating-photo {
  cursor: pointer;
  transition: transform 0.4s ease, box-shadow 0.3s ease;
  z-index: 1;
}
.floating-photo:hover {
  transform: scale(1.05) rotate(0deg) !important;
  z-index: 2;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.floating-photo img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: var(--shadow);
}

/* Modal styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}
.modal-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
  background: #000;
  border-radius: 10px;
  padding: 20px;
}
.modal-img {
  max-width: 90vw;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 10px;
}
.close-btn,
.nav-btn {
  position: absolute;
  background: transparent;
  border: none;
  font-size: 2rem;
  color: white;
  cursor: pointer;
  z-index: 1001;
}
.close-btn {
  top: 10px;
  right: 15px;
}
.nav-btn.left {
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}
.nav-btn.right {
  top: 50%;
  right: 0;
  transform: translateY(-50%);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .floating-gallery {
    gap: 10px;
  }
  .floating-photo {
    width: calc(50% - 10px);
  }
  .modal-content {
    padding: 10px;
  }
}
</style>

