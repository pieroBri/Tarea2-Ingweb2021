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
});



function clearFormulario(){
    document.getElementById('formulario').reset();
}

function ocultar(){
    document.getElementById('formulario').style.display= "none";
    alert('Hemos recibido sus datos, pronto nos estaremos comunicando con usted');
    setTimeout(()=>{
        document.getElementById('formulario').style.display = "";
        clearFormulario();
        location.reload();
    }, 2000);
}

function onSubmit() { //validacion de checklist
  var field1 = $("input[name='list1']").serializeArray();
  var field2 = $("input[name='list2']").serializeArray();
  if (field1.length == 0){ 
    alert('Seleccionar al menos un lenguaje de programación'); 
    // cancel submit
    return false;
  }
  else {
    if (field2.length == 0){ 
        alert('Seleccionar al menos un curso o la opcion de otros'); 
        // cancel submit
        return false;
    }
    else{
        ocultar();
    }
  }
}

function limitText(limitField, limitNum) {
    if (limitField.value.length > limitNum) {
        limitField.value = limitField.value.substring(0, limitNum);
    } 
}

$('#formulario').submit(onSubmit)

function checkRut(rut) {
    // Despejar Puntos
    var valor = rut.value.replace('.','');
    // Despejar Guión
    valor = valor.replace('-','');
    
    // Aislar Cuerpo y Dígito Verificador
    cuerpo = valor.slice(0,-1);
    dv = valor.slice(-1).toUpperCase();
    
    // Formatear RUN
    rut.value = cuerpo + '-'+ dv;
    
    // Si no cumple con el mínimo ej. (n.nnn.nnn)
    if(cuerpo.length < 7) { rut.setCustomValidity("RUT Incompleto"); return false;}
    
    // Calcular Dígito Verificador
    suma = 0;
    multiplo = 2;
    
    // Para cada dígito del Cuerpo
    for(i=1;i<=cuerpo.length;i++) {
    
        // Obtener su Producto con el Múltiplo Correspondiente
        index = multiplo * valor.charAt(cuerpo.length - i);
        
        // Sumar al Contador General
        suma = suma + index;
        
        // Consolidar Múltiplo dentro del rango [2,7]
        if(multiplo < 7) { multiplo = multiplo + 1; } else { multiplo = 2; }
  
    }
    
    // Calcular Dígito Verificador en base al Módulo 11
    dvEsperado = 11 - (suma % 11);
    
    // Casos Especiales (0 y K)
    dv = (dv == 'K')?10:dv;
    dv = (dv == 0)?11:dv;
    
    // Validar que el Cuerpo coincide con su Dígito Verificador
    if(dvEsperado != dv) { rut.setCustomValidity("RUT Inválido"); return false; }
    
    // Si todo sale bien, eliminar errores (decretar que es válido)
    rut.setCustomValidity('');
}


$(function () {  //ocultar input de texto mientras el checkbox no este marcado
    $("#curso5").click(function () {
        if ($(this).is(":checked")) {
            $("#otro").removeAttr("disabled");
            $("#otro").Attr("required");
            $("#otro").focus();
        } else {
            $("#otro").attr("disabled", "disabled");
        }
    });
});