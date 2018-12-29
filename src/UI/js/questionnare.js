import others from '../components/others.css'
import animate from '../components/transition.css'
import nav from '../components/nav.css'
import card from '../components/card.css';
import color from '../components/color.css';
import text from "../components/text.css";
import button from "../components/button.css";
import layout from "../components/layouts.css";

/*------------- create functions  -----------------*/

// function to assign classes
const AssignClass = (element,className) =>{
    let create = document.createElement(element);
    create.className =className;
    return create
}

// function to create div and assign a class or id name
const  createDiv = (selector ,name) =>{
    let divs = document.createElement('div')
    divs.setAttribute(selector,name)
    return divs
}
// function for the sidebard material design
const sidebarCard = (listNo,node, className) =>{
    for(let i=1; i<= listNo; i++){
        document.getElementsByClassName(className)[node].appendChild(createDiv('class', `wow ${animate.slideInRight} ${card.sidebarCard}`));
    }
}
// function for  main card material design
const questionCard = (listNo,node,className) =>{
    for(let i=0; i<listNo; i++){
        document.getElementsByClassName(className)[node].appendChild(createDiv('class', `wow ${animate.slideInLeft} ${card.questionCard}`));
        let title = document.getElementsByClassName(className)[node].getElementsByClassName(card.questionCard)[i]
        title.style.marginTop ='1.8%'
    }
}

// create a link node
const a = document.createElement('a');
 
/* --------------- display active tab-------------------*/
let activeTab =document.getElementsByClassName(nav.menuButton)
activeTab[1].href ="questionnare.html"
activeTab[1].className = `wow ${nav.active} ${animate.flash} ${animate.delay5s}`;


/*----------------create three divs --------------------*/
let main = document.getElementsByClassName(layout.main);
main[0].appendChild(AssignClass ('div',layout.tabs));
main[0].appendChild(AssignClass ('div',layout.tabs));
main[0].appendChild(AssignClass ('div',layout.fix));
let div =document.getElementsByClassName(layout.tabs)
div[0].style.width ="58%";
div[0].style.float ="left";
div[1].style.width ="38%";
div[1].style.float ="right";
 
/*----------------- create cards------------*/
sidebarCard(2,1, layout.tabs)
questionCard(2,0, layout.tabs)

/*----------------  add  top div ----------------*/
main[0].insertBefore(AssignClass ('div',layout.tabs),div[0]);
div[0].className = layout.fix;


/*-------------create question form -----------*/
let form = document.createElement('form')
form.setAttribute('action','');// set form action
form.setAttribute('method','post') // post method for forms

// create the form on the second main card.
let askForm = document.getElementsByClassName(card.questionCard)[1].appendChild(form)

/*--------------- create subject input ---------------*/
let namelabel = document.createElement('label'); // Create Label for Name Field
namelabel.innerHTML = "Subject : "; // Set Field Labels
form.appendChild(namelabel);

let inputelement = document.createElement('input'); // Create Input Field for Name
inputelement.setAttribute("type", "text");
inputelement.setAttribute("name", "title");
form.appendChild(inputelement);

let linebreak = document.createElement('br');
form.appendChild(linebreak);

/*------------ create description input ---------------*/

let messagelabel = document.createElement('label'); // Append Textarea
messagelabel.innerHTML = "Description : ";
form.appendChild(messagelabel);

let texareaelement = document.createElement('textarea');
texareaelement.setAttribute("name", "description");
form.appendChild(texareaelement);

let messagebreak = document.createElement('br');
form.appendChild(messagebreak);

/*-------------create category input --------------*/

let categorylabel = document.createElement('label'); // Append Textarea
categorylabel.innerHTML = "Category : ";
form.appendChild(categorylabel);

let list = document.createElement('input');
list.setAttribute('list','category')
form.appendChild(list)

let datalist = document.createElement('datalist');
datalist.setAttribute('id','category')

let categories =['HTML','CSS','Pre-Processors','CSS Frameworks','Bootstrap','Vanilla Javascript', 'React','Angular','VUE','DevOps']

let createOptions =(element,values) =>{
    for(let i=0; i<values.length;i++){
        let options=document.createElement('option');
        options.value =values[i]
        element.appendChild(options)
    }
}
form.appendChild(datalist);
createOptions(document.getElementById('category'),categories)

let catBreak = document.createElement('br');
form.appendChild(catBreak);

/*-----------------create tags input ---------------*/

let tagslabel = document.createElement('label');
tagslabel.innerHTML = "Tags : ";
form.appendChild(tagslabel);

let tagelement = document.createElement('input'); 
tagelement.setAttribute("type", "text");
tagelement.setAttribute("name", "tags");
form.appendChild(tagelement);

let tagbreak = document.createElement('br');
form.appendChild(tagbreak);

/*--------------------create submit button-----------*/


let submitElement = document.createElement('button'); // Append Submit Button
submitElement.setAttribute("type", "submit");
submitElement.setAttribute("value", "Ask Question");
submitElement.setAttribute("class", `${button.fullLength}`);
document.getElementsByClassName(card.questionCard)[2].appendChild(submitElement);
let buttons =form.querySelector('button')
    buttons.innerHTML ='Ask Question'