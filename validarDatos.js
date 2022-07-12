//RECORDAR QUE PARA LLAMAR FUNCIONES DEBES USAR ATRIBUTO ONCLICK
//EJEMPLO <button onclick="sumar(1,21)">SUMAR</button>
//<button class="btn btn-secondary w-100" type="button" onclick="validarDatos()">Enviar</button>

function validarDatos() {
    nombre = document.getElementById("nombre").value
    apellido = document.getElementById("apellido").value
    edad = parseInt(document.getElementById("edad").value)
    direccion = document.getElementById("direccion").value
    mensaje = "nombre:" + nombre + "apellido:" + apellido + "edad:" + edad + "direccion:" + direccion
    errores = 0
    msjError = ""
    if(nombre.length <3){
        document.getElementById("errorNombre").style.display="block"
        errores++
        msjError = msjError+" El largo del nombre debe ser superior a 3"
    }else{
        document.getElementById("errorNombre").style.display="none"
    }
    if(edad<18){
        document.getElementById("errorEdad").style.display="block"
        errores++
        msjError = msjError+" No cumple con la edad minima"

    }else{
        document.getElementById("errorEdad").style.display="none"
    }
    if(errores>0){
        document.getElementById("box-send").append("Uno de los campos es invalido")
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Campos invalidos errores detectados: '+errores +"\n"+msjError,
        })
        return false
    }else{
        var form = document.querySelector('.pageclip-form')
        Pageclip.form(form, {
        onSubmit: function (event) { },
        onResponse: function (error, response) { },
        successTemplate: '<span>Thank you!</span>'
        })

        var data = {
            name: 'Billy Jean',
            email: 'billy@example.com'
          }
          Pageclip.send('KROHShNYpz4mUkB2Na3Dj2V8n7BHvR3H', 'RegistroUsuarios', data, function (error, response) {
            console.log('saved?', !!error, '; response:', error || response)
          })
        return true
    }

}