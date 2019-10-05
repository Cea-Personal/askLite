import others from '../components/others.css'
import animate from '../components/transition.css'
import nav from '../components/nav.css'
import card from '../components/card.css';
import color from '../components/color.css';
import text from "../components/text.css";
import button from "../components/button.css";
import layout from "../components/layouts.css";


const createMultiple = (element,className) =>{
    let create = document.createElement(element);
    create.className =className;
    return create
}
const a = document.createElement('a');
let activeTab =document.getElementsByClassName(nav.menuButton)
activeTab[0].href ="index.html"
activeTab[0].className = `wow ${nav.active} ${animate.flash} ${animate.delay5s}`;



let homeBanner  = document.getElementById('banner');
homeBanner.setAttribute('class',others.banner)
homeBanner.style.minHeight ='500px'

const  createDiv = (selector ,name) =>{
    let divs = document.createElement('div')
    divs.setAttribute(selector,name)
    return divs
}

homeBanner.appendChild(createDiv("class",'welcome'))
let welcome = document.getElementsByClassName('welcome')
let welcomeDiv=welcome[0]
welcomeDiv.className =`wow ${animate.slideInLeft}`
welcomeDiv.style.paddingTop = '12%';
welcomeDiv.style.paddingLeft ="7.6%";
welcomeDiv.style.width = "30%";
welcomeDiv.appendChild(createMultiple('h2',text.h2)).innerHTML ="Ask, Answer , Assist"
welcomeDiv.appendChild(createMultiple("p",text.welcome)).innerHTML ="Ask beginner questions, get simple answers, assist others to gain knowledge, ask lite. "
welcomeDiv.appendChild(createMultiple("p",text.welcome)).innerHTML ="Join the beginners community today."
welcomeDiv.appendChild(createMultiple('button',`wow ${animate.flash} ${button.rounded} ${animate.infinite}`)).innerHTML =" Join Now"


let main = document.getElementsByClassName(layout.main);
main[0].style.borderTop = "none"
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
tabs[0].className +=` wow ${animate.slideInUp}`

tabs[0].appendChild(createMultiple('button',nav.active)).innerHTML ="Recent Questions";
tabs[0].appendChild(createMultiple('button',button.basic)).innerHTML ="Most Responses";
tabs[0].appendChild(createMultiple('button',button.basic)).innerHTML ="Recently Answered";
tabs[0].appendChild(createMultiple('button',button.basic)).innerHTML ="No Answers"
let tabsButton = tabs[0].querySelectorAll('button')

let questionCard = (listNo,node) =>{
    for(let i=1; i<= listNo; i++){
        div[node].appendChild(createDiv('class', `wow ${animate.slideInLeft} ${card.questionTop}`))
        div[node].appendChild(createDiv('class', `wow ${animate.slideInUp} ${card.questionCard}`));
        div[node].appendChild(createDiv('class', `wow ${animate.slideInLeft} ${card.questionBottom}`));
    }

}
questionCard(5,0);

let sidebarCard = (listNo,node) =>{
    for(let i=1; i<= listNo; i++){
        div[node].appendChild(createDiv('class', `wow ${animate.slideInRight} ${card.sidebarCard}`));
    }
}
sidebarCard(2,1)


