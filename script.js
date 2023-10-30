// Création d'une fonction "displayMenu" (utile pour l'affiche de la NavBar en responsif)
function displayMenu() {
    // Prend l'élément ayant le bon ID dans la page HTML
    const menu = document.getElementById("menu");
    // Vérifie si la propriété "display" de l'élément est égale à "none" (caché)
    if (menu.style.display === "none") {
        // Si l'élément est caché, change sa propriété "display" à "block" (affiché)
        menu.style.display = "block";
    } else {
        // Sinon (si l'élément est affiché), change sa propriété "display" à "none" (caché)
        menu.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // Récupère l'élément bouton de tous les éléments HTML ayant l'ID "scrollToTopButton"
    var scrollToTopButton = document.getElementById("scrollToTopButton");

    // On utilise un écouteur
    window.addEventListener("scroll", function () {
        // On choisit quand il l'affiche et lorsqu'il n'affiche plus le bouton
        if (window.scrollY >= 300) {
            // Affiche le bouton
            scrollToTopButton.style.display = "block";
        } else {
            // Cache le bouton
            scrollToTopButton.style.display = "none";
        }
    });

    // On utilise un écouteur sur les événements "click" sur le bouton
    scrollToTopButton.addEventListener("click", function () {
        // fonction avec un delais de 1000 ms
        scrollToTop(1000);
    });

    // Fonction qui permet le défilement vers le haut de la page
    function scrollToTop(duration) {
        var start = window.scrollY;
        var startTime = performance.now();
        var endTime = startTime + duration;

        // Fonction de défilement
        function scroll() {
            var currentTime = performance.now();
            var timeFraction = (currentTime - startTime) / duration;

            if (timeFraction > 1) timeFraction = 1;

            var progress = timeFraction;

            // Effectue le défilement de la page vers le haut
            window.scrollTo(0, start - start * progress);

            if (timeFraction < 1) {
                requestAnimationFrame(scroll);
            }
        }

        // Démarre l'animation de défilement
        requestAnimationFrame(scroll);
    }
});