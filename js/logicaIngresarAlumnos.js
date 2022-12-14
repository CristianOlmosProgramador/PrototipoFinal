'use strict';

class Alumnos{

    constructor(dni,nombres, apellidoPaterno,apellidoMaterno,edad,curso){
        this.dni = dni;
        this.nombres = nombres; 
        this.apellidoPaterno = apellidoPaterno; 
        this.apellidoPaterno = apellidoMaterno;
        this.edad = edad;
        this.curso = curso;
    }

    // agregarAlumno(objAlumno){
    //     return arrAlumnos.push(objAlumno);
    // }

}

const arrAlumnos = [];
const arrAlumnoBuscado = [];

const btnRegistrarAlumno = document.querySelector('#registrarAlumno');
const btnCerrar = document.querySelector("#cerrar");

const dni = document.querySelector('#dni');
const nombreAlumno = document.querySelector('#nombreAlumno');
const apellidoPaterno = document.querySelector("#apellidoPaterno");
const apellidoMaterno = document.querySelector("#apellidoMaterno");
const edad = document.querySelector("#edad");
const curso = document.querySelector("#curso");


// Validar campos con sweetalert2.
const Validaciones = ()=>{

    if(dni.value===""){
        swal("Ingrese Dni alumno ", "El campo Dni no puede ser vacio", "warning");
        return false;
    }else if(nombreAlumno.value===""){
        swal("Ingrese El nombre del alumno", "El campo nombre de alumno no puede ser vacio", "warning");
        return false;
    }else if(apellidoPaterno.value===""){
        swal("Ingrese Apellido Paterno del alumno", "El campo Apellido Paterno del alumno no puede ser vacio", "warning");
        return false;
    }else if(apellidoMaterno.value===""){
        swal("Ingrese Apellido Materno del alumno", "El campo  Apellido Materno del alumno no puede ser vacio", "warning");
        return false;
    }else if(edad.value===""){
        swal("Ingrese Edad del alumno", "El campo edad no puede ser vacio", "warning");
        return false;
        
    }  else if(curso.value===""){
        swal("Ingrese curso del alumno", "El campo curso no puede ser vacio", "warning");
        return false;
        
    }
    else{
        return true;
    }
    

}


function ingresarAlumnos(){

    let dniIng = dni.value;
    let nombreAlumnoIng = nombreAlumno.value; 
    let apellidoPaternoIng = apellidoPaterno.value; 
    let apellidoMaternoIng = apellidoMaterno.value; 
    let edadIng = edad.value; 
    let cursoIng = curso.value;


    const ingresarAlumno = new Alumnos(dniIng,nombreAlumnoIng,apellidoPaternoIng, apellidoMaternoIng,edadIng,cursoIng);
    //ingresarAlumno.agregarAlumno(ingresarAlumno);
     arrAlumnos.push(ingresarAlumno);
     
     registrarLocalStorage();

    const tabla=document.getElementById('addtabla');
    const fila=document.createElement('tr');  
    fila.style.backgroundColor = "#64b5f6";
    
    fila.innerHTML=`<td> ${dniIng} </td><td> ${nombreAlumnoIng} </td><td> ${apellidoPaternoIng} </td><td> ${apellidoMaternoIng} </td><td> ${edadIng} </td><td> ${cursoIng} </td>`;
    

    tabla.appendChild(fila);

    console.log(ingresarAlumno);
    console.log(arrAlumnos);

}


btnRegistrarAlumno.addEventListener('click',()=>{
  
    // traerAlumnosLocalStorge();
     if(Validaciones()){
       existeAlumno();
     }

});

function traerAlumnosLocalStorge(){

    const obtenerAlumnosLS = localStorage.getItem("Datos Alumnos");
    console.log("Ver array desde funci??n existe alumno " + typeof JSON.parse(obtenerAlumnosLS));

    let jsonAlumnos1 = JSON.parse(obtenerAlumnosLS);
    console.log(jsonAlumnos1);

    return jsonAlumnos1;

}


function existeAlumno(){

    let dniAlumno = document.querySelector('#dni');
    let dniUtilizar = dniAlumno.value;

    const alumnosLocalStorage = traerAlumnosLocalStorge();
    console.log("array alumnos ultimo"+ alumnosLocalStorage);

    const buscarAlumno = alumnosLocalStorage.find((elemento,indice,array)=>{
        return elemento.dni == dniUtilizar
    })    

    console.log(buscarAlumno);

    if(buscarAlumno == undefined){
        ingresarAlumnos(); 
        MensajeExitoso();
        LimpiarCampos();
    }else{
        // si est?? el alumno lo ingreso al nuevo array de alumno buscado. 
        arrAlumnoBuscado.push(buscarAlumno);
        MensajeAlumnoExiste();
        console.log('el dni del alumno ya se encuentra registrado, intente nuevamente.');
    }

}

btnCerrar.addEventListener('click', ()=>{

    Swal.fire({
        title: '??Est?? seguro que desea cerrar su sessi??n?',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'SI',
        denyButtonText: 'NO',
        customClass: {
          actions: 'my-actions',
          cancelButton: 'order-1 right-gap',
          confirmButton: 'order-2',
          denyButton: 'order-3',
        }
      }).then((result) => {
        if (result.isConfirmed) {
         // Swal.fire('Saved!', '', 'success')
         window.open('index.html');
        } else if (result.isDenied) {
        //   Swal.fire('Changes are not saved', '', 'info')
        }
      })
});


const MensajeExitoso = ()=>{
    swal("Registro exitoso", "Gracias... el alumno ingresado se inserto correctamente", "success");
    return true;
}

const MensajeAlumnoExiste = ()=>{
    swal("No se logro insertar alumno", "El DNI del alumno ya se encuentra registrado en nuestra base de datos, por favor intente nuevamente.", "warning");
    return true;
}

const LimpiarCampos = ()=>{

    dni.value = '';
    nombreAlumno.value = ''; 
    apellidoPaterno.value = ''; 
    apellidoMaterno.value = ''; 
    edad.value = '';
    curso.value = '';

}

console.log(arrAlumnos);

// 08.08.2022.
//Trabajando para guardar Alumnos en el LocalStorage... 

// Registro con objeto en localStorage
const registrarLocalStorage = () => {

    try{
      
        const jsonAlumnos = JSON.stringify(arrAlumnos)
        console.log("Alumnos" + jsonAlumnos);

        localStorage.setItem("Datos Alumnos", jsonAlumnos);

        

        // let usuarioFinal = {
        //     nombreCompleto : NombreCompleto.value,
        //     email : Email.value,
        //     telefono : Telefono.value, 
        //     usuario : Usuario.value, 
        //     pass : Pass.value
        // }
    
        // localStorage.setItem("nombreCompleto", usuarioFinal.nombreCompleto);
        // localStorage.setItem("email", usuarioFinal.email);
        // localStorage.setItem("telefono", usuarioFinal.telefono);
        // localStorage.setItem("usuario", usuarioFinal.usuario);
        // localStorage.setItem("pass", usuarioFinal.pass);

        return true;

    }catch{
        return false;
    }
 
}
