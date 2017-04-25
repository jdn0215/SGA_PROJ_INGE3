

class Cita{
   constructor(proforma=0,orden=0,cliente="",moto="",recepcionista="",modelo="",tipoDeTrabajo="",
                mecanico="",entrada=null,salida=null,prometida=null,estado=0){
       this.proforma=proforma;
       this.cliente=cliente;
        if(orden==="")
           this.orden=0;
       else this.orden=proforma;
       this.moto=moto;
       this.recepcionista=recepcionista;
       this.modelo=modelo;
       this.tipoDeTrabajo=tipoDeTrabajo;
       this.mecanico=mecanico;
       this.entrada=entrada;
       if(salida!==0)
        this.salida=salida;
       else this.salida = new Date(entrada.getFullYear()-1,entrada.getMonth(),entrada.getDate());
       this.prometida=prometida;
       this.estado=estado;
   }
   static from(p){
       return new Cita(p.proforma,p.orden,p.cliente,p.moto,p.recepcionista,p.modelo,p.tipoDeTrabajo,
                p.mecanico,new Date(p.entrada),new Date(p.salida),new Date(p.prometida),p.estado);
   }
   static to(p){
      return{
        _class  :"Cita",
        proforma:p.proforma,
        orden   :p.orden,
        cliente :p.cliente,
        moto    :p.moto,
        recepcionista:p.recepcionista,
        modelo:p.modelo,
        tipoDeTrabajo:p.tipoDeTrabajo,
        mecanico :p.mecanico,
        entrada  :p.entrada,
        salida   :p.salida,
        prometida:p.prometida,
        estado   :p.estado
      }; 
   }
   
}

