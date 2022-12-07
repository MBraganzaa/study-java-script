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
"use strict";

const saludar = (mgs)=>{
    let edad;
    try{
        if (mgs) edad = prompt(mgs)
        else { edad = prompt("introduce tu edad")};
        edad = parseInt(edad);
        if(isNaN(edad))throw "introduce una edad valida"
        if(edad > 18 ){alert("sos mayor de edad")}
        else {alert("sos menor de edad")};
    } catch(e){
        saludar(e)
    }
}
saludar()