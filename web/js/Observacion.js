/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


class Observacion{
  constructor(proforma,detalle,fecha){
      this.proforma=proforma;
      this.detalle=detalle;
      this.fecha=fecha;
  }  
  static from(p){
      return new Observacion(p.proforma,p.detalle,new Date(fecha));
  }
  static to(p){
      return{
        _class:"Observacion",
        proforma:p.proforma,
        detalle:p.detalle,
        fecha:p.fecha
      };
  }
};