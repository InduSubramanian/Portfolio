// projectImage = document.querySelector(".project-image");
// projectImage.onclick = function () {
//   window.location.href = "./covidCare.html";
// };

const navButton = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navLinksContainer = document.querySelector(".nav-links-container");
const navHeader = document.querySelector(".nav-header");
var navHeight = document.querySelector("nav").getBoundingClientRect().height;
const nav = document.querySelector("nav");

var screenWidth = window.matchMedia("(min-width: 786px)");
var screenWidthMd = window.matchMedia("(min-width: 386px");

const hamburger = document.querySelector(".hamburger");

window.addEventListener("resize", function () {
  if (screenWidth.matches) {
    // console.log("Its big screen!");
    navLinksContainer.style.height = navLinks.getBoundingClientRect().height;
    console.log(navLinksContainer.style.height);
  } else {
    navLinksContainer.style.height = 0;
  }
});

navButton.addEventListener("click", function () {
  containerValues = navLinksContainer.getBoundingClientRect();
  if (containerValues.height == 0) {
    hamburger.childNodes[1].src = "/assets/images/X.svg";
    hamburger.childNodes[1].style.width = "auto";
    // console.log(hamburger.childNodes[1]);
    navLinksContainer.style.height = `${
      100 - navHeader.getBoundingClientRect().height
    }vh`;
  } else {
    if (screenWidth.matches) {
      navLinksContainer.style.height = `auto`;
    } else {
      navLinksContainer.style.height = 0;
      hamburger.childNodes[1].src = "/assets/images/Hamburger.svg";
      hamburger.childNodes[1].style.width = "100%";
    }
  }
});
const proj = document.querySelectorAll(".proj");

// ScrollLinks
// const scrollLinks = document.querySelectorAll(".scroll-link");

// scrollLinks.forEach((elem) => {
//   elem.addEventListener("click", function (e) {
//     e.preventDefault();

//     const id = e.currentTarget.getAttribute("href").slice(1);
//     const element = document.getElementById(id);

//     if (screenWidth.matches) {
//       navLinksContainer.style.height = `auto`;
//     } else {
//       navLinksContainer.style.height = 0;
//     }

//     navHeight = nav.getBoundingClientRect().height;
//     containerHeight = navHeader.getBoundingClientRect().height;
//     console.log(containerHeight);
//     console.log(navHeight);

//     let pos = element.offsetTop - navHeight;

//     // For big screens as it has auto height we need to reduce that also
//     if (screenWidth.matches) {
//       pos = pos - containerHeight;
//     }

//     // In a small screen width
//     if (navHeight > 100) {
//       pos = pos - containerHeight;
//     }

//     window.scrollTo({
//       left: 0,
//       top: pos,
//     });
//   });
// });

// ScrollAndFix NavBar
// window.addEventListener("scroll", function () {
//   const scrollHeight = window.pageYOffset;
//   // if (scrollHeight > 500) {
//   //   nav.classList.add("show-link");
//   // } else {
//   //   nav.classList.remove("show-link");
//   // }

//   if (scrollHeight > nav.getBoundingClientRect().height) {
//     nav.classList.add("fixed-nav");
//   } else {
//     nav.classList.remove("fixed-nav");
//   }
// });

dribbbleIcon = document.getElementById("dribbble");
behanceIcon = document.getElementById("behance");
console.log("Mouse hovered over dribbble");

console.log(dribbbleIcon.childNodes);

dribbbleIcon.childNodes[1].addEventListener("mouseover", function (event) {
  dribbbleIcon.childNodes[1].childNodes[1].attributes.fill.value = "#EA4C89";
  console.log(dribbbleIcon.childNodes[1].childNodes[1].attributes.fill.value);
});
dribbbleIcon.childNodes[1].addEventListener("mouseout", function (event) {
  dribbbleIcon.childNodes[1].childNodes[1].attributes.fill.value = "#222221";
  console.log(dribbbleIcon.childNodes[1].childNodes[1].attributes.fill.value);
});

behanceIcon.childNodes[1].addEventListener("mouseover", function () {
  allNodes = behanceIcon.childNodes[1].childNodes[1].childNodes;
  for (let i = 1; i < allNodes.length; i += 2) {
    allNodes[i].attributes.fill.value = "#1769FF";
  }
});

behanceIcon.childNodes[1].addEventListener("mouseout", function () {
  allNodes = behanceIcon.childNodes[1].childNodes[1].childNodes;
  for (let i = 1; i < allNodes.length; i += 2) {
    allNodes[i].attributes.fill.value = "#222221";
  }
});
