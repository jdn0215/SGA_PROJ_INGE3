/* global Cliente, Zona, Usuario, Moto, Estado, Empleado, Cita, Observacion */





const store=(id, obj)=>{
    sessionStorage.setItem(id, JSON.stringify(obj,replacer));
};
const retrieveFromUrl=(url,callBack)=>{
    let AJAX_req = new XMLHttpRequest();
    AJAX_req.open( "GET", url, true );
    AJAX_req.setRequestHeader("Content-type", "application/json");
 
    AJAX_req.onreadystatechange = function(){
        if( AJAX_req.readyState === 4 && AJAX_req.status === 200 ){
            jsonText=AJAX_req.responseText;
            var object = JSON.parse( jsonText,revive );
            callBack(object);
        }
    };
    AJAX_req.send();
};

const retrieve=id=>{
  let json= sessionStorage.getItem(id);
  if(json === null) return null;
  else return JSON.parse(json,revive);
};

const revive=(k,v)=>{
	if (v instanceof Object && v._class === 'Cliente')  return Cliente.from(v);
	if (v instanceof Object && v._class === 'Zona') return Zona.from(v);
        if (v instanceof Object && v._class ==='Usuario') return Usuario.from(v);
        if (v instanceof Object && v._class ==='Moto') return Moto.from(v);
        if (v instanceof Object && v._class ==='Estado') return Estado.from(v);
        if (v instanceof Object && v._class ==='Empleado') return Empleado.from(v);
        if (v instanceof Object && v._class ==='Cita') return Cita.from(v);
        if (v instanceof Object && v._class ==='Observacion') return Observacion.from(v);
        return v;
        //metiendo al administrador
};

const replacer=(k,v)=>{
	if (v instanceof Cliente)return Cliente.to(v);
        if (v instanceof Zona) return Zona.to(v);
        if (v instanceof Usuario) return Usuario.to(v);
        if (v instanceof Moto) return Moto.to(v);
        if (v instanceof Estado) return Estado.to(v);
        if (v instanceof Empleado) return Empleado.to(v);
        if (v instanceof Cita) return Cita.to(v);
        if (v instanceof Observacion) return Observacion.to(v);
	return v;
};

