"use strict";

const mesa = document.querySelector(".mesa");

const cambiarMantel = (n,e)=>{
    e.dataTransfer.setData("mantel",n);
}
mesa.addEventListener("dragover", (e)=>{
    e.preventDefault();
})
mesa.addEventListener("drop", (e)=>{
    let n = e.dataTransfer.getData("mantel");
    mesa.style.background = `url("textura${n}.jpg")`;
})


for (let i = 1; i < document.querySelector(".manteles").children.length +1; i ++){
    document.querySelector(`.mantel${i}`).addEventListener("dragstart",(e)=>cambiarMantel(i,e));
}