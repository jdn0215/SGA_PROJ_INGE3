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
                           Reporte de arreglos y gastos 
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
   
    <div id="add" style="position:absolute; top: 75px; right:15px;">
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
                        Descripción
                    </th>
                    <th class="datagridtable" style="background-color: #20144c; color:#fff;">
                        Precio
                    </th>
                    <th style="background-color: #20144c; color:#fff;">
                        12/4/2017
                    </th>
                    <th style="background-color: #20144c; color:#fff;">
                        Mecánico
                    </th>
                    <th style="background-color: #20144c;">
                        
                    </th>
                </tr>

            </thead>

        </table>
    </div>
    
</div>