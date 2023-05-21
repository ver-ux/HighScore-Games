const form   =  document.querySelector("#form");
const campos =  document.querySelectorAll(".required");
const spans  =  document.querySelectorAll(".span-required");
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

let nome = document.querySelector("#nome");
let labelName = document.querySelector("#labelName");

let email = document.querySelector("#email");
let labelEmail = document.querySelector("#labelEmail");

let password = document.querySelector("#password");
let labelPassword = document.querySelector("#labelPassword");

let confirmPassword = document.querySelector("#confirmPassword");
let labelConfirmPassword = document.querySelector("#labelConfirmPassword");

//Variáveis abaixo referente a página de login.

const log = document.querySelector("#log");

//Funções abaixo referente a página de cadastro

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     nameValidate();
//     emailValidate();
//     mainPasswordValidate();
//     comparePassword();
//     cadastrar();
// });

function setError(index){
    campos[index].style.border='2px solid red';
    spans[index].style.display='block';
}

function removeError(index){
    campos[index].style.border='';
    spans[index].style.display='none';
}

function nameValidate(){
    if(campos[0].value.length < 3)
    {
        setError(0);
    }
    else
    {
        removeError(0);
    }
}

function emailValidate(){
    if(!emailRegex.test(campos[1].value))
    {
        setError(1);
    }
    else
    {
        removeError(1);
    }
}

function mainPasswordValidate(){
    if(campos[2].value.length <8)
    {
        setError(2);
    }
    else
    {
        removeError(2);
        comparePassword();
    }
}

function comparePassword(){
    if(campos[2].value == campos[3].value && campos[3].value.length >= 8)
    {
        removeError(3);
    }
    else{
        setError(3);
    }
}

function cadastrar(){
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');

  listaUser.push(
    {
        nomeCad: nome.value,
        emailCad: email.value,
        passwordCad: password.value,
    }
  )

    localStorage.setItem('listaUser', JSON.stringify(listaUser));

    window.location.href='login.html';
}

//Funções abaixo referente a página de login

// log.addEventListener('submit', (f) => {
//     f.preventDefault();
//     entrar();
// });

function entrar(){

    let email_log=document.querySelector("#email_log");
    let labelEmail_log=document.querySelector("#labelEmail_log");

    let senha_log=document.querySelector("#senha_log");
    let labelSenha_log=document.querySelector("#labelSenha_log");

    let listaUser=[]

    let userValid={
        nome:'',
        email:'',
        password:''
    }

    listaUser=JSON.parse(localStorage.getItem('listaUser'))

    console.log(listaUser)

    // listaUser.forEach((item)=>{
    //   if(email_log.value == item.emailCad && password.value == item.senhaCad)  {

    //     userValid={
    //         nome: item.nomeCad,
    //         user: item.emailCad,
    //         password: item.passwordCad,
    //     }
    //   }
    // })

    // console.log(userValid)

}