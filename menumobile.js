const btn = document.getElementById('menu-btn');
const menu = document.getElementById('nav-menu');

btn.addEventListener('click', () => {
    menu.classList.toggle('show');
});

document.querySelectorAll('ol > li > a').forEach(link => {
    link.addEventListener('click', (e) => {
        const parentLi = link.parentElement;
        const submenu = parentLi.querySelector('ul');

        if (submenu && window.innerWidth <= 768) {
            e.preventDefault(); // blokuje domyślne kliknięcie
            parentLi.classList.toggle('active'); // pokaz/ukryj submenu
        }
    });
});
