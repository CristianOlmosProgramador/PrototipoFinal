    import Login, {login} from '../Login/login.js';
    
    
    
    const btnLogin = document.querySelector('#login');
    const email = document.querySelector('#correo');
    const pass = document.querySelector('#pass');
    const modal = document.querySelector("#modal");
    const arrLogin = obtenerLocalStorage();



    function validarCredencialesModal(){
        swal("Ingrese sus credenciales", "La credenciales no pueden estar vacias", "warning");
        return false;
    }

    function validarCredencialesInvalidas(){
        swal("Credenciales Invalidas", "Por favor! Ingrese sus credenciales nuevamente", "error");
        return false;
    }

  
    function grabarLocalStorage(){

        let login = {
            usuario : "admin", 
            pass : "1234"
        }

        localStorage.setItem("usuario", login.usuario);
        localStorage.setItem("pass", login.pass);

    }

    function obtenerLocalStorage(){

        const arrLogin = [];
        let usuario = localStorage.getItem("usuario");
        let pass = localStorage.getItem("pass");

        arrLogin.push(usuario);
        arrLogin.push(pass);

        return arrLogin;


    }


    btnLogin.addEventListener('click',()=>{

        let usuario = arrLogin[0];
        let pass1 = arrLogin[1];

        console.log(email.value);

        console.log(pass.value);

        console.log('hize click');

        if(email.value == usuario && pass.value == pass1){
           
            //alert('ingreso exitoso');
           
                window.open('menuPrincipal.html','_self');
            
          //  window.open('menuPrincipal.html');

        }else if (email.value == '' || pass.value == ''){

            validarCredencialesModal();
        }
        else
        { 
            validarCredencialesInvalidas();
           // alert('credenciales invalidas');

        }

    });


