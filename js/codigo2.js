let usernameLS = localStorage.getItem('username');
let passwordLS = localStorage.getItem('password');

let username = document.getElementById('username').value;
let password = document.getElementById('password').value;

let boton = document.getElementById('boton');

console.log(usernameLS,passwordLS);



form.addEventListener("submit", (e)=> {
    e.preventDefault();
    
    if (usernameLS && passwordLS) {
        // if(usernameLS == username && passwordLS == passwordLS){
        
         location.href="../sesion.html" ;
        // }
        // else {
        //     alert("Has ingresado mal los datos");
        // }
    }
    // if (username && password) {
        
    // }
    else {
        alert("No existe ningun usuario");
    }




    // if(username != null && username != undefined){
    //     console.log("todo salio bien");
    //      location.href="session.html" ;
    // }

  
});

