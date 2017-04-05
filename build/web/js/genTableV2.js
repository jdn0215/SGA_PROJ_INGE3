/* global $id, diaEscogido, diaEscogido, agenda, imgCheck, imgEquis */
var auxtem;
let resultadosClientes;
const attCL=["id","nombre","correo","tel","tel2","ocupacion","nacimiento","zona"];
const HDRCL=["Identificación","Nombre","Correo electrónico","teléfono ","Celular","Ocupación","Fecha de Nacimiento","Residencia"];
const eventoTablaCliente=e=>reconstruir(resultadosClientes[e.target.idx]);

let resultadosMotos;
const attMT=["cliente","modelo","anno","motor","chasis","placa","placaavg"];
const HDRMT=["Cliente","Modelo","Año","Motor","Chasis","Placa","AVG"];
const eventoTablaMoto=e=>reconstruirMoto(resultadosMotos[e.target.idx]);

let resultadoEmpleados;
const attEM=["idempleado","nombre","isJefe","isAsesor","correo","telefono","activo"];
const HDREM=["Indetificación","Nombre","Jefe de Taller","Asesor","Correo electrónico","teléfono","Activo"];
const eventoTablaEmpleado=e=>{
    reconstruirEmpleado(resultadoEmpleados[e.target.idx]);
};

let Arraycitas;
const attCT=["idCliente","moto","empleado","motivos","estado","fecha"];
const HDRCT=["Cliente","Motocicleta","Empleado Asignado","Descripción","Estado de la cita","Hora"];
var CurrentHr=-1;
const eventoTablaCita=e=>reconstruirCita(agenda.citas[agenda.diaEscogido].hash[e.target.idx]);
const eventoCeldaCita=e=>mostrarTexto(e.target.id);


const atributos=type=>{
    switch(type){
        case 1 : return attCL;
        case 2 : return attMT;
        case 3 : return attEM;
        case 4 : return attCT;
        default: return null;
    }
};
const labels=type=>{
    switch(type){
        case 1 : return HDRCL;
        case 2 : return HDRMT;
        case 3 : return HDREM;
        case 4 : return HDRCT;
        default: return null;
    }
};


const crearTable=(arr,type)=>{
    CurrentHr=-1;
    if($id("tituloBusqueda").firstChild!==null)
          $id("tituloBusqueda").removeChild($id("tituloBusqueda").firstChild);
    $id("tituloBusqueda").appendChild(document.createTextNode((type=== 4?agenda.diaEscogido+" - ":"")+arr.length+" Resultado"+(arr.length===1?"":"s")));
    let _div=$id("resultados");
    if(_div.firstChild!==null)
        _div.removeChild(_div.firstChild);
    let tabla=document.createElement("table");
    tabla.setAttribute("class","datagrid");
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
                type===4?createAgendaSpan(body,e):0;
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

const createCell=(value,evnt=null,tgr="",idx=0,hdr=true,cN="")=>{
    let cell=document.createElement(hdr?"th":"td");
    if(value===imgCheck||value===imgEquis){
        cell.setAttribute("width","10%");
    }
    if(typeof value==="object"){
        cell.appendChild(value);
    }
    else cell.innerHTML=value;
    if(evnt!==null){
        cell.idx=idx;
        cell.addEventListener(tgr,evnt);
    }
    cell.className=cN;
    return cell;
};

const Cell=(dato,obj,type,idx)=>{
  switch(type){
      case 1: return cellCliente(dato,obj,idx);
      case 2: return cellMoto(dato,obj,idx);
      case 3: return cellEmpleado(dato,obj,idx);
      case 4: return cellCitas(dato,obj,idx);
      default:return createCell(dato);
  }//end switch1 
  return null;
};

const cellCliente=(dato,obj,idx)=>{
    switch(dato){
        case "nacimiento":
            return createCell(obj.nacimiento.getDate()+"-"+mes(obj.nacimiento.getMonth())+"-"+obj.nacimiento.getFullYear(),
                       eventoTablaCliente,"click",idx,false);
        case "zona": 
            return createCell(obj.zona.zona,eventoTablaCliente,"click",idx,false);  
        default: return createCell(obj[dato],eventoTablaCliente,"click",idx,false);             
    }
};
const cellMoto=(dato,obj,idx)=>{
    switch(dato){
        case "placa":
            return createCell(obj[dato]===""?"-":obj[dato],eventoTablaMoto,"click",idx,false);
        case "placaavg":
            return createCell(obj[dato]===""?"-":obj[dato],eventoTablaMoto,"click",idx,false);;
        default:return createCell(obj[dato],eventoTablaMoto,"click",idx,false);
    }
};
const cellEmpleado=(dato,obj,idx)=>{
      switch(dato){
        case "isJefe":
            return createCell(obj[dato]?imgCheck:imgEquis,eventoTablaEmpleado,"click",idx,false);
        case "isAsesor":
            return createCell(obj[dato]?imgCheck:imgEquis,eventoTablaEmpleado,"click",idx,false);
        case "activo":
            return createCell(obj[dato]?imgCheck:imgEquis,eventoTablaEmpleado,"click",idx,false);
        default: return createCell(obj[dato],eventoTablaEmpleado,"click",idx,false);;
    }
};
const cellCitas=(dato,obj,idx)=>{
    switch(dato){
        case "estado":
            let e=obj[dato];
            let text=(e===1?"Pendiente":e===2?"Cancelada":"Efectuada");
            let estado="celda"+text;
            return createCell(createTdSpan(text,estado),eventoTablaCita,"click",idx,false,estado);
        case "fecha":
            return createCell(toText(obj[dato]),eventoTablaCita,"click",idx,false);
        case "motivos":
            return createCell(textEllipsis(obj[dato],idx),eventoCeldaCita,"mouseover",idx,false);
        default: return createCell(obj[dato],eventoTablaCita,"click",idx,false);
    }
};



const toText=(fecha)=>{
  let h=fecha.getHours(),m=fecha.getMinutes();
  return (h>12?h-12:h)+":"+((m<10?"0":"")+m)+" "+(h>=12?"pm":"am");
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
