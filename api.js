//Lo saqué para que no se viera la información de la api, así se ahorra espacio y se motiva a pinchar el botón
/*$( document).ready(function() {
    obtenerDatos()
});

*/


swal({
    title: "Bienvenida / Bienvenido ",
    text: "Prueba nuestros desafíos físicos!",
    type: "success",
    button: "IR A RUTINAS"
}).then(function() {
    window.location = "seccionRutinas.html";
        
    
})
  .catch(err => {
    if (err) {
      swal("Oh no! debes dirigirte haciendo click en el menú RUTINAS", "El servicio se está reparando");
    } else {
      swal.stopLoading();
      swal.close();
    }
  });



//DESAFÍO1 /SECCIÓN RUTINAS
function obtenerDatos1() {
    $.ajax('https://62ba3871573ca8f832818e64.mockapi.io/desafio1', {
        type: 'GET',  // http method
        success: function (data, status, xhr) {
            for (var indice = 0; indice < data.length; indice++) {
                var ejercicio = data[indice].ejercicio
                var tiempoEnSegundos = data[indice].tiempoEnSegundos
                var precauciones = data[indice].precauciones
                var descripcion = data[indice].descripcion
                var filaTAbla = '<tr>'
                                + '<td class="prc-25">'+ejercicio+'</td>'
                                + '<td class="prc-25">'+tiempoEnSegundos+'</td>'
                                + '<td class="prc-25">'+precauciones+'</td>'
                                + '<td class="prc-25">'+descripcion+'</td>'
                                '</tr>'
                console.log(filaTAbla)
                $("#tablaDesafios").append(filaTAbla)
            
            }
        
            

        },
        error: function (jqXhr, textStatus, errorMessage) {
            alert("No me pude conectar a la api: error"+errorMessage+" estado:"+textStatus  )
        }
        
    });
}



//DESAFÍO2 / SECCIÓN RUTINAS

function obtenerDatos2() {
    $.ajax('https://62ba3871573ca8f832818e64.mockapi.io/desafio2', {
        type: 'GET',  // http method
        success: function (data, status, xhr) {
            for (var indice = 0; indice < data.length; indice++) {
                var ejercicio2 = data[indice].ejercicio2
                var tiempoEnSegundos2 = data[indice].tiempoEnSegundos2
                var precauciones2 = data[indice].precauciones2
                var descripcion2 = data[indice].descripcion2
                var filaTAbla = '<tr>'
                                + '<td class="prc-25">'+ejercicio2+'</td>'
                                + '<td class="prc-25">'+tiempoEnSegundos2+'</td>'
                                + '<td class="prc-25">'+precauciones2+'</td>'
                                + '<td class="prc-25">'+descripcion2+'</td>'
                                '</tr>'
                console.log(filaTAbla)
                $("#tablaDesafios2").append(filaTAbla)
            
            }
        
        },
        error: function (jqXhr, textStatus, errorMessage) {
            alert("No me pude conectar a la api: error"+errorMessage+" estado:"+textStatus  )
        }
    });
}


//DESAFÍO3 / SECCIÓN RUTINAS

function obtenerDatos3() {
    $.ajax('https://62ba3871573ca8f832818e64.mockapi.io/desafio3', {
        type: 'GET',  // http method
        success: function (data, status, xhr) {
            for (var indice = 0; indice < data.length; indice++) {
                var ejercicio3 = data[indice].ejercicio3
                var tiempoEnSegundos3 = data[indice].tiempoEnSegundos3
                var precauciones3 = data[indice].precauciones3
                var descripcion3 = data[indice].descripcion3
                var filaTAbla = '<tr>'
                                + '<td class="prc-25">'+ejercicio3+'</td>'
                                + '<td class="prc-25">'+tiempoEnSegundos3+'</td>'
                                + '<td class="prc-25">'+precauciones3+'</td>'
                                + '<td class="prc-25">'+descripcion3+'</td>'
                                '</tr>'
                console.log(filaTAbla)
                $("#tablaDesafios3").append(filaTAbla)
            
            }
        
        },
        error: function (jqXhr, textStatus, errorMessage) {
            alert("No me pude conectar a la api: error"+errorMessage+" estado:"+textStatus  )
        }
    });
}


//VALIDAR DATOS - SECCION AGENDA ENTRENAMIENTO

function validarDatos() {
    nombreRegistro = document.getElementById("nombre").value
    apellido = document.getElementById("apellido").value
    edad = parseInt(document.getElementById("edad").value)
    direccion = document.getElementById("direccion").value
    mensaje = "nombre:" + nombreRegistro + "apellido:" + apellido + "edad:" + edad + "direccion:" + direccion
    errores = 0
    if(nombre.length <2){
        document.getElementById("errorNombre").style.display="block"
        errores++
    }else{
        document.getElementById("errorNombre").style.display="none"
    }
    if(edad<18){
        document.getElementById("errorEdad").style.display="block"
        errores++

    }else{
        document.getElementById("errorEdad").style.display="none"
    }
    if(errores>0){
        document.getElementById("box-send").append("Uno de los campos es invalido")
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Campos invalidos errores detectados: '+errores,
            
        })
        return false
    }else{
        return true
    }

}