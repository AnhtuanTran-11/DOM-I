const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// nav
const headerNav = document.querySelectorAll('a');
headerNav[0].textContent = siteContent.nav["nav-item-1"];
headerNav[1].textContent = "Product";
headerNav[2].textContent = "Vision";
headerNav[3].textContent = "Features";
headerNav[4].textContent = "About";
headerNav[5].textContent = "Contact";
headerNav.forEach(link => link.style.color = "green");

//header
const firstSection = document.querySelector('.cta-text');
const largeText = firstSection.querySelector('h1');
const firstButton = firstSection.querySelector('button');
largeText.innerHTML = "DOM <br> IS <br> AWESOME";
firstButton.textContent = 'Get Started';


//Image of a code snippet
const codeSnippet = document.querySelector('#cta-img');
codeSnippet.src = "img/header-img.png";

//Main content
const mainContent = document.querySelector(".main-content");
const topContent = mainContent.querySelector(".text-content");

const firstH4 = topContent.querySelector("h4");
firstH4.textContent = siteContent["main-content"]["features-h4"];
const firstP = topContent.querySelector("p");
firstP.textContent = siteContent["main-content"]["features-content"];

const secondH4 = topContent.querySelector("h4:nth-of-type(2)");
secondH4.textContent = siteContent["main-content"]["about-h4"];
const secondP = topContent.querySelector("p:nth-of-type(2)")
secondP.textContent = siteContent["main-content"]["about-content"];


//Middle Image
const middleImage = document.querySelector(".middle-img #middle-img");
middleImage.src = siteContent["main-content"]["middle-img-src"];

//Bottom content
const bottomContent = mainContent.querySelector(".bottom-content");
const textContent = bottomContent.querySelector(".text-content");

const bottomH4 = textContent.querySelector("h4");
bottomH4.textContent = siteContent["main-content"]["services-h4"];