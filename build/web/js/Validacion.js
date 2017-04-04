/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global $id */

const colorERROR="border: 1px solid #FF0000;";
const colorOK="border: 1px solid #ccc;";
class Validacion{
    Constructor(input,errorMj,lambda,otro="",otro2=""){
        this.input = input;
        this.lambda=lambda;
        this.errorMj=errorMj;
        this.otro= otro;
        this.otro2=otro2;
    }
    result(){
        return this.lambda() ? this.applyOk() : this.applyError();
    }
    applyError(){
        let inp =  $("#"+this.input)[0];
        inp.style=colorERROR;
        if(this.otro !=="") $id(this.otro).style=colorERROR;
        if(this.otro2!=="") $id(this.otro2).style=colorERROR;
        inp.setAttribute("title","ERROR!");
        inp.setAttribute("data-content",this.errorMj);
        $("#"+this.input).popover("show","swing",()=>
             $("#"+this.input).hide(3000)
        );
        return false;
    }
    applyOk(){
        $("#"+this.input)[0].style=colorOK;
        if(this.otro !=="") $id(this.otro).style=colorOK;
        if(this.otro2!=="") $id(this.otro2).style=colorOK;
        return true;
    }
}

class Validator{
    constructor(){
        this.result=true;
        this.message="";
    }
    validate(campo,error,estado,otro="",otro2=""){
        if(estado===false){
            this.result=false;
            let inp=$id(campo);
            inp.style=colorERROR;
            this.message= this.message+error;
            inp.setAttribute("title","ERROR!");
            inp.setAttribute("data-content",error);
            $("#"+campo).popover("show");
            setInterval(()=>$("#"+campo).popover("destroy"),5000);
            if(otro!=="") $id(otro).style=colorERROR;
            if(otro2!=="") $id(otro2).style=colorERROR;  
           
        }else{
            $id(campo).style="border: 1px solid #ccc;";
            if(otro!=="") $id(otro).style=colorOK;
            if(otro2!=="") $id(otro2).style=colorOK; 
        }
       
        return this;
    };
    validateArray(arr=[]){
        this.result  = arr.reduce(e=>{
            if(e instanceof Validacion){
                let res = e.result();
                return this.result && res; 
            }
        });
        return this;
    }
};