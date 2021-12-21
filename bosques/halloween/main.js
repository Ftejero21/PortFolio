
const nombre = document.getElementById("nombre")
const email = document.getElementById("email")
const textarea = document.getElementById("textarea")



function validar(){

let warnings = "";
let warnings2 = "";
let warnings3 = "";
let entrar = false;

if(nombre.value.length < 6){
    entrar = true;
    warnings += 'Nombre Muy Corto'
} 

if(email.value.length < 6){
    entrar = true;
    warnings2 += 'email Incorrecto';
} 

if(textarea.value.length <= 0){
    entrar = true;
    warnings3 += 'Escriba algun Mensaje';

}


if(entrar){
    document.getElementById("parrafo1").innerHTML = warnings;
    document.getElementById("parrafoemail").innerHTML = warnings2;
    document.getElementById("parrafo3").innerHTML = warnings3;

}

if(entrar = false){
    document.getElementById("parrafo1").style.display = "none"
    document.getElementById("parrafoemail").style.display = "none"
    document.getElementById("parrafo3").style.display = "none"
}




}













function abrir(){

    document.getElementById("parrafo").style.display = "block"
    document.getElementById("abrir").style.display = "none"
    document.getElementById("cerrar").style.display = "block"
}


function cerrar(){

    document.getElementById("parrafo").style.display = "none"
    document.getElementById("abrir").style.display = "block"
    document.getElementById("cerrar").style.display = "none"
}

function abrir2(){
    document.getElementById("parrafo4").style.display = "block"
    document.getElementById("cerrar2").style.display = "block"
    document.getElementById("abrir2").style.display = "none"
}


function cerrar2(){

    document.getElementById("parrafo4").style.display = "none"
    
    document.getElementById("abrir2").style.display = "block"
    document.getElementById("cerrar2").style.display = "none"
}