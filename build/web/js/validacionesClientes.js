/* 
    Document   : validacionesClientes
    Created on : 15/03/2017, 9:26:17 PM
    Author     : jdani
*/
/* global $id, idCliente, IDFORMAT, edadFormat, mailFormat, TELFORMAT, annoFormat */

const VALIDACIONES_CLIENTES = [

    new Validacion(
        "textNombre","Nombre no válido||",
        ()=> $id("textNombre").value!=="" && $id("textNombre").value.length<51   
    ),

    new Validacion(
        "textCedula1","Identificación no válida||",
        ()=>!$id("CF").checked ? true:IDFORMAT.test(idCliente),
        "textCedula2","textCedula3"
    ),

    new Validacion(
        "MtextID","Identificación no válida||",
        ()=> $id("CF").checked ? true : (idCliente.length!==0&&idCliente.length<31)
    ),

    new Validacion(
        "textEdad","Edad no válida||",
        ()=>edadFormat.test($id("textEdad").value) && $id("textEdad").value>17 && $id("textEdad").value<100
    ),

    new Validacion(
        "textEmail","Correo no válido||",
        ()=>mailFormat.test($id("textEmail").value) && $id("textEmail").value.length<41
    ),

    new Validacion(
       "textCelular","Celular no válido||",
       ()=> TELFORMAT.test($id("textCelular").value) &&  $id("textCelular").value.length < 16
    ),

    new Validacion(
       "textTelefono","Teléfono no válido||",
       ()=>$id("textTelefono").value.length < 16
    ),

    new Validacion(
        "textProfesion","-Ingrese una profesión",
        ()=> $id("textProfesion").value!=="" && $id("textProfesion").value.length<41
    ),

    new Validacion(
        "_mes","-Ingrese el mes de nacimiento" ,()=>$id("_mes").selectedIndex!==0
    ),

    new Validacion(
        "_dia"," -Día de nacimiento",()=>$id("_dia").selectedIndex!==0
    ),

    new Validacion(
        "comboProv"," -Provincia",()=>$id("comboProv").selectedIndex!==0
    ),

    new Validacion(
        "comboCant"," -Canton",()=>$id("comboCant").selectedIndex!==0
    ),
    
    new Validacion(
        "comboDist"," -Distrito",()=>$id("comboDist").selectedIndex!==0
    ),
    
    new Validacion(
        "anno"," - Año de nacimiento",()=>annoFormat.test($id("anno").value)
    )
];