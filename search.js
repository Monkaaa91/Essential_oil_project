document.addEventListener('DOMContentLoaded', () => {
    const searchOverlay = document.getElementById('search-bar-overlay');
    const searchInput = document.getElementById('global-search-input');
    const closeBtn = document.getElementById('close-search-bar');

    // Wybieramy wszystkie lupy na stronie (desktopową i mobilną)
    const allSearchIcons = document.querySelectorAll('.search-icon');

    // Otwieranie paska po kliknięciu w dowolną lupę
    allSearchIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            searchOverlay.classList.add('is-open');
            // Automatycznie ustawiamy kursor w polu wpisywania
            setTimeout(() => searchInput.focus(), 400);
        });
    });

    // Zamykanie paska
    closeBtn.addEventListener('click', () => {
        searchOverlay.classList.remove('is-open');
    });

    // Obsługa klawisza ESC (zamykanie) i Enter (szukanie)
    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape") searchOverlay.classList.remove('is-open');

        if (e.key === "Enter" && searchOverlay.classList.contains('is-open')) {
            const query = searchInput.value;
            if(query) {
                console.log("Szukam:", query);
                // Tutaj w przyszłości dodasz logikę wyszukiwania
                alert("Zaczynam szukać: " + query);
            }
        }
    });
});