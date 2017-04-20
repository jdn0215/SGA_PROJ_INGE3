
package Control;

import Model.*;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.typeadapters.RuntimeTypeAdapterFactory;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Daniel Salas
 */
@WebServlet(name = "servlet", urlPatterns = {"/servlet"})
public class servlet extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {
 
                response.setContentType("text/html;charset=UTF-8");
                request.setCharacterEncoding("UTF-8");
                try (PrintWriter out = response.getWriter()) {
                   response.setContentType("text/xml");
                   //registro de subtidos
                   RuntimeTypeAdapterFactory<Jsonable> rta = RuntimeTypeAdapterFactory.of(Jsonable.class,"_class")
                    .registerSubtype(Cliente.class,"Cliente")
                    .registerSubtype(Zona.class,"Zona")
                    .registerSubtype(Usuario.class,"Usuario")
                    .registerSubtype(Estado.class,"Estado")
                    .registerSubtype(Moto.class,"Moto")
                    .registerSubtype(Empleado.class,"Empleado")
                    .registerSubtype(Cita.class,"Cita")
                    .registerSubtype(Observacion.class,"Observacion")
                    .registerSubtype(Gasto.class,"Gasto")
                   ;
                   //configuracion formato de fecha
                   Gson gson = new GsonBuilder().registerTypeAdapterFactory(rta).setDateFormat("MM/dd/yyyy HH:mm").create();
                   String json,json2,p1,p2,dato;
                   int i1,i2,dato2;
                   String accion = request.getParameter("action");
                   Moto moto;
                   Observacion obs;
                   Cliente cliente;
                   Usuario user;
                   Gasto g;
                   List<? extends Object>clientes;
                   List<? extends Object>txts;
                   Moto act;
                   Empleado emp;
                   Cita cita;
                   Estado est;
                       switch(accion){
                       case "addCliente":
                           json=request.getParameter("CLIENTE");
                           cliente=gson.fromJson(json, Cliente.class);
                           json=gson.toJson(Modelo.AddCliente(cliente));
                           out.write(json);
                       break;
                       case "getProv":
                           txts=Modelo.getProvincias();
                           json=gson.toJson(txts);
                           out.write(json);
                       break;
                       case "BMPC":
                           json=request.getParameter("CLIENTE");
                           json=json.replace("\"","");
                           json2=gson.toJson(Modelo.buscaMotosByCliente(json));
                           out.write(json2);
                       break;
                       case "Date":
                            json=gson.toJson(new Date().toString());
                            out.write(json);
                       break;    
                       case "getCant":
                            json=request.getParameter("PROV");
                            i1=gson.fromJson(json, Integer.class);
                            txts=Modelo.getCantones(i1);
                            json=gson.toJson(txts);
                            out.write(json);
                       break;
                       case "getDistr":
                           json=request.getParameter("PROV");
                           i1=gson.fromJson(json, Integer.class);
                           json=request.getParameter("CANT");
                           i2=gson.fromJson(json, Integer.class);
                           txts=Modelo.getDistritos(i1, i2);
                           json=gson.toJson(txts);
                           out.write(json);
                       break;
                       case "login":
                          String jsonus=request.getParameter("USER");
                          user=gson.fromJson(jsonus,Usuario.class);
                          json=gson.toJson(Modelo.getUsuario(user));
                          out.write(json);
                       break;
                       case "updateCliente":
                           json=request.getParameter("CLIENTE");
                           cliente=gson.fromJson(json, Cliente.class);
                           json=gson.toJson(Modelo.updateCliente(cliente));
                           out.write(json);
                        break;
                       case "addMoto":
                           json=request.getParameter("MOTO");
                           moto=gson.fromJson(json,Moto.class);
                           json=gson.toJson(Modelo.addMoto(moto));
                           out.write(json);
                        break;
                       case "busqueda":
                           json=request.getParameter("DATO");
                           json2=request.getParameter("TIPO");
                           dato=gson.fromJson(json,String.class);
                           dato2=gson.fromJson(json2, Integer.class);//representa el tipo de busqueda 2=clientes 1=motos 3=empleados
                           switch(dato2){
                               case 2:  json=gson.toJson(Modelo.searchClientes(dato.toUpperCase()));break;
                               case 3:  json=gson.toJson(Modelo.searchEmpleados(dato.toUpperCase()));break;
                               default: json=gson.toJson(Modelo.buscarMoto(dato.toUpperCase()));
                           }
                           out.write(json);
                       break;
                       
                       case "addEmpleado":
                           json=request.getParameter("EMPLEADO");
                           emp=gson.fromJson(json, Empleado.class);
                           json=gson.toJson(Modelo.addEmpleado(emp, null));
                           out.write(json);
                       break;
                       case "addUser":
                           json=request.getParameter("USUARIO");
                           user=gson.fromJson(json,Usuario.class);
                           json=gson.toJson(Modelo.addUsuario(user));
                           out.write(json);
                       break;
                       case "empleadosActivos":
                           json=gson.toJson(Modelo.getEmpleadosActivos());
                           out.write(json);
                       break;
                       case "citasDelMes":
                           i1=Integer.parseInt(request.getParameter("ANNO"))-1900;
                           i2=Integer.parseInt(request.getParameter("MES"))-1;
                           Cita c=new Cita();
                           c.setEntrada(new Date(i1,i2,1));
                           c.setPrometida(new Date(i1,i2+1,1));
                           json=gson.toJson(Modelo.getcitasDelMes(c));
                           out.write(json);
                       break;
                       case "updateMoto":
                           json=request.getParameter("MOTO");
                           act=gson.fromJson(json,Moto.class);
                           json=gson.toJson(Modelo.updateMoto(act));
                           out.write(json);
                       break;
                       case "getUserByEmpleado":
                           json=request.getParameter("IDEMPLEADO");
                           user=gson.fromJson(json, Usuario.class);
                           json=gson.toJson(Modelo.getUserByEmpleado(user));
                           out.write(json);
                       break;
                       case "DELETEEMPLEADO":
                           json=request.getParameter("EMPLEADO");
                           json=json.substring(1,json.length()-1);
                           json=gson.toJson(Modelo.deleteEmpleado(json));
                           out.write(json);
                       break;
                       case "buscaEmpleadoByUser":
                           json=request.getParameter("arg0");
                           json=json.substring(1,json.length()-1);
                           json=gson.toJson(Modelo.searchEmpleadosByUser(json));
                           out.write(json);
                       break;    
                       case "cambioPassword":
                           json=request.getParameter("arg0");
                           json=json.substring(1,json.length()-1);
                           
                           json2=request.getParameter("arg1");
                           json2=json2.substring(1,json2.length()-1);
                           
                           p2=request.getParameter("arg2");
                           p2=p2.substring(1,p2.length()-1);
                           
                           json=gson.toJson(Modelo.changePassWord(json,json2,p2));
                           out.write(json);
                           break;
                       case "addCita":
                           json = request.getParameter("CITA");
                           cita = gson.fromJson(json,Cita.class);
                           if(cita.getSalida().getYear()<cita.getEntrada().getYear())
                               cita.setSalida(null);
                           int res =Modelo.AddCita(cita);
                           if(res==1){
                             json = request.getParameter("Obs");
                             obs = gson.fromJson(json,Observacion.class);
                             Modelo.addObservacion(obs);
                           }
                           out.write(gson.toJson(res));                           
                           break;
                       case "updateCita":
                           json = request.getParameter("CITA");
                           cita = gson.fromJson(json,Cita.class);
                           if(cita.getSalida().getYear()<cita.getEntrada().getYear())
                               cita.setSalida(null);
                           i1 =Modelo.updateCita(cita);
                           if(i1==1){
                             json = request.getParameter("OBSV");
                             obs = gson.fromJson(json,Observacion.class);
                             Modelo.addObservacion(obs);
                           }
                           out.write(gson.toJson(i1));            
                           break;
                       case "getEmpleadosLibres":
                           json =request.getParameter("arg0");
                           cita = gson.fromJson(json, Cita.class);
                           json = gson.toJson(Modelo.getEmpleadosLibres(cita));
                           out.write(json);
                           break;
                       case "saveEstado":
                           json=request.getParameter("ESTADO");
                           est=gson.fromJson(json,Estado.class);
                           json=gson.toJson(Modelo.addEstado(est));
                           out.write(json);
                           break;
                       case "buscaCitaProforma":
                           json = request.getParameter("arg1");
                           i1 = gson.fromJson(json, Integer.class);
                           json = gson.toJson(Modelo.buscaCitaProforma(i1));
                           out.write(json);
                           break;
                       case "buscaCitaObs":
                           json = request.getParameter("arg1");
                           i1 = gson.fromJson(json, Integer.class);
                           json = gson.toJson(Modelo.buscaCitaObs(i1));
                           out.write(json);
                           break;
                       case "buscaCita":
                           json = request.getParameter("arg1");
                           json=json.replace("\"","");
                           json = gson.toJson(Modelo.buscacita(json));
                           out.write(json);
                           break;
        }
                       
                            
                }catch(Exception e){
                    System.out.println(e);
                }
        }
    
    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "JDSM";
    }// </editor-fold>

}
