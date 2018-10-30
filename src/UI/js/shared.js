import background from '../components/background.css'
import layout from '../components/layouts.css'
import color from '../components/color.css'
import nav from '../components/nav.css'
import img from '../images/logo.png'


/* --------- get Elements -----------------*/
const header = document.querySelector("header");
const navBar = document.querySelector('nav');
const section = document.querySelector('section');
const sidebar = document.querySelector('aside');
const footer = document.querySelector('footer');

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
header.firstElementChild.appendChild(createList(2,nav.topMenu,nav.horizontal,nav.headButton))
let headLi = document.querySelectorAll('li');
headLi[0].firstChild.href ="login.html";
headLi[0].firstChild.innerHTML ="Login";
headLi[1].firstChild.href ="about.html#contact";
headLi[1].firstChild.innerHTML ="Contact Us";
headLi[0].firstChild.style.borderRight = '1px solid white';

/*------------Shared navbar ---------------*/
navBar.className=layout.navBar


// add logo to the navbar

navBar.appendChild(createDiv('id','logo'))
a.href ="index.html"
let logoDiv =document.getElementById('logo');
image.src = img;
image.style.height = '50px';
logoDiv.style.paddingLeft ='7.6%';
logoDiv.style.width ='25%';
logoDiv.style.float ="left";
logoDiv.style.margin = 0;
logoDiv.appendChild(a).appendChild(image);

// create navigation menu
navBar.appendChild(createDiv('id','navMenu'));
let tabs = document.getElementById('navMenu');
tabs.style.width="60%";
tabs.style.float="right";
tabs.appendChild(createList(4,nav.tabs,nav.horizontal, nav.menuButton));
let navLi =tabs.querySelectorAll('li');
navLi[0].firstChild.href ="home.html"
navLi[0].firstChild.innerHTML ="HOME"
navLi[1].firstChild.href ="questionnare.html"
navLi[1].firstChild.innerHTML ="ASK QUESTION"
navLi[2].firstChild.href ='questionList.html'
navLi[2].firstChild.innerHTML ="QUESTIONS"
navLi[3].firstChild.href ='profile.html'
navLi[3].firstChild.innerHTML ="YOUR PROFILE"

// body background
section.className =layout.section
let main = section.firstElementChild
main.className =layout.main

/*--------------footer elements--------------*/

footer.className = layout.footer
footer.appendChild(createDiv('class',layout.foot));
footer.appendChild(createDiv('class',layout.foot));
footer.appendChild(createDiv('class',layout.trademark));

let footerDiv = footer.querySelectorAll('div');
let firstFoot = footerDiv[0];
firstFoot.appendChild(createList(3,nav.tabs," ", nav.footerButton))
let list = firstFoot.querySelectorAll('li');
list[0].firstChild.href ="questionList.html";
list[0].firstChild.innerHTML ="Questions";
list[1].firstChild.href ="about.html";
list[1].firstChild.innerHTML ="About us";
list[2].firstChild.href ="about.html#contact.html";
list[2].firstChild.innerHTML ="Contact Us";

let secondFoot =footerDiv[1];
secondFoot.appendChild(createList(3,nav.tabs," ",nav.footerButton))
let secondList = secondFoot.querySelectorAll('li');
secondList[0].firstChild.href ="privacy.html";
secondList[0].firstChild.innerHTML ="Privacy Policy";
secondList[1].firstChild.href ="services.html";
secondList[1].firstChild.innerHTML ="Terms of Service";
secondList[2].firstChild.href ="cookie.html";
secondList[2].firstChild.innerHTML ="Cookie Policy";

let tradeMark = footerDiv[2];
tradeMark.appendChild(p);
tradeMark.childNodes[0].innerHTML ="All Rights Reserved. &copy 2018. Made by CEA"







