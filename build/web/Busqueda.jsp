<%-- 
    Document   : Busqueda
    Created on : Nov 5, 2016, 9:57:17 PM
    Author     : cmadrigal
--%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<div id="Search" class="tab-pane fade">
        <div class="row">
            <center>
               
                <!---opciones del combo box --->
                <select id="opcionesDeBusqueda" class="form-control" style="font-weight:bold;">
                    <option id="opcionesDeBusqueda0" value="0">Seleccione un criterio de búsqueda </option>
                    <option id="opcionesDeBusqueda1" value="1">Buscar clientes por nombre o por identificación (no usar guiones)</option>
                    <option id="opcionesDeBusqueda2" value="2">Buscar motocicleta por nombre o número de motor, chasis, placa o identificación del cliente</option>
                    <option id="opcionesDeBusqueda3" value="3">Buscar empleado por identificación o nombre</option>
                    <option id="opcionesDeBusqueda4" value="4">Buscar cita utilizando el número de proforma</option>
                    
                </select>    
                
                
                
                
                
            <table style="width:85%" style="display: block;" >
                <tbody >
                <tr id="BCLIENTETR" style="display:none">
                    <td width="30%" style="text-align: left; padding-right: 1em;">
                        <input type ="text" name="CTexto"  id="BTextCliente" placeholder="Ingrese la identificación (sin guiones) o nombre del cliente" class="form-control">
                    </td>
                    <td width="25%">
                        <br><button type="button" width="5em" id="buttonBuscarc" style="padding: 5px; margin-bottom:3%; text-align:center; background-color: #20144c;" class="btn btn-info btn-lg active">&nbsp&nbsp&nbspBuscar clientes&nbsp&nbsp&nbsp&nbsp</button></br>    
                    </td>
                </tr>
                <tr id="BMOTOTR" style="display:none">
                    <td width="30%" style="text-align: left; padding-right: 1em;">
                        <input type ="text"  id="BTextMoto" placeholder="Ingrese el número de motor, chasis, placa, o identificacion del dueño" class="form-control"name="CTexto" >
                    </td>
                    <td width="25%">
                        <br><button type="button" width="5em" id="buttonBuscarM" style="padding: 5px; margin-bottom:3%; text-align:center; background-color: #20144c;" class="btn btn-info btn-lg active">Buscar motocicletas</button></br>    
                    </td>
               </tr>
               <tr id="BEMPLEADOTR" style="display:none">
                    <td width="30%" style="text-align: left; padding-right: 1em;">
                        <input type ="text"  id="BTextEmpleado" placeholder="Ingrese la identificación o nombre del empleado" class="form-control"name="CTexto" >
                    </td>
                    <td width="25%">
                        <br><button type="button" width="5em" id="buttonBuscaEmpleados" style="padding: 5px; margin-bottom:3%; text-align:center; background-color: #20144c;" class="btn btn-info btn-lg active">&nbspBuscar empleados&nbsp</button></br>    
                    </td>
               </tr>
               <tr id="BCITATR" style="display:none">
                    <td width="30%" style="text-align: left; padding-right: 1em;">
                        <input type ="text"  id="BTextCita" placeholder="Ingrese el número de proforma de la cita" class="form-control"name="CTexto" >
                    </td>
                    <td width="25%">
                        <br><button type="button" width="5em" id="buttonBuscaCita" style="padding: 5px; margin-bottom:3%; text-align:center; background-color: #20144c;" class="btn btn-info btn-lg active">&nbspBuscar Citas&nbsp</button></br>    
                    </td>
               </tr>
             </tbody>
            </table>
            </center>
            </div>
               <div class="container">
               <!---alert alert-success  --->
               <div class="noVisible" id="_successB">
                 <strong>Success!</strong> 
               </div>
                <!---alert alert-info"  --->
               <div class="noVisible" id="_infoB">
                 <strong>Info!</strong> 
               </div>
                 <!---alert alert-warning  --->
               <div class="noVisible" id="_warningB">
                 <strong>Warning!</strong> 
               </div>
                  <!---alert alert-danger --->
               <div class="noVisible" id="_dangerB">
                 <strong>Danger!</strong>
               </div>
             </div>
</div>

