/* global $id, noVisible */
const Aclientes=["_successC","_infoC","_warningC","_dangerC"];
const Amotos=["_successM","_infoM","_warningM","_dangerM"];
const Ausuarios=["_successU","_infoU","_warningU","_dangerU"];
const ABusca=["_successB","_infoB","_warningB","_dangerB"];
const AIndex=["_successIndex","_infoIndex","_warningIndex","_dangerIndex"];
const ACitas=["_successCitas","_infoCitas","_warningCitas","_dangerCitas"];
const ACambio=["_successCambio","_infoCambio","_warningCambio","_dangerCambio"];
const states=["alert alert-success","alert alert-info","alert alert-warning","alert alert-danger"];
const alerts=[Aclientes,Amotos,Ausuarios,ABusca,AIndex,ACitas,ACambio];

const clearMensaje=_=>{
    alerts.forEach(e=>{ 
                    try{e.forEach(ee=>$id(ee).className=noVisible);}
                    catch(e){}
                }
            );
};

/*args* where=>0 clientes, 1 motos, 2 usuarios, 3 busquedas, 4 Index,5 Citas,6 cambio de contraseña
 *      tipo=> 0 normal, 1 info, 2 advertencia,3  muy advertido 
 *
 **/
const mensaje=(mj,where,tipo=0)=>{
    alerts[where].forEach(
            (e,i)=> i===tipo?
                    ($id(e).className=states[i],$id(e).innerHTML=mj)
                     :$id(e).className=noVisible
     );
     window.scroll(0,0);
};

