<%-- 
    Document   : Empleados
    Created on : Nov 5, 2016, 10:00:12 PM
    Author     : HP2000
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<div id="Employee" class="tab-pane fade">
    <div class="row divider-vertical">
                    <div class="col-md-12">
                            <h3 class="text-center" id="empleadosTitulo">
                                    Formulario para registro de empleados
                            </h3>
                    </div>
    </div>
    <div class="container">
          <!---alert alert-success  --->
          <div class="noVisible" id="_successU">
            <strong>Success!</strong> 
          </div>
           <!---alert alert-info"  --->
          <div class="noVisible" id="_infoU">
            <strong>Info!</strong> 
          </div>
            <!---alert alert-warning  --->
          <div class="noVisible" id="_warningU">
            <strong>Warning!</strong> 
          </div>
             <!---alert alert-danger --->
          <div class="noVisible" id="_dangerU">
            <strong>Danger!</strong>
          </div>
    </div>
    
    <div id="contextEmpleado1">
          <div class="row">
            <div class="col-md-6">
                    <form class="in-line" role="form">
                                    <div class="form-group">
                                            <label><especificacion>*</especificacion><small>Campos obligatorios</small></label>
                                    </div>
                                    <div>
                                            <h3>
                                            Datos personales
                                            </h3>
                                    </div>
                                    <div class="form-group">
                                            <label align = center >Tipo de identificación: <obligatorio>*</obligatorio> &nbsp &nbsp </label>
                                            <input type ="radio"  id = "CF2" value="CedF" checked name="identificacion"> Cédula física  &nbsp &nbsp  &nbsp &nbsp </input>
                                            <input type ="radio"  id = "CJ2" value="Juridica" name="identificacion"> Cédula Jurídica &nbsp &nbsp  &nbsp &nbsp </input>
                                            <input type ="radio"  id = "P2" value="Passport" name="identificacion"> Pasaporte  </input>

                                            <div id="esCedula2">
                                                     <label>Número de Id: </label>
                                                    <input type ="text" placeholder="1" class="campoID" name="CTexto" id = "textCedula12" size="1" maxlength="1" sytle="width:10px"> - 
                                                    <input type ="text" placeholder="0000" class="campoID" name="CTexto2" id = "textCedula22" size="1" maxlength="4" sytle="width:10px"> - 
                                                    <input type ="text" placeholder="0000" class="campoID" name="CTexto3" id = "textCedula32" size="1" maxlength="4" sytle="width:10px">
                                            </div>
                                            <div id="esOtro2" style="display:none;">
                                                     <label>Número: </label>
                                                    <input type ="text" class="campoID"name="CTexto3" id = "MtextID2"  sytle="width:80px">
                                            </div>
                                            <div>
                                                    <label><small>&nbsp  (Sin Guiones)</small></label>
                                            </div>
                                    </div>
                                    <div class="form-group">
                                        <label align = center >Tipo de usuario:&nbsp &nbsp &nbsp &nbsp </label>
                                            <input type ="checkbox" id = "A" value="A" > Asesor  &nbsp &nbsp &nbsp  &nbsp  &nbsp &nbsp </input>
                                            <input type ="checkbox" id = "JT" value="JT" > Jefe de taller &nbsp &nbsp &nbsp  &nbsp  &nbsp &nbsp </input>
                                            </br>
                                    </div>
                                     <div class="form-group noVisible" id="activoCheck">
                                        <label align = center >Activo: &nbsp &nbsp &nbsp &nbsp </label>
                                            <input type ="checkbox" id = "empleadoActivo" value="A" > (Puede iniciar sesión y ser asignado a motocicletas) </input>
                                            </br>
                                    </div>
                            </form>
            </div>
            <div class="col-md-6">
                    <form class="in-line" role="form">
                                    <br/>
                                    <br/>
                                    <br/>
                                    <div class="form-group">
                                            <label>Nombre completo<obligatorio>*</obligatorio></label>
                                            <input type ="text" name="CTexto" size ="15" class="form-control" id = "textNombre2">
                                    </div>
                                    <div class="form-group">
                                            <label> Teléfono/celular<obligatorio>*</obligatorio></label>
                                            <input type ="text" name="CTexto" class="form-control" id="textCelular2"></label>
                                    </div>
                                    <div class="form-group">
                                            <label>Correo electrónico<obligatorio>*</obligatorio></label>
                                            <input type="email" class="form-control" id="textEmail2">
                                    </div>
                            </form>
            </div>
        
         </div>
        <button type="button" class="btn btn-success btn-lg active" id="buttonGuardarEmpleado" style="background-color: #5cb85c">
            Registrar
        </button>
        <button type="button" class="btn btn-success btn-lg active noVisible" id="buttonUpDateEmpleado" style="background-color: #ff9900">
            Actualizar
        </button>
        <button type="button" class="btn btn-success btn-lg active btn-lg noVisible" data-toggle="modal" data-target="#myModal" id="buttonDeleteEmpleado" style="background-color: #F22727">
            Eliminar
        </button>
    </div>
    <div id="contextEmpleado2" class="noVisible">
        <div class="row">
             <div class="col-md-6">
            <form class="in-line" role="form">
                    <div>
                            <p> &nbsp </p>
                    </div>
                    <div>
                            <h3>
                                    Datos de la cuenta

                            </h3>
                           <input type ="checkbox" id = "Admin" value="Admin">Como administrador de la página</input><br/>
                    </div>
                    <div class="form-group">
                                    <label>Nombre de usuario<obligatorio>*</obligatorio></label>
                                    <input type ="text" name="CTexto" size ="15" class="form-control" id = "textUsuario" >
                            </div>
                            <div class="form-group">
                                    <label>Contraseña<obligatorio>*</obligatorio></label>
                                    <input type ="password" name="CTexto" size ="15"   placeholder="8 a 15 caracteres, utilice solo letras y números" class="form-control" id = "textContrasena">
                            </div>
                            <div class="form-group">
                                    <label>Verificar contraseña<obligatorio>*</obligatorio></label>
                                    <input type ="password" name="CTexto" size ="15"  placeholder="Vuelve a introducir la contraseña" class="form-control" id = "textContrasena2">
                            </div>
                            <div class="form-group">
                                <button type="button" class="btn btn-success btn-lg active" id="buttonGuardarUsuario" style="background-color: #5cb85c">
                                    Registrar
                                </button>
                                <button type="button" class="btn btn-success btn-lg active" id="buttonCancelUsuario" style="background-color: #F22727">
                                    Cancelar
                                </button>
                            </div>
                </form>
            </div>
        </div>
    </div>
</div>
