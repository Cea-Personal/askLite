import layout from '../components/layouts.css'
import card from '../components/card.css'
import button from '../components/button.css'
import img from '../images/avatar.png'

const leftbar = document.getElementById('leftsidebar')
leftbar.className = `${card.profileCard} ${layout.leftbar} `

const image = document.createElement('img')
image.src=img

let div = leftbar.querySelectorAll('div')
div[0].className = layout.leftbarUp
div[0].querySelector('form')
div[1].className = layout.leftbarDown

const mainpage = document.getElementById('mainSection')
mainpage.className = `${card.profileCard}`

const mainDivs = mainpage.querySelectorAll('div')
const header = mainDivs[0]
header.style.height='35vh';
const pictureHolder = mainDivs[1];
pictureHolder.style.width='50%'
pictureHolder.style.float='right'
image.style.height='25vh'
image.style.padding='2% 5%'
header.insertBefore(image,pictureHolder)


const buttons = mainDivs[2].querySelectorAll('button')

buttons[0].className = button.profileActive;
buttons[1].className = button.profile
buttons[2].className = button.profile
buttons[3].className = button.profile
buttons[4].className = button.profile
buttons[5].className = button.profile

const aboutDiv = document.getElementById('about')
const questionDiv = document.getElementById('questions')
const answerDiv = document.getElementById('answers')
const tagsDiv = document.getElementById('tags')
const badgeDiv = document.getElementById('badge')
const statsDiv = document.getElementById('stats')

questionDiv.className = layout.none
answerDiv.className = layout.none
tagsDiv.className = layout.none
badgeDiv.className = layout.none
statsDiv.className = layout.none

buttons[0].onclick =() =>{
    aboutDiv.className = layout.block
    aboutDiv.style.margin='0'
    aboutDiv.style.backgroundColor='gainsboro'
    questionDiv.className = layout.none
    answerDiv.className = layout.none
    tagsDiv.className = layout.none
    badgeDiv.className = layout.none
    statsDiv.className = layout.none
    buttons[0].className =button.profileActive;
    buttons[1].className = button.profile
    buttons[2].className = button.profile
    buttons[3].className = button.profile
    buttons[4].className = button.profile
    buttons[5].className = button.profile
}

buttons[1].onclick =() =>{
    aboutDiv.className = layout.none
    questionDiv.className = layout.block
    answerDiv.className = layout.none
    tagsDiv.className = layout.none
    badgeDiv.className = layout.none
    statsDiv.className = layout.none
    buttons[0].className =button.profile;
    buttons[1].className = button.profileActive;
    buttons[2].className = button.profile
    buttons[3].className = button.profile
    buttons[4].className = button.profile
    buttons[5].className = button.profile
}

buttons[2].onclick =() =>{
    aboutDiv.className = layout.none
    questionDiv.className = layout.none
    answerDiv.className = layout.block
    tagsDiv.className = layout.none
    badgeDiv.className = layout.none
    statsDiv.className = layout.none
    buttons[0].className =button.profile;
    buttons[1].className = button.profile;
    buttons[2].className = button.profileActive;
    buttons[3].className = button.profile
    buttons[4].className = button.profile
    buttons[5].className = button.profile
}
buttons[3].onclick =() =>{
    aboutDiv.className = layout.none
    questionDiv.className = layout.none
    answerDiv.className = layout.none
    tagsDiv.className = layout.block
    badgeDiv.className = layout.none
    statsDiv.className = layout.none
    buttons[0].className =button.profile;
    buttons[1].className = button.profile;
    buttons[2].className = button.profile
    buttons[3].className = button.profileActive
    buttons[4].className = button.profile
    buttons[5].className = button.profile
}
buttons[4].onclick =() =>{
    aboutDiv.className = layout.none
    questionDiv.className = layout.none
    answerDiv.className = layout.none
    tagsDiv.className = layout.none
    badgeDiv.className = layout.block
    statsDiv.className = layout.none
    buttons[0].className =button.profile;
    buttons[1].className = button.profile;
    buttons[2].className = button.profile
    buttons[3].className = button.profile
    buttons[4].className = button.profileActive;
    buttons[5].className = button.profile
}
buttons[5].onclick =() =>{
    aboutDiv.className = layout.none
    questionDiv.className = layout.none
    answerDiv.className = layout.none
    tagsDiv.className = layout.none
    badgeDiv.className = layout.none
    statsDiv.className = layout.block
    buttons[0].className =button.profile;
    buttons[1].className = button.profile;
    buttons[2].className = button.profile;
    buttons[3].className = button.profile;
    buttons[4].className = button.profile;
    buttons[5].className = button.profileActive;
}

const questionSubButton = questionDiv.querySelectorAll('button')
const questionSubDivs = questionDiv.querySelectorAll('div')

questionSubButton[2].className = button.underlineActive
questionSubButton[1].className = button.underline
questionSubButton[0].className = button.underline
questionSubDivs[0].className =layout.sublevel
questionSubDivs[2].className = layout.none
questionSubDivs[1].className = layout.none

questionSubButton[0].onclick =()=>{
    questionSubButton[0].className = button.underlineActive
    questionSubButton[1].className = button.underline
    questionSubButton[2].className = button.underline
    questionSubDivs[1].className = layout.block
    questionSubDivs[2].className = layout.none
    questionSubDivs[3].className = layout.none
}

questionSubButton[1].onclick =()=>{
    questionSubButton[0].className = button.underline
    questionSubButton[1].className = button.underlineActive
    questionSubButton[2].className = button.underline
    questionSubDivs[1].className = layout.none
    questionSubDivs[2].className = layout.block
    questionSubDivs[3].className = layout.none
}

questionSubButton[2].onclick =()=>{
    questionSubButton[0].className = button.underline
    questionSubButton[1].className = button.underline
    questionSubButton[2].className = button.underlineActive;
    questionSubDivs[1].className = layout.none
    questionSubDivs[2].className = layout.none
    questionSubDivs[3].className = layout.block
}

const answerSubButton = answerDiv.querySelectorAll('button')
const answerSubDivs = answerDiv.querySelectorAll('div')

answerSubButton[2].className = button.underlineActive
answerSubButton[1].className = button.underline
answerSubButton[0].className = button.underline
answerSubDivs[0].className =layout.sublevel
answerSubDivs[2].className = layout.none
answerSubDivs[1].className = layout.none

answerSubButton[0].onclick =()=>{
    answerSubButton[0].className = button.underlineActive
    answerSubButton[1].className = button.underline
    answerSubButton[2].className = button.underline
    answerSubDivs[1].className = layout.block
    answerSubDivs[2].className = layout.none
    answerSubDivs[3].className = layout.none
}

answerSubButton[1].onclick =()=>{
    answerSubButton[0].className = button.underline
    answerSubButton[1].className = button.underlineActive
    answerSubButton[2].className = button.underline
    answerSubDivs[1].className = layout.none
    answerSubDivs[2].className = layout.block
    answerSubDivs[3].className = layout.none
}

answerSubButton[2].onclick =()=>{
    answerSubButton[0].className = button.underline
    answerSubButton[1].className = button.underline
    answerSubButton[2].className = button.underlineActive;
    answerSubDivs[1].className = layout.none
    answerSubDivs[2].className = layout.none
    answerSubDivs[3].className = layout.block
}



