window.sr = ScrollReveal();



sr.reveal('.nav',{

    duration:1500,
    origin:'top',
    distance: '100px'
});

sr.reveal('.textos',{

    duration:1500,
    origin: 'bottom',
    distance: '300px'


});

sr.reveal('#humedo',{

    duration:1500,
    origin: 'right',
    distance: '100px'


});

sr.reveal('#seco',{

    duration:1500,
    origin: 'left',
    distance: '100px'


});

sr.reveal('#tropical',{

    duration:1500,
    origin: 'right',
    distance: '100px'


});

sr.reveal('.form',{

    duration:1500,
    origin: 'bottom',
    distance: '200px'


});

sr.reveal('.contactame-textos',{

    duration:1500,
    origin: 'top',
    distance: '200px'


});


function validar(){

    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const email = document.getElementById("Email");
    let entrar = false;
    let warnings = "";
    let warnings2 = "";
    let warnings3 = "";
    let regexemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(nombre.value.length < 6){
        entrar = true;
        warnings += 'Nombre Muy Corto';
    }

    if(apellido.value.length < 6){
        entrar = true;
        warnings2 += 'El apellido es Muy Corto'
    }



    if(!regexemail.test(email.value)){
        entrar = true;
        warnings3 += 'El Email esta incompleto'
        
    }






    if(entrar){
            document.getElementById("parrafo").innerHTML = warnings;
            document.getElementById("parrafo2").innerHTML = warnings2;
            document.getElementById("parrafo3").innerHTML = warnings3;
    }


    



}

