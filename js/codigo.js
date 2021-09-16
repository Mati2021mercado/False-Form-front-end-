'use strict';

let contenedorForm = document.getElementById("contenedor-form");
let boton = document.getElementById("boton");
const parrafo = document.getElementById("warnings");


form.addEventListener("submit", (e)=> {
    e.preventDefault();
    let email = document.getElementById("email"); 
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let warnings= "";
    let entrar = false;
    parrafo.innerHTML = "";

    //*VALIDAR REGISTRO
   
    
    if (username.length < 4 || username.trim()==null) {
        warnings += `El nombre de usuario es demasiado corto <br>`;
        entrar = true;
       

    }

    if (password.length < 4 ) {
        warnings += `La contraseña es demasiado corta <br>`;
        entrar = true;
        
    }
    if (!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`;
        entrar = true;
        
    }
    if (entrar) {
        parrafo.innerHTML = warnings;
        
    }
    //*
    else{ 
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        //  HACER EFECTO DESPLAZAMIENTO.
        contenedorForm.style.marginLeft= "0%";
        contenedorForm.style.transition= "2s";
        setTimeout(function(){
            location.href='sesion.html';
            
        },5000);

    }
    
    
});

//*EN CASO DE INICIAR SESSION
//? CREAMOS UN .JS NUEVO
