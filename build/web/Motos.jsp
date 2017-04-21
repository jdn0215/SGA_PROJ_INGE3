    <%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<div id="Moto" class="tab-pane fade">
    <div class="row">
        <div class="col-md-12">
                <h3 class="text-center" id="tituloMoto2">
                        Formulario de agregación de motocicleta
                </h3>
        </div>
    </div>
    <div class="container">
          <!---alert alert-success  --->
          <div class="noVisible" id="_successM">
            <strong>Success!</strong> 
          </div>
           <!---alert alert-info"  --->
          <div class="noVisible" id="_infoM">
            <strong>Info!</strong> 
          </div>
            <!---alert alert-warning  --->
          <div class="noVisible" id="_warningM">
            <strong>Warning!</strong> 
          </div>
             <!---alert alert-danger --->
          <div class="noVisible" id="_dangerM">
            <strong>Danger!</strong>
          </div>
        </div>
    <div class="form-group">
        <label><especificacion>*</especificacion><small>Campos obligatorios</small></label>
    </div>
    <jsp:include page="moto.jsp"/>
    <jsp:include page="motoEstado.jsp"/>
        
</div>
