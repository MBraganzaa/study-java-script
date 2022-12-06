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
// "use stritc";

function saludar(){
    this.nombre = "pedro";
    this.saludar = function(){
        console.log(`hola ${this.nombre}`);
    } 
}

obj = new saludar();

obj.saludar();