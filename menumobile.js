// upewniamy się, że checkbox startuje odznaczony
const mobileMenuCheckbox = document.getElementById('mobilemenu');
mobileMenuCheckbox.checked = false;

// Rozwijanie podmenu w mobile
document.querySelectorAll('#mobile-nav-menu > ol > li > a').forEach(link => {
    link.addEventListener('click', function(e){
        const parent = this.parentElement;
        const submenu = parent.querySelector('ul');
        if(submenu && window.innerWidth <= 768){
            e.preventDefault(); // blokuje link
            parent.classList.toggle('active'); // rozwija podmenu
        }
    });
});

// Zamknięcie menu po kliknięciu X
const closeBtn = document.getElementById('close-mobile-menu');
closeBtn.addEventListener('click', () => {
    mobileMenuCheckbox.checked = false;
});
