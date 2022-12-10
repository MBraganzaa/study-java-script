"use strict";

const modal = document.querySelector(".background__over");

const elegirIdioma = ()=>{
    document.querySelector(".en").addEventListener("click",()=>{
        localStorage.setItem("idioma",".en");
        cerrarModal();
    });
    document.querySelector(".es").addEventListener("click",()=>{
        localStorage.setItem("idioma",".es");
        cerrarModal();
    });
}
const cerrarModal = ()=>{
    modal.style.animation = "desaparecer 1s forwards";
    setTimeout(()=>{
        modal.style.display = "none", 1000
        alert("se cambio de idioma correctamente");
    })
}
let idioma = localStorage.getItem("idioma");

if (idioma === null){
    elegirIdioma();
} else {
    console.log(`idioma : ${idioma}`)
}