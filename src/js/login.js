let  email = document.querySelector('#input_email');
let labelEmail = document.querySelector('#label_email')
let validEmail = false

let password = document.querySelector('#input_password');
let labelPassword = document.querySelector('#label_password')
let validPassword = false

let btnSend = document.querySelector('#btnSend');

let msgErro = document.querySelector('#msg_erro');

email.addEventListener('keyup', () => {
    if (email.value.length < 3) {
        label_email.setAttribute('style', 'color: red');
        label_email.innerHTML = '*Insira no minimo 3 caracteres'  
        validEmail = false
    } else {
        label_email.innerHTML = ''
        validEmail = true
    }
})

password.addEventListener('keyup', () => {
    if (password.value.length < 3) {
        label_password.setAttribute('style', 'color: red');
        label_password.innerHTML = '*Insira no minimo 3 caracteres'
        validPassword = false
    } else {
        label_password.innerHTML = ''
        validPassword = true
    }
})


function entrar() {
    if(validEmail && validPassword) {
      msgErro.innerHTML = '';
    } else{
        msgErro.setAttribute('style', 'color: red');
        msgErro.setAttribute('style', 'display:block');
        msgErro.innerHTML = 'Preencha todos os campos corretamente e tente novamente'
        
        setTimeout(() => {
            window.location.reload()
        }, 2000)
    }
}

email.addEventListener('blur', () => {
    email.style.borderColor = "#ccc";
    email.style.borderWidth = "1px";
})

email.addEventListener('focus', () => {
    email.style.borderColor = "#dcad77";
    email.style.borderWidth = "3px 2px";
})

password.addEventListener('blur', () => {
    password.style.borderColor = "#ccc";
    password.style.borderWidth = "1px";
})

password.addEventListener('focus', () => {
    password.style.borderColor = "#dcad77";
    password.style.borderWidth = "3px 2px";
})