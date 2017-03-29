<%-- 
    Document   : login
    Created on : 12/10/2016, 01:46:52 PM
    Author     : Luis
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head lang="en">
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>SGA</title>
        <link rel="shortcut icon" type="image/x-icon" href="imgs/favicon.ico"/>
       <%@ include file="Imports.jspf" %>
      
    </head>
   <body onLoad="eventLogin();">

    <div class="container-fluid">
	<div class="row">
		<div class="col-md-12">
			<div class="page-header">
				<h1><p> &nbsp </p> &nbsp <img src="imgs/logo2.jpg" class="logo"></h1>
                        </div>
                        
                        <div class = "container"></div><h1>Sistema de Gestión Automotriz<small>&nbsp &nbsp &nbsp (SGA)</small></h1></div>
                        
                        <div class="container"> </div>
                        
			<form  class="in-line borderlog" role="form" id = "nlogin" action="index.jsp" method="post">
                            
                            <div class="container">
                                <!---alert alert-success  --->
                                <div class="noVisible" id="_successIndex">
                                  <strong>Success!</strong> 
                                </div>
                                 <!---alert alert-info"  --->
                                <div class="noVisible" id="_infoIndex">
                                  <strong>Info!</strong> 
                                </div>
                                  <!---alert alert-warning  --->
                                <div class="noVisible" id="_warningIndex">
                                  <strong>Warning!</strong> 
                                </div>
                                   <!---alert alert-danger --->
                                <div class="noVisible" id="_dangerIndex">
                                  <strong>Danger!</strong>
                                </div>
                            </div>
                              
                            <div class="conta">	
				<div  class="form-group"><br><H2><B>Login</B></H2></br>
					<label class="col-sm-2 control-label"><span class="glyphicon glyphicon-user"></span>Usuario</label>
					<div class="col-md-4"><input type="text" size = "20"class="form-control" id="textUsuario"></div>
				</div>
                            </div>
                            <div class="conta">
                                <div class="form-group">

                                        <label class="col-sm-2 control-label"><span class="glyphicon glyphicon-lock"></span>
                                                Contraseña
                                        </label>
                                        <div class="col-md-4">
                                                <input type="password" class="form-control" id="textPssw">
                                        </div>
                                </div>
                             </div>
                             <div class="conta">
				<div class="form-group">
					<div class="col-sm-offset-2 col-sm-10">
						 
                                            <button type="button" class="btn btn-success" id = "buttonSubmit">
                                                <span class="glyphicon glyphicon-log-in"></span>
							Iniciar sesión
						</button>
                                            <a id="olvidoContrasenna" style="cursor:pointer;" data-title="Recuperación de constraseña">¿Olvidó su contraseña?</a>

					</div>
				</div>

                            </div>
			</form>
                        
		</div>
	</div>
</div>

  </body> 
</html>



