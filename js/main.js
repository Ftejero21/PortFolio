window.sr = ScrollReveal();

  sr.reveal('.contenedor',{
    duration: 2000,
    origin:'top',
    distance: '400px'
  });
  
  sr.reveal('.Texto',{
    duration: 3000,
    origin: 'left',
    distance:'300px'
  });

  sr.reveal('.imagen',{
    duration: 2500,
    origin: 'bottom',
    distance:'300px'
  });

  sr.reveal('.iconos',{
    duration:1500,
    origin: 'left',
    distance: '150px'
  });

  sr.reveal('.textos-about',{
    duration: 1500,
    origin:'bottom',
    distance:'250px'
  });

  sr.reveal('.imagen-about',{
    duration: 1500 ,
    origin: 'top',
    distance: '250px'
  });

  sr.reveal('.textosprojects',{
    duration:1500,
    origin:'top',
    distance:'100px'
  });

  sr.reveal('.caja',{
    duration:1500,
    origin:'bottom',
    distance:'100px'
  });

  sr.reveal('.input1',{
    duration: 1500,
    origin:'left',
    distance:'100px'
  });

  sr.reveal('.input2',{
    duration:1500,
    origin:'right',
    distance:'100px'
  });

  sr.reveal('.input3',{
    duration:1500,
    origin:'bottom',
    distance:'10w0px'
  });



  function validar(){
    const textarea = document.getElementById("textarea").value
    const nombre = document.getElementById("nombre").value
    const email = document.getElementById("email").value
    let parrafo = document.getElementById("parrafo")
    let warnings1 = "";
    let warnings2 = "";
    let warnings3 = "";
    
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    parrafo = "";
    
    if(nombre.length < 6){
      
      warnings1 += 'Nombre Muy Corto';
      document.getElementById("parrafo").innerHTML = warnings1
    }else{
      document.getElementById("parrafo").innerHTML = ''
    }
    

    if(!regexEmail.test(email)){
      
      warnings2 += 'Email Incorrecto';
      document.getElementById("parrafo2").innerHTML = warnings2
    }else{
      document.getElementById("parrafo2").innerHTML = ''
    }


    if(textarea.length <= 0){
      
      warnings3 += 'Escriba un Mensaje'
      document.getElementById("parrafo3").innerHTML = warnings3
    }else{
      document.getElementById("parrafo3").innerHTML = ''
    }

    
  
    
    
  
      





  }

  function abrir(){
    document.getElementById("parrafotexto").style.display = "block"
    document.getElementById("cerrar").style.display = "block"
    document.getElementById("abrir").style.display = "none"
   }

  function cerrar(){
    document.getElementById("parrafotexto").style.display = "none"
    document.getElementById("cerrar").style.display = "none"
    document.getElementById("abrir").style.display = "block"
  }


  function abrir2(){
    document.getElementById("parrafotexto2").style.display = "block"
    document.getElementById("cerrar2").style.display = "block"
    document.getElementById("abrir2").style.display = "none"
   }

  function cerrar2(){
    document.getElementById("parrafotexto2").style.display = "none"
    document.getElementById("cerrar2").style.display = "none"
    document.getElementById("abrir2").style.display = "block"
  }


  function alerta(){
    alert("Funcion No Disponible");
  }