<%-- 
    Document   : motoEstado
    Created on : Nov 28, 2016, 8:53:56 PM
    Author     : HP2000
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<div id="motoEstado" class="noVisible">
    <h3 id="motoId"></h3>
    <div class="row">
        <div class="col-md-6">
            <form class="in-line" role="form">
                    <div class="form-group">
                            <label> Daños Previos</label><textarea class="form-control" rows="5" id = "textDannos"></textarea>
                    </div>
                    <div class="form-group">
                            <label> Observaciones adicionales</label><textarea class="form-control" rows="5" id="textObservacion"></textarea>
                    </div>
            </form>
    </div>
    <div class="col-md-6">
            <form class="in-line" role="form">
                    <div class="form-group">
                            <label>  Kilometraje: <obligatorio>*</obligatorio></label> <input type ="text" name="CTexto" class="form-control" id = "textKm">
                    </div>
                    <div class="form-group">
                            <label>&nbsp  &nbsp  &nbsp &nbsp Cantidad de gasolina:   &nbsp &nbsp &nbsp &nbsp</label>
                            <input type ="radio"  id = "GasF" checked value="GasF" name="GasNivel"> F  &nbsp &nbsp &nbsp  &nbsp  </input>
                            <input type ="radio"  id = "Gas34" value="3/4" name="GasNivel"> 3/4  &nbsp &nbsp &nbsp  &nbsp   </input>
                            <input type ="radio"  id = "Gas12" value="1/2" name="GasNivel"> 1/2  &nbsp &nbsp &nbsp  &nbsp   </input>
                            <input type ="radio"  id = "Gas14" value="1/4" name="GasNivel"> 1/4  &nbsp &nbsp &nbsp  &nbsp </input>
                            <input type ="radio"  id = "GasE" value="GasE" name="GasNivel"> E</input></br>
                    </div>
                    <div class="form-group">
                            <label>&nbsp  &nbsp  &nbsp &nbsp Nivel de aceite:   &nbsp &nbsp &nbsp &nbsp</label>
                            <input type ="radio"  id = "alto" value="alto" checked name="nivelAceite"> Alto  &nbsp &nbsp &nbsp  &nbsp  &nbsp &nbsp </input>
                            <input type ="radio"  id = "medio" value="medio" name="nivelAceite"> Medio  &nbsp &nbsp &nbsp  &nbsp  &nbsp &nbsp </input>
                            <input type ="radio"  id = "bajo" value="bajo" name="nivelAceite"> Bajo</input></br>
                    </div>
                    
            </form>
        </div>
    </div>
    <button type="button" class="btn btn-success btn-lg active" style="background-color: #5cb85c" id="buttonEstadoAdd">
               Agregar
    </button>
    <button type="button" class="btn btn-success btn-lg active" style="background-color: #F22727" id="buttonEstadoBack">
               Regresar
    </button>
</div>