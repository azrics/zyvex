// Initialize Lucide icons
lucide.createIcons();

// Hero Slider Crossfade Logic
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 6500); // Crossfade every 6.5 seconds for a slow, premium cinematic feel
    }
});

// Simple sticky navbar effect & Active link highlighting
const nav = document.querySelector('nav');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            // Shadow effect
            if (window.scrollY > 20) {
                nav.classList.add('shadow-md');
                nav.classList.remove('py-2');
            } else {
                nav.classList.remove('shadow-md');
                nav.classList.add('py-2');
            }

            // Active section highlighting
            let current = '';
            const scrollY = window.pageYOffset;

            sections.forEach(section => {
                const sectionHeight = section.offsetHeight;
                const sectionTop = section.offsetTop - 150;
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('border-[#0a192f]', 'text-[#0a192f]', 'shadow-sm');
                link.classList.add('border-transparent', 'text-slate-500');

                if (current && link.getAttribute('href') === `#${current}`) {
                    link.classList.remove('border-transparent', 'text-slate-500');
                    link.classList.add('border-[#0a192f]', 'text-[#0a192f]', 'shadow-sm');
                }
            });

            // Update Vertical Scroll Dots (Minimalist)
            const scrollDots = document.querySelectorAll('.scroll-dot');
            scrollDots.forEach(dot => {
                dot.classList.remove('scale-[1.35]', 'bg-stone-500', 'shadow-sm');
                dot.classList.add('bg-stone-400');
                
                if (current && dot.getAttribute('data-target') === current) {
                    dot.classList.remove('bg-stone-400');
                    dot.classList.add('scale-[1.35]', 'bg-stone-500', 'shadow-sm');
                }
            });

            ticking = false;
        });
        ticking = true;
    }
});

// Web3Forms AJAX Submission (Silent Submit without Redirect)
const form = document.getElementById('contact-form');
const result = document.getElementById('result');

if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(form);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
        
        result.style.display = "block";
        result.innerHTML = "Sending message...";
        result.classList.remove("text-red-500", "text-green-500");
        result.classList.add("text-gray-500");

        fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            })
            .then(async (response) => {
                let json = await response.json();
                if (response.status == 200) {
                    result.innerHTML = "Message sent successfully!";
                    result.classList.remove("text-gray-500");
                    result.classList.add("text-green-500");
                } else {
                    console.log(response);
                    result.innerHTML = json.message || "An error occurred.";
                    result.classList.remove("text-gray-500");
                    result.classList.add("text-red-500");
                }
            })
            .catch(error => {
                console.log(error);
                result.innerHTML = "Something went wrong! Please try again later.";
                result.classList.remove("text-gray-500");
                result.classList.add("text-red-500");
            })
            .then(function() {
                form.reset();
                setTimeout(() => {
                    result.style.display = "none";
                }, 5000);
            });
    });
}

// Mobile Menu Toggle Logic
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
    });

    // Close menu when clicking a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex');
        });
    });
}
