/* global Proxy, $Proxy, agenda, usuarioActual */





const $date=()=>{
    $Proxy.proxy([],"Date","Date",res=>{
        if(res!==null)
            HORASERVER=new Date(res);
        else HORASERVER=new Date();   
    });
};
$date();



const meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Setiembre","Octubre","Noviembre","Diciembre"];
var mj="";
//const usuarioactualogin=retrieve("usuarioactual");
const IDFORMAT=/^([1-7])[-]([0-9]{4})[-]([0-9]{4})$/;
const TELFORMAT=/^([0-9]{8,15})$/;
const mailFormat=/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;
const edadFormat=/^[0-9]{2}$/;
const DOUBLE=/^([0-9]*)([.]([0-9]*))?$/;
const annoFormat=/^[1-2][9|0][0-9]{2}$/;
const passWordFormat=/^[A-Za-z\d]{8,15}/;
///////////////
const mes=m=>m===0?"Enr":m===1?"Fbr":m===2?"Mrz":m===3?"Abr":m===4?"May":m===5?"Jun"
            :m===6?"Jul":m===7?"Ags":m===8?"Sep":m===9?"Oct":m===10?"Nov":"Dic";


/*$('.form-js-label').find('input').on('input', function (e) {
  $(e.currentTarget).attr('data-empty', !e.currentTarget.value);
});*/

////////////////////
const $id=id=>document.getElementById(id);

const calendar=(dia,mes,anno)=>{
    
    
    
};
const addTitle=(H,T)=>{
    while($id(H).firstChild!==null)
          $id(H).removeChild($id(H).firstChild);
    $id(H).appendChild(document.createTextNode(T)); 
};

const validarCombo=obj=>{
    if(obj.selectedIndex===0){
        obj.title="Seleccione una opcion";
        return false;
    }else{
        obj.title="";
        return true; 
    }
    
};
const validarTexto=(obj,isExp,exp,txt)=>{
    if(isExp){
        if(!exp.test(obj.value)){
            mj+=("-"+txt);
            obj.title="formato incorrecto";
            return false;
        }
    }else{
        if(obj.value.length===0){
            obj.title="DEBE INGRESAR UN VALOR";
            return false;
        }
        
    }
    obj.title="";
    return true;
};


const cut=a=>{
    a=Array.from(a);
    let b=0;
    return a.reduce((A,e,i)=>{
        if(e===' ')++b;
        else b=0;
        if(b<2&&!(i===a.length-1&&e===' ')&&!(i!==a.length-1&&e===' '&&a[i+1]===' '))
            A=A+e;
        return A;
    },"");
};

const llenarDia=($mes="_mes",$dia="_dia",hs=null)=>{
	let combo=$id($dia);
	let mes=$id($mes);
	let i=1;

	if(mes.value==="-1"){
		combo.clear;
		combo.length=1;
		combo.options[0].text="seleccione un mes";
	}
	else{
            let bajo = hs===null ? 0:hs.getMonth()== mes.value ? hs.getDate() : 0;
            combo.options[0].text="Día";
            let top=0;
            let sel=parseInt(mes.value)+1;
            (sel===1||sel===3||sel===7||sel===5||sel===8||sel===10||sel===12)?top=31:
            (sel===2)?top=29:
                         top=30;
            combo.clear;
            combo.length=(top+1)-bajo+(bajo===0?0:1);
            while(i<=top){
                if(bajo===0 || i>= bajo){
                    combo.options[bajo===0?i:(i+1)-bajo].value=i;
                    combo.options[bajo===0?i:(i+1)-bajo].text=i;
                }i++;
            }
	}
};


const busqueda=_=>{
  let parametro;
  if($id("radioId").checked||$id("radioNombre").checked){
      parametro=$id("radioId").checked?($id("BtextCedula").value):("'"+($id("BtextNombre").value)+"'");
      $Proxy.proxy($$("CLIENTE",parametro),"searchCliente","CLIENTE",res=>{
           if(res.id!=="123"){
            $id("opcCliente").click();
            reconstruir(res);
           }else alert("cliente no registrado aun");
      });
  }else{
      alert("no defined yet"); 
  }  
};
const cambio=i=>{
    if(i===0||i===2||i===3){
       $id("radioNombre").checked=false;
    }
    if(i===1||i===2||i===3){
       $id("radioNombre").checked=false;
    }
    if(i===0||i===1||i===3){
       $id("radioPlaca").checked=false;
    }
    if(i===0||i===1||i===2){
       $id("radioChasis").checked=false;
    }
    
};

const calcEdad=_=>{
    $date();
    if($id("_mes").selectedIndex===0){
        $id("textEdad").value="";
        $id("textEdad").placeholder="Seleccione un mes";
    }else if($id("_dia").selectedIndex===0){
        $id("textEdad").value="";
        $id("textEdad").placeholder="Seleccione un día";
    }else{
        if($id("anno").value.length<4){
            $id("textEdad").value="";
             $id("textEdad").placeholder="Ingrese un año: por ejemplo 1994";
        }else{
             try{      
                let current=HORASERVER;
                let _a=parseInt($id("anno").value);
                if(isNaN(_a)||_a<1000){
                    $id("textEdad").value="";
                    $id("textEdad").placeholder="El año solo puede tener valores numericos";
                }else if(current.getFullYear()<=_a){
                    $id("textEdad").value="";
                    $id("textEdad").placeholder="verifique que el año sea correcto (cliente tan joven?)";
                }else if((current.getFullYear()-120)>_a){
                    $id("textEdad").value="";
                    $id("textEdad").placeholder="verifique que el año sea correcto (cliente tan viejo?)";
                }else {
                    let born=new Date(_a,$id("_mes").selectedIndex,$id("_dia").selectedIndex);
                    let edad=current.getFullYear()-born.getFullYear();
                    if(current.getMonth()<born.getMonth()){
                    --edad;
                    }else if(current.getMonth()===born.getMonth()&&current.getDate()<current.getDate()){
                     --edad;
                    }
                     $id("textEdad").value=parseInt(edad);
                }
            }catch(ex){
                 $id("textEdad").value="";
                 $id("textEdad").placeholder="El año solo puede tener valores numericos";
            }
            
        }
    }
    
};
const levantar=_=>{
        events();
        user=retrieve("usuarioactual");
        if(!user.isAdmin)
           $id("opcEmpleado").style.display="none";
        llenarProvincias();
        llenarMes();
       
};
    
const llenarMes=(mes="_mes",dia="_dia",topeBajo=0)=>{
		let combo=$id(mes);
		let combo2=$id(dia);
		llenarDia(dia);
		combo2.options.selectedIndex=0;
		combo.clear;
		combo.length=13-topeBajo;
		meses.forEach((e,i)=>{
                        if(topeBajo===0 || i>=topeBajo){
                            combo.options[i+1-topeBajo].value=i;	
                            combo.options[i+1-topeBajo].text=e;
                        }
		});
};
        
  


    /*function buscar(){
        alert("algo no implementado aun, linea 280 del index")
    }*/
    const cambioDeContexto=nuevo=>{
        $(".OpcDinamica").hide('fast');
        $($("#formulariosBt")[0].childNodes[2]).replaceWith("Formularios");
        switch(nuevo){
            case 1: return tituloPag("CLIENTES"),clearClientes();
            case 2: return tituloPag("MOTOCILETAS"),clearMoto();
            case 3: return tituloPag("EMPLEADOS"),clearEmpleados();
            case 4: return tituloPag("CITAS"),clearCitas();
            case 5: return tituloPag("BÚSQUEDAS");
            case 6: return tituloPag("AGENDA"),agenda.reload();
            case 7: return tituloPag("REPORTES");
        }
    };

const tituloPag=(T)=> document.title=T;



const registrarError=(campo,error,estado,O,M,otro="",otro2="")=>{
    if(estado===false){
        O=false;
        $id(campo).style="border: 1px solid #FF0000;";
        M+=error;
        if(otro!=="") $id(otro).style="border: 1px solid #FF0000;";
        if(otro2!=="") $id(otro2).style="border: 1px solid #FF0000;";    
    }else{
        $id(campo).style="border: 1px solid #ccc;";
        if(otro!=="") $id(otro).style="border: 1px solid #ccc;";
        if(otro2!=="") $id(otro2).style="border: 1px solid #ccc;"; 
    }
    return O;
};

const cambioId=_=>{
        if($id("CF").checked){
            $id("esCedula").style.display="";
            $id("esOtro").style.display="none";
            
        }else{
            $id("esCedula").style.display="none";
            $id("esOtro").style.display="";
            
        }
 };

const cambioId2=_=>{
        if($id("CF2").checked){
            $id("esCedula2").style.display="";
            $id("esOtro2").style.display="none";
            
        }else{
            $id("esCedula2").style.display="none";
            $id("esOtro2").style.display="";
            
        }
};
    
const validacion=()=>{
    let usuario=retrieve("usuarioactual");
    if(usuario!==null){
         $Proxy.proxy($$("USER",usuario),"login","USUARIO",res=>{
             if(res.id==="no hay"){
                localStorage.setItem("legal",false);
                document.location="index.jsp"; 
             }else{
                 if(usuario.isAdmin!==res.isAdmin
                    ||usuario.empleado!==cut(res.empleado)
                    ||usuarioActual.isAdmin!==res.isAdmin
                    ||usuarioActual.empleado!==cut(res.empleado)){
                        localStorage.setItem("legal",false);
                        document.location="index.jsp"; 
                    }
             }
         });
    }else{
        localStorage.setItem("legal",false);
        document.location="index.jsp";
    }
};

const fillString=(str,max,chr)=>{
    let gap=max-str.length;
    if(gap<1)
        return str;
    let aux=new Array(gap).fill(chr);
    return str+aux.reduce((a,e)=>a+e,"");
};
    