<template>
  <section id="home" class="hero">
    <div class="hero-content">
      <h1>Anne & Ryan</h1>
      <div class="date">JUNE 28, 2025</div>
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
  background: linear-gradient(135deg, var(--bg-light) 0%, var(--white) 100%);
  position: relative;
}

.hero-content {
  animation: fadeInUp 1s ease-out;
}

.hero h1 {
  font-size: 4rem;
  font-weight: 300;
  margin-bottom: 20px;
  color: var(--primary-color);
  letter-spacing: 3px;
}

.hero .date {
  font-size: 1.2rem;
  color: var(--accent-color);
  letter-spacing: 2px;
  margin-bottom: 30px;
}

.hero .subtitle {
  font-size: 1rem;
  color: var(--text-light);
  letter-spacing: 1px;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }
}
</style>