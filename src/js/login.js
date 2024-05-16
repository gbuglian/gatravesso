let  email = document.querySelector('#input_email');
let labelEmail = document.querySelector('#label_email')
let validEmail = false

let password = document.querySelector('#input_password');
let labelPassword = document.querySelector('#label_password')
let validPassword = false

let btnSend = document.querySelector('#btnSend');
let msgErro = document.querySelector('#msg_erro');

function validarSenha(url ="", data = {}) {
    showLoading();
    fetch(url, { 

        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data)

    }).then(function(response) {
        hideLoading();

        if (response.status == 401) {
            msgErro.setAttribute('style', 'color: red; display:block');
            msgErro.innerHTML = 'Usuário inválido'
        }
        if (response.status == 200) {
            msgErro.setAttribute('style', 'color: green; display:block')
            msgErro.innerHTML = 'Usuário Autenticado'
        }

    }).catch(function(error){
        console.error(error.message);
        msgErro.setAttribute('style', 'color: red; display:block')
        msgErro.innerHTML = 'Erro, contate o administrador'
        hideLoading();
    })
} 

function entrar() {
    if(validEmail && validPassword) {
        msgErro.innerHTML = ''; 
        validarSenha('https://gatravessoback.netlify.app/gatravesso/v1/validarSenha', 
            {
                usuario: document.querySelector("#input_email").value, 
                senha: document.querySelector("#input_password").value
            })
    } else{
        msgErro.setAttribute('style', 'color: red; display:block');
        msgErro.innerHTML = 'Preencha todos os campos corretamente e tente novamente'
    }
}

email.addEventListener('keyup', () => {
        if (email.value.length < 6) {
            email.setAttribute('style', 'color: red');
            email.setAttribute('style', 'border: 1px red solid');
            labelEmail.setAttribute('style', 'color: red');
            labelEmail.innerHTML = '* Usuário no minimo 6 caracteres'  
            validEmail = false
        } else {
            email.setAttribute('style', 'color: black');
            email.setAttribute('style', 'border: 1px green solid');
            labelEmail.innerHTML = ''
            validEmail = true
        }
})

password.addEventListener('keyup', () => {
    if (password.value.length < 6) {
         password.setAttribute('style', 'color: red');  
         password.setAttribute('style', 'border: 1px red solid');
         labelPassword.setAttribute('style', 'color: red');
         labelPassword.innerHTML = '* Senha deve possuir no minimo 6 caracteres'
         validPassword = false
    } else {
        password.setAttribute('style', 'border: 1px green solid');
        labelPassword.innerHTML = ''
        validPassword = true
    }
})

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