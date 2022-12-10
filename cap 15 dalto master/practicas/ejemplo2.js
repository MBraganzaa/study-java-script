"use strict";

const circulo = document.querySelector(".circulo");
const rectangulo = document.querySelector(".rectangulo");

circulo.addEventListener("dragstart",(e)=>{
    e.dataTransfer.setData("class",e.target);
});
// circulo.addEventListener("drag",()=>{})
// circulo.addEventListener("dragend",()=>{})

rectangulo.addEventListener("dragenter", ()=> console.log(1));
rectangulo.addEventListener("dragover", (e)=>{
    e.preventDefault();
    console.log(2)
});
rectangulo.addEventListener("drop",(e)=> {
    console.log(e.dataTransfer.getData("class"))
});
rectangulo.addEventListener("dragleave", ()=> console.log(4));