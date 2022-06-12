let body = document.querySelector("body");
let mainWraper = document.querySelector("#mainWraper");
let navLinks = document.querySelector("#navLinks");
let navContacts = document.querySelector("#navContacts");
let navSocial = document.querySelector("#navSocial");
let hamburger = document.querySelector("#hamburger");
let nav = document.querySelector("#nav");
let supportLink = document.querySelector("#support");
let catalog = document.querySelector("#catalog");
hamburger.onclick = function() {
   hamburger.classList.toggle("hamburger_active");
   navLinks.classList.toggle("nav__links_active");
   navContacts.classList.toggle("nav__contacts_active");
   navSocial.classList.toggle("nav__social_active");
   body.classList.toggle("scroll_none");

}
supportLink.onclick = function() {
   hamburger.classList.remove("hamburger_active");
   navLinks.classList.remove("nav__links_active");
   navContacts.classList.remove("nav__contacts_active");
   navSocial.classList.remove("nav__social_active");
   body.classList.remove("scroll_none");
}
catalog.onclick = function() {
   hamburger.classList.remove("hamburger_active");
   navLinks.classList.remove("nav__links_active");
   navContacts.classList.remove("nav__contacts_active");
   navSocial.classList.remove("nav__social_active");
   body.classList.remove("scroll_none");
}






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







 function  navShow() {
    let startHeight = window.pageYOffset;
    console.log(startHeight);
    window.onscroll = function() {
       let realHeight = window.pageYOffset;
       console.log(realHeight);
       if (realHeight == 0 || startHeight > realHeight) {
          nav.style.top = "0px";
          if (realHeight != 0) {
             nav.classList.add("nav_white");           
          }
          else {
             nav.classList.remove("nav_white");
          }
       }
       else {
          nav.style.top = "-113px";
       }
       startHeight = realHeight;
    }
 }
 navShow();