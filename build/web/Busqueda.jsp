<%-- 
    Document   : Busqueda
    Created on : Nov 5, 2016, 9:57:17 PM
    Author     : cmadrigal
--%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>

<div id="Search" class="tab-pane fade">
  
        <div class="row">
               <button class="bt-help "
          data-toggle="popover"
          title="<div class='HDRPO'>Ayuda</div>"
          data-content="<div class='txtPO'>En esta sección podrá realizar búsqueda de datos.<br/><br><br/>No se diferencia si es una mayúscula o una minúscula, por lo que puede escribir de cualquiera de las dos formas.<br/><br><br/>No es necesario escribir todo el criterio de búsqueda, ya que el sistema buscará las aproximaciones, de acuerdo a lo que usted digite.<br/><br><br/>Entre más especifico sea, mejores resultados obtendrá .<br/><button class='btn btn-danger cerrarPop'>Cerrar</button></div>"
           data-placement="rigth"
           data-trigger="click"
         >?</button>
            <center>

            <table style="width:85%" style="display: block;" >

                <tbody >
                <th>
                   <p id="aclaracionBusqueda"></p> 
                </th>
                <tr id="BCLIENTETR" class="opcBusq" >
                    <td width="30%" style="text-align: left; padding-right: 1em;">
                        <input type ="text" name="CTexto"  id="BTextCliente" placeholder="Ingrese la identificación (sin guiones) o nombre del cliente" class="form-control inputBusq">
                    </td>
                    <td width="25%">
                        <br><button type="button" width="5em" id="buttonBuscarc" style="padding: 5px; margin-bottom:3%; text-align:center; background-color: #20144c;" class="btn btn-info btn-lg active">&nbsp&nbsp&nbspBuscar clientes&nbsp&nbsp&nbsp&nbsp</button></br>    
                    </td>
                </tr>
                <tr id="BMOTOTR" class="opcBusq">
                    <td width="30%" style="text-align: left; padding-right: 1em;">
                        <input type ="text"  id="BTextMoto" placeholder="Ingrese el número de motor, chasis, placa, o identificacion del dueño" class="form-control inputBusq"name="CTexto" >
                    </td>
                    <td width="25%">
                        <br><button type="button" width="5em" id="buttonBuscarM" style="padding: 5px; margin-bottom:3%; text-align:center; background-color: #20144c;" class="btn btn-info btn-lg active">Buscar motocicletas</button></br>    
                    </td>
               </tr>
               <tr id="BEMPLEADOTR"class="opcBusq" >
                    <td width="30%" style="text-align: left; padding-right: 1em;">
                        <input type ="text"  id="BTextEmpleado" placeholder="Ingrese la identificación o nombre del empleado" class="form-control inputBusq"name="CTexto" >
                    </td>
                    <td width="25%">
                        <br><button type="button" width="5em" id="buttonBuscaEmpleados" style="padding: 5px; margin-bottom:3%; text-align:center; background-color: #20144c;" class="btn btn-info btn-lg active">&nbspBuscar empleados&nbsp</button></br>    
                    </td>
               </tr>
               <tr id="BCITATR" class="opcBusq" >
                    <td width="30%" style="text-align: left; padding-right: 1em;">
                        <input type ="text"  id="TexArgtCita" placeholder="Ingrese el número de proforma,# orden,# motor, o identificacion del cliente" class="form-control inputBusq"name="CTexto" >
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

