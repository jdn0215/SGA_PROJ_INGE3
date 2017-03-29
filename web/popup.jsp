<%-- 
    Document   : popup
    Created on : 02/02/2017, 10:52:28 PM
    Author     : jdani
--%>
 <%@page contentType="text/html" pageEncoding="UTF-8"%>
<div class="container popup">
 
  <!-- Modal -->
  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title" id="popHDR">Modal Header</h4>
        </div>
        <div class="modal-body">
          <p id="popMj">Some text in the modal.</p>
        </div>
          
          
          <div class="conta">	
            <div  class="form-group"></br>
                    <label class="col-sm-2 control-label"><span class="glyphicon glyphicon-user"></span>Usuario</label>
                    <div class="col-md-4">
                        <input type="text" size = "20"class="form-control" id="poptextUsuario">
                    </div>
            </div>
         </div>
         <div class="conta">
        <div class="form-group">

                <label class="col-sm-2 control-label"><span class="glyphicon glyphicon-lock"></span>
                        Contraseña
                </label>
                <div class="col-md-4">
                        <input type="password" class="form-control" id="poptextPssw">
                </div>
        </div>
        </div> 
        <br/><br/>
        <div class="modal-footer">
            <button type="button" class="btn btn-success btn-lg active" id="popbuttonSubmit">Confirmar</button>
          <button type="button" class="btn btn-success btn-lg active" data-dismiss="modal" id="closepopup">Cancelar</button>
        </div>
      </div>
      
    </div>
  </div>
  
</div>