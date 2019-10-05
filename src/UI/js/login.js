import card from '../components/card.css'
import button from '../components/button.css'
import background from '../components/background.css'
import text from '../components/text.css'
import layout from'../components/layouts.css'
import form from '../components/form.css'

const loginCard = document.getElementById('loginFrame')
const login = document.getElementById('login')
const signup = document.getElementById('signup')
const reset =  document.getElementById('reset')

const buttons = loginCard.querySelectorAll('button')
const loginButton = buttons[0]
const signupButton = buttons[1]
const resetButton = buttons[2]

loginCard.className =`${card.loginCard}`

loginButton.className =`${button.active}`
signupButton.className =`${button.login}`
resetButton.className = `${button.login}`
signup.className = layout.none
reset.className = layout.none

loginButton.onclick =()=>{
    loginButton.className =`${button.active}`
    signupButton.className =`${button.login}`
    resetButton.className = `${button.login}`
    login.className = layout.block
    signup.className = layout.none
    reset.className = layout.none

}
signupButton.onclick =()=>{
    signupButton.className =`${button.active}`
    loginButton.className =`${button.login}`
    resetButton.className = `${button.login}`
    signup.className = layout.block
    login.className = layout.none
    reset.className = layout.none

}

resetButton.onclick =()=>{
    resetButton.className =`${button.active}`
    loginButton.className =`${button.login}`
    signupButton.className = `${button.login}`
    reset.className = layout.block
    login.className = layout.none
    signup.className = layout.none

}
let par = loginCard.querySelectorAll('p')
for (let i=0; i<par.length; i++){
    par[i].className =`${text.centered}`
}








