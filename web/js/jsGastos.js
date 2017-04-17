/* global $id, Proxy, $Proxy */

const agregarGasto=_=>{
    let mecanico=$id("input_mecanicoG").value;
    let detalle=$id("input_detalleG").value;
    let precio=$id("input_precioG").value;
    let fecha=$id("input_fechaG").value;
    let proforma=$id("pfm").value;
    let idvacio=0;//para insertar no importar pero es necesario para agregarlo.
    let gasto=new Gasto(idvacio,proforma,detalle,precio,fecha,mecanico);
    $Proxy.proxy($$("GASTO",gasto),"agregarGasto","GASTO",gasto,re=>{
        //aqui quedé lo siento de verdad, estoy hecho mierda
    })
    
};