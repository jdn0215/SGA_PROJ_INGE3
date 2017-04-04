/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global $id, $Proxy, agenda, HORASERVER, VALIDACIONES_CITAS */
let validadorCita;
var CLIENTEBUSCADO=null;
var motosDelClienteBuscado=[];
var citaActual;
var modoUpdate=false;
let dateEntrada;
let datePrometida;
let hrsOk=false;
const addCita=()=>{
    let nuevaCita=construirCita();
    if(nuevaCita===false)return;
    $Proxy.proxy(
            $$("CITA",nuevaCita),/*parametros*/
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

const construirCita=()=>{
    validadorCita=new Validator();
    validadorCita.message="Por favor verifique:<br/>";
    if(!validarCita()){
        mensaje(validadorCita.message,5,3);
        return false;
    }
    return false;//hasta arreglar todo
    return new Cita(
            0,/*la bd luego le asignará un consecutivo*/
            modoUpdate?cut($("#clienteCita").val()):cut(CLIENTEBUSCADO.id),/*id del cliente*/
            modoUpdate?cut($("#motocito").text().split(": ")[1]):motosDelClienteBuscado[$id("motocito").selectedIndex].motor,/*motor de la moto*/
            $id("EmpleadoCita").value.split(" -- ")[1],/**/
            $("#motivosCita").val(),
            $id("citaPendiente").checked?1:$id("citaCancelada").checked?2:3,
            armarFecha()
    );
};
const armarFecha=(anho="annoCita",_mes="_mesCitas",_dia="_diaCitas",_min="minCita")=>{
    let anno=$("#"+anho).val();
    let mes=$id(_mes).selectedIndex-1;
    let dia=$id(_dia).selectedIndex;
    let T=$id(_min).value.split(":");
    let hora=T[0];
    let min=T[1];
    if(anno==="" || mes=== -1 || dia===-0 || T.length!==2)
        return false;
    return new Date(anno,mes,dia,hora,min);
};

const verificarDisponibilidad=()=>{
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
    cargarEmpleadosLibres(horaEntrada,horaPrometida);
    
};
const cargarEmpleadosLibres=(date1,date2)=>{
    if(!hrsOk)return;
    let ctemp=new Cita();
    ctemp.entrada=date1;
    ctemp.prometida=date2;
    $Proxy.proxy($$("arg0",ctemp),"getEmpleadosLibres","Empleados",res=>{
        if(Array.isArray(res)){
            cargarEmpleados(res,true);
        }
    });
};
const cargarEmpleados=(arr=[],busqueda=false)=>{
    let combo=$("#EmpleadoCita")[0];
    combo.length=1;
    combo.options[0].text="Seleccione una hora de entrada y una hora prometida";
    if(busqueda && arr.length===0){
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
    modoUpdate=true;
    let nuevaCita=construirCita();
    if(nuevaCita===false)return;
    nuevaCita.id=citaActual.id;
    $Proxy.proxy(
            $$("CITA",nuevaCita),/*parametros*/
            "updateCita",/*accion*/
            "Cita",/*tipo de dato que se va manejar*/
             res=>{
                 if(res===1){
                     clearCitas();
                     mensaje("Cita Actualizada con éxito",5,1);
                 }else mensaje("Ocurrio algun error, intente de nuevo",5,4);
             }       
            );
    modoUpdate=false;
};

const clickDia=(casilla)=>{
    let arr=agenda.citas[casilla.getAttribute("date_date")].hash.filter(e=>e);
    arr.sort((a,b)=>a.fecha.getTime()>b.fecha.getTime());
    Arraycitas=arr;
    crearTable(Array.isArray(arr)?arr:[],4);
     $id("botonresultados").click();
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
   
    
};
const clearCitas=()=>{
    
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
const cargarMotos=()=>{
    let FF=()=>{
        motos=$id("motocito");
        motos.clear;  
        motos.length=1;
        motos.options[0].text="Ingrese la identificación del cliente";
    };
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