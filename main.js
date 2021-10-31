const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 900,
  reset: true
})

ScrollReveal().reveal('.card', { delay: 200 })
ScrollReveal().reveal('.date', { delay: 400 })
ScrollReveal().reveal('.article', { delay: 600 })
