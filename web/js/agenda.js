/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* global HORASERVER, meses, $Proxy, $id */

class Agenda{
  constructor(tabla){
      this.tabla=$id(tabla);
      this.citas=[];
      this.hash =[];
      $date();
      this.date=new Date(HORASERVER);
      this.date.setDate(1);
      this.cambiarDeTabla(new Date(this.date));
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
      this.hash=[];
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
                :"")
        );
      day.setAttribute("date_date",fecha.getFullYear()+"-"+(fecha.getMonth()+1)+"-"+fecha.getDate());
      day.setAttribute("id",fecha.getFullYear()+"-"+(fecha.getMonth()+1)+"-"+fecha.getDate());
      day.appendChild(this.createWrapper(fecha));
      if(!other)
        this.hash[day.getAttribute("id")]={entradas:[],prometida:[],espera:[]};
      Array.from(day.getElementsByTagName("div")).forEach(e=>e.setAttribute("date_date",day.getAttribute("date_date")));
      if(fecha.getFullYear()<HORASERVER.getFullYear() ||
              fecha.getFullYear()===HORASERVER.getFullYear()&&fecha.getMonth()<HORASERVER.getMonth() ||
              fecha.getFullYear()===HORASERVER.getFullYear()&&fecha.getMonth()===HORASERVER.getMonth()&&fecha.getDate()<HORASERVER.getDate()){
              /*if la fecha ya paso*/
              day.className+=" date_pasado";
      }
      return day;
  }
  createWrapper(fecha){
      let div1=document.createElement("div"),
          div2=document.createElement("div"),
          div3=document.createElement("div"),
          div4=document.createElement("div");
      div1.style="position: relative; height: 30px;";
      div1.setAttribute("id","Marca_"+fecha.getFullYear()+"-"+(fecha.getMonth()+1)+"-"+fecha.getDate());
      div2.className="fc-day-content";
      div3.className="fc-day-number";
      div3.innerHTML=fecha.getDate();
      div2.appendChild(div1);
      div4.appendChild(div3);
      div4.appendChild(div2);
     return div4;
  }
  createHashMapDates(citas){
      this.citas = citas;
      this.citas.forEach(cita=>this.clasificar(cita));
  }
  clasificar(cita){
      let mesActual = cita.entrada.getMonth();
      let fecha = cita.entrada;
      this.annadir(cita,cita.entrada,1);
      fecha = addDay(fecha);
      while(fecha.getMonth() === mesActual && fecha.getDate() < cita.prometida.getDate()){
          this.annadir(cita,fecha,3);
          fecha = addDay(fecha);
      }
      this.annadir(cita,cita.prometida,2);
  }
  annadir(cita,fecha,tipo){
      //this.hash[day.getAttribute("id")]={entradas:[],prometida:[],espera:[]};
      let id = Agenda.createKey(fecha);
      let dia = this.hash[id];
      let clasificacion  =(tipo===1?dia.entradas:tipo===2?dia.prometida:dia.espera);
      clasificacion[cita.proforma] = cita;
  }
  static createKey(d){
        return d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
  }
  getDates(){
    $Proxy.proxy(
            $$("ANNO",this.date.getFullYear(),"MES",this.date.getMonth()+1),
             "citasDelMes","CITAS",res=>{
                if(Array.isArray(res)){
                    this.createHashMapDates(res);
                    this.loadDates();
                }
                this.initEvents();
             });
  }
  loadDates(){
      for(let day in this.hash){
            if(0!== this.hash[day].entradas.concat(
                    this.hash[day].prometida.concat(
                    this.hash[day].espera))
                   .filter(e=>e!==undefined)
                   .length){
                this.marcarCasilla(day);
            }
      }     
  }
  
  initEvents(){
      $(".fc_marca").click(e=>eventoBarra(e));
      $(".fc-day:not(.fc-other-month):not(.date_pasado)").click(e=>eventoCasilla(e));
  }
  getCasilla(day){
      if(!(day instanceof Date))
          return;
      return day.getFullYear()+"-"+(day.getMonth()+1)+"-"+day.getDate();
    }
  marcarCasilla(day){
      let casilla = $id(day);
      let marca=$id("Marca_"+casilla.id);
      marca.appendChild(this.createRowCita(day));
      marca.className="fc_marca";
      $('#prometida_'+day)[0].innerHTML = this.hash[day].prometida.filter(e=>e!==undefined).length;
      $('#entrada_'+day)[0].innerHTML = this.hash[day].entradas.filter(e=>e!==undefined).length;
      $('#espera_'+day)[0].innerHTML = this.hash[day].espera.filter(e=>e!==undefined).length;
    }
  
  createRowCita(id){
      let div = document.createElement("div");
      let tr=document.createElement("tr");
      let td1 = document.createElement("td");
      let td2 = document.createElement("td");
      let td3 = document.createElement("td");
      tr.setAttribute("id","row_"+id);
      tr.className = "fc_row";
      td1.className = "fc_entradas fc_estado";
      td2.className = "fc_espera fc_estado";
      td3.className = "fc_prometida fc_estado";
      td1.setAttribute("id","entrada_"+id);
      td2.setAttribute("id","espera_"+id);
      td3.setAttribute("id","prometida_"+id);
      td1.innerHTML=0;
      td2.innerHTML=0;
      td3.innerHTML=0;
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      div.appendChild(tr);
      return div;
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

const addDay=day=>new Date(day.getFullYear(),day.getMonth(),day.getDate()+1);

