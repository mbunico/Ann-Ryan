<template>
  <section id="rsvp" class="section rsvp">
    <div class="container">
      <h2 class="section-title fade-in">RSVP</h2>
      <div class="form-container fade-in">
        <div 
          v-if="showSuccess"
          class="success-message"
        >
          Thank you for your RSVP! We can't wait to celebrate with you! 💕
        </div>
        
        <form v-else @submit.prevent="submitRsvp">
          <div class="form-group">
            <label for="name">Full Name *</label>
            <input 
              type="text" 
              id="name" 
              v-model="form.name"
              class="form-control" 
              required
            >
          </div>

          <div class="form-group">
            <label for="email">Email Address *</label>
            <input 
              type="email" 
              id="email" 
              v-model="form.email"
              class="form-control" 
              required
            >
          </div>

          <div class="form-group">
            <label>Will you be attending? *</label>
            <div class="radio-group">
              <div class="radio-item">
                <input 
                  type="radio" 
                  id="attending-yes" 
                  v-model="form.attending"
                  value="yes"
                  required
                >
                <label for="attending-yes">Yes, I'll be there!</label>
              </div>
              <div class="radio-item">
                <input 
                  type="radio" 
                  id="attending-no" 
                  v-model="form.attending"
                  value="no"
                  required
                >
                <label for="attending-no">Sorry, can't make it</label>
              </div>
            </div>
          </div>

          <div v-if="form.attending === 'yes'" class="form-group">
            <label for="guests">Number of Guests (including yourself)</label>
            <select id="guests" v-model="form.guests" class="form-control">
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
            </select>
          </div>

          <div v-if="form.attending === 'yes'" class="form-group">
            <label>Meal Preference *</label>
            <div class="radio-group">
              <div class="radio-item">
                <input 
                  type="radio" 
                  id="meal-chicken" 
                  v-model="form.meal"
                  value="chicken"
                  :required="form.attending === 'yes'"
                >
                <label for="meal-chicken">Herb Roasted Chicken</label>
              </div>
              <div class="radio-item">
                <input 
                  type="radio" 
                  id="meal-beef" 
                  v-model="form.meal"
                  value="beef"
                  :required="form.attending === 'yes'"
                >
                <label for="meal-beef">Grilled Beef Tenderloin</label>
              </div>
              <div class="radio-item">
                <input 
                  type="radio" 
                  id="meal-vegetarian" 
                  v-model="form.meal"
                  value="vegetarian"
                  :required="form.attending === 'yes'"
                >
                <label for="meal-vegetarian">Vegetarian Pasta</label>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label for="message">Special Message for the Couple</label>
            <textarea 
              id="message" 
              v-model="form.message"
              class="form-control" 
              rows="4" 
              placeholder="Share your well wishes, dietary restrictions, or any special notes..."
            ></textarea>
          </div>

          <button type="submit" class="btn-primary" :disabled="submitting">
            {{ submitting ? 'Sending...' : 'Send RSVP' }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
const form = reactive({
  name: '',
  email: '',
  attending: '',
  guests: '1',
  meal: '',
  message: ''
})

const showSuccess = ref(false)
const submitting = ref(false)

const submitRsvp = async () => {
  submitting.value = true
  
  // Simulate API call
  setTimeout(() => {
    showSuccess.value = true
    submitting.value = false
    
    // Scroll to success message
    nextTick(() => {
      const successEl = document.querySelector('.success-message')
      if (successEl) {
        successEl.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        })
      }
    })
  }, 500)
}
</script>

<style scoped>
.rsvp {
  background: var(--bg-light);
}

.form-container {
  max-width: 600px;
  margin: 0 auto;
  background: var(--white);
  padding: 60px;
  border-radius: 15px;
  box-shadow: var(--shadow);
}

.form-group {
  margin-bottom: 30px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  color: var(--primary-color);
  font-weight: 500;
  letter-spacing: 1px;
}

.form-control {
  width: 100%;
  padding: 15px 20px;
  border: 2px solid #eee;
  border-radius: 8px;
  font-size: 1rem;
  transition: var(--transition);
  background: var(--white);
}

.form-control:focus {
  outline: none;
  border-color: var(--accent-color);
  box-shadow: 0 0 0 3px rgba(212,175,55,0.1);
}

.radio-group {
  display: flex;
  gap: 20px;
  margin-top: 10px;
}

.radio-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.radio-item input[type="radio"] {
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #ddd;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
}

.radio-item input[type="radio"]:checked {
  border-color: var(--accent-color);
}

.radio-item input[type="radio"]:checked::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  background: var(--accent-color);
  border-radius: 50%;
}

.btn-primary {
  background: var(--accent-color);
  color: var(--white);
  border: none;
  padding: 18px 40px;
  border-radius: 8px;
  font-size: 1rem;
  letter-spacing: 1px;
  cursor: pointer;
  transition: var(--transition);
  width: 100%;
  margin-top: 20px;
}

.btn-primary:hover:not(:disabled) {
  background: #b8941f;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(212,175,55,0.3);
}

.btn-primary:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.success-message {
  background: #d4edda;
  color: #155724;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  text-align: center;
}

@media (max-width: 768px) {
  .form-container {
    padding: 40px 30px;
  }

  .radio-group {
    flex-direction: column;
  }
}
</style>