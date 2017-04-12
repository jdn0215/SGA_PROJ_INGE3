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
