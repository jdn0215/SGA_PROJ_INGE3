/* global $id, annoFormat, Proxy, LBSMTS, clienteEncontrado, cut, $Proxy, VALIDACIONES_MOTOS */

var idCliente="";
let vm;
let vE;
let Objmoto;



const validarMoto=_=> vm.validateArray(VALIDACIONES_MOTOS).result;




const reconstruirMoto=(m)=>{
    Objmoto=m;
    clearMoto();
    addTitle("tituloMoto2","INFORMACION DE MOTOCICLETA");
    $id("opcMoto").click();
    if(cut(m.placa)==="")
             mensaje("MOTOCICLETA SIN PLACA, ACTUALIZAR!",1,1);
    $id("MtextCedula").value=cut(m.cliente);
    $id("textModelo").value=cut(m.modelo);
    $id("textAnno").value=m.anno;
    $id("textMotor").value=cut(m.motor);
    $id("textMotor").disabled=true;
    $id("textChasis").value=cut(m.chasis);
    if(cut(m.placa).length!==0){
        $id("fija").checked=true;
        $id("fija").disabled=false;
        $id("temp").disabled=true;
        $id("textPlaca").value=cut(m.placa);
        $id("textPlaca").disabled=false;
    }else{
        $id("fija").disabled=false;
        $id("temp").disabled=false;
        $id("temp").checked=true;
        $id("textPlaca").value=cut(m.placaavg); 
        $id("textPlaca").disabled=false;      
    };
    $id("buttonMotoGuardar").className="noVisible";
    $id("botonMotoUpdate").className="btn btn-success btn-lg active";
    $id("buttonMotoAdd").className="btn btn-success btn-lg active";
};
const clearMoto=_=>{
    $id("MtextCedula").value="";
    addTitle("tituloMotos","");
    addTitle("tituloMoto2","Agregar una nueva motocicleta");
    $id("MtextCedula").disabled=false;
    $id("MtextCedula").style="border: 1px solid #ccc;";
    $id("textModelo").value="";
    $id("textModelo").style="border: 1px solid #ccc;";
    $id("textAnno").value="";
    $id("textAnno").style="border: 1px solid #ccc;";
    $id("textMotor").value="";
    $id("textMotor").disabled=false;
    $id("textMotor").style="border: 1px solid #ccc;";
    $id("textChasis").value="";
    $id("textChasis").disabled=false;
    $id("textChasis").style="border: 1px solid #ccc;";
    $id("fija").checked=true;
    $id("fija").disabled=false;
    $id("temp").disabled=false;
    $id("textPlaca").value="";
    $id("textPlaca").disabled=false;
    $id("textPlaca").style="border: 1px solid #ccc;";
    $id("buttonMotoGuardar").className="btn btn-success btn-lg active";
    $id("botonMotoUpdate").className="noVisible";
    $id("buttonMotoAdd").className="noVisible";
    clearMensaje();
};
const buildMoto=_=>{
    vm=new Validator();
    vm.message="Por favor verifique:<br/>";
    if(validarMoto()){
        idCliente=$id("MtextCedula").value;
        return new Moto(
           idCliente,
           $id("textModelo").value,
           $id("textAnno").value,
           $id("textMotor").value,
           $id("textChasis").value,
           $id("fija").checked===true?$id("textPlaca").value:"",
           $id("temp").checked===true?$id("textPlaca").value:""
        );
    }
    else {
        mensaje("Motocicleta no agregada "+vm.message,1,3);
        return false;
    };
    clienteEncontrado=false;
};
const addMoto=_=>{
    validacion();
    let moto=buildMoto();
    if(moto===false)return;
    $Proxy.proxy($$("MOTO",moto),"addMoto","MOTO",function(re){
          re===1?(clearMoto(),mensaje("MOTOCICLETA AGREGADA",1,0))
         :re===0?mensaje("Ya existe un cliente con el motor "+moto.motor,1,3)
         :re===2?mensaje("Ya existe un cliente con la placa motor "+moto.placa,1,3)
         :re===3?mensaje("Ya existe un cliente con el chasis "+moto.chasis,1,3)
         :mensaje("ERROR "+re,1,1);
         if(re===1&&moto.placa===""){
             mensaje("RECUERDE ACTUALIZAR LA PLACA LO ANTES POSIBLE",1,2);
         }
             
    });
};
const updateMoto=_=>{
    validacion();
    let moto=buildMoto();
    return moto!==false?
        $Proxy.proxy($$("MOTO",moto),"updateMoto","MOTO",function(re){
        if(re===1){
            mensaje("La actualizacion ha sido exitosa",1,1);
        }
        else
            mensaje("Hubo un error en la actualización",1,3);
    }):null;
};


const validarEstado=()=>{
    return vE.validateArray(VALIDACIONES_MOTO_ESTADO).result;
};
    

const buildEstado=_=>{
    vE=new Validator();
    vE.message="Por favor verifique:<br/>";
    if(validarEstado())
        return new Estado(
           Number($id("textKm").value),
           $("alto").checked?3:$("medio").checked?2:1,
           $("GasF").checked?5:$("Gas34").checked?4:$("Gas12").checked?3:$("Gas14").checked?2:1,
           $id("textDannos").value!==""?$id("textDannos").value:"Sin anotaciones.",
           $id("textObservacion").value!==""? $id("textObservacion").value:"Sin observaciones",
           new Date(),
           Objmoto.motor
        );
    else{
        mensaje("Registro no agregada "+vE.message,1,3);
        return false;
    }
};


const cambioDeContextoMoto=(ctx)=>{
    if(ctx){
        $id("motoMain").className="noVisible";
        $id("motoEstado").className="";
        addTitle("tituloMoto2",
            Objmoto===null?(cambioDeContextoMoto(false),mensaje("HA OCURRIDO UN ERROR<br/>pruebe volver al menu de busqueda de nuevo",1,1))
                    :"Cliente: "+cut(Objmoto.cliente)+" || "+
                            (cut(Objmoto.placa)!==""?"placa: "+cut(Objmoto.placa)
                            :"chasis: "+cut(Objmoto.chasis))
        );
        
    }else{
        $id("motoMain").className="";
        $id("motoEstado").className="noVisible";
        limpiarEspaciosEstado();
    }
};

const limpiarEspaciosEstado=()=>{
        $id("textDannos").value="";
        $id("textObservacion").value="";
        $id("testKm").value="";
        $id("GasF").checked=true;
        $id("alto").checked=true;
        
};


const addEstado=()=>{
    validacion();
    let estado=buildEstado();
    if(estado!==false)
    $Proxy.proxy($$("ESTADO",estado),"saveEstado","ESTADO",fun=res=>{
                if(res!==0){
                    mensaje("Registro exitoso",1,0);
                }else{
                    mensaje("HA OCURRIDO UN ERROR EN EL REGISTRO",1,2);
                }
                    
        }); 
};

const buscarMotoConEnter=_=>{
    if(event.keyCode===13)
    buscarMoto($id("BTextMoto").value);
};

const buscarMoto=_=>{
    validacion();
    $Proxy.proxy($$("DATO",$id("BTextMoto").value,"TIPO",1),"busqueda","MOTO",fun=res=>{
         if(res.length!==0){
            resultadosMotos=null;
            $id("BTextMoto").value="";
            store("Motos",res);
            store("tipo",1);
            $id("botonresultados").click();
            resultadosMotos=retrieve("Motos");
            //load(resultadosMotos,LBSMTS,1);
            crearTable(resultadosMotos,2);
        }
        else
            mensaje("No hay resultados",3,1);
    });
};

const valueGas=_=>$id("GasF").checked?5:$id("Gas34").checked?4:$id("Gas12").checked?3:$id("Gas14")?2:$id("GasE")?1:-1;
//5,4,3,2,1,-1    
const valueAceite=_=>$id("alto").checked?3:$id("medio").checked?2:$id("bajo").checked?1:-1;
//3,2,1,-1