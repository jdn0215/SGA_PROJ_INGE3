<%-- 
    Document   : Reportes
    Created on : 05/04/2017, 08:01:07 PM
    Author     : Mario
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        
        
        <title>Reportes</title>
    </head>
    <body>
        <div class="container">
        <div class="row divider-vertical">
                    <div class="col-md-12">
                            <h3 class="text-center" id="empleadosTitulo">
                                   Reporte de arreglos y gastos 
                            </h3>
                    </div>
        </div>
            
            <div id="agregar" style="margin-right: 45px; margin-left: auto;">
                <button type="button" sytle="display:none;" class="btn btn-primary btn-lg active" 
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
    </body>
</html>
