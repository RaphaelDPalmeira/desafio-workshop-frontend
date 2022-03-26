const body = document.querySelector("body")
const header = document.querySelector("header");
const main = document.querySelector("main");
const btt = document.querySelector(".mudar");
const bt = document.querySelector(".button");
const item = document.querySelectorAll(".item-menu");
const it = document.querySelectorAll(".item");
const desc = document.querySelector(".description");
const cred = document.querySelector(".credit");

const imgsrc = ("img/logo2.webp");
const img = document.querySelector(".logo");

const input = document.querySelector("#name");
const send = document.querySelector(".send-inside");

function mudar(){
    body.classList.toggle("trocar-fundo")
    header.classList.toggle("trocar1");
    main.classList.toggle("trocar2");
    btt.classList.toggle("trocar-botao");
    bt.classList.toggle("trocar-botao");
    desc.classList.toggle("trocar-texto");
    cred.classList.toggle("trocar-texto");
    
    for(i=0; i<item.length; i++){
        item[i].classList.toggle("trocar-botao");
        it[i].classList.toggle("trocar-botao");
    }

    if(btt.value == "Change Theme"){
        btt.value = "Return";
        img.src = imgsrc;
    }
    else{
        btt.value = "Change Theme";
        img.src = ("img/logo.webp");
    }
}

function aumentaFonte(){
    send.classList.toggle("aumentaFonte");
}

send.addEventListener("click", function(){
    alert("Congratulations "+input.value+", successfully registered!")
})