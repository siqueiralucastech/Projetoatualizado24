const body = document.body;
const openMobileMenuButton = document.querySelector(".open-mobile-menu-button");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMobileMenuButton = document.querySelector(".btn-fechar");

openMobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.remove("hidden");
  body.style.overflow = "hidden";
});

closeMobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
  body.style.overflow = "scroll";
});
