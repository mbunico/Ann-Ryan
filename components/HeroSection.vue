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
      <div class="subtitle">Together forever starts now</div>
      
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
  font-size: 5rem;
  font-weight: 300;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #d4af37 0%, #f4d03f 50%, #d4af37 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 3px;
  text-shadow: 0 4px 20px rgba(212, 175, 55, 0.3);
  position: relative;
}

.desktop-names::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 2px;
  background: linear-gradient(to right, transparent, #d4af37, transparent);
  opacity: 0;
  animation: fadeInUp 1s ease-out 0.5s forwards;
}

/* Mobile Names */
.mobile-names {
  display: none;
  margin-bottom: 30px;
}

.name-line {
  margin: 15px 0;
  position: relative;
}

.name {
  font-size: 3.5rem;
  font-weight: 300;
  letter-spacing: 2px;
  display: inline-block;
  position: relative;
  background: linear-gradient(135deg, #d4af37 0%, #f4d03f 50%, #d4af37 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: slideInName 1s ease-out forwards;
}

.name.anne {
  animation-delay: 0.3s;
  transform: translateX(-50px);
  opacity: 0;
}

.name.ryan {
  animation-delay: 0.8s;
  transform: translateX(50px);
  opacity: 0;
}

.ampersand-container {
  position: relative;
  margin: 20px 0;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ampersand {
  font-size: 2.5rem;
  color: #d4af37;
  font-weight: 400;
  opacity: 0;
  animation: bounceIn 0.8s ease-out 1.3s forwards;
  position: relative;
  z-index: 2;
}

.heart-decoration {
  position: absolute;
  font-size: 1.2rem;
  color: rgba(212, 175, 55, 0.6);
  animation: heartPulse 2s ease-in-out infinite;
  animation-delay: 2s;
  top: -10px;
  right: -15px;
}

/* Date and Subtitle */
.date {
  font-size: 1.5rem;
  color: var(--accent-color);
  letter-spacing: 2px;
  margin-bottom: 30px;
  opacity: 0;
  animation: fadeInUp 1s ease-out 1.5s forwards;
  position: relative;
}

.date::before,
.date::after {
  content: '✦';
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #d4af37;
  font-size: 0.8rem;
  opacity: 0;
  animation: fadeInUp 1s ease-out 2s forwards;
}

.date::before {
  left: -30px;
}

.date::after {
  right: -30px;
}

.subtitle {
  font-size: 1.2rem;
  color: var(--text-light);
  letter-spacing: 1px;
  opacity: 0;
  animation: fadeInUp 1s ease-out 2.5s forwards;
  font-style: italic;
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
  color: rgba(212, 175, 55, 0.3);
  font-size: 1.5rem;
  animation: float 6s ease-in-out infinite;
}

.heart-1 {
  top: 20%;
  left: 15%;
  animation-delay: 0s;
}

.heart-2 {
  top: 30%;
  right: 20%;
  animation-delay: 2s;
}

.heart-3 {
  bottom: 25%;
  left: 20%;
  animation-delay: 4s;
}

/* Animations */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInName {
  0% {
    opacity: 0;
    transform: translateX(var(--slide-direction, 0));
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    opacity: 1;
    transform: scale(1.1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes heartPulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.6;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
    opacity: 0.3;
  }
  25% {
    transform: translateY(-10px) rotate(5deg);
    opacity: 0.6;
  }
  50% {
    transform: translateY(-20px) rotate(-5deg);
    opacity: 0.8;
  }
  75% {
    transform: translateY(-10px) rotate(3deg);
    opacity: 0.6;
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
    font-size: calc(2.5rem + 2vw);
  }
  
  .ampersand {
    font-size: calc(1.5rem + 1.5vw);
  }
  
  .date {
    font-size: calc(1rem + 1.5vw);
  }
  
  .date::before,
  .date::after {
    display: none;
  }
  
  .subtitle {
    font-size: calc(0.9rem + 1vw);
    padding: 0 20px;
  }
  
  .floating-heart {
    font-size: 1.2rem;
  }
  
  .heart-decoration {
    font-size: 1rem;
    right: -10px;
    top: -8px;
  }
}

@media (max-width: 480px) {
  .name {
    font-size: 2.8rem;
    letter-spacing: 1px;
  }
  
  .ampersand {
    font-size: 2rem;
  }
  
  .ampersand-container {
    height: 50px;
    margin: 15px 0;
  }
}

/* Tablet adjustments */
@media (min-width: 769px) and (max-width: 1024px) {
  .desktop-names {
    font-size: 4rem;
  }
}
</style>