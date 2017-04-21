/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class Empleado{
    constructor(idempleado,nombre,isJefe,isAsesor,correo,telefono,activo,tipoId){
        this.idempleado=idempleado;
        this.nombre=nombre;
        this.isJefe=isJefe;
        this.isAsesor=isAsesor;
        this.correo=correo;
        this.telefono=telefono;
        this.activo=activo;
        this.tipoId=tipoId;
    }
    static from(e){
        return new Empleado(e.idempleado,e.nombre,e.isJefe,e.isAsesor,e.correo,e.telefono,e.activo,e.tipoId);        
    }
    
    static to(e){
        return{_class:"Empleado",
            idempleado:e.idempleado,
            nombre:e.nombre,
            isJefe:e.isJefe,
            isAsesor:e.isAsesor,
            correo:e.correo,
            telefono:e.telefono,
            activo:e.activo,
            tipoId:e.tipoId
        };
    }
    
}

