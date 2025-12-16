// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn")
const navMenu = document.getElementById("navMenu")

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active")
    mobileMenuBtn.classList.toggle("active")
  })
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  })
})

// Navbar Scroll Effect
let lastScroll = 0
const navbar = document.querySelector(".navbar")

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > 50) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }

  lastScroll = currentScroll
})

// Form Submission (Contact/Appointment)
const forms = document.querySelectorAll("form")

forms.forEach((form) => {
  form.addEventListener("submit", async (e) => {
    e.preventDefault()

    const formData = new FormData(form)
    const data = Object.fromEntries(formData)

    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]')
    const originalText = submitBtn.textContent
    submitBtn.textContent = "Submitting..."
    submitBtn.disabled = true

    try {
      // Send to API (replace with actual API endpoint)
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        alert("Thank you! We will contact you shortly.")
        form.reset()
      } else {
        alert("Something went wrong. Please call us at +91 9471373777")
      }
    } catch (error) {
      alert("Please call us directly at +91 9471373777")
    } finally {
      submitBtn.textContent = originalText
      submitBtn.disabled = false
    }
  })
})

// Review Rating Stars
const stars = document.querySelectorAll(".rating-star")
let selectedRating = 0

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    selectedRating = index + 1
    updateStars()
  })

  star.addEventListener("mouseenter", () => {
    highlightStars(index + 1)
  })
})

function updateStars() {
  stars.forEach((star, index) => {
    if (index < selectedRating) {
      star.classList.add("active")
    } else {
      star.classList.remove("active")
    }
  })
}

function highlightStars(count) {
  stars.forEach((star, index) => {
    if (index < count) {
      star.classList.add("hover")
    } else {
      star.classList.remove("hover")
    }
  })
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  console.log("Shree Dental Clinic Website Loaded")
})
