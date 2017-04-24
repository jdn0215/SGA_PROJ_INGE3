/* global $id, IDFORMAT, edadFormat, TELFORMAT, mailFormat, annoFormat, Proxy, LBSCLNTS, $Proxy, VALIDACIONES_CLIENTES, verifiqe, clienteNoAdd */

var idCliente="";
let vc;



const validar=()=>vc.validateArray(VALIDACIONES_CLIENTES).result;


const buildCliente=_=>{
    idCliente=$id("CF").checked?
        ($id("textCedula1").value)+"-"+($id("textCedula2").value)+"-"+($id("textCedula3").value)
        :$id("MtextID").value;
    vc=new Validator();
    vc.message=verifiqe;
    if(!validar()){
       mensaje(clienteNoAdd+vc.message,0,3);
       return false;
    }else{
       idCliente=getIdFrom();
        return new Cliente(
           idCliente,
           (($id("CF").checked===true?1:$id("CJ").checked===true?2:3)),//tipoid 0=fisica y 1=otra
           $id("textNombre").value,
           $id("textEdad").value,
           $id("textEmail").value,
           $id("textTelefono").value,
           $id("textCelular").value,
           $id("textProfesion").value,
           new Date($id("anno").value,$id("_mes").selectedIndex-1,$id("_dia").selectedIndex),
           $id("comboProv").selectedIndex,$id("comboCant").selectedIndex,$id("comboDist").selectedIndex
       );  
    }
};

const clearClientes=_=>{
    addTitle("titutloCliente","Información del cliente");
    $id("buttonClientesHistorial").className="noVisible";
    $id("buttonClienteModificar").className="noVisible";
    $id("CF").checked=true;
    $id("textCedula1").value="";
    $id("textCedula2").value="";
    $id("textCedula3").value="";
    $id("MtextID").value="";
    $id("MtextID").style="border: 1px solid #ccc;";
    $id("CF").disabled=false;
    $id("CJ").disabled=false;
    $id("P").disabled=false;
    $id("MtextID").disabled=false;
    $id("textCedula1").disabled=false;
    $id("textCedula1").style="border: 1px solid #ccc;";
    $id("textCedula2").disabled=false;
    $id("textCedula2").style="border: 1px solid #ccc;";
    $id("textCedula3").disabled=false;
    $id("textCedula3").style="border: 1px solid #ccc;";
    $id("textNombre").value="";
    $id("textNombre").style="border: 1px solid #ccc;";
    $id("textEdad").value="";
    $id("textEdad").style="border: 1px solid #ccc;";
    $id("textEmail").value="";
    $id("textEmail").style="border: 1px solid #ccc;";
    $id("textTelefono").value="";
    $id("textCelular").value="";
    $id("textCelular").style="border: 1px solid #ccc;";
    $id("textProfesion").value="";
    $id("textProfesion").style="border: 1px solid #ccc;";
    $id("comboProv").selectedIndex=0;
    $id("comboProv").style="border: 1px solid #ccc;";
    $id("comboCant").selectedIndex=0;
    $id("comboCant").style="border: 1px solid #ccc;";
    $id("comboDist").selectedIndex=0;
    $id("comboDist").style="border: 1px solid #ccc;";
    $id("anno").value="";
    $id("anno").style="border: 1px solid #ccc;";
    $id("_dia").selectedIndex=0;
    $id("_dia").style="border: 1px solid #ccc;";
    $id("_mes").selectedIndex=0;
    $id("_mes").style="border: 1px solid #ccc;";
     $id("buttonGuardar").className="btn btn-primary btn-lg active";
    clearMensaje();
};
const getIdFrom=_=>
               $id("CF").checked ? 
                    ($id("textCedula1").value)+($id("textCedula2").value)+($id("textCedula3").value)
                    :$id("MtextID").value;
                    
const reconstruir=c=>{
    clearClientes();
    $id("opcCliente").click();
    addTitle("titutloCliente",c.nombre+"-"+c.id);
    var idCliente=c.id;
    id=Array.from(idCliente);
    if(c.tipoId===1){
        $id("esOtro").style="display:none;";
        $id("CF").checked=true;
        $id("textCedula1").value=id[0];
        $id("textCedula1").hidden=false;
        $id("textCedula2").value=id[1]+""+id[2]+""+id[3]+""+id[4];
        $id("textCedula2").hidden=false;
        $id("textCedula3").value=id[5]+""+id[6]+""+id[7]+""+id[8];
        $id("textCedula3").hidden=false;
        $id("esCedula").style="display:inline;";
    }else{
        $id("MtextID").value=idCliente;
        $id("esCedula").style="display:none;";
        $id("esOtro").style="display:inline;";
        $id(((c.tipoId===2)?("CJ"):("P"))).checked=true;
    }
    $id("CF").disabled=true;
    $id("CJ").disabled=true;
    $id("P").disabled=true;
    $id("MtextID").disabled=true;
    $id("textCedula1").disabled=true;
    $id("textCedula2").disabled=true;
    $id("textCedula3").disabled=true;
    $id("textNombre").value=cut(c.nombre);
    $id("textEmail").value=cut(c.correo);
    $id("textTelefono").value=cut(c.tel);
    $id("textCelular").value=cut(c.tel2);
    $id("textProfesion").value=cut(c.ocupacion);
    $id("anno").value=c.nacimiento.getFullYear();
    $id("_mes").selectedIndex=c.nacimiento.getMonth()+1;
    llenarDia(); 
    $id("_dia").selectedIndex=c.nacimiento.getDate();
    calcEdad();
    $id("comboProv").selectedIndex=c.zona.provincia;
    getCantones_(c.zona.canton,c.zona.distrito);
    $id("buttonClientesHistorial").className="btn btn-warning btn-lg active";
    $id("buttonClienteModificar").className="btn btn-warning btn-lg active";
    $id("buttonGuardar").className="noVisible";
};

const motosDelCliente=()=>{
    validacion();
    $id("BTextMoto").value=getIdFrom();
    $id("buttonBuscarM").click();
    $id("opcBusqueda").click();
};

const buscar=()=>{
    var id=$id("CId2").value;
    $Proxy.proxy($$("CLIENTE",id),"searchCliente","CLIENTE",function(res){
                        if(res.id!=="123"){
                        reconstruir(res);
                        }else alert("cliente no registrado");
                    });
    
};
const updateCliente=()=>{
    validacion();
    let cliente=buildCliente();
    if(cliente===false)return;
    $Proxy.proxy($$("CLIENTE",cliente),"updateCliente","CLIENTE",re=>{
         re===1?(clearClientes(),mensaje("CLIENTE ACTUALIZADO",0,0)):mensaje("ERROR DE CONEXIÓN",0,3);
    });
  
};
const addCliente=_=>{
    validacion();
    var cliente=buildCliente();
    if(cliente===false)return;
    $Proxy.proxy($$("CLIENTE",cliente),"addCliente","CLIENTE",re=>{
         re===1?(clearClientes(),mensaje("CLIENTE AGREGADO",0,0))
         :re===0?mensaje("Cliente no agregado, Ya existe un cliente la identificación "+cliente.id,0,3):mensaje("ERROR DE CONEXIÓN",0,2);
    });
};


const buscarClienteConEnter=_=>{
    validacion();
    if(event.keyCode===13)
    buscarCliente($id("BTextCliente").value);    
};


const idJump=_=>{
    clearMensaje();
    let tx1=$id('textCedula1');
    let tx2=$id('textCedula2');
    let tx3=$id('textCedula3');
    if(tx1.value.length===1 && tx2.value==="")
        tx2.focus();
    else if(tx1.value.length===1 && tx2.value.length===4 && tx3.value==="")
        tx3.focus();
    else if(tx1.value.length===1 && tx2.value.length===4 && tx3.value.length===4){
        let id=(tx1.value+"-"+tx2.value+"-"+tx3.value);
        if(IDFORMAT.test(id)){
            let _$=tx1.value+tx2.value+tx3.value;
            $Proxy.proxy($$("DATO",_$,"TIPO",2),"busqueda","CLIENTE",fun=res=>{
                if(res.length!==0)          
                   mensaje("YA EXISTE UN CLIENTE CON ESA IDENTIFICACIÓN!",0,3);
            });
        }else{
            mensaje("FORMATO DE IDENTIFICACIÓN INCORRECTO",0,2);
        }
    }
};




const buscarCliente=dato=>{
    validacion();
    let _$=$id("BTextCliente").value;
    $Proxy.proxy($$("DATO",_$,"TIPO",2),"busqueda","CLIENTE",fun=res=>{
        if(res.length!==0){
            resultadosClientes=null;
            $id("BTextCliente").value="";
            store("Clientes",res);
            store("tipo",2);
            $id("botonresultados").click();
            resultadosClientes=retrieve("Clientes");
            //load(resultadosClientes,LBSCLNTS,2);
            crearTable(resultadosClientes,1);
        }
        else
            mensaje("No hay resultados",3,1);            
        
    }); 
};

const existeCliente=(T="tituloMotos",I="MtextCedula",C=1,F=null)=>{
    clearMensaje();
    addTitle(T,"");
    let idCl=$id(I).value;
    if(idCl.length<9){
        addTitle(T,"");
        store("CLIENTEBUSCADO",null);
        if(F!==null)
            F();
        return;
    }
    var clienteEncontrado=false;
   $Proxy.proxy($$("DATO",idCl,"TIPO",2),"busqueda","CLIENTE",res=>{
        clienteEncontrado=res!==null&&res.length===1;
        if(clienteEncontrado){
          addTitle(T,res[0].nombre);
          store("CLIENTEBUSCADO",res[0]);
          if(F!==null)
            F();
       }else{
           store("CLIENTEBUSCADO",null);
           if(F!==null)
            F();
           addTitle(T,"");
           mensaje("El cliente "+$id("MtextCedula").value+" no se encuentra registrado<br/>Por Favor, registrarlo antes de continuar",C,3);
       }
    }); 
};  

const getHistorialC=cliente=>{
    cliente.id=cut(cliente.id);
    $Proxy.proxy($$("CLIENTE",cliente),"buscaCitaByCliente","CITA",res=>{
        if(Array.isArray(res)){
             $("#botonresultados").click();
             crearTable(res,4);
        }else $("#tituloBusqueda").html("Ocurrio algún problema durante la búsqueda, intente de nuevo");
    });
};

const getAllMotos=cliente=>{
    cliente.id=cut(cliente.id);
    $Proxy.proxy($$("CLIENTE",cliente.id),"BMPC","MOTOS",res=>{
        if(Array.isArray(res)){
             $("#botonresultados").click();
             crearTable(res,2);
        }else $("#tituloBusqueda").html("Ocurrio algún problema durante la búsqueda, intente de nuevo");
    });
};