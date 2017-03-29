/* global Proxy, $id, $Proxy */

/*comentario version actualizada de la página
 * con arreglos visuales y de ortografias
 * daniel*/

const ZONA="ZONA";

const llenarProvincias=_=>{
    let C=$id("comboProv");
    $Proxy.proxy([],"getProv",ZONA,res=>{
            if(res!==null&&res!==undefined){
                res.forEach((e,i)=>agregar(C,e,i));
            }
    });
};
const agregar=(combo,dato,idx)=>{
    let opcion=document.createElement("option");
    opcion.setAttribute("value",idx+1);
    opcion.text=dato;
    combo.appendChild(opcion);
};
const getCantones_=(ce=-1,de=-1)=>{
    let C=$id("comboProv");
    let provincia=C.selectedIndex;
    C=$id("comboCant");
     while(C.childNodes.length!==1)
        C.removeChild(C.lastChild);
    $Proxy.proxy([{arg:"PROV",value:provincia}],"getCant",ZONA,res=>{
            if(res!==null&&res!==undefined){
                res.forEach((e,i)=>agregar(C,e,i));
                 if(ce!==-1){
                     $id("comboCant").selectedIndex=ce;
                     getDistr_(de);
                 }
            }
    });
};
const getDistr_=(de=-1)=>{
    let p=$id("comboProv").selectedIndex;
    let c=$id("comboCant").selectedIndex;
    let C=$id("comboDist");
    while(C.childNodes.length!==1)
        C.removeChild(C.lastChild);
    $Proxy.proxy([{arg:"PROV",value:p},{arg:"CANT",value:c}],"getDistr",ZONA,res=>{
            if(res!==null&&res!==undefined){
                res.forEach((e,i)=>agregar(C,e,i));
                if(de!==-1){
                     $id("comboDist").selectedIndex=de;
                 }
            }
    });
};
const dispararCantones=(_)=>{
   $id("comboProv").selectedIndex===0?0:getCantones_();
};
const dispararDistr=(_)=>{
    $id("comboCant").selectedIndex===0?0:getDistr_();
};


    