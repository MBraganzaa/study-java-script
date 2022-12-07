"use strict";

const agregarZero = n =>{
    if (n.toString().length < 2){return "0".concat(n)};
    return(n);
}

const reloj = ()=>{
    const tiempo = new Date();
    let hora = agregarZero(tiempo.getHours());
    let min = agregarZero(tiempo.getMinutes());
    let seg = agregarZero(tiempo.getSeconds());
    document.querySelector(".hora").textContent = hora;       
    document.querySelector(".min").textContent = min;       
    document.querySelector(".seg").textContent = seg;       
}
reloj()

setInterval(reloj,1000);