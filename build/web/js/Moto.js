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

class Moto{
    constructor(cliente,modelo,anno,motor,chasis,placa,placaavg){
        this.cliente=cliente;
        this.modelo=modelo;
        this.anno=anno;
        this.motor=motor;
        this.chasis=chasis;
        this.placa=placa;
        this.placaavg=placaavg;
    }
    static from(p){
        return new Moto(p.cliente,p.modelo,p.anno,p.motor,p.chasis,p.placa,p.placaavg); 

    }
    static to(p){
        return{
            _class:"Moto",
            cliente:p.cliente,
            modelo:p.modelo,
            anno:p.anno,
            motor:p.motor,
            chasis:p.chasis,
            placa:p.placa,
            placaavg:p.placaavg
        };
    }
    
};
