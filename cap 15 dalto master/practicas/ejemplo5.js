"use strict";

const zona = document.querySelector(".zonaDeArrastre");
const play = document.querySelector(".play");

zona.addEventListener("dragover", e =>{
    e.preventDefault();
    changeStyle(e.srcElement, "#888");
})

zona.addEventListener("dragleave", e =>{
    e.preventDefault();
    changeStyle(e.srcElement, "#888");
})

zona.addEventListener("drop", e =>{
    e.preventDefault();
    changeStyle(e.srcElement, "#888");
    cargarArchibo(e.dataTransfer.files[0]);
    zona.style.border = "4px solid #4f9";
})

const changeStyle = (obj,color)=>{
    obj.style.color = color;
    obj.style.border = `4px dashed ${color}`
}
const cargarArchibo = ar=>{
    const reader = new FileReader();
    reader.readAsArrayBuffer(ar);
    // reader.addEventListener("progress", e =>{
    //     const carga = Math.round(e.loaded / ar.size * 100);
    //     zona.textContent = `${carga}%`;
    //     document.querySelector(".barra-de-carga").style.padding = `60px 40px`;
    //     document.querySelector(".barra-de-carga").style.width = `${carga / 3.6}%`;
    // });
    // reader.addEventListener("loadend",e=>{
    //     changeStyle(zona, "4f9")
    //     zona.style.border = "4px solid #4f9";
    //     document.querySelector(".barra-de-carga").style.background = "#4f9";
    // });
    reader.addEventListener("load", e =>{
        let video = new Blob([new Uint8Array(e.currentTarget.result)],{type: 'video/mp4'});
        let url = URL.createObjectURL(video);
        let img = document.createElement("VIDEO");
        img.setAttribute("src",url);
        document.querySelector(".resultado").appendChild(img);
        play.addEventListener("click",()=> img.play());
    })
}

// const input = document.getElementById('input');
// input.addEventListener("change",(e)=>{
//    leerArchibo(e.target.files); 
// })

// const leerArchibo = (ar)=>{

//     for (let i = 0; i < ar.length; i++){
//         const reader = new FileReader();
//         reader.readAsDataURL(ar[i]);
//         reader.addEventListener("load",(e)=>{
//         let newImg = `<img src='${e.currentTarget.result}'>`;
//         document.querySelector(".resultado").innerHTML += newImg;
//         });
//     }
// }