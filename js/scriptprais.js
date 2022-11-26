let body = document.querySelector("body");
let mainWraper = document.querySelector("#mainWraper");
let navLinks = document.querySelector("#navLinks");
let navContacts = document.querySelector("#navContacts");
let navSocial = document.querySelector("#navSocial");
let hamburger = document.querySelector("#hamburger");
let nav = document.querySelector("#nav");
let supportLink = document.querySelector("#support");

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