// Add smooth animations and interactions
document.addEventListener('DOMContentLoaded', function() {
    
    // Typing Effect for Job Title
    const typingText = document.getElementById('typingText');
    const textToType = 'Fullstack Software Engineer';
    let charIndex = 0;
    
    function typeText() {
        if (charIndex < textToType.length) {
            typingText.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 100); // Speed of typing (100ms per character)
        }
    }
    
    // Start typing after a short delay
    setTimeout(typeText, 1000);
    
    // Add ripple effect to social links
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);
            
            const x = e.clientX - e.target.offsetLeft;
            const y = e.clientY - e.target.offsetTop;
            
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Profile image click effect
    const profileImg = document.getElementById('profileImg');
    
    // Handle missing profile image gracefully
    profileImg.addEventListener('error', function() {
        this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150"%3E%3Crect width="150" height="150" fill="%23667eea"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="60" fill="white"%3E?%3C/text%3E%3C/svg%3E';
    });

    // Add entrance animation to links
    socialLinks.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateX(-20px)';
        
        setTimeout(() => {
            link.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            link.style.opacity = '1';
            link.style.transform = 'translateX(0)';
        }, 100 * index);
    });

    // Add year update for copyright
    const currentYear = new Date().getFullYear();
    const footerText = document.querySelector('.footer p');
    if (footerText && footerText.textContent.includes('2025')) {
        footerText.textContent = footerText.textContent.replace('2025', currentYear);
    }

    // Card now uses CSS :hover on all devices (desktop and mobile)
    // Mobile browsers will trigger hover on tap/touch automatically
});

// Add scroll reveal effect (if needed for future sections)
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', reveal);
