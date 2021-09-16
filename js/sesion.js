let username = localStorage.getItem('username');
let password = localStorage.getItem('password');

let titulo = document.getElementById('titulo');
let cerraSesion = document.getElementById('cerrar-sesion');

titulo.innerHTML += " " + username;

console.log(username);


cerraSesion.addEventListener("click", (e)=> {
    e.preventDefault();
    localStorage.clear();
    location.href="index.html" ;

    // if(username != null && username != undefined){
    //     console.log("todo salio bien");
    //      location.href="session.html" ;
    // }

  
});



