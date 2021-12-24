

function validar(){
    const nombre = document.getElementById("nombre")
    const email = document.getElementById("email")
    const apellido = document.getElementById("apellido")
    const textarea = document.getElementById("textarea")

    if(nombre.value.length < 6){
        document.getElementById("nombre").style.borderBottomColor = "red";
    }else{
        document.getElementById("nombre").style.borderBottomColor = "green";
    }

    if(email.value.length < 6){
        document.getElementById("email").style.borderBottomColor = "red";
    }else{
        document.getElementById("email").style.borderBottomColor = "green";
    }

    if(textarea.value.length <= 0){
        document.getElementById("textarea").style.borderBottomColor = "red";
    }else{
        document.getElementById("textarea").style.borderBottomColor = "green";
    }

    if(apellido.value.length < 6){
        document.getElementById("apellido").style.borderBottomColor = "red";
    }else{
        document.getElementById("apellido").style.borderBottomColor = "green";
    }

};