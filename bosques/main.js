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
    
    let warnings = "";
    let warnings2 = "";
    let warnings3 = "";
    let regexemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(nombre.value.length < 6){
        
        warnings += 'Nombre Muy Corto';
        document.getElementById("parrafo").innerHTML = warnings;
    }else{
        document.getElementById("parrafo").innerHTML = '';
    }

    if(apellido.value.length < 6){
       
        warnings2 += 'El apellido es Muy Corto'
        document.getElementById("parrafo2").innerHTML = warnings2;
    }else{
        document.getElementById("parrafo2").innerHTML = '';
    }



    if(!regexemail.test(email.value)){
        
        warnings3 += 'El Email esta incompleto'
        document.getElementById("parrafo3").innerHTML = warnings3;
    }else{
        document.getElementById("parrafo3").innerHTML = '';
    }



    


    


    



}

