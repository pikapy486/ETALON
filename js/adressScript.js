let navSupportLink = document.querySelector("#nav__support-link");
let body = document.querySelector("body");
let hamburger = document.querySelector("#hamburger");
let nav = document.querySelector("#nav");
let navLinks = document.querySelector("#navLinks");
let navContacts = document.querySelector("#navContacts");
let navSocial = document.querySelector("#navSocial");
let catalog = document.querySelector("#catalog");
hamburger.onclick = function() {
    hamburger.classList.toggle("hamburger_active");
    navLinks.classList.toggle("nav__links_active");
    navContacts.classList.toggle("nav__contacts_active");
    navSocial.classList.toggle("nav__social_active");
    body.classList.toggle("scroll_none");
}
// navSupportLink.onclick = function() {
//     hamburger.classList.remove("hamburger_active");
//     navLinks.classList.remove("nav__links_active");
//     navContacts.classList.remove("nav__contacts_active");
//     navSocial.classList.remove("nav__social_active");
//     body.classList.remove("scroll_none");
// }
function catalogListAnimation() {

    if (body.clientWidth > 768) {
       let catalogList = document.querySelector("#catalogList");
       catalog.addEventListener("mouseover", function() {
          catalog.classList.add("catalog_open");
          catalogList.classList.add("catalog__list_open");
          mainWraper.classList.add("main-wraper_active");
          body.classList.add("scroll_none");
       }),
    
       catalog.addEventListener("mouseout", function() {
          catalog.classList.remove("catalog_open");
          catalogList.classList.remove("catalog__list_open");
          mainWraper.classList.remove("main-wraper_active");
          body.classList.remove("scroll_none");
       });
       catalogList.addEventListener("mouseover", function() {
          catalog.classList.add("catalog_open");
          catalogList.classList.add("catalog__list_open");
          nav.classList.add("nav_white");
          mainWraper.classList.add("main-wraper_active");
          body.classList.add("scroll_none");
       });
       catalogList.addEventListener("mouseout", function() {
          catalog.classList.remove("catalog_open");
          catalogList.classList.remove("catalog__list_open");
          mainWraper.classList.remove("main-wraper_active");
          body.classList.remove("scroll_none");
          if (window.pageYOffset == 0) {
             nav.classList.remove("nav_white");
          }
             
       });
    }
    
    
 
 }
catalogListAnimation();