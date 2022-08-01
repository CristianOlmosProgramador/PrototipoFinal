
class Alumnos{

    constructor(dni,nombres, apellidoPaterno,apellidoMaterno,edad,curso){
        this.dni = dni;
        this.nombres = nombres; 
        this.apellidoPaterno = apellidoPaterno; 
        this.apellidoPaterno = apellidoMaterno;
        this.edad = edad;
        this.curso = curso;
    }

    agregarAlumno(objAlumno){
        return arrAlumnos.push(objAlumno);
    }

}

// const alumno1 = new Alumnos("18074551-3","Cristian","Olmos","Cabello",15,"1° Año escolar");
// const alumno2 = new Alumnos("18074551-K","Cristian","Olmos","Cabello",15,"1° Año escolar");
// console.log(alumno1);

const arrAlumnos = [];
const arrAlumnoBuscado = [];

// alumno1.agregarAlumno(alumno1);
// alumno2.agregarAlumno(alumno2);
// console.log(arrAlumnos);
// console.log(arrAlumnos);

function desplegarMenu(){
 
    const menu = parseInt(prompt(`Bienvenido Ingrese una opción de menú 
    1.- Ingresar nuevo alumno. 
    2.- Buscar alumnos
    3.- Salir
`))

    switch (menu) {
        case 1:
            ingresarAlumnos();
            console.log('se ingreso alumno correctamente');
            // Acá despliego el menú nuevamente.
            desplegarMenu();
            break;
        case 2:
            obtenetDatosAlumnos();
            break;
        default:
            alert('Salio del sistema');
            console.log('mientras nada');
            break;
}


}

let obtenerNumeroMenu = desplegarMenu();
console.log(obtenerNumeroMenu);


function ingresarAlumnos(){

    const dni = prompt("Ingrese Dni");
    const nombreAlumno = prompt("Ingrese nombre alumno"); 
    const apellidoPaterno = prompt("Ingrese Apellido Paterno"); 
    const apellidoMaterno = prompt("Ingrese apellido materno");
    const edad = parseInt(prompt("Ingrese edad ")); 
    const curso = prompt("Ingrese curso");
    
    const alumnoPromt = new Alumnos(dni,nombreAlumno,apellidoPaterno, apellidoMaterno,edad,curso);
    alumnoPromt.agregarAlumno(alumnoPromt);
    console.log(alumnoPromt);
    console.log(arrAlumnos);

}


function obtenetDatosAlumnos(dni){

    let dniAlumno = prompt("Ingrese Dni");

    const buscarAlumno = arrAlumnos.find((elemento,indice,array)=>{
        return elemento.dni == dniAlumno
    })    

    console.log(buscarAlumno);

    if(buscarAlumno == undefined){
        console.log('no se logra encontrar alumno con ese dni');
        // si no lo encuentra sale del programa.
        //obtenetDatosAlumnos();
        
    }else{
        // si está el alumno lo ingreso al nuevo array de alumno buscado. 
        arrAlumnoBuscado.push(buscarAlumno);
        console.log('se agrego exitosamente el alumno encontrado al array');
    }

}


console.log(arrAlumnos);