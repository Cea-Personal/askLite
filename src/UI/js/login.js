import card from '../components/card.css'
import button from '../components/button.css'
import background from '../components/background.css'
import text from '../components/text.css'
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
signup.style.display='none'
reset.style.display='none'

loginButton.onclick =()=>{
    loginButton.className =`${button.active}`
    signupButton.className =`${button.login}`
    resetButton.className = `${button.login}`
    login.style.display ='block'
    signup.style.display='none'
    reset.style.display='none'

}
signupButton.onclick =()=>{
    signupButton.className =`${button.active}`
    loginButton.className =`${button.login}`
    resetButton.className = `${button.login}`
    signup.style.display='block'
    login.style.display='none'
    reset.style.display='none'

}

resetButton.onclick =()=>{
    resetButton.className =`${button.active}`
    loginButton.className =`${button.login}`
    signupButton.className = `${button.login}`
    reset.style.display='block'
    login.style.display='none'
    signup.style.display='none'

}
let par = loginCard.querySelectorAll('p')
for (let i=0; i<par.length; i++){
    par[i].className =`${text.centered}`
}








