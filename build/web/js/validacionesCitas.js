/* 
    Document   : validacionesCitas
    Created on : 16/03/2017, 9:26:17 AM
    Author     : jdani
*/


/* global $id, CLIENTEBUSCADO, modoUpdate, motosDelClienteBuscado, annoFormat */

const VALIDACIONES_CITAS = [
    new Validacion(
        "clienteCita","Cliente no válido  ",
        ()=> modoUpdate || CLIENTEBUSCADO!==null   
    ),
    
    new Validacion(
        "motocito","Seleccione una motocicleta  ",
        ()=> modoUpdate ||CLIENTEBUSCADO!==null&&motosDelClienteBuscado.length!==0   
    ),
    
    new Validacion(
        "recepcionistaCita","Recepcionista?  ",
        ()=> $id("recepcionistaCita").value !== "" && $id("recepcionistaCita").value.length < 21  
    ),
    
    new Validacion(
        "proformaCita","número de proforma  ",
        ()=> $id("proformaCita").value!=="" && !isNaN($id("proformaCita").value)  
    ),
    
    new Validacion(
        "tipoCita","Especifique el tipo de trabajo  ",
        ()=> $id("tipoCita").value !== ""
    ),
    
    new Validacion(
        "numeroOrdenCita","número de orden  ",
        ()=> $id("numeroOrdenCita").value!=="" && !isNaN($id("numeroOrdenCita").value)  
    ),
    
    new Validacion(
        "EmpleadoCita"," ingrese el mes de la cita " ,
        ()=>modoUpdate ? true : $id("EmpleadoCita").selectedIndex!==0
    ),
    
    new Validacion(
        "_mesCitas"," ingrese el mes de la cita " ,
        ()=>modoUpdate ? true : $id("_mesCitas").selectedIndex!==0
    ),

    new Validacion(
        "_diaCitas"," - ingrese el día de la cita ",
        ()=>modoUpdate ? true : $id("_diaCitas").selectedIndex!==0
    ),
    
    new Validacion(
        "minCita"," - ingrese la hora de la cita ",
        ()=>modoUpdate ? true : $id("minCita").value!==""
    ),
    
    new Validacion(
        "_mesCitas2"," ingrese el mes prometido " ,
        ()=>modoUpdate ? true : $id("_mesCitas2").selectedIndex!==0
    ),

    new Validacion(
        "_diaCitas2"," - ingrese el día prometido ",
        ()=>modoUpdate ? true : $id("_diaCitas2").selectedIndex!==0
    ),
    
    new Validacion(
        "minCita2"," - ingrese la hora prometida ",
        ()=>modoUpdate ? true : $id("minCita2").value!==""
    ),
    
    new Validacion(
        "_mesCitas3"," ingrese el mes de la entrega " ,
        ()=> !modoUpdate ? true : !$id("citaCumplida").checked?true:$id("_mesCitas3").selectedIndex!==0
    ),
    
    new Validacion(
        "minCita4"," - ingrese la hora de la llamada ",
        ()=> !modoUpdate ? true : !$id("citaCumplida").checked?true: $id("minCita4").value!==""
    )
];