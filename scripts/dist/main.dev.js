"use strict";

var boxListMobile = document.querySelector('.boxListMobile');
var menuButton = document.querySelector('.menuButton');
var pushButton;
var pushed = false;
var htmlTag = document.getElementsByTagName('html');
var body = document.getElementsByTagName('body');
var sections = document.querySelector('.sections');
var sectors = document.getElementsByTagName('section');
var home = document.querySelector('.home');
var homeImg = document.querySelector('.homeImg');
var floating = document.querySelector('.floating');
var about = document.querySelector('.about');
var montage = document.querySelector('.montage');
var montageThumb = document.querySelector(".montageThumb");
var modal = document.querySelector('.modal');
var web = document.querySelector('.web');
var merch = document.querySelector('.merch');
var contact = document.querySelector('.contact');
var homeLinkMobile = document.querySelector('.homeLinkMobile');
var aboutLinkMobile = document.querySelector('.aboutLinkMobile');
var montageLinkMobile = document.querySelector('.montageLinkMobile');
var webLinkMobile = document.querySelector('.webLinkMobile');
var merchLinkMobile = document.querySelector('.merchLinkMobile');
var contactLinkMobile = document.querySelector('.contactLinkMobile');
var homeLinkDesktop = document.querySelector('.homeLinkDesktop');
var aboutLinkDesktop = document.querySelector('.aboutLinkDesktop');
var montageLinkDesktop = document.querySelector('.montageLinkDesktop');
var webLinkDesktop = document.querySelector('.webLinkDesktop');
var merchLinkDesktop = document.querySelector('.merchLinkDesktop');
var contactLinkDesktop = document.querySelector('.contactLinkDesktop');
var openMobileMenu;
var closeMobileMenu;
var openHome;
var openAbout;
var openMontage;
var openWeb;
var openMerch;
var openContact;
var openMenuAnim = gsap.timeline({
  paused: true
});
var mainColor;
var secColor;
var backgroundSection = '#FFFFFF99';
var windowWidth;
var backgroundMenu;
var parallaxOn;
var parallaxOff;
var d = new Date();
var hour = d.getHours();
var changeOfArt;
var circlesTap;
var tl_circlesTap = gsap.timeline({
  paused: true
});
var root = document.documentElement; //let modalImg = 

var closeModal;
var closeModalButton = document.querySelector('.close-modal-button');
/* Changing the background image, the main color and the secondary color depending on the hour of the
day. */

changeOfArt = function changeOfArt() {
  if (hour == 0 && hour < 6) {
    //cambiar a diseño 1
    document.body.style.backgroundImage = "url('./images/bg_1.jpg')";
    root.style.setProperty('--mainColor', '#158441');
    secColor = '#29A359';
    floating.src = "./images/floating_1.png";
  } else if (hour >= 6 && hour < 12) {
    //cambiar a diseño 2
    document.body.style.backgroundImage = "url('./images/bg_2.jpg')";
    root.style.setProperty('--mainColor', '#7B713D');
    secColor = '#E0C571';
    floating.src = "./images/floating_2.png";
  } else if (hour >= 12 && hour < 18) {
    //cambiar a diseño 3
    document.body.style.backgroundImage = "url('./images/bg_3.jpg')";
    root.style.setProperty('--mainColor', '#811001');
    secColor = '#CA1902';
    floating.src = "./images/floating_3.png";
  } else if (hour >= 18 && hour < 24) {
    //cambiar a diseño 4
    document.body.style.backgroundImage = "url('./images/bg_4.jpg')";
    root.style.setProperty('--mainColor', '#1E5661');
    secColor = '#2A7988';
    floating.src = "./images/floating_4.png";
  }
};

changeOfArt();
/* Hiding the circles. */

circlesTap = function circlesTap() {
  gsap.to('.circles', {
    duration: 0.3,
    opacity: 0
  });
  gsap.to('.circles', {
    display: 'none'
  }, 0.3);
};

home.addEventListener('click', circlesTap);
/* Changing the background color of the menu. */

backgroundMenu = function backgroundMenu() {
  windowWidth = window.innerWidth;

  if (windowWidth < 1280) {
    gsap.to('.menuMobile', {
      backgroundColor: secColor
    });
  }
};
/* A function that is called when the parallax is activated. */


parallaxOn = function parallaxOn() {
  windowWidth = window.innerWidth;

  if (windowWidth > 1280) {
    gsap.to(body, {
      alignItems: 'center',
      overflow: 'hidden'
    });
  }
};
/* A function that is called when the parallax is deactivated. */


parallaxOff = function parallaxOff() {
  windowWidth = window.innerWidth;

  if (windowWidth > 1280) {
    gsap.to(body, {
      alignItems: 'unset',
      overflow: 'unset'
    });
  }
};

dataM = dataM.response.docs;
/* A forEach loop that is iterating over the dataM array and adding the image_url and image_thumb to
the montage section. */

dataM.forEach(function (val, key) {
  montage.innerHTML += "<div class=\"montageThumb\"><img onclick=\"onClick(this)\" src=\"".concat(val.image_url, "\"></div>"); //;
  //el que si anda <a href="${val.image_url}"><div class="montageThumb"><img src="${val.image_thumb}"></div></a>
});

function onClick(element) {
  document.querySelector(".modal-img").src = element.src;
  gsap.to('.modal', {
    display: 'flex'
  }, 0);
  gsap.to(body, {
    overflow: 'hidden'
  }, 0);
  console.log(element);
}

closeModal = function closeModal() {
  gsap.to('.modal', {
    duracion: 0,
    display: 'none'
  }, 0);
  gsap.to(body, {
    overflow: 'visible'
  }, 0);
  console.log('cierro modal');
};

document.querySelector('.modal').addEventListener('click', closeModal);
dataW = dataW.response.docs;
/* Iterating over the dataW array and adding the web_url and image_thumb to the web section. */

dataW.forEach(function (val, key) {
  web.innerHTML += "<a href=\"".concat(val.web_url, "\" target=\"_blank\"><div class=\"webThumb\"><img src=\"").concat(val.image_thumb, "\"></div></a>");
});
/**
 * It animates the menu icon to an X when the menu is opened.
 */

var createOpenMenuAnim = function createOpenMenuAnim() {
  openMenuAnim.to('.bar1', {
    rotation: 45,
    transformOrigin: "left top",
    ease: 'power2'
  }, 0).to('.bar2', {
    opacity: 0,
    ease: 'power2'
  }, 0).to('.bar3', {
    rotation: -45,
    transformOrigin: "left bottom",
    ease: 'power2'
  }, 0).to('.menuMobile', {
    duration: 0.5,
    height: '100%',
    ease: 'power2',
    backgroundColor: secColor
  }, 0).to(boxListMobile, {
    duration: 0.5,
    height: '100%',
    opacity: 1,
    visibility: 'visible',
    ease: 'power2',
    display: 'flex',
    position: 'absolute'
  }, 0);
}; //inicializo linea de tiempo


createOpenMenuAnim();
/* A function that is called when the menu is opened. */

openMobileMenu = function openMobileMenu() {
  console.log('abrir menu', pushed);
  openMenuAnim.play();
  pushed = true;
};
/* A function that is called when the menu is closed. */


closeMobileMenu = function closeMobileMenu() {
  windowWidth = window.innerWidth;

  if (windowWidth < 1280) {
    console.log('cerrar menu');
    openMenuAnim.reverse();
    pushed = false;
  }
};
/* A function that is called when the menu button is clicked. It checks if the menu is open or closed
and then it calls the openMobileMenu or closeMobileMenu function. */


pushButton = function pushButton() {
  console.log('hice click en el boton');

  if (pushed === false) {
    openMobileMenu();
    console.log('entro al if y abrio el menu');
  } else {
    closeMobileMenu();
    console.log('entro al else y cerro el menu');
  }

  ;
}; //boton menu


menuButton.addEventListener('click', pushButton);
/* A function that is called when the home section is opened. */

openHome = function openHome() {
  console.log('abrir home');
  gsap.to(sections, {
    display: 'flex',
    backgroundColor: 'unset'
  }, 0);
  gsap.to(sectors, {
    display: 'none'
  }, 0);
  gsap.to(home, {
    display: 'flex'
  }, 0);
  gsap.to(htmlTag, {
    overflow: 'hidden'
  }, 0);
  gsap.to(body, {
    overflow: 'hidden'
  }, 0);
  closeMobileMenu();
  parallaxOn();
};
/* A function that is called when the about section is opened. */


openAbout = function openAbout() {
  console.log('abrir about');
  gsap.to(home, {
    display: 'none'
  }, 0);
  gsap.to(sections, {
    display: 'flex',
    backgroundColor: backgroundSection
  }, 0);
  gsap.to(sectors, {
    display: 'none'
  }, 0);
  gsap.to(about, {
    display: 'flex'
  }, 0);
  gsap.to(htmlTag, {
    overflow: 'visible'
  }, 0);
  closeMobileMenu();
  backgroundMenu();
  parallaxOff();
};
/* A function that is called when the montage section is opened. */


openMontage = function openMontage() {
  console.log('abrir montajes');
  gsap.to(home, {
    display: 'none'
  }, 0);
  gsap.to(sections, {
    display: 'flex',
    backgroundColor: backgroundSection
  }, 0);
  gsap.to(sectors, {
    display: 'none'
  }, 0);
  gsap.to(montage, {
    display: 'flex'
  }, 0);
  gsap.to(htmlTag, {
    overflow: 'visible'
  }, 0);
  gsap.to(body, {
    overflow: 'visible'
  }, 0);
  closeMobileMenu();
  backgroundMenu();
  parallaxOff();
};
/* A function that is called when the web section is opened. */


openWeb = function openWeb() {
  console.log('abrir web');
  gsap.to(home, {
    display: 'none'
  }, 0);
  gsap.to(sections, {
    display: 'flex',
    backgroundColor: backgroundSection
  }, 0);
  gsap.to(sectors, {
    display: 'none'
  }, 0);
  gsap.to(web, {
    display: 'flex'
  }, 0);
  gsap.to(htmlTag, {
    overflow: 'visible'
  }, 0);
  gsap.to(body, {
    overflow: 'visible'
  }, 0);
  closeMobileMenu();
  backgroundMenu();
  parallaxOff();
};
/* A function that is called when the merch section is opened. */


openMerch = function openMerch() {
  console.log('abrir merch');
  gsap.to(home, {
    display: 'none'
  }, 0);
  gsap.to(sections, {
    display: 'flex',
    backgroundColor: backgroundSection
  }, 0);
  gsap.to(sectors, {
    display: 'none'
  }, 0);
  gsap.to(merch, {
    display: 'flex'
  }, 0);
  gsap.to(htmlTag, {
    overflow: 'visible'
  }, 0);
  gsap.to(body, {
    overflow: 'visible'
  }, 0);
  closeMobileMenu();
  backgroundMenu();
  parallaxOff();
};
/* A function that is called when the contact section is opened. */


openContact = function openContact() {
  console.log('abrir contacto');
  gsap.to(home, {
    display: 'none'
  }, 0);
  gsap.to(sections, {
    display: 'flex',
    backgroundColor: backgroundSection
  }, 0);
  gsap.to(sectors, {
    display: 'none'
  }, 0);
  gsap.to(contact, {
    display: 'flex'
  }, 0);
  gsap.to(htmlTag, {
    overflow: 'visible'
  }, 0);
  gsap.to(body, {
    overflow: 'visible'
  }, 0);
  closeMobileMenu();
  backgroundMenu();
  parallaxOff();
}; //abrir secciones mobile - eventListeners


homeLinkMobile.addEventListener('click', openHome);
aboutLinkMobile.addEventListener('click', openAbout);
montageLinkMobile.addEventListener('click', openMontage);
webLinkMobile.addEventListener('click', openWeb);
merchLinkMobile.addEventListener('click', openMerch);
contactLinkMobile.addEventListener('click', openContact); //abrir secciones desktop - eventListeners

homeLinkDesktop.addEventListener('click', openHome);
aboutLinkDesktop.addEventListener('click', openAbout);
montageLinkDesktop.addEventListener('click', openMontage);
webLinkDesktop.addEventListener('click', openWeb);
merchLinkDesktop.addEventListener('click', openMerch);
contactLinkDesktop.addEventListener('click', openContact);