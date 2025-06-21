export const useAnimations = () => {
  const initScrollAnimations = () => {
    if (import.meta.client) {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      }, observerOptions)

      // Observe all elements with fade-in class
      document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el)
      })

      return observer
    }
  }

  const smoothScrollTo = (targetId: string) => {
    if (import.meta.client) {
      const target = document.querySelector(targetId)
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
  }

  return {
    initScrollAnimations,
    smoothScrollTo
  }
}