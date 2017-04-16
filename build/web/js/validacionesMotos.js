


/* global CLIENTEBUSCADO, $id, annoFormat, HORASERVER */

const VALIDACIONES_MOTOS=[
    /*
    new Validacion(
       id del input, mensaje de erro, y una lambda     
    )*/
    new Validacion(
     "MtextCedula","  -Verifique la identificación del cliente-  ",
     ()=> retrieve("CLIENTEBUSCADO")!==null && $("#MtextCedula").val().length<=30
    ),
    new Validacion(
     "textAnno", "  -Verifique el año de la motocicleta-  ",
     ()=>annoFormat.test($id("textAnno").value)?
         parseInt($id("textAnno").value)>1900&&parseInt($id("textAnno").value)<=(HORASERVER.getFullYear()+1)
         :false
    ),
    new Validacion(
     "textModelo","  -Verifique el numero de modelo-  ",
     ()=>$id("textModelo").value!=="" && $("#textModelo").val().length<=30
    ),
    new Validacion(
    "textMotor","  -Verifique el numero de motor-  ",
    ()=>$id("textMotor").value!=="" &&  $("#textMotor").val().length<=20
    ),
    new Validacion(
     "textChasis","  -Verifique el numero de chasis-  ",
    ()=>$id("textChasis").value!=="" && $("#textChasis").val().length<=30
    ),
    new Validacion(
     "textPlaca", "  -Verifique el numero de placa-  ",
     ()=>$("#textPlaca").val().length<=15
    )
    
];

