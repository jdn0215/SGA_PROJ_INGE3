<%-- 
    Document   : Clientes
    Created on : Nov 5, 2016, 9:38:52 PM
    Author     : HP2000
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<div id="Clients" class="tab-pane fade">
    <div class="row">
        <div class="col-md-12">
            <h3 class="text-center" id="titutloCliente">
		Formulario de agregación de cliente
	    </h3>
        </div>
    </div>
    <div class="container">
                         <!---alert alert-success  --->
                         <div class="noVisible" id="_successC">
                           <strong>Success!</strong> 
                         </div>
                          <!---alert alert-info"  --->
                         <div class="noVisible" id="_infoC">
                           <strong>Info!</strong> 
                         </div>
                           <!---alert alert-warning  --->
                         <div class="noVisible" id="_warningC">
                           <strong>Warning!</strong> 
                         </div>
                            <!---alert alert-danger --->
                         <div class="noVisible" id="_dangerC">
                           <strong>Danger!</strong>
                         </div>
                       </div>
    
    <div class="row">
	<div class="col-md-6">
        <form class="in-line " role="form">
                    <div class="form-group">
			<label><especificacion>*</especificacion><small>Campos obligatorios</small></label>
                    </div>
            <div class="form-group">
                <label for="CTexto">Nombre completo<obligatorio>*</obligatorio></label>
                <input type ="text" name="CTexto" size ="15" class="form-control" id = "textNombre"> 
            </div>
            <div class="form-group">
               <P><label align = center >Identificación<obligatorio>*</obligatorio></label></P>
               <label>&nbsp  &nbsp  &nbsp &nbsp Tipo:   &nbsp &nbsp &nbsp &nbsp</label>
               <input type ="radio" id = "CF" value="CedF" checked name="identificacion"> Cédula física  &nbsp &nbsp &nbsp  &nbsp  &nbsp &nbsp </input>
               <input type ="radio" id = "CJ" value="Juridica" name="identificacion"> Cédula Jurídica &nbsp &nbsp &nbsp  &nbsp  &nbsp &nbsp </input>
               <input type ="radio" id = "P" value="Passport" name="identificacion"> Pasaporte  </input></br>

               <div id="esCedula">
                        <label>&nbsp  &nbsp  &nbsp &nbsp Numero: </label>
                       <group>
                        <input type ="text" placeholder="1" name="CTexto" id = "textCedula1" size="1" maxlength="1" style="width:40px"> - 
                        <input type ="text" placeholder="0000"name="CTexto2" id = "textCedula2" size="1" maxlength="4" style="width:60px"> - 
                        <input type ="text" placeholder="0000" name="CTexto3" id = "textCedula3" size="1" maxlength="4" style="width:60px">
                       </group>
                </div>
               <div id="esOtro" style="display:none;">
                        <label>&nbsp  &nbsp  &nbsp &nbsp Numero: </label>
                       <input type ="text" class="campoID"name="CTexto3" id = "MtextID"  style="width:170px">
               </div>
               <div>
                       <label><small>&nbsp  (Sin Guiones)</small></label>
               </div>
            </div>        
            <div class="form-group">
                    <label>Profesión/Ocupación<obligatorio>*</obligatorio></label>
                    <input type="text" class="form-control" id="textProfesion" autocomplete></label>
            </div>
            <div class="form-group">
                <label> Residencia<obligatorio>*</obligatorio></label>
                <Br/><GROUP>
                    <Select name="Es" id="comboProv" ><Option Selected value="Provincia">Provincia</Select>
                    <Select name="Es" id="comboCant" ><Option Selected value="Cantón">Cantón</Select>
                    <Select name="Es" id="comboDist"><Option Selected value="Distrito">Distrito</Select>
                </GROUP>
            </div>
    </form>	
 </div>
        <div class="col-md-6">
                <form class="in-line" role="form">
                        <div class="form-group">
                                <p> &nbsp </p>
                        </div>
                        <div class="form-group">
                                <label>Correo electrónico<obligatorio>*</obligatorio></label>
                                <input type="email" class="form-control" id="textEmail">
                        </div>
                        <div class="form-group">
                                <label> Celular<obligatorio>*</obligatorio></label>
                                <input type ="text" name="CTexto" class="form-control" id="textCelular"></label>
                        </div>
                        <div class="form-group">
                                <label>  Teléfono de habitación</label>
                                <input type ="text" name="CTexto" class="form-control" id="textTelefono">
                        </div>
                        <div class="form-group">
                            <label>Fecha de nacimiento<obligatorio>*</obligatorio></label>
                            <Br/>
                            <GROUP>
                                <select name="mes" id="_mes" ><option value="-1">MES</option></select>
                                <select name="dia" id="_dia"><option value="-1" ></option></select>
                                <input type="text"  maxlength=4  name="anno" placeholder="ej: 1994" id="anno" class="textoAnno">
                            </GROUP>
                        </div>
                        <div class="form-group">
                            <label> Edad<obligatorio>*</obligatorio></label>
                            <input type ="text" name="CTexto" placeholder="La edad será autocalculada"class="form-control" id="textEdad" disabled>
                        </div>
                </form>
        </div>
</div> 
<button type="button" class="btn btn-primary btn-lg active" style="background-color: #5cb85c" id="buttonGuardar" >
        Guardar                                                 
</button>
<button type="button" sytle="display:none;" class=" btn btn-primary btn-lg active noVisible" style="background-color: #20144c"id="buttonClientesHistorial" >
        Ver Motocicletas
</button>
<button type="button" sytle="display:none;" class="btn btn-primary btn-lg active noVisible" style="background-color: #ff9900 " id="buttonClienteModificar">
        Modificar
</button>

</div>	