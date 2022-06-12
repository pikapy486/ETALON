let body = document.querySelector("body");
let hamburger = document.querySelector("#hamburger");
let nav = document.querySelector("#nav");
let navLinks = document.querySelector("#navLinks");
let navContacts = document.querySelector("#navContacts");
let navSocial = document.querySelector("#navSocial");
hamburger.onclick = function() {
    hamburger.classList.toggle("hamburger_active");
    navLinks.classList.toggle("nav__links_active");
    navContacts.classList.toggle("nav__contacts_active");
    navSocial.classList.toggle("nav__social_active");
    body.classList.toggle("scroll_none");
 }