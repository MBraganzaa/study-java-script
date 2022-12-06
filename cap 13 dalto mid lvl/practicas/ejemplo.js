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

const getName = async ()=>{
    let resultado = await axios ("informacion.txt");
    document.querySelector(".get-name").innerHTML = resultado.data.nombre;
}
const getAge = async ()=>{
    let resultado = await axios ("informacion.txt");
    document.querySelector(".get-age").innerHTML = resultado.data.edad;
}
const getDik = async ()=>{
    let resultado = await axios ("informacion.txt");
    document.querySelector(".get-dik").innerHTML = resultado.data.pito;
}
document.getElementById('btn-name').addEventListener("click",getName)
document.getElementById('btn-age').addEventListener("click",getAge)
document.getElementById('btn-dik').addEventListener("click",getDik)

