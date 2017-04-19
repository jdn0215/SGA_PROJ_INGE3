/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global $id, $Proxy, agenda, HORASERVER, VALIDACIONES_CITAS, borderOK, empleadoActual, Cita, moment, usuarioAcual, usuarioActual */
let validadorCita;
var CLIENTEBUSCADO=null;
var motosDelClienteBuscado=[];
var citaActual;
var modoUpdate=false;
let dateEntrada;
let datePrometida;
let hrsOk=false;
var recepcionistaActual;
var citaActual = null;

const addCita=()=>{
    validacion();
    let nuevaCita=construirCita();
    if(nuevaCita===false)return;
    $Proxy.proxy(
            $$("CITA",nuevaCita,"Obs",buildObservacion()),/*parametros*/
            "addCita",/*accion*/
            "Cita",/*tipo de dato que se va manejar*/
             res=>{
                 if(res===1){
                     clearCitas();
                     mensaje("Cita registrada con éxito",5,1);
                 }else mensaje("Ocurrio algun error, intente de nuevo",5,4);
             }       
            );
    
};
const validarCita=()=>validadorCita.validateArray(VALIDACIONES_CITAS).result;

const construirCita=(cita=null)=>{
    validadorCita=new Validator();
    validadorCita.message="Por favor verifique:<br/>";
    if(!validarCita()){
        mensaje(validadorCita.message,5,3);
        return false;
    }
    if(!modoUpdate)
    return new Cita(
            $("#proformaCita").val(),
            $("#numeroOrdenCita").val(),
            $("#clienteCita").val(),
            motosDelClienteBuscado[$id("motocito").selectedIndex].motor,
            recepcionistaActual,
            $("#garantiaCita").val(),
            $("#tipoCita").val(),
            $("#EmpleadoCita").val().split('- ')[1],
            armarFecha(),
            !$id("citaCumplida").checked?0:armarFecha("annoCita3","_mesCitas3","_diaCitas3","minCita4"),
            armarFecha("annoCita2","_mesCitas2","_diaCitas2","minCita2"),
            estadoCita()
    );
    return new Cita(
            cita.proforma,
            cita.orden,
            cita.cliente,
            cita.moto,
            cita.recepcionista,
            $("#garantiaCita").val(),
            $("#tipoCita").val(),
            $("#EmpleadoCita")[0].selectedIndex === 0 ? cita.mecanico :  $("#EmpleadoCita").val().split('- ')[1],
            armarFecha(),
            !$id("citaCumplida").checked?0:armarFecha("annoCita3","_mesCitas3","_diaCitas3","minCita4"),
            armarFecha("annoCita2","_mesCitas2","_diaCitas2","minCita2"),
            estadoCita()
    );
};

const estadoCita=()=>
    $id("citaPendiente").checked ? 0 :
    $id("EnProceso").checked     ? 2 :
    $id("citaCumplida").checked  ? 3 :
                                   1 ;

const armarFecha=(anho="annoCita",_mes="_mesCitas",_dia="_diaCitas",_min="minCita")=>{
    let anno=$("#"+anho).val();
    let mes=$id(_mes).value;
    let dia=$id(_dia).value;
    let T=$id(_min).value.split(":");
    let hora=T[0];
    let min=T[1];
    if(anno==="" || mes=== -1 || dia===-0 || T.length!==2)
        return false;
    return new Date(anno,mes,dia,hora,min);
};
const verificarDisponibilidad=(callback=null,val=null)=>{
     let combo=$("#EmpleadoCita")[0];
    combo.length=1;
    combo.options[0].text="Seleccione una hora de entrada y una hora prometida";
    horaEntrada=armarFecha(),
    horaPrometida=armarFecha("annoCita2","_mesCitas2","_diaCitas2","minCita2");
    if(horaEntrada===false || horaPrometida===false)
        return hrsOk=false;
    if(horaEntrada>=horaPrometida)
        return mensaje("La fecha de salida prometida no puede ser antes que la de entrada",5,2),
        hrsOk=false;
    hrsOk=true;
    cargarEmpleadosLibres(horaEntrada,horaPrometida,callback,val);
};
const cargarEmpleadosLibres=(date1,date2,callback=null,v=null)=>{
    if(!hrsOk)return;
    let ctemp=new Cita();
    ctemp.entrada=date1;
    ctemp.prometida=date2;
    $Proxy.proxy($$("arg0",ctemp),"getEmpleadosLibres","Empleados",res=>{
        if(Array.isArray(res)){
            cargarEmpleados(res,true,callback===null);
            if(callback!==null)
                callback(v);
        }
    });
};
const cargarEmpleados=(arr=[],busqueda=false,mj=true)=>{
    let combo=$("#EmpleadoCita")[0];
    combo.length=1;
    combo.options[0].text="Seleccione una hora de entrada y una hora prometida";
    if(mj && busqueda && arr.length===0){
        return mensaje("Ningún empleado se encuentra disponible en el lapso indicado",5,3);
    }
    combo.length=arr.length+1;
    combo.options[0].text="Seleccione un mecánico";
    arr.forEach((e,i)=>{
        let txt = e.nombre+" - "+e.idempleado;
        combo.options[i+1].text=txt;
    });
};
const upDateCita=()=>{
    validacion();
    let nuevaCita=construirCita(citaActual);
    aux=nuevaCita;
    if(nuevaCita===false)return;
    let obs = buildObservacion(citaActual,nuevaCita);
    $Proxy.proxy(
            $$("CITA",nuevaCita,"OBSV",obs),/*parametros*/
            "updateCita",/*accion*/
            "Cita",/*tipo de dato que se va manejar*/
             res=>{
                 if(res===1){
                     clearCitas();
                     mensaje("Cita Actualizada con éxito",5,1);
                    modoUpdate=false;
                 }else mensaje("Ocurrio algun error, intente de nuevo",5,4);
             });       
};
const clickDia=(casilla)=>{
    let arr=agenda.citas[casilla.getAttribute("date_date")].hash.filter(e=>e);
    arr.sort((a,b)=>a.fecha.getTime()>b.fecha.getTime());
    Arraycitas=arr;
    crearTable(Array.isArray(arr)?arr:[],4);
    
};
const mostrarTexto=(idx)=>{
    let d=$id("texto"+idx);
    if(d===null)return;
    $("#texto"+idx).popover();
    d.oculto="false";
    //let tiempo=0;
   /* let intervalo=setInterval(()=>{
       tiempo++;
       if(tiempo>1){
          let dd= $id("texto"+idx);
          if(dd){
              dd.click();
              clearInterval(intervalo);
          }
      }
    },1000);*/
};
const reconstruirCita=(cita)=>{
    if(!(cita instanceof Cita)) return ;
    $("#opcCitas").click();
    modoUpdate=true;
    citaActual = cita;
    $(".citaDis").prop("disabled",true);
    $("#clienteCita").val(cut(cita.cliente));
    $("#motocito")[0].options[0].text = "Motor: "+cut(cita.moto);
    $("#proformaCita").val(cita.proforma);
    $("#garantiaCita").val(cut(cita.garantia));
    if(cita.orden === 0){
        $("#numeroOrdenCita").val();
        $("#numeroOrdenCita").prop("disabled",false);
    }else $("#numeroOrdenCita").val(cita.orden);
    
    reArmarEstado(cita.estado);
    reArmarFecha(cita.entrada,"annoCita","_mesCitas","_diaCitas","minCita");
    reArmarFecha(cita.prometida,"annoCita2","_mesCitas2","_diaCitas2","minCita2",c=>{
        verificarDisponibilidad(v=>{
             $("#EmpleadoCita")[0].options[0].text="Mecánico asignado: "+v; 
        },c.mecanico);     
    },cita);
    if(cita.salida != "Invalid Date"){
        $("#divSalidaCita").show();
       reArmarFecha(cita.salida,"annoCita2","_mesCitas3","_diaCitas3","minCita4");
   }
   $("#tipoCita").val(cita.tipoDeTrabajo);
   let a = moment(cita.entrada);
   let b;
    switch(cita.estado){
       case 2:/*en proceso*/
           b = moment(HORASERVER);
           $("#diasEnTaller").val(b.diff(a,'days'));
           break;
       case 3:/*entregada al cliente*/
           b = moment(cita.salida);
           $("#diasEnTaller").val(b.diff(a,'days'));
           break;
        default:   $("#diasEnTaller").val(0);
    }
    $("#motivosCita2")[0].className="form-control";
    $Proxy.proxy($$('arg1',cita.proforma),'buscaCitaObs','obs',res=>{
        if(Array.isArray(res)){
            $("#motivosCita2").val(
                     res.reverse().reduce((ant,el)=>ant+=(el.detalle+'\n------------------------------\n'),""
                    ));
        }
    });
    $("#recepcionistaCita").val(cut(cita.recepcionista));
    $("#buttonGuardarCita").hide();
    $("#buttonCitasModificar").show();
    switch(cita.estado){
        case 3:
        case 1:  disabled_enabled(true);
                 $("#buttonCitasModificar").hide();
                 $("#motivosCita").hide();   
                 break;
        case 2: $(".tc2,.tc1,#citaPendiente").prop("disabled",true);break;
    }
    if(!usuarioActual.isAdmin){
        disabled_enabled(true);
         $("#buttonCitasModificar").hide();
         $("#motivosCita").hide();   
    }  
};

const disabled_enabled=e=>{
    $(".tc1,.tc2,.tc3,#citaPendiente,#EnProceso,#citaCumplida,#citaCancelada,#garantiaCita,#tipoCita,#EmpleadoCita,#motivosCita")
                        .prop("disabled",e);
};
const reArmarFecha=(fecha,ano,mes,dia,hr,callback=null,cita=null)=>{
    if(fecha === null || !(fecha instanceof Date))return;
    llenarMes(mes,dia,fecha.getMonth());
    let st = setTimeout(()=>{
        while($("#"+ano)[0].options[0].text != fecha.getFullYear())
            $("#"+ano)[0].selectedIndex=1;
        $("#"+ano).click();
        while($("#"+mes).val() != fecha.getMonth())
            $("#"+mes).val(fecha.getMonth());
        $("#"+mes).click();
        llenarDia(mes,dia,fecha)
        while($("#"+dia).val() != fecha.getDate())
            $("#"+dia).val(fecha.getDate());
         $("#"+hr).val(buildDate(fecha.getHours())+":"+buildDate(fecha.getMinutes()));
        if(callback!==null)
             callback(cita);
        clearTimeout(st);
        
    },300);
};
const reArmarEstado=estado=>{
    
    let campo = estado === 0 ? "citaPendiente":
                estado === 2 ? "EnProceso"    :
                estado === 3 ? "citaCumplida" :
                               "citaCancelada";
    $("#"+campo).prop("checked",true);
    if(estado === 3 || estado === 1)
        $("[name='esatdoCita']").prop("disabled",true);
};
const buscaCita=id=>{
  $Proxy.proxy(
        $$("arg1",id),"buscaCitaProforma","CITA",res=>{
            if(res[0] instanceof Cita)
                reconstruirCita(res[0]);
        }
    );  
};
const clearCitas=()=>{
    $id("tituloCitasCliente").innerHTML="";
    modoUpdate=false;
    citaActual = null;
    $id("citasReset1").click();//quitar el texto de los inputs
    $id("citasReset2").click();//quitar el texto de los inputs
    $("#form1Citas > div > input,#form1Citas > div > select").css("border",borderOK);//quitar borde rojo
    FF();//quitar opciones de motos
    $id("citaPendiente").click();
    $("#form2Citas > div > group > select,#form2Citas > div > select,#form2Citas > div > input")
            .css("border",borderOK);
    $("#recepcionistaCita").val(cut(empleadoActual.idempleado));
    recepcionistaActual = empleadoActual.idempleado;
    $(".citaDis").prop("disabled",false);
    $("[name='esatdoCita']").prop("disabled",false);
    $("#diasEnTaller").val('0');
    let combo = $("#EmpleadoCita")[0];
    combo.length = 1;
    combo.options[0].text = "Ingrese una hora de ingreso y una hora prometida";
    $("#motivosCita2").val("");
     $("#motivosCita2")[0].className="noVisible";
     $("#buttonGuardarCita").show();
    $("#buttonCitasModificar").hide();
    disabled_enabled(false);  
    $("#motivosCita").show();
    $("#divSalidaCita").hide();
    clearMensaje();        
};
const findEmpleado=e=>{
  let select=$id("EmpleadoCita");
  let salida=0;
  for(let i=1;i<select.children.length;i++){
      let b = select.children[i];
      if(cut(b.innerHTML.split(" -- ")[1]) === e){
          salida=i;
          break;
      }
  }
  return salida;
};
const FF=()=>{
        motos=$id("motocito");
        motos.clear;  
        motos.length=1;
        motos.options[0].text="Ingrese la identificación del cliente";
};
const cargarMotos=()=>{
    
    CLIENTEBUSCADO=retrieve("CLIENTEBUSCADO");
       if(CLIENTEBUSCADO===null){
        FF();
        return;   
       }
       $Proxy.proxy(
           $$("CLIENTE",cut(CLIENTEBUSCADO.id)),"BMPC","MOTO",res=>{
               clearMensaje();
               motosDelClienteBuscado=res;
               if(res.length===0){
                   mensaje("EL CLIENTE NO TIENE NINGUNA MOTOCICLETA REGISTRADA EN EL SISTEMA",5,2);
                   FF();
               }else{
                   motos=$id("motocito");
                   motos.clear;
                   motos.length=res.length;
                   res.forEach((e,i)=>{
                       motos.options[i].text= e.placa!==""   ? ((i+1)+". Placa: "+e.placa )
                                        :e.placaavg!==""? ((i+1)+". AVG: "+e.placaavg)
                                        :((i+1)+". Motor: "+e.motor);
                       motos.options[i].value=i;

                   });
               }
           }
       );   
};
const buildObservacion=(a=null,b=null)=>{
    $date();
    
    return new Observacion(
            $("#proformaCita").val(),
            buildDetalle(a,b),
            HORASERVER
        ); 
};
const buildDetalle=(a=null,b=null)=>{
    let out = cut(empleadoActual.idempleado)+"  "+buildTextDate(HORASERVER)+" -> ";
    if(!modoUpdate){
        let detalle = $("#motivosCita").val();
        if(detalle === ""){
            out += ("Creación de la cita");
        }else{
            out += detalle;
        }
    }else{
        out += $("#motivosCita").val()+'\n'+compararCita(a,b);
    }
    return out;
};
const buildTextDate=d=>
    buildDate(d.getDate())+"-"+mes(d.getMonth())+
            "-"+d.getFullYear()+" "+buildDate(d.getHours())+":"+buildDate(d.getMinutes());
const buildDate=d=>(d<10)?("0"+d):(d);
let flagEventoBarra=false;
let fechaSeleccionada = "";
const eventoCasilla=e=>{
    if(flagEventoBarra){
        flagEventoBarra=false;
    }else{
       fechaSeleccionada=e.target.getAttribute("date_date");
       $("#opcCitas")[0].click();
       buildDatos(fechaSeleccionada);
    }
};
const buildDatos=date=>{
    let datos = date.split("-");
    $("#_mesCitas")[0].selectedIndex=datos[1]-HORASERVER.getMonth();
    $("#_mesCitas").click();
    while( $("#_diaCitas").val()!=="-1");
    $("#_diaCitas")[0].selectedIndex=(parseInt(datos[2])+1)-(HORASERVER.getMonth()+1==datos[1]?HORASERVER.getDate():1);
    if($("#annoCita").val()!==datos[0])
        $("#annoCita")[0].selectedIndex=1;
};
const eventoBarra=e=>{
    let dia =agenda.hash[e.target.id.split('_')[1]]; 
    let citas = dia.entradas.concat(dia.prometida.concat(dia.espera)).filter(e=>e!==undefined);
    citas = citas.sort(
                (a,b)=> a.proforma > b.proforma
            ).reduce((a,e,i)=>
                (a.length===0 || a[a.length-1].proforma!==e.proforma)?
                    a.concat(e)
                    :a
            ,[]);
    crearTable(citas,4);
    $id("botonresultados").click();
    flagEventoBarra=true;
};
const compararCita=(a,b)=>{
  //let mj = "no se realizó cambio alguno."
  let mj="";
  if(a.garantia !== b.garantia)
      mj+= ("cambio de la ganatía de <<"+a.garantia+">> a <<"+b.garantia+">>\n");
  if(a.tipoDeTrabajo !== b.tipoDeTrabajo)
      mj+= ("cambio del tipo de trabajo de <<"+a.tipoDeTrabajo+">> a <<"+b.tipoDeTrabajo+">>\n");
  if(a.estado !== b.estado)
       mj+= ("cambio del estado de la cita de <<"+estadoTexto(a.estado)+">> a <<"+estadoTexto(b.estado)+">>\n");
  if(a.entrada.getTime() !== b.entrada.getTime()) 
    mj+= ("cambio de la fecha de ingreso de <<"+textDateFormat(a.entrada)+">> a <<"+textDateFormat(b.entrada)+">>\n");
  if(a.prometida.getTime() !== b.prometida.getTime()) 
    mj+= ("cambio de la fecha prometida de <<"+textDateFormat(a.prometida)+">> a <<"+textDateFormat(b.prometida)+">>\n");
  if(     (b.salida.getFullYear()>=b.entrada.getFullYear())
          &&((b.salida!= 'Invalid Date' && a.salida!= 'Invalid Date'&& a.salida.getTime() !== b.salida.getTime())
          ||(b.salida!= 'Invalid Date' && a.salida == 'Invalid Date'))) 
    mj+= ("cambio de la fecha de salida  a <<"+textDateFormat(b.salida)+">>\n");
  if(a.mecanico !== b.mecanico)
      mj+= ("cambio del mecánico de <<"+a.mecanico+">> a <<"+b.mecanico+">>\n");
  return mj===""?"No se realizó cambio alguno":mj;
};
const textDateFormat=d=> moment(d).toISOString().split('.')[0].replace(' ',' ')
const estadoTexto=estado=>
                estado === 0 ? "cita Pendiente":
                estado === 2 ? "Motocicleta en el Taller"    :
                estado === 3 ? "Motocicleta entregada al Cliente" :
                               "Cita Cancelada";


const buscaCitaAccion=()=>{
  validacion();
  let arg = $("#TexArgtCita").val();
  $Proxy.proxy($$("arg1",arg),"buscaCita","CITA",res=>{
        if(!Array.isArray(res)||res.length===0){
              mensaje("No hay resultados",3,1);
        }else{
            $id("botonresultados").click();
            crearTable(res,4);
        };
  });
};