/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* global $Proxy, $id */

const popUp=(hdr,f,mj)=>{
    validacion();
     $id("popHDR").innerHTML=hdr;
    $id("popMj").innerHTML=mj;
    $("#popbuttonSubmit").click(()=>{
        validacion();
        let _id=document.getElementById("poptextUsuario").value;
        let _pwsd=document.getElementById("poptextPssw").value;
        let u=new Usuario(_id,_pwsd);
        $Proxy.proxy($$("USER",u),"login","USUARIO",res=>{
        if(res.id!=="no hay"){
            f();
            $id("closepopup").click();
            validacion();
        }
        else
            $id("popMj").innerHTML= "USUARIO O CONTRASEÑA INCORRECTOS!\n"+$id("popMj").innerHTML;
        });
    });
};

