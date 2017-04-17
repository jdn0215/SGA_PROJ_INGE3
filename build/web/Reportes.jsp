<%-- 
    Document   : Reportes
    Created on : 05/04/2017, 08:01:07 PM
    Author     : Mario
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>

<div id="Reportes" class="tab-pane fade" style="position:relative; margin-right: auto; margin-left: auto;">
    
 <div class="row" >
            <div class="col-md-12">
                    <h3 class="text-center" id="tituloReportes">
                           Reporte de arreglos y gastos por Cita
                    </h3>
            </div>
</div>
    
    <div class="container">
                         <!---alert alert-success  --->
                         <div class="noVisible" id="_successReportes">
                           <strong>Success!</strong> 
                         </div>
                          <!---alert alert-info"  --->
                         <div class="noVisible" id="_infoReportes">
                           <strong>Info!</strong> 
                         </div>
                           <!---alert alert-warning  --->
                         <div class="noVisible" id="_warningReportes">
                           <strong>Warning!</strong> 
                         </div>
                            <!---alert alert-danger --->
                         <div class="noVisible" id="_dangerReportes">
                           <strong>Danger!</strong>
                         </div>
    </div>
    
      
     <div class="form-group" id="proforma" style="position:absolute; top: 65px; left:35px;">
                        <h4 id="numproforma"></h4>
                            <input type ="text" id="pfm" placeholder="#proforma" class="form-control"name="CTexto" >
                    </div>
    
    <div class="form-group" id="idchofer" style="position:absolute; top: 65px; left:245px;">
                        <h4 id="numproforma"></h4>
                            <input type ="text" id="idchof" disabled placeholder="dueño" class="form-control"name="CTexto" >
                    </div>
   
     <div class="form-group" id="motodes" style="position:absolute; top: 65px; left:475px;">
                        <h4 id="mtd"></h4>
                            <input type ="text" id="desm" disabled placeholder="motocicleta" class="form-control"name="CTexto" >
                    </div>
    
    <div id="add" style="position:absolute; top: 65px; right:145px;">
      <button type="button" class="btn btn-success btn-lg active" id="addGastos" 
                                style="position:absolute; top: 5px; right: 25px; -webkit-border-radius: 2em;
                                -moz-border-radius: 2em; border-radius: 2em;">
                                <span class="glyphicon glyphicon-plus"></span>   
                           </button>
    </div>
    

    <div id="tabreporte" >
        <table class="table table-bordered" style="position:absolute; top: 135px;">
            <thead>
                <tr>
                    <th class="datagridtable" style="background-color: #20144c; color:#fff;">
                        #
                    </th>
                    <th class="datagridtable" style="background-color: #20144c; color:#fff;">
                        Descripción
                    </th>
                    <th class="datagridtable" style="background-color: #20144c; color:#fff;">
                        Precio
                    </th>
                    <th class="datagridtable"  style="background-color: #20144c; color:#fff;">
                        Fecha
                    </th>
                    <th class="datagridtable" style="background-color: #20144c; color:#fff;">
                        Quién registra
                    </th>
                    <th class="datagridtable"  style="background-color: #ff0011;">
                        
                    </th>
                </tr>

            </thead>
            <tr>
                    <td>
                    <td class="datagridtable" >
                        <input type="text" class="form-control" classextra="input_detalleG" id="input_detalleG" placeholder="Ingrese detalle">
                    </td>
                    <td class="datagridtable" >
                       <input type="number" class="form-control" classextra="input_precioG" id="input_precioG" placeholder="Ingrese precio">
                    </td>
                    <td class="datagridtable" >
                       <input type="text" class="form-control" classextra="input_fechaG" id="input_fechaG" placeholder="Ingrese la fecha(dd-mm-aaaa)">
                    </td>
                    <td class="datagridtable" >
                     <input type="text" class="form-control" classextra="input_quienG" id="input_quienG" placeholder="Ingrese el id del empleado que se registra">
                    </td>
                    <td class="datagridtable" >
                        <button type="button" class="btn btn-danger btn-md active" id="quitar" title="remover fila">
                                <span class="glyphicon glyphicon-remove"></span>   
                           </button>
                    </td>
                </tr>
           
                 <tr>
                     
                    <td class="datagridtable" >
                        
                    </td>
                    <td class="datagridtable" title="total en repuestos">
                       
                    </td>
                    <td class="datagridtable" >
                       
                    </td>
                    <td class="datagridtable" >
                   
                    </td>
                    <td class="datagridtable" >
                        
                    </td>
                </tr>
                <tr>
                    
                </tr>
                <tr>
                    <td class="datagridtable">
                        
                    </td>
                    
                    <td class="datagridtable" >
                       <button type="button" class="btn btn-success btn-md active" id="crearGasto" onClick="creargasto();" title="guardar reporte">
                               Agregar cambios
                           </button>
                    </td>
                    <td class="datagridtable" >
                   <button type="button" class="btn btn-warning btn-md active" id="cancelar" title="cancelar reporte">
                               Cancelar 
                           </button>
                    </td>
                    <td class="datagridtable" colspan="2">
                        <button type="button" class="btn btn-success btn-md disabled"  id="printrep" title="imprimir reporte">
                               Imprimir Reporte 
                           </button>
                    </td>
                </tr>

        </table>
        
    </div>
    
</div>