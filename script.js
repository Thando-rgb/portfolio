// Navbar hide on scroll down, show on scroll up
const navbar = document.getElementById('navbar')
let lastScrollY = 0
let ticking = false

if (navbar) {
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const currentScrollY = window.scrollY

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
}

// Back to top button
const backToTop = document.getElementById('back-to-top')

if (backToTop) {
    window.addEventListener('scroll', () => {
        backToTop.classList.toggle('visible', window.scrollY > 400)
    })

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    })
}

// Stop bounce arrow after first scroll or 3 seconds
const scrollArrow = document.querySelector('#hero .animate-bounce')
if (scrollArrow) {
    const stopBounce = () => {
        scrollArrow.classList.remove('animate-bounce')
        window.removeEventListener('scroll', stopBounce)
    }
    window.addEventListener('scroll', stopBounce)
    setTimeout(stopBounce, 3000)
}

// Mobile menu toggle (checkbox-based)
const hamburgerInput = document.getElementById('hamburger-input')
const mobileMenu = document.getElementById('mobile-menu')

if (hamburgerInput && mobileMenu) {
    hamburgerInput.addEventListener('change', () => {
        mobileMenu.classList.toggle('open', hamburgerInput.checked)
        hamburgerInput.setAttribute('aria-expanded', hamburgerInput.checked)
    })

    // Close mobile menu on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburgerInput.checked = false
            mobileMenu.classList.remove('open')
            hamburgerInput.setAttribute('aria-expanded', 'false')
        })
    })
}

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

// Active section indicator in nav
const sections = document.querySelectorAll('section[id], footer[id]')
const navLinks = document.querySelectorAll('#navbar a[href^="#"]')

if (sections.length && navLinks.length) {
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id')
                navLinks.forEach(link => {
                    link.classList.toggle('text-accent', link.getAttribute('href') === `#${id}`)
                })
            }
        })
    }, { threshold: 0.3 })

    sections.forEach(section => sectionObserver.observe(section))
}

// Live preview tooltip on hover
const MOBILE_BREAKPOINT = 768
const HOVER_DELAY = 500
const HIDE_DELAY = 100

function initPreviewTooltips() {
    document.querySelectorAll('[data-preview]').forEach(trigger => {
        if (trigger.dataset.previewInit) return
        trigger.dataset.previewInit = 'true'

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

                const imageUrl = trigger.getAttribute('data-preview-image')
                if (imageUrl) {
                    const img = document.createElement('img')
                    img.setAttribute('alt', 'Live site preview')
                    img.setAttribute('loading', 'lazy')
                    img.style.width = '100%'
                    img.style.height = '100%'
                    img.style.objectFit = 'cover'
                    tooltip.appendChild(img)
                    trigger.appendChild(tooltip)
                    requestAnimationFrame(() => {
                        img.src = imageUrl
                        tooltip.classList.add('active')
                    })
                } else {
                    const iframe = document.createElement('iframe')
                    iframe.setAttribute('sandbox', 'allow-same-origin')
                    iframe.setAttribute('loading', 'lazy')
                    iframe.setAttribute('title', 'Preview')
                    tooltip.appendChild(iframe)
                    trigger.appendChild(tooltip)
                    requestAnimationFrame(() => {
                        iframe.src = trigger.getAttribute('data-preview')
                        tooltip.classList.add('active')
                    })
                }
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

// Init on load and re-check on resize
if (window.innerWidth >= MOBILE_BREAKPOINT) {
    initPreviewTooltips()
}

let resizeTimeout
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout)
    resizeTimeout = setTimeout(() => {
        if (window.innerWidth >= MOBILE_BREAKPOINT) {
            initPreviewTooltips()
        }
    }, 250)
})
