define(["require", "exports", "jquery"], function (require, exports, jquery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var $ = jquery;
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (function () {
        'use strict';
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation');
        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    })();
    var defPersona = {
        nombre: 'Pepito Perez',
        edad: 43,
        genero: 'male',
        fechaNacimiento: "Septiembre 21, 1979",
        correo: 'pepito.perez@email.com',
        numeTelefono: 111111111,
        rut: '11111111-1',
        region: 'Valparaiso',
        comuna: 'Vina del mar'
    };
    var defAntecedentes = [
        { motivo: "Hospitalizado por bronquitis", fecha: "23/05/2005" },
        { motivo: "Hospitalizado por intoxicacion", fecha: "23/05/2008" }
    ];
    var nombreDisp = document.getElementById("nombreDisp");
    var fechaDisp = document.getElementById("fechaDisp");
    var p1 = document.createElement("p");
    var p2 = document.createElement("p");
    p1.textContent = defPersona.nombre;
    p2.textContent = defPersona.fechaNacimiento + ', ' + defPersona.edad + ' años';
    nombreDisp === null || nombreDisp === void 0 ? void 0 : nombreDisp.appendChild(p1);
    fechaDisp === null || fechaDisp === void 0 ? void 0 : fechaDisp.appendChild(p2);
    //Funcion para hacer la dependencia de las comunas en base a la region
    var comuna = document.querySelector('#comunaSelect');
    var comunas_LosRios = ["Valdivia",
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
    var comuna_Antofa = ["Antofagasta",
        "Mejillones",
        "Sierra Gorda",
        "Taltal",
        "Calama",
        "Ollague",
        "San Pedro de Atacama",
        "Tocopilla",
        "María Elena",
    ];
    $('#regionSelect').on('change', function () {
        var selectValue = $(this).find(':selected').val();
        $('#comunaSelect').empty();
        if (selectValue == 'antofagasta') {
            for (var i = 0; i < comuna_Antofa.length; i++) {
                var opcion = document.createElement('option');
                opcion.value = "i";
                opcion.textContent = comuna_Antofa[i];
                comuna === null || comuna === void 0 ? void 0 : comuna.appendChild(opcion);
            }
        }
        else {
            if (selectValue == 'losrios') {
                for (var i = 0; i < comunas_LosRios.length; i++) {
                    var opcion = document.createElement('option');
                    opcion.value = "i";
                    opcion.textContent = comunas_LosRios[i];
                    comuna === null || comuna === void 0 ? void 0 : comuna.appendChild(opcion);
                }
            }
        }
    });
    var btneditar = document.getElementById('btnEditar');
    var btnagregar = document.getElementById('btnagregar');
    var btneliminar = document.getElementsByClassName('btneliminar');
    var btnCrear = document.getElementById('btnCrear');
    btneditar === null || btneditar === void 0 ? void 0 : btneditar.addEventListener('click', editFormulario);
    btnagregar === null || btnagregar === void 0 ? void 0 : btnagregar.addEventListener('click', crearAntecedente);
    btnCrear === null || btnCrear === void 0 ? void 0 : btnCrear.addEventListener('click', agregarAntecedentes);
    btneliminar === null || btneliminar === void 0 ? void 0 : btneliminar.addEventListener('click', eliminarAntecedente(btneliminar.id));
    function editFormulario(e) {
        var inputs = document.getElementsByClassName('inputMiniForm');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].removeAttribute('disabled');
        }
        var formulario = document.getElementById('formulario');
        formulario === null || formulario === void 0 ? void 0 : formulario.removeAttribute('hidden');
    }
    function eliminarAntecedente(id) {
        var listaAntecedent = document.getElementById(id);
        listaAntecedent === null || listaAntecedent === void 0 ? void 0 : listaAntecedent.remove;
    }
    function agregarAntecedentes(e) {
        e.preventDefault();
        var li = document.createElement('li');
        li.value = li.value + 1;
        li.setAttribute('class', 'row');
        var divAntecedente = document.createElement('div');
        var divBtn = document.createElement('div');
        var listaAntecedent = document.getElementById('listaAntecedentes');
        listaAntecedent === null || listaAntecedent === void 0 ? void 0 : listaAntecedent.appendChild(li);
        divAntecedente.setAttribute('class', 'col-md-10');
        divBtn.setAttribute('class', 'col-md-1');
        divBtn.innerHTML = "<button type=\"button\" id=\"eliminar" + li.value + "\" class=\"btneliminar\"> <span class=\"material-icons\">delete</span></button>";
        var motivoAgregar = document.getElementById('motivoHosp');
        var fechaAgregar = document.getElementById('FechaIngreso');
        divAntecedente.textContent = motivoAgregar.value + ' ' + fechaAgregar.value;
        li.appendChild(divAntecedente);
        li.appendChild(divBtn);
        var formulario = document.getElementById('formAntecedente');
        formulario === null || formulario === void 0 ? void 0 : formulario.setAttribute('hidden', 'true');
        formulario.reset();
    }
    function crearAntecedente() {
        var formulario = document.getElementById('formAntecedente');
        formulario === null || formulario === void 0 ? void 0 : formulario.removeAttribute('hidden');
    }
});
