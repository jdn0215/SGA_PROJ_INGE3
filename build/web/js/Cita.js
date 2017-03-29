

class Cita{
   constructor(proforma=0,orden=0,cliente="",moto="",recepcionista="",garantia="",tipoDeTrabajo="",
                mecanico="",entrada=null,salida=null,prometida=null,llamada=null,estado=0){
       this.proforma=proforma;
       this.cliente=cliente;
       this.orden=orden;
       this.moto=moto;
       this.recepcionista=recepcionista;
       this.garantia=garantia;
       this.tipoDeTrabajo=tipoDeTrabajo;
       this.mecanico=mecanico;
       this.entrada=entrada;
       this.salida=salida;
       this.prometida=prometida;
       this.llamada=llamada;
       this.estado=estado;
   }
   static from(p){
       return new Cita(p.proforma,p.orden,p.cliente,p.moto,p.recepcionista,p.garantia,p.tipoDeTrabajo,
                p.mecanico,p.entrada,p.salida,p.prometida,p.llamada,p.estado);
   }
   static to(p){
      return{
        _class  :"Cita",
        proforma:p.proforma,
        orden   :p.orden,
        cliente :p.cliente,
        moto    :p.moto,
        recepcionista:p.recepcionista,
        garantia:p.garantia,
        tipoDeTrabajo:p.tipoDeTrabajo,
        mecanico :p.mecanico,
        entrada  :p.entrada,
        salida   :p.salida,
        prometida:p.prometida,
        llamada  :p.llamada,
        estado   :p.estado
      }; 
   }
   
}

