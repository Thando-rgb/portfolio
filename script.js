// Navbar hide on scroll down, show on scroll up
const navbar = document.getElementById('navbar')
let lastScrollY = 0
let ticking = false

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const currentScrollY = window.scrollY
            const scrolled = currentScrollY > 50

            navbar.classList.toggle('scrolled', scrolled)

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                navbar.classList.add('nav-hidden')
            } else {
                navbar.classList.remove('nav-hidden')
            }

            lastScrollY = currentScrollY
            ticking = false
        })
        ticking = true
    }
})

// Back to top button
const backToTop = document.getElementById('back-to-top')

window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.scrollY > 400)
})

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
})

// Mobile menu toggle (checkbox-based)
const hamburgerInput = document.getElementById('hamburger-input')
const mobileMenu = document.getElementById('mobile-menu')

hamburgerInput.addEventListener('change', () => {
    mobileMenu.classList.toggle('hidden', !hamburgerInput.checked)
})

// Close mobile menu on link click
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburgerInput.checked = false
        mobileMenu.classList.add('hidden')
    })
})

// Fade-in on scroll (IntersectionObserver)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
        }
    })
}, { threshold: 0.1 })

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el))

// Live preview tooltip on hover
const MOBILE_BREAKPOINT = 768
const HOVER_DELAY = 500
const HIDE_DELAY = 100

if (window.innerWidth >= MOBILE_BREAKPOINT) {
    document.querySelectorAll('[data-preview]').forEach(trigger => {
        let tooltip = null
        let showTimeout = null
        let hideTimeout = null

        trigger.addEventListener('mouseenter', () => {
            clearTimeout(hideTimeout)

            showTimeout = setTimeout(() => {
                if (tooltip) {
                    tooltip.classList.add('active')
                    return
                }

                tooltip = document.createElement('div')
                tooltip.className = 'preview-tooltip'

                const iframe = document.createElement('iframe')
                iframe.setAttribute('sandbox', 'allow-same-origin')
                iframe.setAttribute('loading', 'lazy')
                iframe.setAttribute('title', 'Preview')
                tooltip.appendChild(iframe)

                trigger.appendChild(tooltip)

                // Load URL after DOM append for smoother appearance
                requestAnimationFrame(() => {
                    iframe.src = trigger.getAttribute('data-preview')
                    tooltip.classList.add('active')
                })
            }, HOVER_DELAY)
        })

        trigger.addEventListener('mouseleave', () => {
            clearTimeout(showTimeout)

            hideTimeout = setTimeout(() => {
                if (tooltip) {
                    tooltip.classList.remove('active')
                }
            }, HIDE_DELAY)
        })
    })
}
