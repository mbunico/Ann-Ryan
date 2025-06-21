<template>
  <section id="home" class="hero">
    <div class="hero-content">
      <h1>Anne & Ryan</h1>
      <div class="date">June 28, 2025</div>
      <div class="subtitle">Together forever starts now</div>
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
}

.hero-content {
  animation: fadeInUp 1s ease-out;
}

.hero h1 {
  font-size: 5rem;
  font-weight: 300;
  margin-bottom: 20px;
  background: linear-gradient(to right, #d4af37, #000);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 3px;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 5rem;
  }
}

.hero .date {
  font-size: 1.5rem;
  color: var(--accent-color);
  letter-spacing: 2px;
  margin-bottom: 30px;
  opacity: 0;
  animation: fadeInUp 1s ease-out 1s forwards;
}

@media (max-width: 768px) {
  .hero .date {
    font-size: 1.5rem;
  }
}

.hero .subtitle {
  font-size: 1.2rem;
  color: var(--text-light);
  letter-spacing: 1px;
  opacity: 0;
  animation: fadeInUp 1s ease-out 2s forwards;
}

@media (max-width: 768px) {
  .hero .subtitle {
    font-size: 1.2rem;
  }
}

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

</style>

