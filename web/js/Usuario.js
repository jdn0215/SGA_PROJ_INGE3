/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class Usuario{
    constructor(id,pwsd,isAdmin,empleado){
        this.id=id;
        this.pwsd=pwsd;
        this.isAdmin=isAdmin;
        this.empleado=empleado;
    }
    static from(u){
        return new Usuario(u.id,u.pwsd,u.isAdmin,u.empleado);
    }
    static to(u){
        return{
            _class:"Usuario",
            id:u.id,
            pwsd:u.pwsd,
            isAdmin:u.isAdmin,
            empleado:u.empleado
        };    
    }
    
}
