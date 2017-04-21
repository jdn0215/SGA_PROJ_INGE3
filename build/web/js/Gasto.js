class Gasto{
    constructor(proforma,descripcion,precio,fecha,idmecanico){
        this.proforma=proforma;
        this.descripcion=descripcion;
        this.precio=precio;
        this.fecha=fecha;
        this.idmecanico=idmecanico;        
    }
    static from(g) {
        return new Gasto(g.proforma,g.descripcion,g.precio,g.fecha,g.idmecanico);
    }
    static to(g){
        return{
            _class:"Gasto",
            proforma:g.proforma,
            descripcion:g.descripcion,
            precio:g.precio,
            fecha:g.fecha,
            idmecanico:g.idmecanico
        };
    }
    
    //tararara hey tararar hey
};