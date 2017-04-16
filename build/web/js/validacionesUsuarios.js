 
    /* global username, $id, passWordFormat */

const VALIDACIONES_EMPLEADOS=[
    new Validacion(
      "textUsuario"," -Nombre de usuario incorrecto- ",
      username!=="" && $("#textusuario").val().length<=30 
    ),
    /*new Validacion(
     "textUsuario"," -El nombre de usuario debe ser una unica palabra (ej: usuario01)- ",
     username.split(' ').length===1):0
    ),*/

    new Validacion(
     "textContrasena" ," -Contraseña no valida (debe contener: entre 8 y 15 caracteres, utilice solo números y letras)- ", 
     passWordFormat.test($id("textContrasena").value) && $("#textContrasena").val().length<=32  
    ),
    new Validacion(
     "textContrasena2"," -Las contraseñas no coinciden- ",
     ($id("textContrasena").value===$id("textContrasena2").value) && $("#textContrasena2").val().length<=32
    )
];
    
    /*
    vu.validate("textUsuario","- el nombre de usuario",username!=="").result?
    vu.validate("textUsuario","- el nombre de usuario debe ser una unica palabra (ej: usuario01)",username.split(' ').length===1):0;
    aux=vu.result;
    vu.result=true;
    psw = vu.validate("textContrasena"
               ," - Contraseña no valida (debe contener: entre 8 y 15 caracteres, utilice solo números y letras)"
               ,passWordFormat.test($id("textContrasena").value)).result;
    vu.result=true;
    psw2 = vu.validate("textContrasena2","- La verificación de la contraseña no coincide"
               ,($id("textContrasena").value===$id("textContrasena2").value)).result;
    vu.result= aux&&psw&&psw2;
    if(!psw2){
        $id("textContrasena2").value="";
        $id("textContrasena2").placeholder="\nLas contraseñas no coinciden";
        ok=false;
    }else{
        if(!psw){
            $id("textContrasena").value="";
            $id("textContrasena2").value="";
            $id("textContrasena2").placeholder="\Contraseña no valida";
            ok=false;
        }
        
    }
    return vu.result;
     */


