// console.log("Hello world");

//nav.open, btn-mobile-nav

const btnNav = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNav.addEventListener("click", function () {
    headerEl.classList.toggle("nav-open");
});
