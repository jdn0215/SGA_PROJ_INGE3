<%-- 
    Document   : config
    Created on : 13/03/2017, 08:49:05 PM
    Author     : jdani
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<div id="Config" class="tab-pane fade">
    
    <div class="row">
        <div class="col-md-6">
            <div class="in-line" role="form">
                <button class="ghostButton btn btn-info" data-toggle="collapse" data-target="#configCambioPW">
                    <a>Cambiar contraseña<span class="glyphicon glyphicon-menu-down"></span></a>
                </button>
                <div id="configCambioPW" class="collapse">
                    <br/><br/>
                    <form>
                    <div class="form-group">
                        <label>Ingrese su contraseña actual</label>
                        <input type ="password" name="CTexto" size ="15"class="form-control" id = "configCambioPWActual">
                    </div>
                    
                    <div class="form-group">
                        <label>Ingrese su nueva contraseña</label>
                        <input type ="password" autocomplete="off" name="CTexto" size ="15"   placeholder="8 a 15 caracteres, utilice solo letras y números" class="form-control" id = "configCambioPWNueva">
                    </div>
                    
                    <div class="form-group">
                        <label>Verificar contraseña<obligatorio>*</obligatorio></label>
                        <input type ="password" name="CTexto" size ="15"  placeholder="Vuelve a introducir la contraseña" class="form-control" id = "configCambioPWConfirm">
                    </div>
                        
                     <input type="reset" class="noVisible" id="configCambioPWReset"/>   
                   </form>
                    
                </div>
            </div>
    </div>
    <div class="col-md-6">
            <form class="in-line" role="form">
                    Mundo
            </form>
        </div>
    </div>
    
    
</div>