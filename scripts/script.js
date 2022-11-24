const scrollTop = document.querySelector('#gotop');

// Lorsque la page est chargée, masquez le bouton de défilement vers le haut
window.onload = () => {
    scrollTop.style.visibility = "hidden";
    scrollTop.style.opacity = 0;
}
// Si la page défile à plus de 200px,
// afficher le bouton de défilement vers le haut
// Sinon gardez le bouton caché
window.onscroll = () => {
    if (window.scrollY > 200) {
        scrollTop.style.visibility = "visible";
        scrollTop.style.opacity = 1;
    } else {
        scrollTop.style.visibility = "hidden";
        scrollTop.style.opacity = 0;
    }
};

scrollTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});