// ================================
// Smooth Scroll for Navigation Links
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed nav
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ================================
// Active Navigation Highlighting
// ================================

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

function highlightNavigation() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ================================
// Fade-in Animation on Scroll
// ================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply fade-in to specific elements
const fadeElements = document.querySelectorAll(
    '.timeline-item, .publication-card, .skill-category'
);

fadeElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ================================
// Form Submission Handling
// ================================

const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        // Show loading state
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        try {
            const formData = new FormData(contactForm);
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                submitBtn.textContent = 'Message Sent!';
                submitBtn.style.backgroundColor = '#10b981';
                contactForm.reset();
                
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.backgroundColor = '';
                    submitBtn.disabled = false;
                }, 3000);
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            submitBtn.textContent = 'Error - Try Again';
            submitBtn.style.backgroundColor = '#ef4444';
            
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.backgroundColor = '';
                submitBtn.disabled = false;
            }, 3000);
        }
    });
}

// ================================
// Mobile Menu Toggle (if needed)
// ================================

// Currently the nav is always visible
// Add hamburger menu logic here if you want mobile menu later

// ================================
// CV Download Tracking (Optional)
// ================================

const cvLinks = document.querySelectorAll('a[href*="cv-federico-pardo.pdf"]');

cvLinks.forEach(link => {
    link.addEventListener('click', () => {
        console.log('CV downloaded');
        // Add analytics tracking here if needed
    });
});

// ================================
// Typing Effect for Hero Subtitle (Optional Enhancement)
// ================================

// Uncomment if you want a typing effect on the subtitle
/*
const subtitle = document.querySelector('.hero-subtitle');
const subtitleText = subtitle.textContent;
subtitle.textContent = '';

let charIndex = 0;
function typeSubtitle() {
    if (charIndex < subtitleText.length) {
        subtitle.textContent += subtitleText.charAt(charIndex);
        charIndex++;
        setTimeout(typeSubtitle, 50);
    }
}

// Start typing effect after a short delay
setTimeout(typeSubtitle, 500);
*/

// ================================
// Console Easter Egg
// ================================

console.log('%c👋 Hey there!', 'font-size: 20px; font-weight: bold;');
console.log('%cInterested in how this site was built?', 'font-size: 14px;');
console.log('%cCheck out the source: https://github.com/yourusername/fpardo-web', 'font-size: 12px; color: #3b82f6;');
console.log('%c\nLooking for a Research Engineer who builds production AI systems?', 'font-size: 14px; font-weight: bold; color: #10b981;');
console.log('%cLet\'s talk: federico.pardog@gmail.com', 'font-size: 12px;');


