
// Vanilla JS Implementation for VULT-Smart Energy

document.addEventListener('DOMContentLoaded', () => {
    
    // NAVIGATION LOGIC
    const header = document.getElementById('main-nav');
    const brand = document.getElementById('nav-brand');
    const subbrand = document.getElementById('nav-subbrand');
    const navLinks = document.querySelectorAll('.nav-link');
    const navCta = document.getElementById('nav-cta');
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mLinks = document.querySelectorAll('.m-link');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('bg-white', 'shadow-xl', 'py-4');
            header.classList.remove('bg-transparent', 'py-8');
            brand.classList.replace('text-white', 'text-navy');
            subbrand.classList.replace('text-white/80', 'text-sky');
            navLinks.forEach(link => link.classList.replace('text-white', 'text-navy'));
            navCta.classList.replace('text-white', 'text-white');
            navCta.classList.add('bg-navy', 'border-navy');
            navCta.classList.remove('bg-white/10', 'border-white');
            mobileToggle.classList.replace('text-white', 'text-navy');
        } else {
            header.classList.remove('bg-white', 'shadow-xl', 'py-4');
            header.classList.add('bg-transparent', 'py-8');
            brand.classList.replace('text-navy', 'text-white');
            subbrand.classList.replace('text-sky', 'text-white/80');
            navLinks.forEach(link => link.classList.replace('text-navy', 'text-white'));
            navCta.classList.replace('bg-navy', 'bg-white/10');
            navCta.classList.replace('border-navy', 'border-white');
            mobileToggle.classList.replace('text-navy', 'text-white');
        }
    });

    // Mobile Menu Toggle
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });
    }

    mLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });


    // CALCULATOR LOGIC
    const billInput = document.getElementById('bill-input') as HTMLInputElement;
    const sunInput = document.getElementById('sun-input') as HTMLInputElement;
    
    const billValDisplay = document.getElementById('bill-val');
    const sunValDisplay = document.getElementById('sun-val');
    
    const resAnnual = document.getElementById('res-annual');
    const resCo2 = document.getElementById('res-co2');
    const resRoi = document.getElementById('res-roi');

    const updateCalculator = () => {
        const bill = parseFloat(billInput.value);
        const sun = parseFloat(sunInput.value);

        // UI Updates
        billValDisplay.textContent = `$${bill}`;
        sunValDisplay.textContent = `${sun} hrs`;

        // Calc
        const annualSpend = bill * 12;
        const coverage = Math.min(0.95, (sun * 0.15)); // Simplified coverage model
        const efficiency = 0.985;
        
        const savings = annualSpend * coverage * efficiency;
        const lifetime = savings * 25;
        const co2 = (savings * 0.45 / 200).toFixed(1); // Tons estimation

        // DOM Results
        resAnnual.textContent = `$${Math.round(savings).toLocaleString()}`;
        resRoi.textContent = `$${Math.round(lifetime).toLocaleString()}`;
        resCo2.textContent = co2;
    };

    if (billInput && sunInput) {
        billInput.addEventListener('input', updateCalculator);
        sunInput.addEventListener('input', updateCalculator);
        // Init
        updateCalculator();
    }

});
