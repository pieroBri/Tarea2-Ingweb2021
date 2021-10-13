import jquery=require('jquery');
const $:JQueryStatic=jquery;

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event: any) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })();


interface Information {
  nombre: string;
  edad: number;
  genero: string;
  fechaNacimiento: string;
  correo: string;
  numeTelefono: number;
  rut: string;
  region: string;
  comuna: string;
}

let defPersona: Information = {
  nombre: 'Pepito Perez',
  edad: 43,
  genero: 'male',
  fechaNacimiento: "Septiembre 21, 1979",
  correo: 'pepito.perez@email.com',
  numeTelefono: 111111111,
  rut: '11111111-1',
  region: 'Valparaiso',
  comuna: 'Vina del mar'
}

interface antecedentesPersonas{
  motivo:string;
  fecha:string;
}

let defAntecedentes:antecedentesPersonas[]=[
  {motivo: "Hospitalizado por bronquitis", fecha: "23/05/2005"},
  {motivo: "Hospitalizado por intoxicacion", fecha:"23/05/2008"}
]

const nombreDisp = document.getElementById("nombreDisp");
const fechaDisp = document.getElementById("fechaDisp");

const p1 = document.createElement("p");
const p2 = document.createElement("p");


p1.textContent = defPersona.nombre;
p2.textContent = defPersona.fechaNacimiento + ', ' + defPersona.edad + ' años';

nombreDisp?.appendChild(p1);
fechaDisp?.appendChild(p2);


//Funcion para hacer la dependencia de las comunas en base a la region
let comuna = document.querySelector('#comunaSelect');

let comunas_LosRios:string[] = ["Valdivia",
  "Corral",
  "Lanco",
  "Los lagos",
  "Mafil",
  "Mariquina",
  "Paillacu",
  "Panguipulli",
  "La union",
  "Futrono",
  "Lago Ranco",
  "Rio Bueno"];

let comuna_Antofa:string[] = ["Antofagasta",
  "Mejillones",
  "Sierra Gorda",
  "Taltal",
  "Calama",
  "Ollague",
  "San Pedro de Atacama",
  "Tocopilla",
  "María Elena",
];

$('#regionSelect').on('change', function() {
  var selectValue = $(this).find(':selected').val();
  $('#comunaSelect').empty();
  if(selectValue == 'antofagasta'){
    for(let i = 0; i<comuna_Antofa.length; i++){
      let opcion = document.createElement('option');
      opcion.value="i";
      opcion.textContent=comuna_Antofa[i];
      comuna?.appendChild(opcion);
    }
  }else{
    if(selectValue == 'losrios'){
      for(let i = 0; i<comunas_LosRios.length; i++){
        let opcion = document.createElement('option');
        opcion.value="i";
        opcion.textContent=comunas_LosRios[i];
        comuna?.appendChild(opcion);
      }
    }
  }
});


let btneditar:any = document.getElementById('btnEditar');
let btnagregar:any = document.getElementById('btnagregar');
let btneliminar:any = document.getElementsByClassName('btneliminar');
let btnCrear:any = document.getElementById('btnCrear');

btneditar?.addEventListener('click', editFormulario);
btnagregar?.addEventListener('click', crearAntecedente);
btnCrear?.addEventListener('click', agregarAntecedentes);
btneliminar?.addEventListener('click', eliminarAntecedente(btneliminar.id));


function editFormulario(e:any){
  let inputs = document.getElementsByClassName('inputMiniForm');
  for(let i=0; i<inputs.length; i++){
    inputs[i].removeAttribute('disabled');
  }


  let formulario= document.getElementById('formulario');
  formulario?.removeAttribute('hidden');
}

function eliminarAntecedente(id:any){
  let listaAntecedent= document.getElementById(id);
  listaAntecedent?.remove;
}

function agregarAntecedentes(e:any){
  e.preventDefault();
    let li = document.createElement('li');
    li.value= li.value+1;
    li.setAttribute('class','row');

    let divAntecedente = document.createElement('div');
    let divBtn = document.createElement('div');

    let listaAntecedent = document.getElementById('listaAntecedentes');
    listaAntecedent?.appendChild(li);

    divAntecedente.setAttribute('class', 'col-md-10');
    divBtn.setAttribute('class','col-md-1');
    divBtn.innerHTML= `<button type="button" id="eliminar${li.value}" class="btneliminar"> <span class="material-icons">delete</span></button>`;

    let motivoAgregar:any = document.getElementById('motivoHosp');
    let fechaAgregar:any = document.getElementById('FechaIngreso');

    divAntecedente.textContent = motivoAgregar.value + ' ' + fechaAgregar.value;
    li.appendChild(divAntecedente);
    li.appendChild(divBtn);

    let formulario = <HTMLFormElement>document.getElementById('formAntecedente');
    formulario?.setAttribute('hidden', 'true');
    formulario.reset();
}

function crearAntecedente(){
  let formulario = document.getElementById('formAntecedente');
  formulario?.removeAttribute('hidden');
}