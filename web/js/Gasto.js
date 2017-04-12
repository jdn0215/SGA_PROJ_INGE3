class Gasto{
    constructor(proforma,descripcion,precio,fecha,motormoto){
        this.proforma=proforma;
        this.descripcion=descripcion;
        this.precio=precio;
        this.fecha=fecha;
        this.motormoto=motormoto;        
    }
    static from(g) {
        return new Gasto(g.proforma,g.descripcion,g.precio,g.fecha,g.motormoto);
    }
    static to(g){
        return{
            _class:"Gasto",
            proforma:g.proforma,
            descripcion:g.descripcion,
            precio:g.precio,
            fecha:g.fecha,
            motormoto:g.motormoto
        };
    }
};