const boutonMenu = document.querySelector(".bouton-menu"); /*  Fonction hover pour ouvrir et fermer le menu. */
const nav = document.querySelector("nav");
boutonMenu.addEventListener("click", ouvreFermeMenu);
function ouvreFermeMenu() {
  nav.classList.toggle("closed");
}
