<template>
  <section id="details" class="section">
    <div class="container">
      <h2 class="section-title fade-in">Our Wedding Journey</h2>
      
      <!-- Hero Detail Card -->
      <div class="hero-detail fade-in">
        <div class="hero-content">
          <!-- <div class="hero-icon">
            <Icon name="ep:calendar" class="calendar-icon" />
          </div> -->
          <div class="hero-text">
            <!-- <h3>Join us on</h3> -->
            <div class="date-display">
              <span class="day">Saturday</span>
              <span class="date">June 28,</span>
              <span class="year">2025</span>
            </div>
            <p class="time">Ceremony begins at 3:00 PM</p>
          </div>
        </div>
      </div>

      <!-- Carousel Container -->
      <div class="carousel-container fade-in">
        <div class="carousel-wrapper">
          <!-- Navigation Dots -->
          <div class="carousel-dots">
            <button 
              v-for="(slide, index) in slides" 
              :key="index"
              :class="['dot', { active: currentSlide === index }]"
              @click="goToSlide(index)"
            >
              <Icon :name="slide.icon" />
            </button>
          </div>

          <!-- Carousel Track -->
          <div class="carousel-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
            
            <!-- Location Slide -->
            <div class="carousel-slide">
              <div class="detail-card location-card" @mouseover="showMap = true" @mouseleave="showMap = false">
                <div class="card-header">
                  <div class="detail-icon">
                    <Icon name="ep:location" />
                  </div>
                  <h4>Where We'll Say "I Do"</h4>
                </div>
                <div class="card-content">
                  <div v-if="!showMap" class="location-info">
                    <p class="venue">LJ Mega Convention</p>
                    <p class="address">Gumamela Street, Butuan City</p>
                  </div>
                  <iframe
                    v-if="showMap"
                    class="location-map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.321002042453!2d125.5355888!3d8.9360443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3301c04b432c0001%3A0x5a4c59bb07a899b6!2sLJ%20Mega%20Convention%20Hall!5e0!3m2!1sen!2sph!4v1718955600000!5m2!1sen!2sph"
                    loading="lazy">
                  </iframe>
                </div>
              </div>
            </div>

            <!-- Reception Slide -->
            <div class="carousel-slide">
              <div class="detail-card reception-card">
                <div class="card-header">
                  <div class="detail-icon">
                    <Icon name="mynaui:reception-bell" />
                  </div>
                  <h4>Then We Celebrate</h4>
                </div>
                <div class="card-content">
                  <p>Reception immediately follows at the same venue</p>
                  <p class="highlight">Until 7:00 PM</p>
                  <div class="celebration-visual">
                    <div class="celebration-bubbles">
                      <div class="bubble"></div>
                      <div class="bubble"></div>
                      <div class="bubble"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Dress Code Slide -->
            <div class="carousel-slide">
              <div class="detail-card dress-card">
                <div class="card-header">
                  <div class="detail-icon">
                    <Icon name="ph:dress-duotone" />
                  </div>
                  <h4>Dress Code</h4>
                </div>
                <div class="card-content">
                  <p>Comfortable formal attire in our dreamy palette</p>
                  <div class="color-showcase">
                    <div class="color-flow">
                      <div class="color-bubble" style="background: linear-gradient(135deg, #f2eae6)" data-color="Ivory"></div>
                      <div class="color-bubble" style="background: linear-gradient(135deg, #e5d6cd)" data-color="Champagne"></div>
                      <div class="color-bubble" style="background: linear-gradient(135deg, #d7c1b3)" data-color="Taupe"></div>
                      <div class="color-bubble" style="background: linear-gradient(135deg, #caad9a)" data-color="Latte"></div>
                      <div class="color-bubble" style="background: linear-gradient(135deg, #bd9881)" data-color="Mocha"></div>
                    </div>
                    <div class="color-hint">
                      <Icon name="ph:sparkle" class="sparkle-icon" />
                      <span>Neutral earth tones & soft pastels</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Gift Slide -->
            <div class="carousel-slide">
              <div class="detail-card gift-card">
                <div class="card-header">
                  <div class="detail-icon">
                    <Icon name="ph:gift" />
                  </div>
                  <h4>Gift of Love</h4>
                </div>
                <div class="card-content">
                  <div class="gift-poem">
                    <p>With all that we have, we've been truly blessed.</p>
                    <p>Your presence & prayers are all that we request.</p>
                    <p>But if you desire to give nonetheless,</p>
                    <p>monetary gift is the one we humbly suggest.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Ceremony Slide -->
            <div class="carousel-slide">
              <div class="detail-card ceremony-card">
                <div class="card-header">
                  <div class="detail-icon">
                    <Icon name="ph:church" />
                  </div>
                  <h4>Unplugged Ceremony</h4>
                </div>
                <div class="card-content">
                  <div class="ceremony-note">
                    <p>Please kindly remain seated and avoid crossing</p>
                    <p>the aisle during the ceremony.</p>
                    <p>You're welcome to take photos after the ceremony</p>
                    <p>and at the reception</p>
                    <div class="gratitude">Thank you for understanding ♡</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Carousel Indicators -->
        <!-- <div class="carousel-indicators">
          <span class="indicator-text">{{ currentSlide + 1 }} of {{ slides.length }}</span>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showMap = ref(false)
const currentSlide = ref(0)

const slides = [
  { icon: 'ep:location', title: 'Location' },
  { icon: 'mynaui:reception-bell', title: 'Reception' },
  { icon: 'ph:dress-duotone', title: 'Dress Code' },
  { icon: 'ph:gift', title: 'Gifts' },
  { icon: 'ph:church', title: 'Ceremony' }
]

const goToSlide = (index) => {
  currentSlide.value = index
}

const nextSlide = () => {
  if (currentSlide.value < slides.length - 1) {
    currentSlide.value++
  }
}

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
  }
}

// Auto-advance carousel
let autoSlideInterval
const startAutoSlide = () => {
  autoSlideInterval = setInterval(() => {
    if (currentSlide.value < slides.length - 1) {
      currentSlide.value++
    } else {
      currentSlide.value = 0
    }
  }, 5000)
}

const stopAutoSlide = () => {
  clearInterval(autoSlideInterval)
}

// Touch/swipe support
let startX = 0
let startY = 0

const handleTouchStart = (e) => {
  startX = e.touches[0].clientX
  startY = e.touches[0].clientY
}

const handleTouchEnd = (e) => {
  const endX = e.changedTouches[0].clientX
  const endY = e.changedTouches[0].clientY
  const diffX = startX - endX
  const diffY = startY - endY

  // Only process horizontal swipes
  if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
    if (diffX > 0) {
      nextSlide()
    } else {
      prevSlide()
    }
  }
}

onMounted(() => {
  startAutoSlide()
  document.addEventListener('touchstart', handleTouchStart, { passive: true })
  document.addEventListener('touchend', handleTouchEnd, { passive: true })
})

onUnmounted(() => {
  stopAutoSlide()
  document.removeEventListener('touchstart', handleTouchStart)
  document.removeEventListener('touchend', handleTouchEnd)
})
</script>

<style scoped>
.section {
  background-image: url("/public/images/Blank.jpg");
  background-attachment: fixed;
  background-size: cover;
  position: relative;
  overflow: hidden;
}

.section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(2px);
}

.container {
  position: relative;
  z-index: 1;
}

/* Hero Detail Card (unchanged) */
.hero-detail {
  background: linear-gradient(135deg, #fff 0%, #f8f6f0 100%);
  border-radius: 30px;
  padding: 60px 40px;
  margin: 40px auto 80px;
  max-width: 600px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.1);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero-detail::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 400%;
  background: conic-gradient(from 0deg, transparent, rgba(212, 175, 55, 0.1), transparent);
  animation: rotate 20s linear infinite;
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 30px;
  background: linear-gradient(135deg, #d4af37, #FFD700);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 30px rgba(212, 175, 55, 0.3);
}

.calendar-icon {
  width: 30px;
  height: 30px;
  color: white;
}

.date-display {
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 15px;
  margin: 20px 0;
  flex-wrap: wrap;
}

.day {
  font-family: 'Great Vibes', cursive;
  font-size: 1.8rem;
  color: #2c3e50;
  font-weight: 300;
}

.date {
  font-family: 'Great Vibes', cursive;
  font-size: 3rem;
  font-weight: 200;
  color: #d4af37;
  line-height: 1;
  font-style: italic;
}

.year {
  font-family: 'Great Vibes', cursive;
  font-size: 2rem;
  color: #d9b747;
  font-weight: 300;
}

.time {
  font-size: 1.2rem;
  color: #666;
  font-style: italic;
}

/* Carousel Styles */
.carousel-container {
  max-width: 600px;
  margin: 0 auto;
  position: relative;
}

.carousel-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 25px;
  box-shadow: 0 15px 50px rgba(0,0,0,0.1);
}

.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 30px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 25px 25px 0 0;
}

.dot {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid #e0e0e0;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #999;
}

.dot:hover {
  border-color: #d4af37;
  color: #d4af37;
  transform: translateY(-2px);
}

.dot.active {
  background: linear-gradient(135deg, #d4af37, #FFD700);
  border-color: #d4af37;
  color: white;
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(212, 175, 55, 0.3);
}

.carousel-track {
  display: flex;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.carousel-slide {
  min-width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 20px;
}

.detail-card {
  background: linear-gradient(135deg, white 0%, #faf8f2 100%);
  border-radius: 0 0 25px 25px;
  padding: 40px;
  width: 100%;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
}

.card-header {
  text-align: center;
  margin-bottom: 30px;
}

.detail-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #d4af37, #FFD700);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: white;
  box-shadow: 0 8px 25px rgba(212, 175, 55, 0.3);
}

.card-header h4 {
  color: #2c3e50;
  font-size: 1.5rem;
  margin: 0;
}

.card-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.card-content p {
  color: #666;
  margin-bottom: 15px;
  line-height: 1.6;
}

.highlight {
  color: #d4af37 !important;
  font-weight: 600;
  font-size: 1.2rem;
}

/* Navigation Arrows */
.carousel-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
}

.carousel-nav:hover:not(:disabled) {
  background: #d4af37;
  color: white;
  transform: translateY(-50%) scale(1.1);
}

.carousel-nav:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.carousel-nav.prev {
  left: -25px;
}

.carousel-nav.next {
  right: -25px;
}

.carousel-indicators {
  text-align: center;
  margin-top: 20px;
  padding: 10px;
}

.indicator-text {
  color: #666;
  font-size: 0.9rem;
  background: rgba(255, 255, 255, 0.9);
  padding: 8px 16px;
  border-radius: 20px;
  backdrop-filter: blur(10px);
}

/* Location Specific */
.location-map {
  width: 100%;
  height: 200px;
  border: none;
  border-radius: 15px;
  margin-top: 20px;
}

.venue {
  font-weight: 600;
  color: #2c3e50 !important;
  font-size: 1.2rem;
}

.address {
  color: #888 !important;
}

/* Reception Specific */
.celebration-visual {
  margin-top: 30px;
}

.celebration-bubbles {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.bubble {
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, #d4af37, #FFD700);
  border-radius: 50%;
  animation: float 2s ease-in-out infinite;
}

.bubble:nth-child(2) {
  animation-delay: 0.5s;
}

.bubble:nth-child(3) {
  animation-delay: 1s;
}

/* Color Showcase */
.color-showcase {
  margin-top: 30px;
}

.color-flow {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
}

.color-bubble {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  cursor: pointer;
}

.color-bubble:hover {
  transform: scale(1.1) translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
}

.color-hint {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 15px;
  background: rgba(212, 175, 55, 0.1);
  border-radius: 15px;
  border: 1px solid rgba(212, 175, 55, 0.2);
}

.sparkle-icon {
  color: #d4af37;
  animation: sparkle 2s ease-in-out infinite alternate;
}

/* Gift and Ceremony */
.gift-poem {
  font-style: italic;
  line-height: 1.6;
}

.gift-poem p {
  margin-bottom: 8px;
}

.ceremony-note {
  text-align: center;
}

.gratitude {
  margin-top: 20px;
  color: #d4af37;
  font-weight: 600;
  font-size: 1.1rem;
}

/* Animations */
@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes sparkle {
  0% { transform: scale(1); }
  100% { transform: scale(1.1); }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .hero-detail {
    padding: 40px 25px;
    margin: 20px auto 60px;
  }
  
  .date-display {
    gap: 10px;
  }
  
  .date {
    font-size: 3rem;
  }
  
  .day, .year {
    font-size: 1.4rem;
  }
  
  .carousel-container {
    margin: 0 10px;
  }
  
  .carousel-dots {
    gap: 10px;
    padding: 15px;
  }
  
  .dot {
    width: 50px;
    height: 50px;
  }
  
  .detail-card {
    padding: 30px 20px;
    min-height: 350px;
  }
  
  .carousel-nav {
    width: 40px;
    height: 40px;
  }
  
  .carousel-nav.prev {
    left: -20px;
  }
  
  .carousel-nav.next {
    right: -20px;
  }
  
  .color-flow {
    gap: 10px;
    flex-wrap: wrap;
  }
  
  .color-bubble {
    width: 40px;
    height: 40px;
  }
}

@media (max-width: 480px) {
  .carousel-nav.prev {
    left: 10px;
  }
  
  .carousel-nav.next {
    right: 10px;
  }
  
  .carousel-slide {
    padding: 0 10px;
  }
  
  .detail-card {
    padding: 25px 15px;
  }
}
</style>
