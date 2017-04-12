class Estado{
  constructor(kilometraje,aceite,gas,danosPrevios,observaciones,fecha,moto){
    this.kilometraje = kilometraje;
    this.aceite = aceite;
    this.gas=gas;
    this.danosPrevios=danosPrevios;
    this.observaciones=observaciones;
    this.fecha=fecha;
    this.moto=moto;
  }  
  static from(p){
      return new Estado(p.kilometraje,p.aceite,p.gas,p.danosPrevios,p.observaciones,p.fecha,p.moto);
  }
  static to(p){
      return {
        _class:"Estado",
        kilometraje:p.kilometraje,
        aceite:p.aceite,
        gas:p.gas,
        danosPrevios:p.danosPrevios,
        observaciones:p.observaciones,
        fecha:p.fecha,
        moto:p.moto
    };
  }    
};
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


