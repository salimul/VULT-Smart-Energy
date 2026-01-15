
// Vanilla JS Implementation for VULT-Smart Energy

document.addEventListener('DOMContentLoaded', () => {
    
    // --- NAVIGATION LOGIC ---
    const header = document.getElementById('main-nav');
    const brand = document.getElementById('nav-brand');
    const subbrand = document.getElementById('nav-subbrand');
    const navLinks = document.querySelectorAll('.nav-link');
    const navCta = document.getElementById('nav-cta');
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const burgerIcon = document.getElementById('burger-icon');
    const mLinks = document.querySelectorAll('.m-link');

    // Handle Scroll Transitions
    const handleScroll = () => {
        if (!header || !brand || !subbrand || !mobileToggle || !navCta) return;

        if (window.scrollY > 50) {
            header.classList.add('bg-white', 'shadow-xl', 'py-4');
            header.classList.remove('bg-transparent', 'py-6', 'md:py-8');
            
            brand.classList.remove('text-white');
            brand.classList.add('text-navy');
            
            subbrand.classList.remove('text-white/80');
            subbrand.classList.add('text-sky');
            
            navLinks.forEach(link => {
                link.classList.remove('text-white');
                link.classList.add('text-navy');
            });

            navCta.classList.add('bg-navy', 'border-navy');
            navCta.classList.remove('border-white');
            navCta.classList.replace('text-white', 'text-white');

            mobileToggle.classList.remove('text-white');
            mobileToggle.classList.add('text-navy');
        } else {
            header.classList.remove('bg-white', 'shadow-xl', 'py-4');
            header.classList.add('bg-transparent', 'py-6', 'md:py-8');
            
            brand.classList.add('text-white');
            brand.classList.remove('text-navy');
            
            subbrand.classList.add('text-white/80');
            subbrand.classList.remove('text-sky');
            
            navLinks.forEach(link => {
                link.classList.add('text-white');
                link.classList.remove('text-navy');
            });

            navCta.classList.remove('bg-navy', 'border-navy');
            navCta.classList.add('border-white');
            
            mobileToggle.classList.add('text-white');
            mobileToggle.classList.remove('text-navy');
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial execution check

    // Mobile Menu Toggle logic
    const toggleMenu = () => {
        if (!mobileMenu || !burgerIcon || !header) return;
        
        const isOpen = mobileMenu.classList.toggle('active');
        if (isOpen) {
            burgerIcon.setAttribute('d', 'M6 18L18 6M6 6l12 12'); // Close icon
            header.classList.add('bg-white'); // Ensure header visibility
        } else {
            burgerIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16'); // Burger icon
            if (window.scrollY <= 50) header.classList.remove('bg-white');
        }
    };

    if (mobileToggle) {
        mobileToggle.addEventListener('click', toggleMenu);
    }

    // Auto-close mobile menu on selection
    mLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu && burgerIcon && header) {
                mobileMenu.classList.remove('active');
                burgerIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
                if (window.scrollY <= 50) header.classList.remove('bg-white');
            }
        });
    });


    // --- CALCULATOR LOGIC ---
    // Access input elements safely
    // Fix: Cast to HTMLInputElement to allow access to the 'value' property
    const billInput = document.getElementById('bill-input') as HTMLInputElement | null;
    const sunInput = document.getElementById('sun-input') as HTMLInputElement | null;
    
    const billValDisplay = document.getElementById('bill-val');
    const sunValDisplay = document.getElementById('sun-val');
    
    const resAnnual = document.getElementById('res-annual');
    const resCo2 = document.getElementById('res-co2');
    const resRoi = document.getElementById('res-roi');

    const updateCalculator = () => {
        if (!billInput || !sunInput) return;

        // Fix: Types narrowed to HTMLInputElement by the check above, but cast ensures value exists
        const bill = parseFloat(billInput.value);
        const sun = parseFloat(sunInput.value);

        // UI Indicators
        if (billValDisplay) billValDisplay.textContent = `$${bill}`;
        if (sunValDisplay) sunValDisplay.textContent = `${sun} hrs`;

        // Industrial model calculation
        const annualSpend = bill * 12;
        const coverageFactor = Math.min(0.95, (sun * 0.15)); 
        const efficiency = 0.989; 
        
        const savings = annualSpend * coverageFactor * efficiency;
        const lifetime = savings * 25; 
        const co2 = (savings * 0.55 / 1000).toFixed(1); 

        // Update results in DOM
        if (resAnnual) resAnnual.textContent = `$${Math.round(savings).toLocaleString()}`;
        if (resRoi) resRoi.textContent = `$${Math.round(lifetime).toLocaleString()}`;
        if (resCo2) resCo2.textContent = co2;
    };

    if (billInput && sunInput) {
        billInput.addEventListener('input', updateCalculator);
        sunInput.addEventListener('input', updateCalculator);
        updateCalculator(); // Initial calculation
    }

    // --- REVEAL ANIMATIONS ON SCROLL ---
    const observerOptions = {
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('section, .reveal').forEach(el => {
        observer.observe(el);
    });

});
