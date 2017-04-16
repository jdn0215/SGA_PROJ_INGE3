/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package database;

import Model.Cita;
import Model.Cliente;
import Model.Empleado;
import Model.Moto;
import Model.Estado;
import Model.Gasto;
import Model.Mensaje;
import Model.Observacion;
import Model.Usuario;
import Model.Zona;
import java.util.Date;

/**
 *
 * @author HP2000
 */
public class QueryController {
    static String FLOAT(double f){
        return Double.toString(f).replaceAll(",", ".");
    }
    static String DATE(Date d){
        if(d==null)return "null";
        String fullY=Integer.toString(d.getYear()+1900),
        date=fullY+"-"+(Integer.toString(d.getMonth()+1))+"-"+Integer.toString(d.getDate());
        return date;
    }
    static String DATE_TIME(Date d){
        if(d==null)return "null";
        String out=DATE(d)+" ";
        out+=(d.getHours()+":"+d.getMinutes()+":00");
        return out;
    }
    public QueryController(){
    
    }
    @SuppressWarnings ("null")
    public String buildQuery(Object o,Query query){
        if(o==null){}
        switch(o.getClass().getSimpleName()){
            case "Cliente" : return buildQueryCliente((Cliente)o,query);
            case "Moto"    : return buildQueryMoto((Moto)o,query);
            case "Estado"  : return buildQueryEstado((Estado)o,query);
            case "Zona"    : return buildQueryZona((Zona)o,query);
            case "Usuario" : return buildQueryUsuario((Usuario)o,query);
            case "Empleado": return buildQueryEmpleado((Empleado)o,query);
            case "Mensaje" : return buildQueryMensaje((Mensaje)o,query);
            case "Cita"    : return buildQueryCita((Cita)o,query);
            case "Observacion": return buildQueryObservacion((Observacion)o,query);
            case "Gasto": return buildQueryGasto((Gasto)o,query);
            default: 
                return "";
        }
    }
    @SuppressWarnings ("null")
    
    String buildQueryGasto(Gasto g,Query query){
        switch(query.name()){
            case "rg_crearGastos":
                return String.format(query.query,g.getProforma(),g.getDescripcion(),FLOAT(g.getPrecio()),DATE(g.getFecha()),g.getMotormoto());
            case "rg_gastosDeProforma":
                return String.format(query.query,g.getProforma());
            case "rg_gastospormotocicleta":
                return String.format(query.query,g.getMotormoto());
            default: return "";
            
        }
    }    
    String buildQueryCliente(Cliente c,Query query){
       
        switch(query.name()){
            case "FIC":
               return String.format(query.query,
                             c.getId(),c.getTipoId(),c.getNombre(),c.getEdad(),
                             c.getCorreo(),c.getTel(),c.getTel2(),c.getOcupacion(),
                             DATE(c.getNacimiento()),c.getZona().getProvincia(),c.getZona().getCanton(),c.getZona().getDistrito()
                            );
            case "FUDC":
                return String.format(query.query, 
                             c.getNombre(),c.getEdad(),c.getCorreo(),c.getTel(),c.getTel2(),
                             c.getOcupacion(),DATE(c.getNacimiento()),c.getZona().getProvincia(),c.getZona().getCanton(),
                           c.getZona().getDistrito(),c.getId());
            case "FSC":
                return String.format(query.query,c.getId());
           default: return "";
    
        }
    }
    String buildQueryMoto(Moto m,Query query){
        switch(query.name()){
            case "FIM":
                return String.format(query.query,
                            m.getCliente(),m.getModelo(),m.getAnno(),
                            m.getMotor(),m.getChasis(),m.getPlaca(),
                            m.getPlacaAvg()
                        );
            case "FUDM":
                return String.format(query.query,
                            m.getCliente(),m.getModelo(),m.getAnno(),
                            m.getChasis(),m.getPlaca(),m.getMotor()
                        );
            case "FVM1":
                    return String.format(query.query,m.getPlaca());
            case "FVM2":
                    return String.format(query.query,m.getChasis());        
            case "FSM":
                return String.format(query.query,m.getChasis());
            case "BMPC":
                return String.format(query.query,m.getCliente());
            default: return "";
        }
    }
   
    
    String buildQueryEstado(Estado e,Query query){
        switch(query.name()){
            case "FIE":
                return String.format(query.query,
                            e.getMoto(),FLOAT(e.getKilometraje()),e.getAceite(),
                            e.getGas(),e.getDanosPrevios(),e.getObservaciones()
                        );      
            case "FSM":
                return String.format(query.query,e.getMoto());
            default: return "";
        }
    }

    private String buildQueryZona(Zona z,Query query) {
        switch(query.name()){
            case "GZP":return query.query;
            case "GZC":return String.format(query.query,z.getProvincia());
            case "GZD":return String.format(query.query,z.getProvincia(),z.getCanton());
            default: return "";
        }
    }

    private String buildQueryUsuario(Usuario u, Query query) {
        switch(query.name()){
            case "FSU" : return String.format(query.query, u.getId(),u.getMD5PSWRD());
            case "FIU" : return String.format(query.query, u.getId(),u.getMD5PSWRD(),u.isIsAdmin(),u.getEmpleado());
            case "FBU" : return String.format(query.query, u.getEmpleado());
             case "buscaEmpleadoByUser":
                return String.format(query.query,u.getId());
             case "cambioPW":
                 return String.format(query.query, u.getId(),u.getMD5PSWRD());
            default: return "";
        }
    }

    private String buildQueryEmpleado(Empleado e, Query query) {
        switch(query.name()){
            case "FIE2": return String.format(query.query,
                        e.getIdempleado(),e.getNombre(),
                        e.IsJefe(),e.IsAsesor(),e.getCorreo(),
                        e.getTelefono(),e.IsActivo(),e.getTipoId()
                    );
            case "FSEM": return String.format(query.query,e.getIdempleado());
            case "FSEA": return String.format(query.query);
            case "FDE" : return String.format(query.query,e.getIdempleado());
            default: return "";
        }
    }

    private String buildQueryMensaje(Mensaje m, Query query) {
        switch(query.name()){
            case "FMJ1": return String.format(query.query,
                    m.getDestino(),m.getAsunto(),m.getMensaje(),
                    DATE(m.getExpira()),DATE(m.getEnviar()));
            case "FMJ2": return String.format(query.query,m.getId(),true);
            case "FMJ3": return query.query;
            case "FMJ4": return query.query;
            default: return "";   
        }
    }

    private String buildQueryCita(Cita c, Query q) {
        switch(q.name()){
            case "crearCita":
                if(c.getSalida() == null)
                    return String.format(Query.crearCita2.query,c.getProforma(),c.getCliente(),
                        c.getMoto(),c.getRecepcionista(),c.getGarantia(),
                        c.getOrden(),c.getTipoDeTrabajo(),DATE_TIME(c.getEntrada()),
                        DATE_TIME(c.getPrometida()),c.getMecanico(),c.getEstado()
                       );
                else 
                    return String.format(q.query,c.getProforma(),c.getCliente(),
                        c.getMoto(),c.getRecepcionista(),c.getGarantia(),
                        c.getOrden(),
                        c.getTipoDeTrabajo(),DATE_TIME(c.getEntrada()),
                        DATE_TIME(c.getPrometida()),
                        DATE_TIME(c.getSalida()),c.getMecanico(),
                        c.getEstado()
                       );
            case "SCRD":
                return String.format(q.query,QueryController.DATE(c.getEntrada()),QueryController.DATE(c.getPrometida()));
            case "empleadosLibres":
                return String.format(q.query,QueryController.DATE_TIME(c.getEntrada()),
                                             QueryController.DATE_TIME(c.getPrometida()));
            case "buscaCitaProforma":
                return String.format(q.query,c.getProforma());
            case "buscacita":
                String arg1 = c.getCliente();
                arg1 = arg1.equals("") ? arg1 : "%"+arg1+"%";
                int arg2 = c.getProforma();
                return String.format(q.query, arg2,arg1);
        }
        return "";
    }

    private String buildQueryObservacion(Observacion o, Query q) {
        switch(q.name()){
            case "addObservacionCita":
                return String.format(q.query,o.getProforma(),
                                             QueryController.DATE_TIME(o.getFecha()),
                                             o.getDetalle());
            default:return "";
        }
    }
}
