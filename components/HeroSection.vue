<template>
  <section id="home" class="hero">
    <div class="hero-content">
      <!-- Desktop/Tablet Version -->
      <h1 class="desktop-names">Anne & Ryan</h1>
      
      <!-- Mobile Version -->
      <div class="mobile-names">
        <div class="name-line">
          <span class="name anne">Anne</span>
        </div>
        <div class="ampersand-container">
          <span class="ampersand">&</span>
          <div class="heart-decoration">♡</div>
        </div>
        <div class="name-line">
          <span class="name ryan">Ryan</span>
        </div>
      </div>
      
      <div class="date">June 28, 2025</div>
      <div class="subtitle">#ANNEditoAkoAtIkawAyNaRYAN</div>
      
      <!-- Floating Elements -->
      <div class="floating-elements">
        <div class="floating-heart heart-1">♡</div>
        <div class="floating-heart heart-2">♡</div>
        <div class="floating-heart heart-3">♡</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Import elegant wedding fonts */
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes:wght@400&family=Dancing+Script:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap');

.hero {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-image: url("/public/images/Blank.jpg");
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(1px);
}

.hero-content {
  animation: fadeInUp 1s ease-out;
  position: relative;
  z-index: 2;
}

/* Desktop Names */
.desktop-names {
  font-family: 'Great Vibes', cursive;
  font-size: 6.5rem;
  font-weight: 400;
  margin: 40px 0 40px 0;
  padding: 20px 0;
  background: linear-gradient(135deg, #d4af37 0%, #f4d03f 30%, #e6c547 50%, #f4d03f 70%, #d4af37 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 2px;
  text-shadow: 0 8px 32px rgba(212, 175, 55, 0.4);
  position: relative;
  line-height: 1.2;
  transform: rotate(-2deg);
  animation: gentleSway 4s ease-in-out infinite;
}

.desktop-names::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 3px;
  background: linear-gradient(to right, transparent, rgba(212, 175, 55, 0.8), transparent);
  border-radius: 2px;
  opacity: 0;
  animation: fadeInUp 1s ease-out 0.5s forwards;
}

/* Mobile Names */
.mobile-names {
  display: none;
  margin-bottom: 30px;
}

.name-line {
  margin: 25px 0;
  position: relative;
  padding: 5px 0;
}

.name {
  font-family: 'Great Vibes', cursive;
  font-size: 4.5rem;
  font-weight: 400;
  letter-spacing: 1px;
  display: inline-block;
  position: relative;
  background: linear-gradient(135deg, #d4af37 0%, #f4d03f 30%, #e6c547 50%, #f4d03f 70%, #d4af37 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: slideInName 1s ease-out forwards;
  line-height: 1.1;
  text-shadow: 0 4px 16px rgba(212, 175, 55, 0.3);
  padding: 10px 0;
}

.name.anne {
  animation-delay: 0.3s;
  transform: translateX(-50px) rotate(-3deg);
  opacity: 0;
}

.name.ryan {
  animation-delay: 0.8s;
  transform: translateX(50px) rotate(2deg);
  opacity: 0;
}

.name::before {
  content: '';
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: radial-gradient(ellipse at center, rgba(212, 175, 55, 0.05) 0%, transparent 70%);
  border-radius: 50%;
  z-index: -1;
  opacity: 0;
  animation: glowAppear 1s ease-out 1.5s forwards;
}

.ampersand-container {
  position: relative;
  margin: 25px 0;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ampersand {
  font-family: 'Playfair Display', serif;
  font-size: 3.5rem;
  color: #d4af37;
  font-weight: 400;
  font-style: italic;
  opacity: 0;
  animation: bounceIn 0.8s ease-out 1.3s forwards;
  position: relative;
  z-index: 2;
  text-shadow: 0 4px 12px rgba(212, 175, 55, 0.4);
  transform: rotate(-5deg);
}

.heart-decoration {
  position: absolute;
  font-size: 1.4rem;
  color: rgba(212, 175, 55, 0.7);
  animation: heartPulse 2.5s ease-in-out infinite;
  animation-delay: 2s;
  top: -12px;
  right: -18px;
  transform: rotate(15deg);
}

/* Date and Subtitle */
.date {
  font-family: 'Playfair Display', serif;
  font-size: 1.6rem;
  font-weight: 400;
  color: var(--accent-color, #d4af37);
  letter-spacing: 3px;
  margin-bottom: 30px;
  opacity: 0;
  animation: fadeInUp 1s ease-out 1.5s forwards;
  position: relative;
  font-variant: small-caps;
}

.date::before,
.date::after {
  content: '✦';
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #d4af37;
  font-size: 1rem;
  opacity: 0;
  animation: fadeInUp 1s ease-out 2s forwards;
}

.date::before {
  left: -40px;
  animation: sparkle 2s ease-in-out infinite;
  animation-delay: 3s;
}

.date::after {
  right: -40px;
  animation: sparkle 2s ease-in-out infinite;
  animation-delay: 3.5s;
}

.subtitle {
  font-family: 'Dancing Script', cursive;
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--text-light, #666);
  letter-spacing: 0.5px;
  opacity: 0;
  animation: fadeInUp 1s ease-out 2.5s forwards;
  font-style: normal;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* Floating Elements */
.floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.floating-heart {
  position: absolute;
  color: rgba(212, 175, 55, 0.4);
  font-size: 1.8rem;
  animation: floatElegant 8s ease-in-out infinite;
}

.heart-1 {
  top: 20%;
  left: 15%;
  animation-delay: 0s;
}

.heart-2 {
  top: 30%;
  right: 20%;
  animation-delay: 2.5s;
}

.heart-3 {
  bottom: 25%;
  left: 20%;
  animation-delay: 5s;
}

/* Enhanced Animations */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInName {
  0% {
    opacity: 0;
    transform: translateX(var(--slide-direction, 0)) rotate(var(--rotation, 0));
  }
  100% {
    opacity: 1;
    transform: translateX(0) rotate(var(--final-rotation, 0));
  }
}

@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0.3) rotate(-5deg);
  }
  50% {
    opacity: 1;
    transform: scale(1.1) rotate(-3deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(-5deg);
  }
}

@keyframes heartPulse {
  0%, 100% {
    transform: scale(1) rotate(15deg);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.3) rotate(20deg);
    opacity: 1;
  }
}

@keyframes floatElegant {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
    opacity: 0.4;
  }
  25% {
    transform: translateY(-15px) rotate(8deg);
    opacity: 0.7;
  }
  50% {
    transform: translateY(-25px) rotate(-5deg);
    opacity: 0.9;
  }
  75% {
    transform: translateY(-15px) rotate(6deg);
    opacity: 0.7;
  }
}

@keyframes gentleSway {
  0%, 100% {
    transform: rotate(-2deg);
  }
  50% {
    transform: rotate(-1deg);
  }
}

@keyframes sparkle {
  0%, 100% {
    transform: translateY(-50%) scale(1);
    opacity: 1;
  }
  50% {
    transform: translateY(-50%) scale(1.2);
    opacity: 0.7;
  }
}

@keyframes glowAppear {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .desktop-names {
    display: none;
  }
  
  .mobile-names {
    display: block;
  }
  
  .name {
    font-size: calc(3rem + 2vw);
    line-height: 1.1;
    padding: 8px 0;
  }
  
  .name.anne {
    --slide-direction: -50px;
    --rotation: -3deg;
    --final-rotation: -2deg;
  }
  
  .name.ryan {
    --slide-direction: 50px;
    --rotation: 2deg;
    --final-rotation: 1deg;
  }
  
  .ampersand {
    font-size: calc(2rem + 1.5vw);
  }
  
  .ampersand-container {
    height: 60px;
    margin: 20px 0;
  }
  
  .date {
    font-size: calc(1.1rem + 1vw);
    letter-spacing: 2px;
  }
  
  .date::before,
  .date::after {
    display: none;
  }
  
  .subtitle {
    font-size: calc(1rem + 1vw);
    padding: 0 20px;
  }
  
  .floating-heart {
    font-size: 1.4rem;
  }
  
  .heart-decoration {
    font-size: 1.1rem;
    right: -12px;
    top: -10px;
  }
}

@media (max-width: 480px) {
  .name {
    font-size: 3.2rem;
    letter-spacing: 0.5px;
  }
  
  .ampersand {
    font-size: 2.5rem;
  }
  
  .ampersand-container {
    height: 55px;
    margin: 18px 0;
  }
  
  .date {
    font-size: 1.2rem;
    letter-spacing: 1.5px;
  }
  
  .subtitle {
    font-size: 1.1rem;
  }
}

/* Tablet adjustments */
@media (min-width: 769px) and (max-width: 1024px) {
  .desktop-names {
    font-size: 5.5rem;
  }
  
  .date {
    font-size: 1.4rem;
  }
  
  .subtitle {
    font-size: 1.3rem;
  }
}

/* Large screens */
@media (min-width: 1400px) {
  .desktop-names {
    font-size: 7.5rem;
  }
  
  .date {
    font-size: 1.8rem;
  }
  
  .subtitle {
    font-size: 1.6rem;
  }
}
</style>