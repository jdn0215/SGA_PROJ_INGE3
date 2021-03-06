/* global $id, diaEscogido, diaEscogido, agenda, imgCheck, imgEquis, eventoCeldaCita, usuarioActual */
var auxtem;
let resultadosClientes;
let usuario=retrieve("usuarioactual");
const attCL=["id","nombre",/*"edad",*/"correo","tel","tel2","ocupacion",/*"nacimiento",*/"zona","btn-update","bt-H","bt-M"];
const HDRCL=["Identificación","Nombre",/*"Edad",*/"Correo electrónico","teléfono ","Celular","Ocupación",/*"Fecha de Nacimiento",*/"Residencia","Modificar registro","Historial de Citas","Motocicletas"];
const eventoTablaCliente=e=>reconstruir(resultadosClientes[e.target.idx]);
const eventoHCliente=e=>getHistorialC(resultadosClientes[e.target.idx]);
const eventoMotosCliente=e=>getAllMotos(resultadosClientes[e.target.idx]);


let resultadosMotos;
const attMT=["cliente","modelo","anno","motor","chasis","placa","placaavg","btn-update","bt-add","bt-ver","bt-HC"];
const HDRMT=["Cliente","Modelo","Año","Motor","Chasis","Placa","AVG","Modificar registro","Añadir Registro","Historial de Registros","Historial de Citas"];
const eventoTablaMoto=e=>reconstruirMoto(resultadosMotos[e.target.idx]);
const eventoTablaMotoAddEstado=e=>addEstadoMoto(resultadosMotos[e.target.idx]);
const eventoTablaMotoVerEstado=e=>getAllEstados(resultadosMotos[e.target.idx]);
const eventoTablaMotoHistorial=e=>buscaCitaByMotor(resultadosMotos[e.target.idx]);

let resultadoEmpleados;
const attEM=["idempleado","nombre","isJefe","isAsesor","correo","telefono","activo","btn-update"];
const HDREM=["Indetificación","Nombre","Jefe de Taller","Asesor","Correo electrónico","teléfono","Activo",usuario.isAdmin?"Modificar Registro":"Ver Registro"];
const eventoTablaEmpleado=e=>{
    reconstruirEmpleado(resultadoEmpleados[e.target.idx]);
};

let Arraycitas;
const attCT=["proforma","orden","cliente","moto"       ,"modelo","tipoDeTrabajo" ,"mecanico","entrada"           ,"prometida"           ,"salida"      ,"estado","btn-ver" ,    "btn-update"];
const HDRCT=["Orden","Proforma","Cliente","Motocicleta","Modelo","Tipo de Trabajo","Mecánico","Entrada al taller","Fecha prometida"     ,"Salida del Taller","Estado de la cita","Observaciones" ,usuario.isAdmin?"Modificar Registro":"Ver Registro"];
const eventoTablaCita=e=>buscaCita(e.target.idx);
const eventoObservacionVer=e=>observacionesPopOver(e);


const attET=["moto","kilometraje","aceite","gas","danosPrevios","observaciones","fecha"];
const HDRET=["Motor","Kilometraje","Nivel de aceite","Nivel de gasolina","Daños Previos","Observaciones adicionales","Fecha del registro"];


const attU=["id","empleado","pwsd","isAdmin"];
const HDRU=["Usuario","Indetificación","Nombre","Administrador de la página"];
const eventoUsuario=e=>cambioDeAdmins(e);


const atributos=type=>{
    switch(type){
        case 1 : return attCL;
        case 2 : return attMT;
        case 3 : return attEM;
        case 4 : return attCT;
        case 5 : return attET;
        case 6 : return attU;
        default: return null;
    }
};
const labels=type=>{
    switch(type){
        case 1 : return HDRCL;
        case 2 : return HDRMT;
        case 3 : return HDREM;
        case 4 : return HDRCT;
        case 5 : return HDRET;
        case 6 : return HDRU;
        default: return null;
    }
};


const crearTable=(arr,type)=>{
    $("#Search").hide();
    CurrentHr=-1;
    if($id("tituloBusqueda").firstChild!==null)
          $id("tituloBusqueda").removeChild($id("tituloBusqueda").firstChild);
    $id("tituloBusqueda").appendChild(document.createTextNode((type=== 4?agenda.diaEscogido+" ":"")+arr.length+" Resultado"+(arr.length===1?"":"s")));
    let _div=$id("resultados");
    if(_div.firstChild!==null)
        _div.removeChild(_div.firstChild);
    let tabla=document.createElement("table");
    tabla.setAttribute("class","datagrid scroll_table");
    tabla.appendChild(createHeader(labels(type)));
    tabla.appendChild(createBody(arr,atributos(type),type));
    _div.appendChild(tabla);
};
const createHeader=(hdr)=>{
    let head=document.createElement("thead");
    head.appendChild(createRow(null,hdr,0,0));
    return head;
};
const createBody=(arr,ats,type)=>{
  let body=document.createElement("tbody");
  arr.forEach(
            (e,i)=>{
               // type===4?createAgendaSpan(body,e):0;
                body.appendChild(createRow(e,ats,i,type));
            }
        );
  return body;
};
const createTdSpan=(_text,_class)=>{
    let text=document.createElement("div");
    text.className=_class;
    text.innerHTML=_text;
    return text;
};
const createAgendaSpan=(body,e)=>{
    
    if(CurrentHr===-1 || CurrentHr!==e.fecha.getHours()){
        CurrentHr=e.fecha.getHours();
       let Div=document.createElement("tr");
       let Span=document.createElement("td");
       let text=document.createElement("div");
       text.className="spanAgenda";
       Span.setAttribute("COLSPAN",attCT.length);
       text.innerHTML=textAgendaSpan(CurrentHr,CurrentHr+1);
       Span.appendChild(text);
       Div.appendChild(Span);
       body.appendChild(Div);    
    }
};
const textAgendaSpan=(hr,hr2)=>{
    return ((hr>12?hr-12:hr)+(hr<12===0?"am":"pm")+" - "+(hr2>12?hr2-12:hr2)+(hr2<12===0?"am":"pm"));
};
const createRow=(obj,ats,idx,type)=>{
    let row=document.createElement("tr");
    idx = type === 4 ? obj.id : idx;
    row.idx=idx;
    ats.forEach(atributo=>row.appendChild(Cell(atributo,obj,type,idx)));
    return row;
};

const createCell=(value,evnt=null,tgr="",idx=0,hdr=true,cN="",btn=false)=>{
    value = value===""?"-":value;
    let cell=document.createElement(hdr?"th":"td");
    if(value===imgCheck||value===imgEquis){
        cell.setAttribute("width","10%");
    }
    if(!btn){
        if(typeof value==="object" ){
            cell.appendChild(value);
        }
        else cell.innerHTML=value;
        if(evnt!==null){
            cell.idx=idx;
            cell.addEventListener(tgr,evnt);
        }
    }
    cell.className=cN;
    if(btn)
        cell.appendChild(updateBtn(evnt,idx,value));
    return cell;
};

const Cell=(dato,obj,type,idx)=>{
  switch(type){
      case 1: return cellCliente(dato,obj,idx);
      case 2: return cellMoto(dato,obj,idx);
      case 3: return cellEmpleado(dato,obj,idx);
      case 4: return cellCitas(dato,obj,obj.proforma);
      case 5: return cellEstado(dato,obj,idx);
      case 6: return cellUsuario(dato,obj,idx);
      default:return createCell(dato);
  }//end switch1 
  return null;
};

const cellUsuario=(dato,obj,idx)=>{
    switch(dato){
        case "isAdmin":
            return cellCheck(obj[dato],eventoUsuario,idx);
        default:return createCell(obj[dato],null,"click",idx,false);
    }
};


const cellCheck=(dato,eventom,idx)=>{
    let cell=document.createElement("td");
    let check = document.createElement("input");
    check.setAttribute("type","checkbox");
    check.setAttribute("data-toggle","modal");
    check.setAttribute("data-target","#myModal")
    check.id = idx;
    check.checked=dato;
    $(check).click(e=>eventom(e));
    cell.appendChild(check);
    return cell;
};


//const createCell=(value,evnt=null,tgr="",idx=0,hdr=true,cN="",btn=false)=>{
const cellCliente=(dato,obj,idx)=>{
    switch(dato){
        case "nacimiento":
            return createCell(DateMonthYear(obj.nacimiento),
                       null,"click",idx,false);
        case "zona": 
            return createCell(obj.zona.zona,null,"click",idx,false);
        case "btn-update":
            return createCell(edit,eventoTablaCliente,"click",idx,false,"",true);
        case "bt-H":
            return createCell(ver,eventoHCliente,"click",idx,false,"",true);
        case "bt-M":
            return createCell(ver,eventoMotosCliente,"click",idx,false,"",true);
        default: return createCell(obj[dato],null,"click",idx,false);             
    }
};
const cellMoto=(dato,obj,idx)=>{
    switch(dato){
        case "placa":
            return createCell(obj[dato]===""?"-":obj[dato],null,"click",idx,false);
        case "placaavg":
            return createCell(obj[dato]===""?"-":obj[dato],null,"click",idx,false);
        case "btn-update":
            return createCell(edit,eventoTablaMoto,"click",idx,false,"",true);
        case "bt-add":
            return createCell(add,eventoTablaMotoAddEstado,"click",idx,false,"",true);
        case "bt-ver":
            return createCell(ver,eventoTablaMotoVerEstado,"click",idx,false,"",true);
        case "bt-HC":
            return createCell(ver,eventoTablaMotoHistorial,"click",idx,false,"",true);
        default:return createCell(obj[dato],null,"click",idx,false);
    }
};
const cellEmpleado=(dato,obj,idx)=>{
      switch(dato){
        case "isJefe":
            return createCell(obj[dato]?imgCheck:imgEquis,null,"click",idx,false);
        case "isAsesor":
            return createCell(obj[dato]?imgCheck:imgEquis,null,"click",idx,false);
        case "activo":
            return createCell(obj[dato]?imgCheck:imgEquis,null,"click",idx,false);
        case "btn-update":
            return createCell(usuarioActual.isAdmin?edit:ver,eventoTablaEmpleado,"click",idx,false,"",true);
        default: return createCell(obj[dato],null,"click",idx,false);;
    }
};
const cellCitas=(dato,obj,idx)=>{
    switch(dato){
        case "estado":
            let e=obj[dato];
            let text=(e===0?("No ha entrado al taller"):e===2?("En taller"):e===3?("Entregada al cliente"):"Anulada");
            let estado="celda"+text;
            return createCell(createTdSpan(text,estado),null,"click",idx,false,estado);
        case "entrada":
        case "salida":
        case "prometida":    
            return createCell(toText(obj[dato]),null,"click",idx,false);
        case "orden":
            return createCell(obj[dato]===0?"-":obj[dato],null,"click",idx,false);
         case "btn-update":
            return createCell(usuarioActual.isAdmin?edit:ver,eventoTablaCita,"click",idx,false,"",true);
          case "btn-ver":
            return createCell(ver,eventoObservacionVer,"click",idx,false,"",true);
        default: return createCell(obj[dato],null,"click",idx,false);
    }
};
const cellEstado=(dato,obj,idx)=>{
    switch(dato){
        case "kilometraje":return createCell(obj[dato]+" Km",null,"click",idx,false);
        case "aceite": return createCell(nvlAceite(obj[dato]),null,"click",idx,false);  
        case "gas": return createCell(nvlGas(obj[dato]),null,"click",idx,false);
        case "fecha": return createCell(DateMonthYear(obj[dato]),null,"click",idx,false);
        default: return createCell(obj[dato],null,"click",idx,false);
    }
};
const DateMonthYear=d=>
    d.getDate()+"-"+mes(d.getMonth())+"-"+d.getFullYear();

const toText=(fecha)=>{
   if(fecha == 'Invalid Date' || fecha===undefined)
       return "-";
  let h=fecha.getHours(),m=fecha.getMinutes();
  return DateMonthYear(fecha)+" "+(h>12?h-12:h)+":"+((m<10?"0":"")+m)+" "+(h>=12?"pm":"am");
};
const textEllipsis=(T,idx)=>{
    
    let text=document.createElement("div");
    text.setAttribute("id","texto"+idx);
    text.hideText=T;
    let t=T.length<25?T:(T.substr(0,24)+"...");
    text.innerHTML=t;
    text.setAttribute("title","Motivo de la cita");
    text.setAttribute("data-toggle",text.id);
    text.setAttribute("data-content",T);
    text.setAttribute("data-trigger","click");
    text.oculto="true";
    if(T!==t){
        text.addEventListener("mouseover",(e)=>{
         $("#"+e.target.id).popover("show");
        });
         text.addEventListener("mouseout",(e)=>{
         $("#"+e.target.id).popover("destroy");
        });
    }
    return text;
};

const updateBtn=(f,index,txt)=>{
   let bt = document.createElement("button");
   bt.className="btn";
   $(bt).addClass( txt===ver?"btn-info":txt===edit?"btn-warning":"btn-success");
   bt.id=index;
   bt.idx = index;
   bt.innerHTML=txt;
   $(bt).click(e=>f(e));
   return bt;
};


const nvlAceite=i=>{
  switch(i){
      case 1:return "Bajo";
      case 2:return "Medio";
      default:return "Alto";
  }  
};
const nvlGas=i=>{
  switch(i){
      case 1:return "Empty";
      case 2:return "1/4";
      case 3:return "1/2";
      case 4:return "3/4";
      default:return "Full";
  }  
};

const edit = "Editar";
const add = "Añadir";
const ver ="Ver";