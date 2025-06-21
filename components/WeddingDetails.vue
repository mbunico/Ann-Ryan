<template>
  <section id="details" class="section">
    <div class="container">
      <h2 class="section-title fade-in">Wedding Details</h2>
      <div class="details-grid">
        <div class="detail-card fade-in">
          <div class="detail-icon" style="font-size: 2rem; color: white; fill: white;">&#9827;</div>
          <h3>When</h3>
          <p>Saturday, June 28, 2025</p>
          <p>3:00 PM</p>
        </div>
        <div class="detail-card fade-in">
          <div class="detail-icon" style="font-size: 2rem; color: white; fill: white;">&#128465;</div>
          <h3>Where</h3>
          <p>LJ Mega Convention</p>
          <p>Gumamela Street, Butuan City</p>
        </div>
        <div class="detail-card fade-in">
          <div class="detail-icon" style="font-size: 2rem; color: white; fill: white;">&#128444;</div>
          <h3>Reception</h3>
          <p>To follow at the same venue</p>
          <p>Until 7:00 PM</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.details-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 60px;
  margin-top: 60px;
}

.detail-card {
  text-align: center;
  padding: 40px 30px;
  background: var(--white);
  border-radius: 10px;
  box-shadow: var(--shadow);
  transition: var(--transition);
}

.detail-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0,0,0,0.12);
}

.detail-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 20px;
  background: var(--accent-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: var(--white);
}

.detail-card h3 {
  margin-bottom: 15px;
  font-size: 1.3rem;
  color: var(--primary-color);
}

.detail-card p {
  color: var(--text-light);
  margin-bottom: 5px;
}

@media (max-width: 768px) {
  .details-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}
</style>