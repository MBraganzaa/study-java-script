"use strict"

const geocalizacion = navigator.geolocation;

const position = (pos)=>{
    console.log(pos);
}
const err = ()=> console.log(e);
const opcions = {
    maximumAce : 0,
    timeout : 1000,
    enableHightAccuracy : true
} 

geocalizacion.getCurrentPosition(position,err,opcions);