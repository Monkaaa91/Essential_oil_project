const texts = document.querySelectorAll('.scrolling-text span');
let index = 0;

function showText() {
    texts.forEach((t) => t.classList.remove('active')); // ukryj wszystkie
    texts[index].classList.add('active');               // pokaż aktualny
    index = (index + 1) % texts.length;                 // przejdź do następnego
}

showText();                  // pokaż pierwszy od razu
setInterval(showText, 4000); // zmiana co 4 sekundy