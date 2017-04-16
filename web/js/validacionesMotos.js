


/* global CLIENTEBUSCADO */

const VALIDACIONES_MOTOS=[
    /*
    new Validacion(
       id del input, mensaje de erro, y una lambda     
    )*/
    new Validacion(
     "MtextCedula","Verifique la identificación del cliente",
     ()=> CLIENTEBUSCADO!==null && $("#MtextCedula").val().length<30
    ),
    new Validacion(
    )
    
    
];

