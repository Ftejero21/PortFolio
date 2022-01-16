



function validar(){
const nombre = document.getElementById("nombre")
const email = document.getElementById("email")
const textarea = document.getElementById("textarea")
let warnings1 = "";
let warnings2 = "";
let warnings3 = "";
let entrar = false;

    if(nombre.value.length < 6){
        warnings1 += 'Nombre muy corto'
        document.getElementById("parrafo1").innerHTML = warnings1;
    }else{
        
        document.getElementById("parrafo1").innerHTML = ''
    }

    if(email.value.length < 6){
        warnings2 += 'email incorrecto'
        document.getElementById("parrafoemail").innerHTML = warnings2;
    }else{
        
        document.getElementById("parrafoemail").innerHTML = ''
    }

    if(textarea.value.length <= 0){
        warnings3 += 'Escriba algun Mensaje'
        document.getElementById("parrafo3").innerHTML = warnings3;
    }else{
        
        document.getElementById("parrafo3").innerHTML = ''
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