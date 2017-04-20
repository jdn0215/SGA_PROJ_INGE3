/* global $id, DELETEEMPLEADO, HORASERVER, CLIENTEBUSCADO, $Proxy, cargarMotos, agenda, recuperarContrasenna */

const events=()=>{
    $(".OpcDinamica").hide();
    usuarioActual=retrieve("usuarioactual");
    getEmpleado(usuarioActual.id);
    indexEvents();
    BusquedaEvents();
    ClientesEvents();
    EmpleadosEvents();
    MotosEvents();
    citasEvents();
  /* $( window ).bind( 'beforeunload',()=>{
          logout();
        return false;
    });*/
    $("#popCancel").click(()=>{$id("pop").style="display:none";});
    calendarEvents();
    $("#formulariosBt").click(()=>{
        if($(".OpcDinamica").is(':hidden')){
           $(".OpcDinamica").show('fast'); 
           $($("#formulariosBt")[0].childNodes[2]).replaceWith("Ocultar Formularios");
            if(!usuarioActual.isAdmin)
                $("#opcEmpleado").hide();
        }else{
            $(".OpcDinamica").hide('fast');
            $($("#formulariosBt")[0].childNodes[2]).replaceWith("Formularios");
        }
    });
    if(!usuarioActual.isAdmin){
        $("#buttonGuardarEmpleado").remove("#buttonGuardarEmpleado");
        $("#buttonUpDateEmpleado").remove("#buttonUpDateEmpleado");
        $("#buttonDeleteEmpleado").remove("#buttonDeleteEmpleado");
        $("#buttonCitasModificar").remove("#buttonCitasModificar");
        
    }
    $(".OpcDinamica").mouseover(e=>{
        switch(e.target.id){
            case "opcCliente": return $($("#opcCliente")[0].childNodes[2]).replaceWith("Registrar un nuevo cliente");
            case "opcMoto": return $($("#opcMoto")[0].childNodes[2]).replaceWith("Registrar un nuevo motocicleta");
            case "opcEmpleado": return $($("#opcEmpleado")[0].childNodes[2]).replaceWith("Registrar a un empleado");
            case "opcCitas": return $($("#opcCitas")[0].childNodes[2]).replaceWith("Registrar una cita nueva");    
        }
    });
    $(".OpcDinamica").mouseleave(e=>{
        switch(e.target.id){
            case "opcCliente": return $($("#opcCliente")[0].childNodes[2]).replaceWith("Clientes");
            case "opcMoto": return $($("#opcMoto")[0].childNodes[2]).replaceWith("Motocicletas");
            case "opcEmpleado": return $($("#opcEmpleado")[0].childNodes[2]).replaceWith("Empleados");
            case "opcCitas": return $($("#opcCitas")[0].childNodes[2]).replaceWith("Citas");    
        }
    });
};

const calendarEvents=()=>{
  $("#agendaIzquierda").click(()=>agenda.moverIzq());  
  $("#agendaDerecha").click(()=>agenda.moverDer());  
};


const indexEvents=()=>{
    
    $(".OpcDinamica").mouseover(e=>{
       
    });
    
    $("#opcCliente").click(()=>cambioDeContexto(1));
    $("#opcMoto").click(()=>cambioDeContexto(2));
    $("#opcEmpleado").click(()=>cambioDeContexto(3));
    $("#opcCitas").click(()=>cambioDeContexto(4));
    $("#opcAgenda").click(()=>cambioDeContexto(6));
    $("#opcBusqueda").click(()=>cambioDeContexto(5));
    $("#opcReportes").click(()=>cambioDeContexto(7));
    $("#botonLogOut").click(()=>logout()); 
    cambioDeContexto(6);
   
};
const BusquedaEvents=()=>{
    $(".btnBusq").click(e=>{
        $(".opcBusq").hide();
        $(".inputBusq").val("");
        switch(e.target.id){
            case "opcionesDeBusqueda1":
                $("#aclaracionBusqueda").html(document.createTextNode("Se puede realizar la búsqueda por la identificación del cliente o por el nombre."));
                return $("#BCLIENTETR").show("fast");
            case "opcionesDeBusqueda2":
                  $("#aclaracionBusqueda").html(document.createTextNode("Se puede realizar la búsqueda por el número de chasis, motor,placa, placa temporal o identificación del cliente."));
                return $("#BMOTOTR").show("fast");
            case "opcionesDeBusqueda3":
                  $("#aclaracionBusqueda").html(document.createTextNode("Se puede realizar la búsqueda por la identificación del empleado o por el nombre."));
                 return $("#BEMPLEADOTR").show("fast");
            case "opcionesDeBusqueda4":
                  $("#aclaracionBusqueda").html(document.createTextNode("Se puede realizar la búsqueda por el número de proforma o de orden, la identificación del cliente, o el número de motor de la motocicleta."));
                return $("#BCITATR").show("fast");
        }
    });
    $(".opcBusq").hide();
    $("#BTextCliente").keypress(()=>buscarClienteConEnter());
    $("#buttonBuscarc").click(()=>buscarCliente());
    $("#buttonBuscarM").click(()=>buscarMoto());
    $("#buttonBuscaEmpleados").click(()=>buscarEmpleados());
    $("#buttonBuscaCita").click(()=>buscaCitaAccion());    
};
const ClientesEvents=()=>{
    $("#CF").click(()=>cambioId());
    $("#CJ").click(()=>cambioId());
    $("#P").click(()=>cambioId());
    $("#textCedula1").keyup(()=>idJump());
    $("#textCedula2").keyup(()=>idJump());
    $("#textCedula3").keyup(()=>idJump());
    $("#comboProv").change(()=>dispararCantones());
    $("#comboCant").change(()=>dispararDistr());
    llenarMes();
    $("#_mes").click(()=>llenarDia());
    $("#_dia").change(()=>calcEdad());
    $("#anno").keyup(()=>calcEdad());
    $("#buttonGuardar").click(()=>addCliente());
    $("#buttonClientesHistorial").click(()=>motosDelCliente());
    $("#buttonClienteModificar").click(()=>updateCliente());
};
const EmpleadosEvents=()=>{
    $("#CF2").click(()=>cambioId2());
    $("#CJ2").click(()=>cambioId2());
    $("#P2").click(()=>cambioId2());
    $("#buttonGuardarEmpleado").click(()=>addEmpleado());
    $("#buttonGuardarUsuario").click(()=>addUsuario());
    $("#buttonCancelUsuario").click(()=>clearEmpleados());
    $("#textCedula12").keyup(()=>idEmpleadoJump());
    $("#textCedula22").keyup(()=>idEmpleadoJump());
    $("#textCedula32").keyup(()=>idEmpleadoJump());
    $("#buttonDeleteEmpleado").click(
        ()=>popUp("CONFIRMACIÓN DE SEGURIDAD",DELETEEMPLEADO,"SI ELIMINA AL EMPLEADO SE PERDERA CUALQUIER REGISTRO RELACIONADO CON EL (citas, registro de citas, usuarios), PROCURE UTILIZAR ESTA FUNCION SOLO SI EL EMPLEADO HA SIDO REGISTRADO DE FORMA INCORRECTA")
    );
};
const MotosEvents=()=>{
    $("#MtextCedula").keyup(()=>existeCliente());
    $("#buttonMotoGuardar").click(()=>addMoto());
    $("#buttonMotoAdd").click(()=>cambioDeContextoMoto(true));
    $("#buttonEstadoBack").click(()=>cambioDeContextoMoto(false));
    $("#botonMotoUpdate").click(()=>updateMoto());
    $("#buttonEstadoAdd").click(()=>addEstado());
};
const eventLogin=()=>{
    let legal=localStorage.getItem("legal");
    legal===null||legal==="false"?
        mensaje("Intento de ingreso no autorizado. Comuniquese con un administrador",4,3)
        :clearMensaje();
    $("#nlogin").submit(()=>nuevologin());    
    $("#textUsuario").keypress(()=>loginconenter());
    $("#textPssw").keypress(()=>loginconenter());
    $("#buttonSubmit").click(()=>login());
     $("#olvidoContrasenna").click(()=>{
         cambioUsuario(); 
    });

};

const citasEvents=()=>{
    let initComboYear=combo=>{
        let currentYear=HORASERVER.getFullYear();
        combo.clear;
        combo.length=2;
        combo.options[0].text=currentYear;
        combo.options[1].text=(currentYear+1);
    };
    llenarMes("_mesCitas","_diaCitas",HORASERVER.getMonth());
    $("#_mesCitas").click(()=>llenarDia("_mesCitas","_diaCitas",HORASERVER));
    $id("_mesCitas").click();
    llenarMes("_mesCitas2","_diaCitas2",HORASERVER.getMonth());
    $("#_mesCitas2").click(()=>llenarDia("_mesCitas2","_diaCitas2",HORASERVER));
    $id("_mesCitas2").click();
    llenarMes("_mesCitas3","_diaCitas3",HORASERVER.getMonth());
    $("#_mesCitas3").click(()=>llenarDia("_mesCitas3","_diaCitas3",HORASERVER));
    $id("_mesCitas3").click();
    $("#clienteCita").keyup(()=>{
        existeCliente("tituloCitasCliente","clienteCita",5,cargarMotos);
    });
    $date();
    initComboYear($id("annoCita"));
    initComboYear($id("annoCita2"));
    initComboYear($id("annoCita3"));
    $("#buttonGuardarCita").click(()=>addCita());
    $("#buttonCitasModificar").click(()=>upDateCita());
    $("#_mesCitas").change(()=>verificarDisponibilidad());
    $("#_mesCitas2").change(()=>verificarDisponibilidad());
    $("#_diaCitas2").change(()=>verificarDisponibilidad());
    $("#_diaCitas").change(()=>verificarDisponibilidad());
    $("#annoCita").change(()=>{verificarDisponibilidad();setMesDia("annoCita","_mesCitas","_diaCitas");});
    $("#annoCita2").change(()=>verificarDisponibilidad(),setMesDia("annoCita2","_mesCitas2","_diaCitas2"));
    $("#annoCita3").change(()=>setMesDia("annoCita3","_mesCitas3","_diaCitas3"));
    $("#minCita").change(()=>verificarDisponibilidad());
    $("#minCita2").change(()=>verificarDisponibilidad());
    $("#citaCumplida").change(()=>{
        let _div=$id("divSalidaCita");
        _div.className="form-group";
        _div.style="border:solid green 2px;background-color:rgba(100%,100%,100%,.3);";
    });
    $("#citaPendiente").change(()=>_div=$id("divSalidaCita").className="noVisible");
    $("#citaCancelada").change(()=>_div=$id("divSalidaCita").className="noVisible");
    $("#EnProceso").change(()=>_div=$id("divSalidaCita").className="noVisible");
    

};
const getEmpleado=(arg)=>{
    if(arg === null || arg === undefined){
        logout(false);
    }
    $Proxy.proxy($$("arg0",arg),"buscaEmpleadoByUser","EMPLEADO",res=>{
       if(res.length === 0){
       logout(false);
       }else{
           empleadoActual=res[0];
           $("#empleadoActual")[0].innerHTML=cut(empleadoActual.nombre);
       }
   });  
};


const setMesDia=(a,b,c)=>{
   if(HORASERVER.getFullYear() == $("#"+a).val()){
        llenarMes(b,c,HORASERVER.getMonth());
       $("#"+b).click(()=>llenarDia(b,c,HORASERVER));
   } else{
        llenarMes(b,c);
       $("#"+b).click(()=>llenarDia(b,c));
   } 
};
