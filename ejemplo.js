// let peticion;

// if (window.XMLHttpRequest){ peticion = new XMLHttpRequest();}
// else {peticion = new ActiveXObject("microsoft.XMLHTTP")}


// peticion.addEventListener("load",()=>{
//     let respuesta;
//     if (peticion.status == 200 || peticion.status == 201){ 
//         respuesta = peticion.response } 
//     else { 
//         respuesta = console.log("lo siento no se encontro el archibo") };
//     console.log(JSON.parse(respuesta).edad);
// })

// peticion.open("GET","informacion.txt");
// peticion.send();

// let peticion;

// if (window.XMLHttpRequest){ peticion = new XMLHttpRequest();}
// else {peticion = new ActiveXObject("microsoft.XMLHTTP")}


// peticion.addEventListener("load",()=>{
//     let respuesta;
//     if (peticion.status == 200 || peticion.status == 201){ 
//         respuesta = peticion.response } 
//     else { 
//         respuesta = console.log("lo siento no se encontro el archibo") };
//     console.log(respuesta);
// })

// peticion.open("post","https://reqres.in/api/users");
// peticion.setRequestHeader("content-type","application/json;charset=UTF8")
// peticion.send(JSON.stringify({
//     "name": "morpheus",
//     "job": "leader"
// }));



// imagenPerricu = document.querySelector(".img");

// peticion = fetch("perricu.jpg");
// peticion
//     .then(res=>res.blob())
//     .then(res=>imagenPerricu.src = URL.createObjectURL(res))


// peticion = fetch("informacion.txt");
// peticion
//     .then(res=>res.json())
//     .then(res=>console.log(res))

// axios.post("https://reqres.in/api/users",{
//     "nombre" : "manu"
// })
//     .then(res=>console.log(res))

const validar = async ()=>{
    let peticion = await fetch("informacion.txt");
    let resultado = await peticion.json();
    console.log(resultado);
}

validar();