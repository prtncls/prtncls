const boxListMobile = document.querySelector('.boxListMobile');
const menuButton = document.querySelector('.menuButton');
let pushButton;
let pushed = false;

const htmlTag = document.getElementsByTagName('html')
const body = document.getElementsByTagName('body')
const sections = document.querySelector('.sections');
const sectors = document.getElementsByTagName('section')
const home = document.querySelector('.home');
const homeImg = document.querySelector('.homeImg');
const floating = document.querySelector('.floating');
const about = document.querySelector('.about');
const montage = document.querySelector('.montage');
let montageThumb = document.querySelector(".montageThumb");
const modal = document.querySelector('.modal');
const web = document.querySelector('.web');
const merch = document.querySelector('.merch');
const contact = document.querySelector('.contact');

const homeLinkMobile = document.querySelector('.homeLinkMobile');
const aboutLinkMobile = document.querySelector('.aboutLinkMobile');
const montageLinkMobile = document.querySelector('.montageLinkMobile');
const webLinkMobile = document.querySelector('.webLinkMobile');
const merchLinkMobile = document.querySelector('.merchLinkMobile');
const contactLinkMobile = document.querySelector('.contactLinkMobile');

const homeLinkDesktop = document.querySelector('.homeLinkDesktop');
const aboutLinkDesktop = document.querySelector('.aboutLinkDesktop');
const montageLinkDesktop = document.querySelector('.montageLinkDesktop');
const webLinkDesktop = document.querySelector('.webLinkDesktop');
const merchLinkDesktop = document.querySelector('.merchLinkDesktop');
const contactLinkDesktop = document.querySelector('.contactLinkDesktop');

let openMobileMenu;
let closeMobileMenu;
let openHome;
let openAbout;
let openMontage;
let openWeb;
let openMerch;
let openContact;
let openMenuAnim = gsap.timeline({ paused: true });
let mainColor;
let secColor;
let backgroundSection = '#FFFFFF99'
let windowWidth;
let backgroundMenu;
let parallaxOn;
let parallaxOff;
const d = new Date();
let hour = d.getHours();
let changeOfArt;
let circlesTap;
let tl_circlesTap = gsap.timeline({ paused: true });
let root = document.documentElement;
//let modalImg = 
let closeModal;
let closeModalButton = document.querySelector('.close-modal-button');

/* Changing the background image, the main color and the secondary color depending on the hour of the
day. */
changeOfArt = () => {
  if(hour == 0 && hour < 6) {//cambiar a diseño 1
    document.body.style.backgroundImage = "url('./images/bg_1.jpg')";
    root.style.setProperty('--mainColor', '#158441');
    secColor = '#29A359';
    floating.src="./images/floating_1.png";
  } else if(hour >= 6 && hour < 12) {//cambiar a diseño 2
    document.body.style.backgroundImage = "url('./images/bg_2.jpg')";
    root.style.setProperty('--mainColor', '#7B713D');
    secColor = '#E0C571';
    floating.src="./images/floating_2.png";
  } else if (hour >= 12 && hour < 18) {//cambiar a diseño 3
    document.body.style.backgroundImage = "url('./images/bg_3.jpg')";
    root.style.setProperty('--mainColor', '#811001');
    secColor = '#CA1902';
    floating.src="./images/floating_3.png";
  } else if (hour >= 18 && hour < 24) {//cambiar a diseño 4
    document.body.style.backgroundImage = "url('./images/bg_4.jpg')";
    root.style.setProperty('--mainColor', '#1E5661');
    secColor = '#2A7988';
    floating.src="./images/floating_4.png";
  }
}

changeOfArt()

/* Hiding the circles. */
circlesTap = () => {
    gsap.to('.circles', { duration: 0.3, opacity: 0 })
    gsap.to('.circles', { display: 'none' }, 0.3);
}

home.addEventListener('click', circlesTap)

/* Changing the background color of the menu. */
backgroundMenu = () => {
  windowWidth = window.innerWidth;
  if(windowWidth < 1280) {
    gsap.to('.menuMobile', { backgroundColor: secColor });
  }
}

/* A function that is called when the parallax is activated. */
parallaxOn = () => {
  windowWidth = window.innerWidth;
  if(windowWidth > 1280) {
    gsap.to(body, { alignItems: 'center', overflow: 'hidden' });
  }
}

/* A function that is called when the parallax is deactivated. */
parallaxOff = () => {
  windowWidth = window.innerWidth;
  if(windowWidth > 1280) {
    gsap.to(body, { alignItems: 'unset', overflow: 'unset' });
  }
}

dataM = dataM.response.docs;

/* A forEach loop that is iterating over the dataM array and adding the image_url and image_thumb to
the montage section. */
dataM.forEach((val, key) => {  
    montage.innerHTML += `<div class="montageThumb"><img onclick="onClick(this)" src="${val.image_url}"></div>`;
    //;
    //el que si anda <a href="${val.image_url}"><div class="montageThumb"><img src="${val.image_thumb}"></div></a>
});

function onClick(element) {
  document.querySelector(".modal-img").src = element.src;
  gsap.to('.modal', { display: 'flex' }, 0);
  gsap.to(body, { overflow: 'hidden' }, 0)
  console.log(element)
}

closeModal = () => {
  gsap.to('.modal', { duracion: 0, display: 'none' }, 0);
  gsap.to(body, { overflow: 'visible' }, 0)
  console.log('cierro modal');
}

document.querySelector('.modal').addEventListener('click', closeModal);

dataW = dataW.response.docs;

/* Iterating over the dataW array and adding the web_url and image_thumb to the web section. */
dataW.forEach((val, key) => {  
    web.innerHTML += `<a href="${val.web_url}" target="_blank"><div class="webThumb"><img src="${val.image_thumb}"></div></a>`;
});

/**
 * It animates the menu icon to an X when the menu is opened.
 */
const createOpenMenuAnim = () => {
  openMenuAnim.to('.bar1', { rotation: 45, transformOrigin: "left top", ease: 'power2' }, 0)
              .to('.bar2', { opacity: 0, ease: 'power2' }, 0)
              .to('.bar3', { rotation: -45, transformOrigin: "left bottom", ease: 'power2' }, 0)
              .to('.menuMobile', { duration: 0.5, height: '100%', ease: 'power2', backgroundColor: secColor }, 0)
              .to(boxListMobile, { duration: 0.5, height: '100%', opacity: 1, visibility: 'visible', ease: 'power2', display: 'flex', position: 'absolute' }, 0)
}

//inicializo linea de tiempo
createOpenMenuAnim()

/* A function that is called when the menu is opened. */
openMobileMenu = () => {
  console.log('abrir menu', pushed);
  openMenuAnim.play();
  pushed = true;
};

/* A function that is called when the menu is closed. */
closeMobileMenu = () => {
  windowWidth = window.innerWidth;
  if(windowWidth < 1280) {
    console.log('cerrar menu');
    openMenuAnim.reverse();
    pushed = false;
  }
};

/* A function that is called when the menu button is clicked. It checks if the menu is open or closed
and then it calls the openMobileMenu or closeMobileMenu function. */
pushButton = () => {
  console.log('hice click en el boton')
  if(pushed === false) {
    openMobileMenu();
    console.log('entro al if y abrio el menu')
  } else {
    closeMobileMenu();
    console.log('entro al else y cerro el menu')
  };
};

//boton menu
menuButton.addEventListener('click', pushButton);

/* A function that is called when the home section is opened. */
openHome = () => {
  console.log('abrir home');
  gsap.to(sections, { display: 'flex', backgroundColor: 'unset'}, 0);
  gsap.to(sectors, { display: 'none' }, 0);
  gsap.to(home, { display: 'flex' }, 0);
  gsap.to(htmlTag, { overflow: 'hidden' }, 0)
  gsap.to(body, { overflow: 'hidden' }, 0)
  closeMobileMenu();
  parallaxOn();
}

/* A function that is called when the about section is opened. */
openAbout = () => {
  console.log('abrir about');
  gsap.to(home, { display: 'none' }, 0);
  gsap.to(sections, { display: 'flex', backgroundColor: backgroundSection}, 0);
  gsap.to(sectors, { display: 'none' }, 0);
  gsap.to(about, { display: 'flex' }, 0);
  gsap.to(htmlTag, { overflow: 'visible' }, 0)
  closeMobileMenu();
  backgroundMenu();
  parallaxOff();
};

/* A function that is called when the montage section is opened. */
openMontage = () => {
  console.log('abrir montajes');
  gsap.to(home, { display: 'none' }, 0);
  gsap.to(sections, { display: 'flex', backgroundColor: backgroundSection}, 0);
  gsap.to(sectors, { display: 'none' }, 0);
  gsap.to(montage, { display: 'flex' }, 0);
  gsap.to(htmlTag, { overflow: 'visible' }, 0)
  gsap.to(body, { overflow: 'visible' }, 0)
  closeMobileMenu();
  backgroundMenu();
  parallaxOff();
};

/* A function that is called when the web section is opened. */
openWeb = () => {
  console.log('abrir web');
  gsap.to(home, { display: 'none' }, 0);
  gsap.to(sections, { display: 'flex', backgroundColor: backgroundSection}, 0);
  gsap.to(sectors, { display: 'none' }, 0);
  gsap.to(web, { display: 'flex' }, 0);
  gsap.to(htmlTag, { overflow: 'visible' }, 0)
  gsap.to(body, { overflow: 'visible' }, 0)
  closeMobileMenu();
  backgroundMenu();
  parallaxOff();
};

/* A function that is called when the merch section is opened. */
openMerch = () => {
  console.log('abrir merch');
  gsap.to(home, { display: 'none' }, 0);
  gsap.to(sections, { display: 'flex', backgroundColor: backgroundSection}, 0);
  gsap.to(sectors, { display: 'none' }, 0);
  gsap.to(merch, { display: 'flex' }, 0);
  gsap.to(htmlTag, { overflow: 'visible' }, 0)
  gsap.to(body, { overflow: 'visible' }, 0)
  closeMobileMenu();
  backgroundMenu();
  parallaxOff();
};

/* A function that is called when the contact section is opened. */
openContact = () => {
  console.log('abrir contacto');
  gsap.to(home, { display: 'none' }, 0);
  gsap.to(sections, { display: 'flex', backgroundColor: backgroundSection}, 0);
  gsap.to(sectors, { display: 'none' }, 0);
  gsap.to(contact, { display: 'flex' }, 0);
  gsap.to(htmlTag, { overflow: 'visible' }, 0)
  gsap.to(body, { overflow: 'visible' }, 0)
  closeMobileMenu();
  backgroundMenu();
  parallaxOff();
};

//abrir secciones mobile - eventListeners
homeLinkMobile.addEventListener('click', openHome)
aboutLinkMobile.addEventListener('click', openAbout)
montageLinkMobile.addEventListener('click', openMontage)
webLinkMobile.addEventListener('click', openWeb)
merchLinkMobile.addEventListener('click', openMerch)
contactLinkMobile.addEventListener('click', openContact)

//abrir secciones desktop - eventListeners
homeLinkDesktop.addEventListener('click', openHome)
aboutLinkDesktop.addEventListener('click', openAbout)
montageLinkDesktop.addEventListener('click', openMontage)
webLinkDesktop.addEventListener('click', openWeb)
merchLinkDesktop.addEventListener('click', openMerch)
contactLinkDesktop.addEventListener('click', openContact)

