<%-- 
    Document   : moto
    Created on : Nov 28, 2016, 8:53:34 PM
    Author     : HP2000
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<div id="motoMain">
    
    <div class="row">
        <div class="col-md-6">
            <form class="in-line" role="form">
                    <div class="form-group">
                        <h4 id="tituloMotos"></h4>
                            <label>Identificación del cliente<obligatorio>*</obligatorio></label>
                            <input type ="text" id="MtextCedula" placeholder="Ingrese el pasaporte, cédula jurídica o cédula física (sin guiones)" class="form-control"name="CTexto" >
                    </div>
                    <div class="form-group"> 
                            <label>Modelo<obligatorio>*</obligatorio></label><input type ="text" name="CTexto" class="form-control" id = "textModelo">
                    </div>
                    <div class="form-group">
                            <label> Año de la motocicleta<obligatorio>*</obligatorio></label><input type="text" size="20em" maxlength=4  name="anno" placeholder="ej: 1994" id="textAnno" class="textoAnno form-control" class="form-control">
                    </div>
                    <div class="form-group">
                            <label>Número de Motor<obligatorio>*</obligatorio></label><input type ="text" name="CTexto" class="form-control" id="textMotor">
                    </div>
            </form>
    </div>
    <div class="col-md-6">
            <form class="in-line" role="form">
                    <div class="form-group">
                            <label>Número de Chasis<obligatorio>*</obligatorio></label><input type ="text" name="CTexto" class="form-control" id="textChasis">
                    </div>
                    <div class="form-group">
                            <P><label>Placa</label></P>
                            <label> Tipo:   &nbsp &nbsp &nbsp &nbsp</label>
                            <input type ="radio"  id = "fija" value="fija" checked name="tipoDePlaca">Fija &nbsp &nbsp &nbsp  &nbsp  &nbsp &nbsp </input>
                            <input type ="radio"  id = "temp" value="temporal" name="tipoDePlaca"> Temporal  &nbsp &nbsp &nbsp  &nbsp  &nbsp &nbsp </input> 
                            <br> <label> Número:  &nbsp &nbsp &nbsp &nbsp</label> <input type ="text" name="CTexto" class="form-control" id="textPlaca"></br>
                    </div>
            </form>
        </div>
    </div>
        <button type="button" class="btn btn-success btn-lg active" id="buttonMotoGuardar" style="background-color: #5cb85c" >
                Guardar
        </button>
        <button type="button" class="btn btn-success btn-lg active noVisible" style="background-color: #ff9900" id="botonMotoUpdate">
                Guardar Cambios
        </button>
        <button type="button" class="btn btn-success btn-lg active noVisible" id="buttonMotoAdd" style="background-color: #5cb85c" >
                Agregar Registro
        </button>
    
    
</div>