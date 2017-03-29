/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global $id, $Proxy */

let nombreUsuario=null;
let empleado=null;
let correoasterisco="";
const initCambio=()=>{
    $("#cancelCambio").click(()=>window.location="index.jsp");
    $("#buttonSubmitCambio").click(()=>terminarConfirmacion());
    extraeUsuario();
    if(typeof nombreUsuario === 'undefined' ||nombreUsuario===null )
        return $("#cancelCambio")[0].click();
    prepararForm();
    solicitarCorreo();
    
};

const extraeUsuario=()=>{
    let paramstr = window.location.search.substr(1);
    let paramarr = paramstr.split ("&");
    let params = paramarr.reduce((a,e)=>{
        let tmparr = e.split("=");
        a[tmparr[0]]=tmparr[1];
        return a;
    },{});
    nombreUsuario = params['arg0'];
};

const prepararForm=()=>{
  $id("textUsuarioCambio").value=  nombreUsuario;
  $id("textUsuarioCambio").disabled=true;
};

const solicitarCorreo=()=>{
   $Proxy.proxy($$("arg0",nombreUsuario),"buscaEmpleadoByUser","EMPLEADO",res=>{
       if(res.length === 0){
           mensaje("Al parecer el nombre de usuario "+nombreUsuario+" no se encuentra registrado, de click en Cancelar e intente de nuevo",6,2);
       }else{
           empleado=res[0];
           prepararInfo();
       }
   });  
};


const prepararInfo=()=>{
  empleado.correo=cut(empleado.correo);
  correoasterisco = prepararCorreo(empleado.correo);
  mensaje("Escriba el correo electronico que concuerde con "+correoasterisco+"para concluir con la confirmación",6,1);
};
const prepararCorreo=(correo)=>{
  let aux=false;
  let arr=Array.from(correo);
  let out="";
  for(let i=0;i<arr.length;i++){
      if(arr[i]==='@')
          aux=true;
      if(aux === true || i=== 0)
          out+=arr[i];
      else out+="*";
  }
  return out;
};

const terminarConfirmacion=()=>{
    if(empleado.correo=== $("#textCorreoCambio").val()){
      $Proxy.proxy($$("arg0",nombreUsuario,"arg1",cut(empleado.nombre),"arg2",empleado.correo),
                   "cambioPassword","usuario",res=>{
          if(res===1){
              mensaje("La contraseña ha sido cambiada con éxito, revise su correo electronico para ver su nueva contraseña",6,0);
              $("#buttonSubmitCambio")[0].style="display:none";
              $("#cancelCambio")[0].style="background-color:";
              $("#cancelCambio")[0].innerHTML="Regresar";
          }else mensaje("No se ha logrado concluir con el cambio de contraseña, intente de nuevo",6,3);
      });  
    }else{
        mensaje("El correo ingresado no coincide con el registrado en el sistema ("+correoasterisco+")",6,3);
    }
};
