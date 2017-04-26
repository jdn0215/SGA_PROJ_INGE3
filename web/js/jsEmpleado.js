/* global $id, IDFORMAT, mailFormat, TELFORMAT, Proxy, passWordFormat, $Proxy, agenda, usuarioActual, popUpAux */

var idEmpleado="";
let ve;
let vu;
var UserCunetaNombre="";
const idsEmpleado=["empleadoActivo","textEmail2","textCelular2","textNombre2","JT","A","MtextID2","textCedula32","textCedula22","textCedula12","P2","CJ2","CF2"];

const DELETEEMPLEADO=()=>{
  if(idEmpleado==="")return;
    $Proxy.proxy($$("EMPLEADO",idEmpleado),"DELETEEMPLEADO","EMPLEADO",res=>{
        if(res===1){
           agenda.reload();
           clearEmpleados();
           mensaje("EMPLEADO ELIMINADO!",2,0);
        }else{
           mensaje("NO SE LOGRO ELIMINAR AL EMPLEADO",2,2); 
        }
    });
};


const validarEmpleado=_=>{
    return ve.validateArray(VALIDACIONES_EMPLEADOS).result;
};


const validarUsuario=_=>{
    let username = $("#textUsuario").val();
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
};
 
const buildUsuario=_=>{
    vu=new Validator();
    vu.message="Por favor verifique:<br/>";
    return validarUsuario()?
        new Usuario(
                $id("textUsuario").value,
                $id("textContrasena2").value,
                $id("Admin").checked,
                idEmpleado
        )
        :false;
 };
const buildEmpleado=_=>{
    idEmpleado=$id("CF2").checked?
        ($id("textCedula12").value)+"-"+($id("textCedula22").value)+"-"+($id("textCedula32").value)
        :$id("MtextID2").value;
    ve=new Validator();
    ve.message="Por favor verifique:<br/>";
    if(!validarEmpleado()){
       mensaje("Empleado no agregado,"+ve.message,2,3); 
       return false;
    }else{
        idEmpleado=$id("CF2").checked?
            ($id("textCedula12").value)+($id("textCedula22").value)+($id("textCedula32").value)
            :$id("MtextID2").value;
        return new Empleado(
           idEmpleado,
           $id("textNombre2").value,
           $id("JT").checked,
           $id("A").checked,
           $id("textEmail2").value,
           $id("textCelular2").value,
           true,
           $id("CF2").checked?1:$id("CJ2").checked?2:3
       );  
    }
};
const DatosUser=_=>{
    $id("textContrasena").disabled=!$id("createCuenta").checked;
    $id("textContrasena2").disabled=!$id("createCuenta").checked;
    $id("textUsuario").disabled=!$id("createCuenta").checked;
    $id("Admin").disabled=!$id("createCuenta").checked;
};
const getIdFrom2=_=>
               $id("CF2").checked ? 
                    ($id("textCedula12").value)+($id("textCedula22").value)+($id("textCedula32").value)
                    :$id("MtextID2").value;
                    
const clearEmpleados=_=>{
   clearMensaje();
   addTitle("empleadosTitulo","Formulario para registro de empleados");
   $id('CF').checked=true;
   $id('textCedula12').value="";
   $id('textCedula22').value="";
   $id('textCedula32').value="";
   $id('MtextID2').value="";
   $id("textUsuario").value="";
   $id("textContrasena2").value="";
   $id("textContrasena").value="";
   $id("Admin").checked=false;
   $id('A').checked=false;
   $id('JT').checked=false;
   $id('textNombre2').value="";
   $id('textCelular2').value="";
   $id('textEmail2').value="";
   new Validator()
            .validate('textCedula12','',true)
            .validate('textCedula22','',true)
            .validate('textCedula32','',true)
            .validate('MtextID2','',true)
            .validate('textNombre2','',true)
            .validate('textCelular2','',true)
            .validate('textEmail2','',true)
            .validate('textUsuario','',true)
            .validate('textContrasena','',true)
            .validate('textContrasena2','',true);
    $id("contextEmpleado2").className="noVisible";
    $id("contextEmpleado1").className="";
    $id("activoCheck").className="noVisible";
    $id("buttonUpDateEmpleado").className="noVisible";
    $id("buttonDeleteEmpleado").className="noVisible";
    $id("buttonGuardarEmpleado").className="btn btn-success btn-lg active";
    $id("CF2").disabled=false;
    $id("CJ2").disabled=false;
    $id("P2").disabled=false;
    $id("textCedula12").disabled=false;
    $id("textCedula22").disabled=false;
    $id("textCedula32").disabled=false;
    $id("MtextID2").disabled=false;
};


const addEmpleado=_=>{
    validacion();
    empleado=buildEmpleado();
    if(empleado===false)
        return mensaje("Empleado no agregado "+ve.message,2,3);
    $Proxy.proxy(
            $$("EMPLEADO",empleado,"USUARIO",new Usuario("nouser","nouser","nouser")),
            "addEmpleado","EMPLEADO",res=>{
        if(res===1){
            UserCunetaNombre=$id('textNombre2').value;
            clearEmpleados();
            mensaje("Empleado agregado.<a href='#' class='tempHref' onclick='userContext();'>Crear cuenta de usuario para "+idEmpleado+"</a> (opcional)",2,0);
        }
        else if(res===0) mensaje("Empleado no agregado, Ya existe un empleado con la identificación "+empleado.idempleado,2,3);
        else mensaje("Empleado no agregado, verifique la conexion",2,3);
    });
            
};

const addUsuario=_=>{
    validacion();
    let usuario=buildUsuario();
    if(usuario===false)
        return mensaje("Empleado no agregado "+vu.message,2,3);
   $Proxy.proxy(
      $$("USUARIO",usuario),"addUser","USUARIO",res=>{
        if(res===1){ 
            clearEmpleados();
            mensaje("Usuario registrado",2,0);
        }
        else if(res===0) mensaje("Usuario no registrado, Ya existe un usuario con el nombre de usuario "+$id("textUsuario").value,2,3);
        else {
            mensaje("Empleado no agregado, verifique la conexion",2,3);
        }
      });    
};

const userContext=(Name="")=>{
    clearMensaje();
    let names=Name===""?UserCunetaNombre.split(' '):Name.split(' ');
    let name;
    switch(names.length){
         case 1: name=names[0];break;
         case 2: name=names[0]+" "+names[1];break;
         case 3: name=names[1]+" "+names[2];break;
         default: name=names[2]+" "+names[3];break; 
    }
    addTitle("empleadosTitulo","Abrir cuenta para "+name);
    $id("contextEmpleado1").className="noVisible";
    $id("contextEmpleado2").className="";
   
};


const idEmpleadoJump=_=>{
    clearMensaje();
    let tx1=$id('textCedula12');
    let tx2=$id('textCedula22');
    let tx3=$id('textCedula32');
    if(tx1.value.length===1 && tx2.value==="")
        tx2.focus();
    else if(tx1.value.length===1 && tx2.value.length===4 && tx3.value==="")
        tx3.focus();
    else if(tx1.value.length===1 && tx2.value.length===4 && tx3.value.length===4){
        let id=(tx1.value+"-"+tx2.value+"-"+tx3.value);
        if(IDFORMAT.test(id)){
            
        }else{
            mensaje("FORMATO DE IDENTIFICACIÓN INCORRECTO",2,2);
        }
    }
};


const buscarEmpleados=()=>{
    validacion();
    $Proxy.proxy($$("DATO",$id("BTextEmpleado").value,"TIPO",3),"busqueda","EMPLEADO",fun=res=>{
         if(res.length!==0){
            resultadoEmpleados=null;
            $id("BTextEmpleado").value="";
            store("Empleados",res);
            store("tipo",3);
            $id("botonresultados").click();
            resultadoEmpleados=retrieve("Empleados");
            //load(resultadosMotos,LBSMTS,1);
            crearTable(resultadoEmpleados,3);
        }
        else
            mensaje("No hay resultados",3,1);
    });
};

const reconstruirEmpleado=e=>{
    validacion();
    let logeado=retrieve("usuarioactual");
    let user=new Usuario('','',false,e.idempleado);
    $Proxy.proxy($$("IDEMPLEADO",user),"getUserByEmpleado","EMPLEADO",res=>{
        user=res;
        if(user.id==='no hay'&& logeado.isAdmin){
            addTitle("empleadosTitulo",e.nombre);
            crearLink(e.nombre);
        }else if(user.id!=='no hay'){
            addTitle("empleadosTitulo",e.nombre+" ("+user.id+")");
        }else  addTitle("empleadosTitulo",e.nombre);
    });
    $id("opcEmpleado").click();
    reconstructId(e.tipoId,e.idempleado);
    $id("A").checked=e.isAsesor;
    $id("JT").checked=e.isJefe;
    $id("textNombre2").value=cut(e.nombre);
    $id("textCelular2").value=cut(e.telefono);
    $id("textEmail2").value=cut(e.correo);
    $id("empleadoActivo").checked=e.activo;
    $id("activoCheck").className="form-group";
    $id("buttonGuardarEmpleado").className="noVisible";
    bloqueos(logeado);
};

const crearLink=name=>{
    let link=document.createElement("a");
    link.className="tempHref";
    link.addEventListener("click",()=>userContext(name));
    link.setAttribute("href","#");
    link.appendChild(document.createTextNode("(Crear cuenta de usuario)"));
    $id("empleadosTitulo").appendChild(link);
};


const bloqueos=(u,est=true)=>{
    if(u.isAdmin){
        $id("buttonUpDateEmpleado").className="btn btn-success btn-lg active";
        $id("buttonDeleteEmpleado").className="btn btn-success btn-lg active";
    }
    else idsEmpleado.forEach(e=>$id(e).disabled=est);
    
    
};

const reconstructId=(t,id)=>{
    idEmpleado=cut(id);
    $id("CF2").disabled=true;
    $id("CJ2").disabled=true;
    $id("P2").disabled=true;
    $id("textCedula12").disabled=true;
    $id("textCedula22").disabled=true;
    $id("textCedula32").disabled=true;
    $id("MtextID2").disabled=true;
    switch(t){
        case 1:
            $id("CF2").checked=true;
            cambioId2();
            $id("textCedula12").value=id[0];
            $id("textCedula22").value=id[1]+id[2]+id[3]+id[4];
            return $id("textCedula32").value=id[5]+id[6]+id[7]+id[8];
        
        case 2:
            $id("CJ2").checked=true;
            cambioId2();
            return $id("MtextID2").value=id;
        case 3:
            $id("P2").checked=true;
            cambioId2();
            return $id("MtextID2").value=id;        
    }
    
};
let usuariosEncontrados;
const buscaUsuarios=()=>{
  $Proxy.proxy($$("USUARIO",usuarioActual),"getUsers","USUARIOS",res=>{
        if(Array.isArray(res)){
            $id("botonresultados").click();
            usuariosEncontrados=res;
            crearTable(usuariosEncontrados,6);
        }
  });
};

let usuarioCambio=null;
let opcUCambio = -1;
let checkCambio=null;
const cambioDeAdmins=e=>{
    usuarioCambio=null;
    opc = -1;
    checkCambio=null;
    checkCambio=e.target;
    let estado = e.target.checked;
    opcUCambio = e.target.id;
    usuarioCambio=usuariosEncontrados[opcUCambio];
    usuarioCambio.isAdmin = estado;
    let mj,hdr;
    if(estado){
        mj ="Si le asigna estos permisos al usuario, este podrá:<br/>&nbsp&nbsp -Crear cuentas de usuario.<br/>&nbsp&nbsp -Registrar empleados.<br/>&nbsp&nbsp -Modificar empleados.<br/>&nbsp&nbsp -Eliminar empleados.<br/>&nbsp&nbsp -Modificar Citas.";
        hdr ="CONFIRMACIÓN DE ASIGNACIÓN DE PERMISOS";
    }else{
        mj ="Si le asigna estos permisos al usuario, este ya no podrá:<br/>&nbsp&nbsp -Crear cuentas de usuario.<br/>&nbsp&nbsp -Registrar empleados.<br/>&nbsp&nbsp -Modificar empleados.<br/>&nbsp&nbsp -Eliminar empleados.<br/>&nbsp&nbsp -Modificar Citas.";
        hdr ="CONFIRMACIÓN DE DENEGACIÓN DE PERMISOS";
    }
    popUp("CAMBIO DE USUARIO",()=>{
         $Proxy.proxy($$("getUsers",usuarioCambio),"getUsers","EMPLEADO",res=>{
             
        });
        if(!popUpAux)
            checkCambio.cheked = !checkCambio.cheked;
            
    },mj,()=>{
        if(!popUpAux)
            checkCambio.cheked = !checkCambio.cheked;
    });
};