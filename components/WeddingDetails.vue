<template>
  <section id="details" class="section">
    <div class="container">
      <h2 class="section-title fade-in">Our Wedding Journey</h2>
      
      <!-- Hero Detail Card -->
      <div class="hero-detail fade-in">
        <div class="hero-content">
          <div class="hero-icon">
            <Icon name="ep:calendar" class="calendar-icon" />
          </div>
          <div class="hero-text">
            <h3>Join us on</h3>
            <div class="date-display">
              <span class="day">Saturday</span>
              <span class="date">June 28</span>
              <span class="year">2025</span>
            </div>
            <p class="time">Ceremony begins at 3:00 PM</p>
          </div>
        </div>
      </div>

      <!-- Flowing Details Layout -->
      <div class="details-flow">
        
        <!-- Location Card -->
        <div class="detail-bubble left fade-in" @mouseover="showMap = true" @mouseleave="showMap = false">
          <div class="bubble-connector"></div>
          <div class="detail-content">
            <div class="detail-icon-small">
              <Icon name="ep:location" />
            </div>
            <h4>Where We'll Say "I Do"</h4>
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

        <!-- Reception Card -->
        <div class="detail-bubble right fade-in">
          <div class="bubble-connector"></div>
          <div class="detail-content">
            <div class="detail-icon-small">
              <Icon name="mynaui:reception-bell" />
            </div>
            <h4>Then We Celebrate</h4>
            <p>Reception immediately follows at the same venue</p>
            <p class="highlight">Until 7:00 PM</p>
          </div>
        </div>

        <!-- Dress Code Section -->
        <div class="detail-showcase fade-in">
          <div class="showcase-header">
            <div class="detail-icon-medium">
              <Icon name="ph:dress-duotone" />
            </div>
            <h4>Dress to Impress</h4>
            <p>Comfortable formal attire in our dreamy palette</p>
          </div>
          
          <div class="color-showcase">
            <div class="color-ribbon">
              <div class="color-flow">
                <div class="color-bubble" style="background: linear-gradient(135deg, #f2eae6)" data-color="Ivory"></div>
                <div class="color-bubble" style="background: linear-gradient(135deg, #e5d6cd)" data-color="Champagne"></div>
                <div class="color-bubble" style="background: linear-gradient(135deg, #d7c1b3)" data-color="Taupe"></div>
                <div class="color-bubble" style="background: linear-gradient(135deg, #caad9a)" data-color="Latte"></div>
                <div class="color-bubble" style="background: linear-gradient(135deg, #bd9881)" data-color="Mocha"></div>
              </div>
            </div>
            <div class="color-hint">
              <Icon name="ph:sparkle" class="sparkle-icon" />
              <span>Neutral earth tones & soft pastels</span>
            </div>
          </div>
        </div>

        <!-- Gift Guide -->
        <div class="detail-bubble left fade-in">
          <div class="bubble-connector"></div>
          <div class="detail-content">
            <div class="detail-icon-small">
              <Icon name="ph:gift" />
            </div>
            <h4>Gift of Love</h4>
            <div class="gift-poem">
              <p>With all that we have, we've been truly blessed.</p>
              <p>Your presence & prayers are all that we request.</p>
              <p>But if you desire to give nonetheless,</p>
              <p>monetary gift is the one we humbly suggest.</p>
            </div>
          </div>
        </div>

        <!-- Unplugged Ceremony -->
        <div class="detail-bubble right fade-in">
          <div class="bubble-connector"></div>
          <div class="detail-content">
            <div class="detail-icon-small">
              <Icon name="ph:church" />
            </div>
            <h4>Unplugged Ceremony</h4>
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
  </section>
</template>

<script setup>
import { ref } from 'vue'

const showMap = ref(false)
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

/* Hero Detail Card */
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
  height: 200%;
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
  width: 40px;
  height: 40px;
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
  font-size: 1.8rem;
  color: #2c3e50;
  font-weight: 300;
}

.date {
  font-size: 4rem;
  font-weight: bold;
  color: #d4af37;
  line-height: 1;
}

.year {
  font-size: 1.8rem;
  color: #2c3e50;
  font-weight: 300;
}

.time {
  font-size: 1.2rem;
  color: #666;
  font-style: italic;
}

/* Flowing Details */
.details-flow {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

.details-flow::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, #d4af37, transparent, #d4af37, transparent, #d4af37);
  transform: translateX(-50%);
  z-index: 0;
}

.detail-bubble {
  position: relative;
  margin: 60px 0;
  z-index: 1;
}

.detail-bubble.left {
  margin-left: 0;
  margin-right: 50%;
  padding-right: 40px;
}

.detail-bubble.right {
  margin-left: 50%;
  margin-right: 0;
  padding-left: 40px;
}

.bubble-connector {
  position: absolute;
  width: 15px;
  height: 15px;
  background: #d4af37;
  border-radius: 50%;
  top: 30px;
  box-shadow: 0 0 0 4px white, 0 0 0 6px #d4af37;
}

.detail-bubble.left .bubble-connector {
  right: -7px;
}

.detail-bubble.right .bubble-connector {
  left: -7px;
}

.detail-content {
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.detail-content:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 60px rgba(0,0,0,0.15);
}

.detail-icon-small {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #d4af37, #FFD700);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  color: white;
}

.detail-content h4 {
  color: #2c3e50;
  margin-bottom: 15px;
  font-size: 1.3rem;
}

.detail-content p {
  color: #666;
  margin-bottom: 8px;
  line-height: 1.5;
}

.highlight {
  color: #d4af37 !important;
  font-weight: 600;
}

/* Location Specific */
.location-map {
  width: 100%;
  height: 200px;
  border: none;
  border-radius: 10px;
  margin-top: 15px;
}

.venue {
  font-weight: 600;
  color: #2c3e50 !important;
  font-size: 1.1rem;
}

/* Showcase Section */
.detail-showcase {
  background: linear-gradient(135deg, white 0%, #faf8f2 100%);
  border-radius: 25px;
  padding: 40px;
  margin: 80px 0;
  text-align: center;
  box-shadow: 0 15px 50px rgba(0,0,0,0.1);
  position: relative;
  z-index: 1;
}

.showcase-header {
  margin-bottom: 30px;
}

.detail-icon-medium {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #d4af37, #FFD700);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: white;
}

.color-showcase {
  margin-top: 30px;
}

.color-ribbon {
  position: relative;
  margin-bottom: 25px;
}

.color-flow {
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
}

.color-bubble {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
  transition: all 0.4s ease;
  cursor: pointer;
  position: relative;
}

.color-bubble:hover {
  transform: scale(1.2) translateY(-10px);
  box-shadow: 0 15px 40px rgba(0,0,0,0.2);
}

.color-bubble::after {
  content: attr(data-color);
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.8rem;
  color: #666;
  opacity: 0;
  transition: opacity 0.3s ease;
  white-space: nowrap;
}

.color-bubble:hover::after {
  opacity: 1;
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

/* Gift and Ceremony specific */
.gift-poem {
  font-style: italic;
  line-height: 1.6;
}

.gift-poem p {
  margin-bottom: 5px;
}

.ceremony-note {
  text-align: center;
}

.gratitude {
  margin-top: 15px;
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
  
  .details-flow::before {
    left: 20px;
  }
  
  .detail-bubble.left,
  .detail-bubble.right {
    margin-left: 40px;
    margin-right: 0;
    padding-left: 20px;
    padding-right: 0;
  }
  
  .detail-bubble.left .bubble-connector,
  .detail-bubble.right .bubble-connector {
    left: -27px;
  }
  
  .detail-content {
    padding: 25px 20px;
  }
  
  .color-flow {
    gap: 10px;
    flex-wrap: wrap;
  }
  
  .color-bubble {
    width: 50px;
    height: 50px;
  }
  
  .detail-showcase {
    padding: 30px 20px;
    margin: 60px 0;
  }
}
</style>