// class Objeto {
//     constructor(){}
//     hablar(){
//         console.log("hola");
//     }  
// }

// const objeto = new Objeto();

// objeto.__proto__.hablar = ()=>{
//     console.log("modificado desde adentro")
// }
// console.log(objeto)
// "use strict";

// function saludar(){
//     this.nombre = "pedro";
//     this.saludar = function(){
//         console.log(`hola ${this.nombre}`);
//     } 
// }

// obj = new saludar();

// obj.saludar();
// const saludar = function(){return hey = "hola"};
// const saludar = res => hey = res;

// resultado = saludar("hola")

// console.log(resultado)
// "use strict";

// const saludar = (mgs)=>{
//     let edad;
//     try{
//         if (mgs) edad = prompt(mgs)
//         else { edad = prompt("introduce tu edad")};
//         edad = parseInt(edad);
//         if(isNaN(edad))throw "introduce una edad valida"
//         if(edad > 18 ){alert("sos mayor de edad")}
//         else {alert("sos menor de edad")};
//     } catch(e){
//         saludar(e)
//     }
// }
// saludar()
// "use strict";

// const cambiarTamaño = tamaño => {
//     return ()=>{
//         document.querySelector(".texto").style.fontSize = `${tamaño}px`;
// }
// };

// let px12 = cambiarTamaño(12);
// let px14 = cambiarTamaño(14);
// let px16 = cambiarTamaño(16);


// document.querySelector(".t12").addEventListener("click",px12);
// document.querySelector(".t14").addEventListener("click",px14);
// document.querySelector(".t16").addEventListener("click",px16);

// "use strict";

// const suma = (...num)=>{
//     let resultado = 0;
//     for (let i = 0; i < num.length; i++){
//         resultado += num[i];
//     }
//     console.log(resultado);
// }
// suma(12,33,45)

// let edad = 18;

// (edad >= 18) ? alert("es mayor de edad")
//              : alert("es menor de edad");

"use strict";

let arr = ["manzana","pera","kiwi"];
let arr2 = ["banana","tomate"];

let arr3 = [...arr,...arr2];
console.log(arr3);