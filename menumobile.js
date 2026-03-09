const btn = document.getElementById('menu-btn');
const menu = document.getElementById('nav-menu');

    btn.addEventListener('click', () => {
    // Sprawdza czy menu jest ukryte i zmienia na widoczne (lub odwrotnie)
    if (menu.style.display === 'block') {
    menu.style.display = 'none';
} else {
    menu.style.display = 'block';
}
});
