

/* global $id, IDFORMAT, idCliente, mailFormat, TELFORMAT */

const VALIDACIONES_EMPLEADOS=[
    new Validacion(
     "textNombre2"," -Verifique el nombre del empleado- ",
     $id("textNombre2").value!=="" && $("#textNombre2").val().length<=30  
    ),
    new Validacion(
     "textCedula12"," -Numero de identificación no válida- ",
     ()=>!$id("CF2").checked ? true:IDFORMAT.test(idCliente),
     "textCedula22","textCedula32"
    ),

    new Validacion(
     "MtextID2"," -Numero de identificación no válida- ",
     ()=> $id("CF2").checked ? true : (idCliente.length!==0&&idCliente.length<31)
    ),
    new Validacion(
     "textCelular2"," -Numero de celular no valido- ",
     TELFORMAT.test($id("textCelular2").value) && $("#textCelular2").val().length<=30 
    ),
    new Validacion(
     "textEmail2"," -Correo electronico no valido- ",
     mailFormat.test($id("textEmail2").value) && $("#textEmail2").val().length<=30  
    )
    
];



