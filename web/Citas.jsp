<%-- 
    Document   : Clientes
    Created on : Nov 5, 2016, 9:38:52 PM
    Author     : HP2000
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<div id="Citas" class="tab-pane fade">
    <div class="row">
        <div class="col-md-12">
            <h3 class="text-center" id="titutloCitas">
		Formulario de creación de citas
	    </h3>
        </div>
    </div>
    <div class="container">
                         <!---alert alert-success  --->
                         <div class="noVisible" id="_successCitas">
                           <strong>Success!</strong> 
                         </div>
                          <!---alert alert-info"  --->
                         <div class="noVisible" id="_infoCitas">
                           <strong>Info!</strong> 
                         </div>
                           <!---alert alert-warning  --->
                         <div class="noVisible" id="_warningCitas">
                           <strong>Warning!</strong> 
                         </div>
                            <!---alert alert-danger --->
                         <div class="noVisible" id="_dangerCitas">
                           <strong>Danger!</strong>
                         </div>
                       </div>
    <div class="row" id="citasWrapper">
	<div class="col-md-6">
            <form class="in-line " role="form" id="form1Citas">
                <div class="form-group">
                    <label><especificacion>*</especificacion><small>Campos obligatorios</small></label>
                </div>
                <div class="form-group">
                        <h4 id="tituloCitasCliente"></h4>
                    <label for="CTexto">Identificación del cliente<obligatorio>*</obligatorio></label>
                    <input type ="text" name="CTexto" class="form-control" id = "clienteCita"> 
                </div>
                <div class="form-group">
                    <label for="CTexto">Motocicleta<obligatorio>*</obligatorio></label>
                    <select id="motocito"class="form-control" >
                        <option value="-1">Ingrese la identificación del cliente:</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="CTexto">Recepcionista quien crea la cita:<obligatorio>*</obligatorio></label>
                    <input type ="text" name="CTexto" disabled class="form-control" id = "recepcionistaCita">
                </div>
                <div class="form-group">
                    <label for="CTexto">Número de Proforma:<obligatorio>*</obligatorio></label>
                    <input type ="text" name="CTexto" class="form-control" id = "proformaCita">
                </div>
                <div class="form-group">
                    <label for="CTexto">Garantía:</label>
                    <input type ="text" name="CTexto" class="form-control" id = "garantiaCita">
                </div>
                <div class="form-group">
                    <label for="CTexto">Número de orden:<obligatorio>*</obligatorio></label>
                    <input type ="text" name="CTexto" class="form-control" id = "numeroOrdenCita">
                </div>
                <div class="form-group">
                    <label for="CTexto">Tipo de trabajo:<obligatorio>*</obligatorio></label>
                    <input type ="text" name="CTexto" class="form-control" id = "tipoCita">
                </div>
                <table>
                     
                    <tr id="checkNotificaciones">
                        <th>
                           <label for="CTexto">Recibir notificaciones por correo:&nbsp</label>
                        </th>
                        <th>
                            <div class="onoffswitch">
                            <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch" checked>
                            <label class="onoffswitch-label" for="myonoffswitch">
                                <span class="onoffswitch-inner"></span>
                                <span class="onoffswitch-switch"></span>
                            </label>
                            </div>
                        </th>
                    </tr>
                   <tr id="estadoCitaGrupo">
                        <th>
                           <label for="CTexto">Estado de la cita:&nbsp&nbsp</label>
                   <GROUP>
                            <input type ="radio" id = "citaPendiente" checked name="esatdoCita">&nbspPendiente&nbsp</input>
                            <input type ="radio" id = "EnProceso"      name="esatdoCita">&nbspEn proceso&nbsp</input></br>
                            <input type ="radio" id = "citaCumplida"  name="esatdoCita">&nbspEntregada&nbsp</input>
                            <input type ="radio" id = "citaCancelada" name="esatdoCita">&nbspCancelada&nbsp</input>
                            
                    </GROUP>        
                        </th>
                    </tr>
                </table>
                 <input type="reset" class="noVisible" id="citasReset1"/>
                
                
            </form>	
        </div>
        <div class="col-md-6">
            <form class="in-line" role="form" id="form2Citas">
                <br/><br/>
                 
                
                
                <div class="form-group">
                        <label>Fecha de ingreso:<obligatorio>*</obligatorio></label><br/>
                        <GROUP>        
                            <select name="mes" id="_mesCitas"><option value="-1">MES</option></select>
                            <select name="dia" id="_diaCitas"><option value="-1" ></option></select>
                            <select id="annoCita"></select>
                        </GROUP>
                </div>
                <div class="form-group">
                    
                    <label>Hora de ingreso:</label>
                    <input class="TimeInput" style="width:40%" type="time"  maxlength=2  name="mn" placeholder="1-12:0-59 pm/am" id="minCita">
                </div>
                
                
                
                <div class="form-group">
                        <label>Fecha de prometida:</label><br/>
                        <GROUP>        
                            <select name="mes" id="_mesCitas2"><option value="-1">MES</option></select>
                            <select name="dia" id="_diaCitas2"><option value="-1" ></option></select>
                            <select id="annoCita2"></select>
                        </GROUP>
                </div>
                 <div class="form-group">
                    <label>Hora Prometida:</label>
                    <input class="TimeInput" style="width:40%" type="time"  maxlength=2  name="mn" placeholder="1-12:0-59 pm/am" id="minCita2">
                </div>
                
                
                
                
                <div class="form-group">
                    <label for="CTexto">Mecánico asignado:<obligatorio>*</obligatorio></label>
                    <select id="EmpleadoCita"class="form-control" >
                        <option value="-1">Ingrese una hora de ingreso y una hora prometida</option>
                    </select>
                </div>
                <div id="divSalidaCita" class="form-group noVisible">
                        <label>Fecha de salida:</label><br/>
                        <GROUP>        
                            <select name="mes" id="_mesCitas3"><option value="-1">MES</option></select>
                            <select name="dia" id="_diaCitas3"><option value="-1" ></option></select>
                            <select id="annoCita3"></select>
                        </GROUP>
                
                <div class="form-group">
                    <label>Hora de la salida<obligatorio>*</obligatorio></label>
                    <input class="TimeInput" style="width:40%" type="time"  maxlength=2  name="mn" placeholder="1-12:0-59 pm/am" id="minCita4">
                </div>
                
                </div>
                <div class="form-group">
                    <label> Observaciones:</label>
                    <textarea class="form-control" rows="5" id="motivosCita"></textarea>
                </div>
                <input type="reset" class="noVisible" id="citasReset2"/>
                <div class="form-group">
                    <label for="CTexto">Cantidad de días en el taller</label>
                    <input type ="text" disabled name="CTexto" class="form-control" value="0" id = "clienteCita">
                </div>
           </form>
        </div>
</div> 
    <br/><br/>
<button type="button" class="btn btn-primary btn-lg active" style="background-color: #5cb85c" id="buttonGuardarCita" >
        Guardar                                                 
</button>
<button type="button" sytle="display:none;" class="btn btn-primary btn-lg active noVisible" style="background-color: #ff9900 " id="buttonCitasModificar">
        Modificar
</button>
</div>	