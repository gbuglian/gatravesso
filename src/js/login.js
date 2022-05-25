let  email = document.querySelector('#input_email');
let labelEmail = document.querySelector('#label_email')
let validEmail = false

let password = document.querySelector('#input_password');
let labelPassword = document.querySelector('#label_password')
let validPassword = false

let btnSend = document.querySelector('#btnSend');

let msgErro = document.querySelector('#msg_erro');

async function postData(url ="", data = {}){
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      });
      return response.json(); // parses JSON response into native JavaScript objects
}


function entrar() {
    if(validEmail && validPassword) {
      msgErro.innerHTML = '';
      postData('http://localhost:8081/gatravesso/v1/login', 
        {
            usuario: document.querySelector("#input_email").value, 
            senha: document.querySelector("#input_password").value
        }).then(data => {
            console.log(data);
        })
    } else{
        msgErro.setAttribute('style', 'color: red');
        msgErro.setAttribute('style', 'display:block');
        msgErro.innerHTML = 'Preencha todos os campos corretamente e tente novamente'
    }

}

email.addEventListener('keyup', () => {
    if (email.value.length < 6) {
        email.setAttribute('style', 'color: red');
        email.setAttribute('style', 'border: 1px red solid');
        label_email.setAttribute('style', 'color: red');
        label_email.innerHTML = '*Insira no minimo 6 caracteres'  
        validEmail = false
    } else {
        email.setAttribute('style', 'color: black');
        email.setAttribute('style', 'border: 1px green solid');
        label_email.innerHTML = ''
        validEmail = true
    }
})

password.addEventListener('keyup', () => {
    if (password.value.length < 6) {
        password.setAttribute('style', 'color: red');  
        password.setAttribute('style', 'border: 1px red solid');
        label_password.setAttribute('style', 'color: red');
        label_password.innerHTML = '*Insira no minimo 6 caracteres'
        validPassword = false
    } else {
        password.setAttribute('style', 'border: 1px green solid');
        label_password.innerHTML = ''
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