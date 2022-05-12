document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("show")
})

ScrollReveal().reveal(".big")
ScrollReveal().reveal(".cards", { delay: 500 })
ScrollReveal().reveal(".banner", { delay: 500 })
ScrollReveal().reveal(".banner-v2", { delay: 500 })
