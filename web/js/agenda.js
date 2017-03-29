/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* global HORASERVER, meses, $Proxy, $id */

class Agenda{
  constructor(tabla){
      this.tabla=$id(tabla);
      $date();
      this.date=new Date(HORASERVER);
      this.date.setDate(1);
      this.cambiarDeTabla(new Date(this.date));
      this.citas=[];
      this.diaEscogido="";
  }
  reload(){
      this.date.setDate(1);
      this.date.setMonth(this.date.getMonth());
      this.cambiarDeTabla(new Date(this.date));
  }
  moverIzq(){
      this.date.setDate(1);
      this.date.setMonth(this.date.getMonth()-1);
      this.cambiarDeTabla(new Date(this.date));
  }
  moverDer(){
      this.date.setDate(1);
      this.date.setMonth(this.date.getMonth()+1);
      this.cambiarDeTabla(new Date(this.date));
  }
  cambiarDeTabla(fecha){
      this.diaEscogido="";
      addTitle("mesActualAgenda"," "+fillString(meses[fecha.getMonth()],9,' ')+" "+fecha.getFullYear()+"  ");
      let body=this.tabla.children[1];
      this.resetBody(body,fecha);
      this.getDates();
  }
  resetBody(body,fecha){
      while(body.firstChild)
          body.removeChild(body.firstChild);
      for(let i=0;i<6;i++)
          body.appendChild(this.createRow(i,fecha));
  }
  createRow(idx,fecha){
      let row=document.createElement("tr");
      if(idx===0&&fecha.getDay()!==0)
          this.createFill(row,new Date(fecha),true);
      do{
          row.appendChild(this.createDay(fecha,fecha.getMonth()!==this.date.getMonth()));
          fecha.setDate(fecha.getDate()+1);
      }while(fecha.getDay()!==0);
      return row;
  }
  createFill(row,fecha,antes){
      let i=antes?fecha.getDay():7-fecha.getDay();
      while(i!==0){
        fecha.setDate(fecha.getDate()+(antes?-1:1));
        --i;
        antes?
            row.insertBefore(this.createDay(fecha,true),row.firstChild):
            row.appendChild(this.createDay(fecha,true));        
      }  
  }
  createDay(fecha,other=false){
      let day=document.createElement("td");
      day.index = fecha.id;
      day.setAttribute("title","Click para más detalles de este día");
      day.addEventListener("click",e=>{
            this.diaEscogido=e.target.getAttribute("date_date");
            clickDia(e.target);});
      day.setAttribute("class",
            "fc-day fc-"+(
                    fecha.getDay()===0?"sun"
                   :fecha.getDay()===1?"mon"
                   :fecha.getDay()===2?"tue"
                   :fecha.getDay()===3?"wed"
                   :fecha.getDay()===4?"thu"
                   :fecha.getDay()===5?"fri"
                   :"sat"        
                )
            +(fecha.getDay()===6?" fc-last":"")/*si es relleno de otro mes*/
            +(other?" fc-other-month"
                :fecha.getDate()===HORASERVER.getDate()
                        &&fecha.getMonth()===HORASERVER.getMonth()
                        &&fecha.getFullYear()===HORASERVER.getFullYear()?" fc-today"
                :""));
      day.setAttribute("date_date",fecha.getFullYear()+"-"+(fecha.getMonth()+1)+"-"+fecha.getDate());
      day.setAttribute("id",fecha.getFullYear()+"-"+(fecha.getMonth()+1)+"-"+fecha.getDate());
      day.appendChild(this.createWrapper(fecha));
      Array.from(day.getElementsByTagName("div")).forEach(e=>e.setAttribute("date_date",day.getAttribute("date_date")));
     return day;
  }
  createWrapper(fecha){
      let div1=document.createElement("div"),
          div2=document.createElement("div"),
          div3=document.createElement("div"),
          div4=document.createElement("div");
      div1.style="position: relative; height: 30px;";
      div1.setAttribute("id","Marca"+fecha.getFullYear()+"-"+(fecha.getMonth()+1)+"-"+fecha.getDate());
      div2.className="fc-day-content";
      div3.className="fc-day-number";
      div3.innerHTML=fecha.getDate();
      div2.appendChild(div1);
      div4.appendChild(div3);
      div4.appendChild(div2);
     return div4;
  }
  createHashMapDates(citas){
      if(this.citas.length!==0)
          this.citas=[];
      this.citas=citas.reduce(
                (a,e)=>{
                    let key=Agenda.createKey(e);
                    if(!Array.isArray(a[key])){
                        a[key]=[];
                        a[key].hash=[];
                    }
                    a[key].hash[e.id]=(e);
                    return a;
                },[]
            );
  }
  static createKey(cita){
      let d=cita.fecha;
      return d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
  }
  getDates(){
    $Proxy.proxy(
            $$("ANNO",this.date.getFullYear(),"MES",this.date.getMonth()+1),
             "citasDelMes","CITAS",res=>{
                 if(!Array.isArray(res))
                    return;
                 this.createHashMapDates(res);
                 this.loadDates();
             });
  }
  loadDates(){
      for(let day in this.citas){
          if(this.citas.hasOwnProperty(day))
              this.marcarCasilla(
                  $id(day),this.citas[day].hash.filter(e=>e).length
              );
      }
      /*let days=$(".fc-day").toArray();
       * puede requierir más iteraciones days.forEach( e=>{
         let day=this.citas[e.id];
         if(typeof day !== 'undefined' && day!==null){
          this.marcarCasiilla(e,day.length);
         }
      });*/
  }
  marcarCasilla(casilla,i){
      let marca=$id("Marca"+casilla.id);
      marca.innerHTML=i+" cita"+(i!==1?"s":"");
      marca.className="fc_marca";
  }
  get(index){
      for(let i = 0;i<this.citas.length;i++){
          let c = this.citas[i];
          if(c.id===index)
              return c;
      }
      return false;
  }
};


