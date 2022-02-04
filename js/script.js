let body = document.querySelector("body");
let mainWraper = document.querySelector("#mainWraper");
let navLinks = document.querySelector("#navLinks");
let navContacts = document.querySelector("#navContacts");
let navSocial = document.querySelector("#navSocial");
let hamburger = document.querySelector("#hamburger");
let nav = document.querySelector("#nav");
hamburger.onclick = function() {
   hamburger.classList.toggle("hamburger_active");
   navLinks.classList.toggle("nav__links_active");
   navContacts.classList.toggle("nav__contacts_active");
   navSocial.classList.toggle("nav__social_active");
}



function formInput() {
   let inputName = document.querySelector("#inputName");
   let spanName = document.querySelector("#spanName");
   inputName.onfocus = function() {
      inputName.classList.add("input_active");
      spanName.classList.add("span_active");
      spanName.classList.add("span_color");
   }
   inputName.onblur = function() {
      inputName.classList.remove("input_active");
      spanName.classList.remove("span_color")
      if (inputName.value == "") {
         spanName.classList.remove("span_active");
      }      
   }
   let inputEmail = document.querySelector("#inputEmail");
   let spanEmail = document.querySelector("#spanEmail");
   inputEmail.onfocus = function() {
      spanEmail.classList.add("span_active");
      spanEmail.classList.add("span_color")
   }
   inputEmail.onblur = function() {
      spanEmail.classList.remove("span_color");
      if (inputEmail.value == "") {
         spanEmail.classList.remove("span_active");
      } 
   }
   let textarea = document.querySelector("#textarea");
   let spanTextarea =document.querySelector("#spanTextarea");
   textarea.onfocus = function() {
      spanTextarea.classList.add("spanTextarea_active");
      spanTextarea.classList.add("spanTextarea_color");
   }
   textarea.onblur = function() {
      spanTextarea.classList.remove("spanTextarea_color");
      if (textarea.value == "") {
         spanTextarea.classList.remove("spanTextarea_active");
      } 
   }
   
   
}
formInput();

function catalogListAnimation() {
   if (body.clientWidth > 768) {
      let catalog = document.querySelector("#catalog");
      let catalogList = document.querySelector("#catalogList");
      catalog.addEventListener("mouseover", function() {
         catalog.classList.add("catalog_open");
         catalogList.classList.add("catalog__list_open");
         mainWraper.classList.add("main-wraper_active");
      }),
   
      catalog.addEventListener("mouseout", function() {
         catalog.classList.remove("catalog_open");
         catalogList.classList.remove("catalog__list_open");
         mainWraper.classList.remove("main-wraper_active");
      });
      catalogList.addEventListener("mouseover", function() {
         catalog.classList.add("catalog_open");
         catalogList.classList.add("catalog__list_open");
         nav.classList.add("nav_white");
         mainWraper.classList.add("main-wraper_active");
      });
      catalogList.addEventListener("mouseout", function() {
         catalog.classList.remove("catalog_open");
         catalogList.classList.remove("catalog__list_open");
         nav.classList.remove("nav_white");
         mainWraper.classList.remove("main-wraper_active");
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