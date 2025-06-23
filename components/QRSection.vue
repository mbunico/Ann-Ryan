<template>
  <section id="qr" class="section red-pocket">
    <div class="container">
      <h2 class="section-title fade-in">A Gift of Love</h2>
      <p class="section-subtitle fade-in">
        Your presence on our special day is the greatest gift we could ever ask for.  
        If you feel moved to bless us with a token of your love,  
        we humbly welcome your generosity through the QR code below. 💞  
        Your kind gesture will help us begin our journey together with warmth and joy.
      </p>

      <div class="qr-wrapper fade-in">
        <img src="/images/qr.png" alt="Anne & Ryan QR Code" class="qr-img" />
        <p class="qr-caption">
          With grateful hearts, we thank you for your love, support, and thoughtful giving.
        </p>
        <a
          href="/images/qr.png"
          download="Anne-Ryan-LoveTokenQR.png"
          class="btn-primary"
        >
          Save QR Code
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.red-pocket {
  background: var(--bg-light);
  padding: 80px 20px;
  text-align: center;
}

.section-subtitle {
  color: var(--text-light);
  font-size: 1.1rem;
  margin-bottom: 30px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.qr-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.qr-img {
  width: 260px;
  max-width: 80vw;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.qr-img:hover {
  transform: scale(1.05);
}

.qr-caption {
  color: var(--text-light);
  font-style: italic;
}

.btn-primary {
  background: var(--accent-color);
  color: var(--white);
  border: none;
  padding: 14px 32px;
  border-radius: 8px;
  font-size: 1rem;
  letter-spacing: 1px;
  cursor: pointer;
  transition: var(--transition);
}

.btn-primary:hover {
  background: #b8941f;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(212, 175, 55, 0.3);
}
</style>
