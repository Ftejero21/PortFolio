function añadir(){
    alert("Función No disponible")
};


function validar(){

    const nombre = document.getElementById("nombre")
    const apellido = document.getElementById("apellido")
    const email = document.getElementById("email")
    const textarea = document.getElementById("textarea")
    let warnings1 = "";
    let warnings2 = "";
    let warnings3 = "";
    let warnings4 = "";
    let entrar = false;
    
    if(nombre.value.length  < 6 ){

        
        document.getElementById("nombre").style.borderBottomColor = "red"

    }else{
        entrar = true;
        document.getElementById("nombre").style.borderBottomColor = "green"
    }
    
    
    if(apellido.value.length < 6){
        
        document.getElementById("apellido").style.borderBottomColor = "red"
    }else{
        entrar = true;
        document.getElementById("apellido").style.borderBottomColor = "green"
    }

    if (email.value.length < 6) {
        
        document.getElementById("email").style.borderBottomColor = "red"
    }else{
        entrar = true;
        document.getElementById("email").style.borderBottomColor = "green"
    }

    if (textarea.value.length <= 0) {
        document.getElementById("textarea").style.borderBottomColor = "red"
    }else {
        entrar = true;
        document.getElementById("textarea").style.borderBottomColor = "green"
    }

    
    


}