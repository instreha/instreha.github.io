"use strict";

window.$ = function(selector) {
  return document.querySelectorAll(selector)
};

function scrollTo(element) {
  $(".navbar-burger").item(0).classList.remove("is-active");
  $(".navbar-menu").item(0).classList.remove("is-active");
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop - $(".navbar").item(0).offsetHeight + 1
  });
  const url = new URL(window.location);
  if (element.id === "navbar") {
    url.hash = "";
  } else {
    url.hash = "#" + element.id;
  }
  window.history.pushState({}, '', url);
}

function toggleNavbar() {
  $(".navbar-burger").item(0).classList.toggle("is-active");
  $(".navbar-menu").item(0).classList.toggle("is-active");
}

document.addEventListener("DOMContentLoaded",() => {

  $("nav.navbar").item(0).style.backgroundColor = "transparent";
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      $("nav.navbar").item(0).style.backgroundColor = "#fff";
      $("nav.navbar .navbar-brand a").item(0).style.display = "block";
    } else {
      $("nav.navbar").item(0).style.backgroundColor = "transparent";
      $("nav.navbar .navbar-brand a").item(0).style.display = "none";
    }
  });

  // Navbar burger
  $(".navbar-burger").item(0).addEventListener("click", toggleNavbar);

  // Modal management
  $(".modal-background, " +
    ".modal-close, " +
    ".modal-card-head .delete, " +
    ".modal-card-foot .cancel").forEach((el) => {
    if (el.closest('.overlay') === null) {
      el.addEventListener("click",(e) => {
        e.preventDefault();
        $(".modal").forEach((e) => { e.classList.remove("is-active") });
      });
    }
  });

  // Smooth scrolling to anchor links
  $(".navbar-brand a.navbar-item").forEach(element => {
    element.addEventListener("click", e => {
      e.preventDefault();
      scrollTo(document.getElementById("navbar"));
    });
  });
  $(".navbar-menu a.navbar-item").forEach(element => {
    element.addEventListener("click", e => {
      e.preventDefault();
      scrollTo(document.getElementById(element.hash.substr(1)));
    });
  });
  $("a[href='#checklist']").forEach(element => {
    element.addEventListener("click", e => {
      e.preventDefault();
      scrollTo(document.getElementById(element.hash.substr(1)));
    });
  });

  // Highlighting of currently active section
  window.addEventListener("scroll", () => {
    $("#wrapper > section").forEach(el => {
      if(window.pageYOffset >= el.offsetTop - $(".navbar").item(0).offsetHeight) {
        $(".navbar-menu a").forEach(el => el.classList.remove("is-active"));
        $(".navbar-menu a[href='#" + el.id + "']").forEach(el => el.classList.add("is-active"));
      }
    });
  });

  // Google Maps link
  document.getElementById("activate-google-maps").addEventListener("click", () => {
    const iframe = document.createElement("iframe");
    iframe.id = "map-canvas";
    iframe.frameborder = 0;
    iframe.src = "https://www.google.com/maps/embed/v1/place?key=AIzaSyBBsugMK1AyAZMwSS6H5FGyI7W1YyEVPVw &q=Institut+fuer+Rehabilitation";
    iframe.allowfullscreen = "";
    document.getElementById("google-maps-placeholder").replaceWith(iframe);
  });

  // Fix paralax scrolling on iOS
  if (navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad)/)) {
    document.getElementById("landing").style.backgroundAttachment = "scroll"
  }

});
