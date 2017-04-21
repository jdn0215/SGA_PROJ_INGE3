/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


class Zona{
    constructor(provincia,canton,distrito,zona="-"){
       this.provincia=provincia;
       this.canton=canton;
       this.distrito=distrito;
       this.zona=zona;
    }
    toString(){
        let out="";
        out+=this.provincia;
        if(this.canton<10)
            out+="0";
        out+=this.canton;
        if(this.distrito<10)
            out+="0";
        out+=this.distrito;
        return out;
    }
    static from(p){
         return new Zona(p.provincia,p.canton,p.distrito,p.zona);
    }
    static to(p){
        return{
            _class:"Zona",
            provincia:p.provincia,
            canton:p.canton,
            distrito:p.distrito,
            zona:p.zona
 
        };
    }
    static toZona(H){
        return new Zona(H.provincia,H.canton,H.distrito,H.zona);
    }
};

