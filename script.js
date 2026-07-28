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

// Navbar background on scroll
const navbar = document.getElementById('navbar')
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50)
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
