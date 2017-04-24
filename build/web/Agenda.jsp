<%-- 
    Document   : Agenda
    Created on : 05/02/2017, 10:26:17 PM
    Author     : jdani
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>

<div id="Agenda" class="tab-pane fade in active">

    <div id="tableAgenda" class="agenda">
            <button class="bt-help "
          data-toggle="popover"
          title="<div class='HDRPO'>Ayuda</div>"
          data-content="<div class='txtPO'>En esta sección podrá navegar entre los meses para crear citas.<br/><br><br/> Se puede observar a simple vista, toda la actividad del taller, guiándose por las casillas de colores y su respectivo significado.<br/><br><br/> Si hace click sobre un día especifico de esta agenda, será guiado al formulario de creación de citas.<br/><br><br/> Si hace click sobre la barra de colores de un día especifico podrá ver de manera detallada la actividad del día seleccionado.<br/><br><br/><button class='btn btn-danger cerrarPop'>Cerrar</button></div>"
           data-placement="rigth"
           data-trigger="click"
         >?</button>
    <div class="container">
        <div class="row">
            <!-- End Column -->
            <div id="calendar" class="col-sm-8 col-md-9 animated animated-sm bounceInUp">
                <div class="panel panel-default">
                    <div class="panel-body">
                        <div class="calendar fc fc-ltr">
                            
                            <div style="display:block; tab-size:13px">
                                    <div class="fc_entradas fc_estado">Entradas al taller</div>
                                    <div class="fc_espera fc_estado">Motocicletas en el taller</div>
                                    <div class="fc_prometida fc_estado">Salidas esperadas</div>
                            </div>
                            <table class="fc-header" style="width:100%; margin-left:29%;margin-right:27%;">
                                <tbody>
                                    <tr>
                                        <td class="fc-header-left">
                                            
                                            <div class="btn-group">
                                                <tr style="display:block;">
                                                    <td><button id="agendaIzquierda" type="button" class="fc-button-prev fc-corner-left btn btn-default btn-sm"> 
                                                         <span class="glyphicon glyphicon-arrow-left"></span>
                                                        </button></td>
                                                <td><pre id="mesActualAgenda">January 2014</pre></td>
                                                <td><button id="agendaDerecha" type="button" class="btn btn-default btn-sm">
                                                   <span class="glyphicon glyphicon-arrow-right"></span>
                                                </button></td>
                                                </tr>
                                            </div>
                                        </td>   
                                    </tr>
                                </tbody>
                            </table>
                            <div class="fc-content" style="position: relative; min-height: 1px;">
                                <div class="fc-view fc-view-month fc-grid" style="position: relative; min-height: 1px;" unselectable="on">
 
                                    <table id="tablaAgenda" class="fc-border-separate" style="width:100%" cellspacing="0">
                                        <thead>
                                            <tr class="fc-first fc-last">
                                                <th class="fc-day-header fc-widget-header fc-first" style="width: 158px;">Domingo</th>
                                                <th class="fc-day-header fc-widget-header" style="width: 158px;">Lunes</th>
                                                <th class="fc-day-header fc-widget-header" style="width: 158px;">Martes</th>
                                                <th class="fc-day-header fc-widget-header" style="width: 158px;">Miércoles</th>
                                                <th class="fc-day-header fc-widget-header" style="width: 158px;">Jueves</th>
                                                <th class="fc-day-header fc-widget-header" style="width: 158px;">Viernes</th>
                                                <th class="fc-day-header fc-widget-header fc-last" style="width: 158px;">Sábado</th>
                                            </tr>
                                        </thead>
                                        <tbody></tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="unlockModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                     <h4 class="modal-title" id="myModalLabel"><i class="fa fa-fw fa-unlock"></i> Unlock Calendar</h4>

                </div>
                <div class="modal-body">
                    <p class="h3 text-center text-primary"><i class="fa fa-thumbs-up"></i> Woop!</p>
                    <p class="lead text-center">Here's what happens when you unlock your calendar:</p>
                    <hr>
                    <div class="row">
                        <div class="col-xs-1"> <i class="fa fa-fw fa-thumbs-up text-primary"></i>

                        </div>
                        <div class="col-xs-11">You'll instantly get access to all <strong class="text-primary">67 shared assignments</strong> on your calendar.</div>
                        <div class="col-xs-1"> <i class="fa fa-fw fa-thumbs-up text-primary"></i>

                        </div>
                        <div class="col-xs-11">You'll be <strong>notified</strong> whenever a shared assignment is <strong>updated or edited</strong> throughout the semester.</div>
                        <div class="col-xs-1"> <i class="fa fa-fw fa-thumbs-up text-primary"></i>

                        </div>
                        <div class="col-xs-11">You'll be able to <strong>share your own calendar assignments</strong> with your class, which means you can start making money instantly.</div>
                        <div class="col-xs-1"> <i class="fa fa-fw fa-thumbs-up text-primary"></i>

                        </div>
                        <div class="col-xs-11">You'll gain access to special features of mchp, such as <strong>calendar integration</strong> in your College Pulse and in each of your class's activity sections.</div>
                    </div>
                    <hr>
                    <div class="panel panel-default">
                        <!-- Default panel contents -->
                        <!-- Table -->
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>Class Name</th>
                                    <th># of Assignments</th>
                                    <th>Unlock</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><i class="fa fa-book"></i> ECON 200</td>
                                    <td><strong class="text-primary"><i class="fa fa-calendar"></i> 15 now</strong> + all future</td>
                                    <td><i class="fa fa-check-circle text-success"> yes</i>
                                    </td>
                                </tr>
                                <tr>
                                    <td><i class="fa fa-book"></i> ACCT 210</td>
                                    <td><strong class="text-primary"><i class="fa fa-calendar"></i> 22 now</strong> + all future</td>
                                    <td><i class="fa fa-check-circle text-success"> yes</i>
                                    </td>
                                </tr>
                                <tr>
                                    <td><i class="fa fa-book"></i> MGMT 310</td>
                                    <td><strong class="text-primary"><i class="fa fa-calendar"></i> 30 now</strong> + all future</td>
                                    <td> <i class="fa fa-check-circle text-success"> yes</i>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="panel-footer text-center">You're unlocking: <strong>3 classes</strong> for <strong>300 points</strong>
                        </div>
                    </div>
            </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-success">Unlock!</button>
                </div>
            </div>
        </div>
    </div>        
            
    </div>
</div>
<script>
     const agenda=new Agenda("tablaAgenda");
</script>