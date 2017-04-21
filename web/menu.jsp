
<%-- 
    Document   : index
    Created on : 10-oct-2016, 23:29:45
    Author     : cmadrigal
--%>
<!--
EJEMPLO MENU DESPLEGABLE - PROBAR!!!!



-->
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="shortcut icon" type="image/x-icon" href="imgs/favicon.ico"/>
        <title>SGA</title>
        <%@ include file="Imports.jspf" %>
    </head>
    <script>
        validacion();
    </script>
 <body onLoad="levantar()" id="theDocument">

    <div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class = "page-header">
					<h1>
						<p> &nbsp </p> &nbsp <img src="imgs/logo2.jpg" class="logo">
						<width = "80%" id="encabezado2"> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp 
						&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp SGA <small > Sistema de Gestión Automotriz</small>
                                                <br/>
                                                <h3 id="empleadoActual"></h3>
                                        </h1>
				</div>
			</div>           
        </div>
        
     <!--   <div class="btn-group">
 
  <div class="btn-group">
    <button type="button" class="btn btn-default dropdown-toggle"
            data-toggle="dropdown">
            Formularios
      <span class="caret"></span>
    </button>
    <ul class="dropdown-menu">
      <li><a href="#">Agregar cliente nuevo</a></li>
      <li><a href="#">Agregar empleado nuevo</a></li>
      <li><a href="#">Agregar motocicleta nueva</a></li>
      <li><a href="#">Agregar cita nueva</a></li>
    </ul>
  </div>
</div>-->
        
            <nav class="navbar navbar-dark bg-primary" style="background-color: #e3f2fd; color:#fff ">
                <div class="container-fluid">
                    <ul id="navbar" class="nav navbar-nav">
                        <li><a data-toggle="tab" class="grow OpcionIndex" id="opcAgenda" href="#Agenda">
                             <span class="glyphicon glyphicon-calendar"></span>Agenda</a>
                            </li>
                        
                        <li><a data-toggle="tab" class="grow OpcionIndex" id="opcBusqueda" href="#Search">
                                <span class="glyphicon glyphicon-search"></span>Búsqueda</a>
                            </li>
                            
                        <li>
                            <a data-toggle="tab" class="grow OpcionIndex" id="formulariosBt">
                                <span class="glyphicon glyphicon-list-alt"></span>Formularios</a>
                        </li>    

                            <li><a data-toggle="tab" class="grow OpcionIndex OpcDinamica" id="opcCliente" href="#Clients">
                                    <span class="glyphicon glyphicon-user"></span>Clientes</a>
                                </li>

                                <li><a data-toggle="tab" class="grow OpcionIndex OpcDinamica" id="opcMoto" href="#Moto">
                                 <span class="glyphicon glyphicon-wrench"></span>Motocicletas</a>
                            </li>

                            <li><a data-toggle="tab" class="grow OpcionIndex OpcDinamica" id="opcEmpleado" href="#Employee">
                                <span class="glyphicon glyphicon-briefcase"></span>Empleados</a>
                            </li>

                            <li><a data-toggle="tab" class="grow OpcionIndex OpcDinamica" id="opcCitas" href="#Citas">
                                 <span class="glyphicon glyphicon-th-list"></span>Citas</a>
                            </li>

                        <li><a data-toggle="tab" id="botonresultados" href="#Results" style="display:none"></a> </li>
                        
                        
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li> <a data-toggle="tab" id="botonLogOut" href="#Logout"> 
                                <span class="glyphicon glyphicon-log-out"></span>&nbsp Cerrar sesión</a>
                        </li>
                    </ul>
                </div>
            </nav>
        
		<div class="tab-content" >
			<jsp:include page="Clientes.jsp"/>
			<jsp:include page="Motos.jsp"/>	                                                  
			<jsp:include page="Busqueda.jsp"/>	
			<jsp:include page="Empleados.jsp"/>	
			<jsp:include page="Resultados.jsp"/>
                        <jsp:include page="Citas.jsp"/>
                        <jsp:include page="Agenda.jsp"/>
                        <jsp:include page="popup.jsp"/>
                        
			<!--- #CERRAR SESION#--->

                        <div id="logout" class="tab-pane fade"  value="enviar"></div>
			
		</div>
    </div>
</body>


<%-- 
    Document   : index
    Created on : 10-oct-2016, 23:29:45
    Author     : cmadrigal
--%>
<!--
EJEMPLO MENU DESPLEGABLE - PROBAR!!!!



-->
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="shortcut icon" type="image/x-icon" href="imgs/favicon.ico"/>
        <title>SGA</title>
        <%@ include file="Imports.jspf" %>
    </head>
    <script>
        validacion();
    </script>
 <body onLoad="levantar()" id="theDocument">

    <div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class = "page-header">
					<h1>
						<p> &nbsp </p> &nbsp <img src="imgs/logo2.jpg" class="logo">
						<width = "80%" id="encabezado2"> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp 
						&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp SGA <small > Sistema de Gestión Automotriz</small>
                                                <br/>
                                                <h3 id="empleadoActual"></h3>
                                        </h1>
				</div>
			</div>           
        </div>

        
            <nav class="navbar navbar-dark bg-primary" style="background-color: #e3f2fd; color:#fff ">
                <div class="container-fluid">
                    <ul id="navbar" class="nav navbar-nav">
                        
                        <li><a data-toggle="tab" class="grow OpcionIndex" id="opcAgenda" href="#Agenda">
                             <span class="glyphicon glyphicon-calendar"></span>Agenda</a>
                        </li>
                        
                            
                            
                        <li style="cursor:pointer">
                            <a data-toggle="dropdown" class="grow OpcionIndex dropdown-toggle" id="">
                             <span class="glyphicon glyphicon-search"></span>Búsquedas<span class="caret"></span></a>
                            <ul class="dropdown-menu" style="background-color:#e3f2fd; font-size:1.1em;">
                                <li>
                                   <a data-toggle="tab" class="grow OpcionIndex menuForm2" id="Busqueda1" href="#Search">

                                        <span class="glyphicon glyphicon-user"></span>&nbsp&nbspBuscar Clientes
                                    </a>
                                </li>
                                <div class="divider" style="background-color: #34A7C1"></div>
                                <li>
                                    <a data-toggle="tab" class="grow OpcionIndex menuForm2" id="Busqueda2" href="#Search">

                                        <span class="glyphicon glyphicon-wrench"></span>&nbsp&nbspBuscar Motocicletas
                                    </a>
                                </li>
                                <div class="divider " style="background-color: #34A7C1"></div>
                                <li>
                                   <a data-toggle="tab" class="grow OpcionIndex menuForm2" id="Busqueda3" href="#Search">
                                        <span class="glyphicon glyphicon-briefcase"></span>&nbsp&nbspBuscar Empleados
                                    </a>
                                </li>
                                 <div class="divider" style="background-color: #34A7C1"></div>
                                <li>
                                    <a data-toggle="tab" class="grow OpcionIndex menuForm2" id="Busqueda4" href="#Search">
                                        <span class="glyphicon glyphicon-th-list"></span>&nbsp&nbspBuscar Citas
                                    </a>
                                </li>
                          </ul>
                        </li>    

                            
                            
                            
                            
                            
                            
                            
                             <li>
                            <a data-toggle="dropdown" class="grow OpcionIndex dropdown-toggle" id="formulariosBt">
                             <span class="glyphicon glyphicon-list-alt"></span>Formularios<span class="caret"></span></a>
                            <ul class="dropdown-menu" style="background-color:#e3f2fd; font-size:1.1em;">
                                <li>
                                     <a data-toggle="tab" class="grow OpcionIndex " id="Form1" href="#Clients">
                                        <span class="glyphicon glyphicon-user"></span>&nbsp&nbspCliente nuevo
                                    </a>
                                </li>
                                <div class="divider" style="background-color: #34A7C1"></div>
                                <li>
                                     <a data-toggle="tab" class="grow OpcionIndex menuForm2" id="Form2" href="#Moto">
                                        <span class="glyphicon glyphicon-wrench"></span>&nbsp&nbspMotocicleta nueva
                                    </a>
                                </li>
                                <div class="divider " style="background-color: #34A7C1"></div>
                                <li>
                                     <a data-toggle="tab" class="grow OpcionIndex menuForm2" id="Form3" href="#Employee">
                                        <span class="glyphicon glyphicon-briefcase"></span>&nbsp&nbspEmpleado nuevo
                                    </a>
                                </li>
                                 <div class="divider" id="divForm3"style="background-color: #34A7C1"></div>
                                <li>
                                     <a data-toggle="tab" class="grow OpcionIndex menuForm2" id="Form4" href="#Citas">
                                        <span class="glyphicon glyphicon-th-list"></span>&nbsp&nbspCita nueva
                                    </a>
                                </li>
                          </ul>
                        </li>    
    
                            
                   

                        
                        
                        <li><a data-toggle="tab" id="botonresultados" href="#Results" style="display:none"></a> </li>
                        
                        
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li> <a data-toggle="tab" id="botonLogOut" href="#Logout"> 
                                <span class="glyphicon glyphicon-log-out"></span>&nbsp Cerrar sesión</a>
                        </li>
                    </ul>
                </div>
            </nav>
        
		<div class="tab-content" >
			<jsp:include page="Clientes.jsp"/>
			<jsp:include page="Motos.jsp"/>	                                                  
			<jsp:include page="Busqueda.jsp"/>	
			<jsp:include page="Empleados.jsp"/>	
			<jsp:include page="Resultados.jsp"/>
                        <jsp:include page="Citas.jsp"/>
                        <jsp:include page="Agenda.jsp"/>
                        <jsp:include page="popup.jsp"/>
                        
			<!--- #CERRAR SESION#--->

                        <div id="logout" class="tab-pane fade"  value="enviar"></div>
			
		</div>
    </div>
</body>

>>>>>>> 5081e1b6d4832d91088e725f546ef36d83f478df
</html>