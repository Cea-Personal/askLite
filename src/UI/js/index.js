import others from '../components/others.css'
import transition from '../components/transition.css'
import nav from '../components/nav.css'
import card from '../components/card.css';
import color from '../components/color.css';
import button from "../components/button.css";
import layout from "../components/layouts.css";
import WOW from 'wowjs'

new WOW.WOW().init();

const createMultiple = (element,className) =>{
    let create = document.createElement(element);
    create.className =className;
    return create
}
const a = document.createElement('a');
let activeTab =document.getElementsByClassName(nav.menuButton)
activeTab[0].href ="index.html"
activeTab[0].className = nav.active;


let homeBanner  = document.getElementById('banner');
homeBanner.setAttribute('class',others.banner)
homeBanner.style.minHeight ='500px'

const  createDiv = (selector ,name) =>{
    let divs = document.createElement('div')
    divs.setAttribute(selector,name)
    return divs
}

homeBanner.appendChild(createDiv("class",transition.fadeInLeft))
let welcome = document.getElementsByClassName(transition.fadeInLeft)
let welcomeDiv=welcome[0]
welcomeDiv.style.paddingTop = '12%';
welcomeDiv.style.paddingLeft ="7.6%";
welcomeDiv.style.width = "30%";
welcomeDiv.appendChild(createMultiple('h2',color.white)).innerHTML ="Ask, Answer, Assist"
welcomeDiv.appendChild(createMultiple("p",color.white)).innerHTML ="Ask beginner questions, get simple answers, Assist others to gain knowledge. "
welcomeDiv.appendChild(createMultiple("p",color.white)).innerHTML ="Join the Beginners Community today."
welcomeDiv.appendChild(createMultiple('button',button.rounded)).innerHTML =" About us"
welcomeDiv.appendChild(createMultiple('button',button.rounded)).innerHTML =" Join Now"

let main = document.getElementsByClassName(layout.main);
main[0].appendChild(createMultiple('div',layout.tabs));
main[0].appendChild(createMultiple('div',layout.tabs));
main[0].appendChild(createMultiple('div',layout.fix));
let div =document.getElementsByClassName(layout.tabs)
div[0].style.width ="65%";
div[0].style.float ="left";
div[1].style.width ="30%";
div[1].style.float ="right";
div[0].appendChild(createMultiple('div',layout.question));
let tabs =document.getElementsByClassName(layout.question)

tabs[0].appendChild(createMultiple('button',nav.active)).innerHTML ="Recent Questions";
tabs[0].appendChild(createMultiple('button',button.basic)).innerHTML ="Most Responses";
tabs[0].appendChild(createMultiple('button',button.basic)).innerHTML ="Recently Answered";
tabs[0].appendChild(createMultiple('button',button.basic)).innerHTML ="No Answers"
let tabsButton = tabs[0].querySelectorAll('button')

let questionCard = (listNo,node) =>{
    for(let i=1; i<= listNo; i++){
        div[node].appendChild(createDiv('class', card.questionTop))
        div[node].appendChild(createDiv('class', card.questionCard));
        div[node].appendChild(createDiv('class', card.questionBottom));
    }

}
questionCard(5,0);

let sidebarCard = (listNo,node) =>{
    for(let i=1; i<= listNo; i++){
        div[node].appendChild(createDiv('class', card.sidebarCard));
    }
}
sidebarCard(2,1)


