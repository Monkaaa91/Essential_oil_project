// rozwijanie podmenu w mobile
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
const mobileMenuCheckbox = document.getElementById('mobilemenu');
const closeBtn = document.getElementById('close-mobile-menu');

closeBtn.addEventListener('click', () => {
    mobileMenuCheckbox.checked = false; // odznacza checkbox i chowa menu
});
