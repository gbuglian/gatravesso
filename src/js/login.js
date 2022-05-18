const  email = document.getElementById('input_email');
const password = document.getElementById('input_password');

function focusEmail(){
    email.style.borderColor = "#dcad77";
    email.style.borderWidth = "3px 2px";
}


function blurEmail(){
    email.style.borderColor = "#ccc";
    email.style.borderWidth = "1px";
}

function focusPassword(){
    password.style.borderColor = "#dcad77";
    password.style.borderWidth = "3px 2px";
}


function blurPassword(){
    password.style.borderColor = "#ccc";
    password.style.borderWidth = "1px";
}

email.addEventListener('blur', blurEmail);

email.addEventListener('focus', focusEmail);

password.addEventListener('blur', blurPassword);

password.addEventListener('focus', focusPassword);