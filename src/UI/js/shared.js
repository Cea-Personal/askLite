import background from '../components/background.css'
import layout from '../components/layouts.css'
import nav from '../components/nav.css'
import img from '../images/logo.png'
import drop from '../images/drop.png'
import animate from '../components/transition.css'

/* --------- get Elements -----------------*/
const header = document.querySelector("header");
const navBar = document.querySelector('nav');
const section = document.querySelector('section');
const footer = document.querySelector('footer');

/*----------add wow effects ---------*/
 

/* ------- create Functions ---------------*/
const  createDiv = (selector ,name) =>{
    let divs = document.createElement('div')
    divs.setAttribute(selector,name)
    return divs
}

const createList= (listNo,ulname,liName,linkName) =>{
    let divs = document.createElement('ul');
    divs.setAttribute('class',ulname);
    for (let i=0; i< listNo; i++){
        let li= document.createElement('li');
        li.setAttribute("class",liName);
        let lastLi = divs.appendChild(li);
        divs.insertBefore(li,lastLi);
        let link = document.createElement('a');
        link = li.appendChild(link)
        link.setAttribute("class",linkName)
    }
    return divs
}

const p = document.createElement('p');
const a = document.createElement ('a');
const image = document.createElement('img');

/*--- initialise body no padding, margin , border-------*/

let body = document.querySelector('body');
body.className =layout.body

/* ------------Shared topheader -------------*/

header.appendChild(createDiv('class', background.top));

/*----------- topheader links --------------*/
header.firstElementChild.appendChild(createList(1,nav.topMenu,`${nav.horizontal} ${animate.slideInLeft} wow`,nav.headButton))
let headLi = document.querySelectorAll('li');
headLi[0].firstChild.href ="login.html";
headLi[0].firstChild.innerHTML ="Login";


/*------------Shared navbar ---------------*/
navBar.className=layout.navBar


// add logo to the navbar

navBar.appendChild(createDiv('id','logo'))
a.href ="index.html"
let logoDiv =document.getElementById('logo');
logoDiv.className =`wow ${animate.flash}`
image.src = img;
image.style.height = '50px';
logoDiv.style.paddingLeft ='7.6%';
logoDiv.style.width ='25%';
logoDiv.style.float ="left";
logoDiv.style.margin = 0;
logoDiv.appendChild(a).appendChild(image);

const makeVertical =()  => {
    let x = document.getElementById('navMenu');
    let tabs = x.querySelectorAll('li');
    for (let i=0;i< tabs.length; i++){
        if (tabs[i].className === nav.horizontal) {
            tabs[i].className += nav.vertical;
        } else {
            tabs[i].className =nav.horizontal;
        }}
    
}
// create navigation menu
navBar.appendChild(createDiv('id','navMenu'));
let tabs = document.getElementById('navMenu');
tabs.style.width="60%";
tabs.style.float="right";
tabs.appendChild(createList(5,nav.tabs,`${nav.horizontal} ${animate.flipInX} wow`, nav.menuButton));
let navLi =tabs.querySelectorAll('li');
navLi[0].firstChild.href ="home.html"
navLi[0].firstChild.innerHTML ="HOME"
navLi[1].style.padding = '0 5px'
navLi[1].firstChild.className =nav.icon
navLi[1].firstChild.href ='javascript:void(0)'
navLi[1].firstChild.addEventListener ('click',makeVertical)
let newImage =document.createElement('img');
newImage.src = drop;
newImage.style.height='40px';
navLi[1].firstChild.appendChild(newImage)
navLi[2].firstChild.href ="questionnare.html"
navLi[2].firstChild.innerHTML ="ASK QUESTION"
navLi[3].firstChild.href ='questionList.html'
navLi[3].firstChild.innerHTML ="QUESTIONS"
navLi[4].firstChild.href ='profile.html'
navLi[4].firstChild.innerHTML ="YOUR PROFILE"



// for smaller screens




// body background
section.className =layout.section
let main = section.firstElementChild
main.className =layout.main

/*--------------footer elements--------------*/

footer.className = layout.footer
footer.appendChild(createDiv('class',layout.foot));
footer.appendChild(createDiv('class',layout.trademark))

let footerDiv = footer.querySelectorAll('div');
let firstFoot = footerDiv[0];
firstFoot.appendChild(createList(4,nav.tabs,`wow ${animate.bounceInDown}`, nav.footerButton))
let list = firstFoot.querySelectorAll('li');
list[0].firstChild.href ="questionList.html";
list[0].firstChild.innerHTML ="Questions";
list[1].firstChild.href ="privacy.html";
list[1].firstChild.innerHTML ="Privacy Policy";
list[2].firstChild.href ="services.html";
list[2].firstChild.innerHTML ="Terms of Service";
list[3].firstChild.href ="cookie.html";
list[3].firstChild.innerHTML ="Cookie Policy";
let secondFoot = footerDiv[1];
secondFoot.appendChild(p);
secondFoot.childNodes[0].innerHTML ="All Rights Reserved. &copy 2018. Made by CEA"