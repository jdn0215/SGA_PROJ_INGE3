/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* global $Proxy, $id */
var popUpAux=false;
const popUp=(hdr=null,f=null,mj=null,g=null)=>{
    if(f===null)
        return $id("closepopup").click();
    popUpAux=false;
    validacion();
     $id("popHDR").innerHTML=hdr;
    $id("popMj").innerHTML=mj;
    if(g!==null)
        $("#closepopup").click(e=>g(e));
    $("#popbuttonSubmit").click(()=>{
        validacion();
        let _id=document.getElementById("poptextUsuario").value;
        let _pwsd=document.getElementById("poptextPssw").value;
        if(_id !== usuarioActual.id){
              return $id("popMj").innerHTML= "<strong>El usuario ingresado no coincide con el usuario de la sesión actual</strong><br/>"+$id("popMj").innerHTML;
        }
        let u=new Usuario(_id,_pwsd);
        $Proxy.proxy($$("USER",u),"login","USUARIO",res=>{
        if(res.id!=="no hay"){
            validacion();
            popUpAux=true;
            f();
            $id("closepopup").click();
        }
        else
            $id("popMj").innerHTML= "USUARIO O CONTRASEÑA INCORRECTOS!\n"+$id("popMj").innerHTML;
        });
    });
};

