const getInformacion = async ()=>{
    let aprobado = document.querySelector(".Aprob")
    let desaprobados = document.querySelector(".desAprob")
    try{
        resultado = await axios ("informacion.txt");
        aprobado.innerHTML = resultado.data.aprobados;
        desaprobados.innerHTML = resultado.data.desaprobados;
    } catch(e){
        aprobado.innerHTML = "  la API fallo";
        desaprobados.innerHTML = "  la API fallo";
    }
}

document.getElementById('btn-info').addEventListener("click",getInformacion);

