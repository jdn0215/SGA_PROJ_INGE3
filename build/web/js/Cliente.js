class Cliente{
    constructor(id,tipoId,nombre,edad,correo,tel,tel2,ocupacion,nacimiento,p,c,d,h='-'){
        this.id=id;
        this.tipoId=tipoId;
        this.nombre=nombre;
        this.edad=edad;
        this.correo=correo;
        this.tel=tel;
        this.tel2=tel2;
        this.ocupacion=ocupacion;
        this.nacimiento=nacimiento;
        this.zona=new Zona(p,c,d,h);
    }
    static from(p){
        let _date=new Date(p.nacimiento);
        return new Cliente(p.id,p.tipoId,p.nombre,p.edad,p.correo,p.tel,p.tel2,p.ocupacion,_date,p.zona.provincia,p.zona.canton,p.zona.distrito,p.zona.zona);
    }
    static to(p){
        return{
        _class:"Cliente",
        id:p.id,
        tipoId:p.tipoId,
        nombre:p.nombre,
        edad:p.edad,
        correo:p.correo,
        tel:p.tel,
        tel2:p.tel2,
        ocupacion:p.ocupacion,
        nacimiento:p.nacimiento,
        zona:p.zona
    }; 
        
    }
    
}
