export interface RsvpForm {
  name: string
  email: string
  attending: 'yes' | 'no' | ''
  guests: string
  meal: 'chicken' | 'beef' | 'vegetarian' | ''
  message: string
}

export const useRsvp = () => {
  const isSubmitting = ref(false)
  const isSubmitted = ref(false)
  const error = ref<string | null>(null)

  const submitRsvp = async (formData: RsvpForm) => {
    isSubmitting.value = true
    error.value = null

    try {
      // Simulate API call - replace with actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Here you would typically make an API call
      // const response = await $fetch('/api/rsvp', {
      //   method: 'POST',
      //   body: formData
      // })

      console.log('RSVP submitted:', formData)
      isSubmitted.value = true
      
      return { success: true }
    } catch (err) {
      error.value = 'Failed to submit RSVP. Please try again.'
      console.error('RSVP submission error:', err)
      return { success: false, error: error.value }
    } finally {
      isSubmitting.value = false
    }
  }

  const resetForm = () => {
    isSubmitted.value = false
    error.value = null
  }

  return {
    isSubmitting: readonly(isSubmitting),
    isSubmitted: readonly(isSubmitted),
    error: readonly(error),
    submitRsvp,
    resetForm
  }
}