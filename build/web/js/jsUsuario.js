/* global Proxy, $id, $Proxy */

const loginconenter=_=>{
    if (event.keyCode===13)
    login();
}; 



const login=_=>{
    let _id=document.getElementById("textUsuario").value;
    let _pwsd=document.getElementById("textPssw").value;
    let u=new Usuario(_id,_pwsd);
    ingresar(u);
};   
const ingresar=u=>{
    $Proxy.proxy($$("USER",u),"login","USUARIO",res=>{
        if(res.id!=="no hay"){
            res.id=cut(res.id);
            res.pwsd=document.getElementById("textPssw").value;
            res.empleado=cut(res.empleado);
            store("usuarioactual",res);
            store("legal",true);
            document.location ="menu.jsp";
        }
        else
             mensaje("La contraseña o el nombre de usuario están escritos incorrectamente. Por favor intente de nuevo",4,2);               
     });
            
};

const logout=_=>{
    sessionStorage.removeItem("usuarioactual");
    localStorage.setItem("legal",true);
    document.location="index.jsp";
};


const nuevologin=_=>{
     let u=new Usuario(document.getElementById("textUsuario").value,document.getElementById("textPwsd").value);
     $Proxy.proxy($$("USER",u),"login","USUARIO",res=>{
                 if(res===1)
                     return true;
                 else
                    alert("La contraseña o el nombre de usuario están escritos incorrectamente\nPor favor escribalos de nuevo");               
                    return false;
    });    
};

const build_usuario=_=>{
    return new Usuario($id("textUsuario").value,$id("textContrasena").value,$id("Admin").checked);
};
/****************************************/
const cambioUsuario=()=>{
  let username=$("#textUsuario").val();
  if(username==="") return noUsuarioEscrito();
  else window.location="cambioPass.jsp?arg0="+username;
  
};
const noUsuarioEscrito=()=>{
    mensaje("Ingrese el nombre de usuario en el campo de texto \"Usuario\"",4,2);
    $("#textUsuario")[0].style="border: 3px solid #00FF00;";
};
