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
                                                <h5 id="empleadoActual"></h5>
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
                        
                          
                        <li><a data-toggle="tab" class="hide grow OpcionIndex dropdown-toggle" id="opcBusqueda" href="#Search">
                                <span class="glyphicon glyphicon-search"></span>Búsqueda</a>
                        </li>
                        
                        
                        <li>
                            <a class="grow OpcionIndex dropdown-toggle" id="MenuBusqueda" style="cursor:pointer" data-toggle="dropdown">
                                <span class="glyphicon  glyphicon-search"></span>
                                Búsquedas
                                <span class="caret"></span>
                            </a>
                            <ul class="dropdown-menu">
                              <li><a id="opcionesDeBusqueda4" class="btnBusq" href="#">
                                      <span class="glyphicon glyphicon-user"></span>&nbsp&nbsp&nbspCitas</a></li>
                            <div class="divider" style="background-color:#819FF7"></div>  
                            <li><a id="opcionesDeBusqueda1" class="btnBusq"href="#">
                                      <span class="glyphicon glyphicon-wrench"></span>&nbsp&nbsp&nbspClientes</a></li>
                            <div class="divider" style="background-color:#819FF7"></div>          
                            <li><a id="opcionesDeBusqueda2" class="btnBusq"href="#">
                                      <span class="glyphicon glyphicon-briefcase"></span>&nbsp&nbsp&nbspMotocicletas</a></li>
                            <div class="divider" style="background-color:#819FF7"></div>
          
                              <li><a id="opcionesDeBusqueda3" class="btnBusq"href="#">
                                       <span class="glyphicon glyphicon-th-list"></span>&nbsp&nbsp&nbspEmpleados</a></li>
                                 <div class="divider lastDivider" style="background-color:#819FF7"></div>   
                              <li><a id="opcionesDeBusqueda5" class="btnBusq"href="#">
                                       <span class="glyphicon glyphicon-list-alt"></span>&nbsp&nbsp&nbspUsuarios</a></li>   
                            </ul>
                        </li> 
                        
                       
                         <li>
                            <a class="grow OpcionIndex dropdown-toggle" id="MenuBusqueda" style="cursor:pointer" data-toggle="dropdown">
                                <span class="glyphicon  glyphicon-list-alt"></span>
                                Formularios
                                <span class="caret"></span>
                            </a>
                            <ul class="dropdown-menu">
                              <li><a id="opcionesDeBusquedad" class="btnBusq" href="#">
                                      <span class="glyphicon glyphicon-user"></span>&nbsp&nbsp&nbspCita nueva</a></li>
                            <div class="divider" style="background-color:#819FF7"></div>  
                            <li><a id="opcionesDeBusquedaa" class="btnBusq"href="#">
                                      <span class="glyphicon glyphicon-wrench"></span>&nbsp&nbsp&nbspCliente nuevo</a></li>
                            <div class="divider" style="background-color:#819FF7"></div>          
                            <li><a id="opcionesDeBusquedab" class="btnBusq"href="#">
                                      <span class="glyphicon glyphicon-briefcase"></span>&nbsp&nbsp&nbspMotocicleta nueva</a></li>
                            <div class="divider" id="dividerC"style="background-color:#819FF7"></div>
          
                              <li><a id="opcionesDeBusquedac" class="btnBusq"href="#">
                                       <span class="glyphicon glyphicon-th-list"></span>&nbsp&nbsp&nbspEmpleado nuevo</a></li>
                            </ul>
                        </li> 
                        
                        
                        
                        <li>
                            <a data-toggle="tab" class="grow OpcionIndex hide" id="formulariosBt">
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
                        
                        <li><a data-toggle="tab" class="grow OpcionIndex" id="opcHelp" href="#Help">
                             <span class="glyphicon glyphicon-question-sign"></span>Ayuda</a>
                            </li>
                        
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
                        <jsp:include page="ayuda.jsp"/>
                        
			<!--- #CERRAR SESION#--->

                        <div id="logout" class="tab-pane fade"  value="enviar"></div>
			
		</div>
    </div>
</body>

</html>