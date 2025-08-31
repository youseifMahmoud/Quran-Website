// Islamic Website Effects - تأثيرات الموقع الإسلامي
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body
  body.style.opacity = "0"
  body.style.transition = "opacity 0.8s ease-in-out"

  setTimeout(() => {
    body.style.opacity = "1"
  }, 100)

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in")
      }
    })
  }, observerOptions)

  // مراقبة العناصر القابلة للتحريك
  const animatedElements = document.querySelectorAll(".feature-card, .quick-card, .hero-content, .section-title")
  animatedElements.forEach((el) => {
    el.classList.add("animate-element")
    observer.observe(el)
  })

  const cards = document.querySelectorAll(".feature-card, .quick-card")
  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px) scale(1.02)"
      this.style.boxShadow = "0 15px 35px rgba(0,0,0,0.15)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)"
      this.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)"
    })
  })

  const icons = document.querySelectorAll(".feature-icon i, .hero-icon")
  icons.forEach((icon) => {
    icon.addEventListener("mouseenter", function () {
      this.style.animation = "pulse 0.6s ease-in-out"
    })

    icon.addEventListener("animationend", function () {
      this.style.animation = ""
    })
  })

  const heroTitle = document.querySelector(".hero-content h1")
  if (heroTitle) {
    const text = heroTitle.textContent
    heroTitle.textContent = ""
    heroTitle.style.borderLeft = "2px solid white"

    let i = 0
    const typeWriter = () => {
      if (i < text.length) {
        heroTitle.textContent += text.charAt(i)
        i++
        setTimeout(typeWriter, 100)
      } else {
        heroTitle.style.borderLeft = "none"
      }
    }

    setTimeout(typeWriter, 1000)
  }

  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]')
  smoothScrollLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  function createParticles() {
    const particlesContainer = document.createElement("div")
    particlesContainer.className = "particles-container"
    document.body.appendChild(particlesContainer)

    for (let i = 0; i < 20; i++) {
      const particle = document.createElement("div")
      particle.className = "particle"
      particle.style.left = Math.random() * 100 + "%"
      particle.style.animationDelay = Math.random() * 10 + "s"
      particle.style.animationDuration = Math.random() * 10 + 10 + "s"
      particlesContainer.appendChild(particle)
    }
  }

  createParticles()

  const navbar = document.querySelector(".navbar")
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        navbar.style.backgroundColor = "rgba(52, 73, 94, 0.95)"
        navbar.style.backdropFilter = "blur(10px)"
      } else {
        navbar.style.backgroundColor = ""
        navbar.style.backdropFilter = ""
      }
    })
  }

  const buttons = document.querySelectorAll(".btn")
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      const ripple = document.createElement("span")
      ripple.className = "button-ripple"
      this.appendChild(ripple)

      setTimeout(() => {
        ripple.remove()
      }, 600)
    })
  })

  const counters = document.querySelectorAll(".counter")
  counters.forEach((counter) => {
    const target = Number.parseInt(counter.getAttribute("data-target"))
    let current = 0
    const increment = target / 100

    const updateCounter = () => {
      if (current < target) {
        current += increment
        counter.textContent = Math.ceil(current)
        setTimeout(updateCounter, 20)
      } else {
        counter.textContent = target
      }
    }

    observer.observe(counter)
    counter.addEventListener("animate-in", updateCounter)
  })

  function shakeElement(element) {
    element.style.animation = "shake 0.5s ease-in-out"
    setTimeout(() => {
      element.style.animation = ""
    }, 500)
  }

  const alerts = document.querySelectorAll(".alert")
  alerts.forEach((alert) => {
    setTimeout(() => {
      alert.style.opacity = "0"
      alert.style.transform = "translateY(-20px)"
      setTimeout(() => {
        alert.remove()
      }, 300)
    }, 5000)
  })

  document.addEventListener("click", (e) => {
    const wave = document.createElement("div")
    wave.className = "click-wave"
    wave.style.left = e.clientX + "px"
    wave.style.top = e.clientY + "px"
    document.body.appendChild(wave)

    setTimeout(() => {
      wave.remove()
    }, 1000)
  })
})

function initPageSpecificEffects() {
  const currentPage = window.location.pathname.split("/").pop()

  switch (currentPage) {
    case "quran-pages.html":
      initQuranPageEffects()
      break
    case "audio.html":
      initAudioPageEffects()
      break
    case "azkar.html":
      initAzkarPageEffects()
      break
  }
}

function initQuranPageEffects() {
  // تأثيرات خاصة بصفحة المصحف
  const pageNumbers = document.querySelectorAll(".page-number")
  pageNumbers.forEach((pageNum) => {
    pageNum.addEventListener("click", function () {
      this.style.transform = "scale(1.2)"
      this.style.color = "#2c5530"
      setTimeout(() => {
        this.style.transform = "scale(1)"
        this.style.color = ""
      }, 200)
    })
  })
}

function initAudioPageEffects() {
  // تأثيرات خاصة بصفحة الصوت
  const playButtons = document.querySelectorAll(".play-btn")
  playButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      this.style.animation = "spin 1s linear infinite"
    })
  })
}

function initAzkarPageEffects() {
  // تأثيرات خاصة بصفحة الأذكار
  const azkarCards = document.querySelectorAll(".azkar-card")
  azkarCards.forEach((card) => {
    card.addEventListener("click", function () {
      this.style.backgroundColor = "#f8f9fa"
      setTimeout(() => {
        this.style.backgroundColor = ""
      }, 300)
    })
  })
}

// تشغيل التأثيرات الخاصة بالصفحة
document.addEventListener("DOMContentLoaded", initPageSpecificEffects)
