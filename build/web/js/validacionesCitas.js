/* 
    Document   : validacionesCitas
    Created on : 16/03/2017, 9:26:17 AM
    Author     : jdani
*/


/* global $id, CLIENTEBUSCADO, modoUpdate, motosDelClienteBuscado, annoFormat */

const VALIDACIONES_CITAS = [
    new Validacion(
        "clienteCita","-Cliente no válido, verifique que el numero de identificacion sea el correcto-  ",
        ()=> modoUpdate || CLIENTEBUSCADO!==null   
    ),
    
    new Validacion(
        "motocito"," -Seleccione una motocicleta-  ",
        ()=> modoUpdate ||CLIENTEBUSCADO!==null&&motosDelClienteBuscado.length!==0   
    ),
    
    new Validacion(
        "recepcionistaCita"," -El recepcionista no es valido-  ",
        ()=> $id("recepcionistaCita").value !== "" && $id("recepcionistaCita").value.length < 21  
    ),
    
    new Validacion(
        "proformaCita"," -Número de orden no valido- ",
        ()=> $id("proformaCita").value!=="" && !isNaN($id("proformaCita").value)  
    ),

    new Validacion(
        "tipoCita","Especifique el tipo de trabajo  ",
        ()=>{
            let a = $id("tipoCita").value;
            if(a==="")return false;
            addRegistro(idt,a);
            return true;
        }
    ),  				
	

    
    new Validacion(
        "numeroOrdenCita","- Número de proforma no valido-  ",
        ()=> $id("citaPendiente").checked?true:$id("numeroOrdenCita").value!=="" && !isNaN($id("numeroOrdenCita").value)  
    ),
    
    new Validacion(
        "EmpleadoCita"," -Ingrese el empleado de la cita- " ,
        ()=>modoUpdate ? true : $id("EmpleadoCita").selectedIndex!==0
    ),
    
    new Validacion(
        "_mesCitas"," -Ingrese el mes de la cita- " ,
        ()=>modoUpdate ? true : $id("_mesCitas").selectedIndex!==0
    ),

    new Validacion(
        "_diaCitas"," -Ingrese el día de la cita- ",
        ()=>modoUpdate ? true : $id("_diaCitas").selectedIndex!==0
    ),
    
    new Validacion(
        "minCita"," -Ingrese la hora de la cita- ",
        ()=>modoUpdate ? true : $id("minCita").value!==""
    ),
    
    new Validacion(
        "_mesCitas2"," -Ingrese el mes prometido- " ,
        ()=>modoUpdate ? true : $id("_mesCitas2").selectedIndex!==0
    ),

    new Validacion(
        "_diaCitas2"," -Ingrese el día prometido- ",
        ()=>modoUpdate ? true : $id("_diaCitas2").selectedIndex!==0
    ),
    
    new Validacion(
        "minCita2"," -Ingrese la hora prometida- ",
        ()=>modoUpdate ? true : $id("minCita2").value!==""
    ),
    
    new Validacion(
        "_mesCitas3"," -Ingrese el mes de la entrega- " ,
        ()=> !modoUpdate ? true : !$id("citaCumplida").checked?true:$id("_mesCitas3").selectedIndex!==0
    ),
    
    new Validacion(
        "minCita4"," -Ingrese la hora de la entrega- ",
        ()=> !modoUpdate ? true : !$id("citaCumplida").checked?true: $id("minCita4").value!==""
    )
];