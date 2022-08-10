// Solo para desafios desde la rama Desafios. 

//Capturar campos del formulario 

const btnAgregar = document.querySelector('#btnAgregar'); 
const nombreMascota = document.querySelector('#nombre'); 
const tipoMascota = document.querySelector('#tipoMascota');


const btnVer = document.querySelector('#mostrarArray'); 


// array para guardar mascota. 
const arrayMascota = [];


// evento click del boton
btnAgregar.addEventListener("click", ()=>{
    
    if(!nombreMascota.value == "" && !tipoMascota.value == ""){
        console.log('su mascota se agrego correctamente');
        let objetoMascota = {nombre:     nombreMascota.value, 
                            tipoMascota : tipoMascota.value}
                     
        arrayMascota.push(objetoMascota)
        limpiarCajas();
        cambiaVerde();

    }else{
        cambiaRojo();
        console.log('por favor ingresar mascota');
    }


});


btnVer.addEventListener('click',( )=>{     
console.log(arrayMascota);

});


function cambiaRojo() {
    btnAgregar.style.backgroundColor= "red";
  }

  function cambiaVerde() {
    btnAgregar.style.backgroundColor = "green";
  }

  const limpiarCajas = ()=>{
    nombreMascota.value = ''; 
    tipoMascota.value = '';
  }

console.log(arrayMascota);