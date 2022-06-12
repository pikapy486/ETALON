let navSupportLink = document.querySelector("#nav__support-link");
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
navSupportLink.onclick = function() {
    hamburger.classList.remove("hamburger_active");
    navLinks.classList.remove("nav__links_active");
    navContacts.classList.remove("nav__contacts_active");
    navSocial.classList.remove("nav__social_active");
    body.classList.remove("scroll_none");
}