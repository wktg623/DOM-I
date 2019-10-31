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
    "h1": "DOM <br>Is<br> Awesome",
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
    "address" : "123 Way 456 Street <br>Somewhere, USA",
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

//create a new element
const newElement = document.createElement("a");
newElement.textContent = "Sign Up";

let navigation = 
document.querySelector('nav');
navigation.append(newElement);


let El= document.getElementsByTagName('nav');
const aTag = document.createTextNode("Home");
El[0].prepend(aTag);
El[0].style.color = "green"


let aTags = document.querySelectorAll('a');


aTags[0].textContent = siteContent["nav"]["nav-item-1"];
aTags[1].textContent = siteContent["nav"]["nav-item-2"];
aTags[2].textContent = siteContent["nav"]["nav-item-3"];
aTags[3].textContent = siteContent["nav"]["nav-item-4"];
aTags[4].textContent = siteContent["nav"]["nav-item-5"];
aTags[5].textContent = siteContent["nav"]["nav-item-6"];

aTags.forEach((element)=>{
  
  element.style.color = "green";
}
)







let domIsAwesome = document.querySelector(".cta .cta-text h1");
domIsAwesome.innerHTML = siteContent["cta"]["h1"]


let circleImg = document.getElementById('cta-img');
circleImg.setAttribute('src', siteContent["cta"]["img-src"]);



let button = document.querySelector('button');
button.textContent = siteContent["cta"]["button"];


let h4 = document.querySelectorAll("h4");
h4[0].textContent = siteContent["main-content"]["features-h4"]
h4[1].textContent = siteContent["main-content"]["about-h4"]
h4[2].textContent = siteContent["main-content"]["services-h4"]
h4[3].textContent = siteContent["main-content"]["product-h4"]
h4[4].textContent = siteContent["main-content"]["vision-h4"]

let p = document.querySelectorAll(".main-content p");
p[0].textContent = siteContent["main-content"]["features-content"];
p[1].textContent = siteContent["main-content"]["about-content"];
p[2].textContent = siteContent["main-content"]["services-content"];
p[3].textContent = siteContent["main-content"]["product-content"];
p[4].textContent = siteContent["main-content"]["vision-content"];


let middleImg = document.getElementById('middle-img')
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

const address = document.querySelectorAll(".contact p");
address[0].innerHTML = siteContent["contact"]["address"];
address[1].innerHTML= siteContent["contact"]["phone"];
address[2].innerHTML= siteContent["contact"]["email"];





const footer = document.querySelector('footer');
footer.textContent = siteContent["footer"]["copyright"]


