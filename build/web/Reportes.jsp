<%-- 
    Document   : Reportes
    Created on : 05/04/2017, 08:01:07 PM
    Author     : Mario
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>

<div id="Reportes" class="tab-pane fade">
    
 <div class="row">
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
   
    <div id="agregar" style="margin-right: 45px; margin-left: auto;">
        <button type="button" class="btn btn-primary btn-lg active" 
                style="background-color: #ff9900 " id="buttonCitasModificar">
             +
     </button>
    </div>

    <div>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th class="datagridtable">
                        Descripción
                    </th>
                    <th class="datagridtable">
                        Precio
                    </th>
                    <th>

                    </th>
                </tr>

            </thead>

        </table>
    </div>
    
</div>