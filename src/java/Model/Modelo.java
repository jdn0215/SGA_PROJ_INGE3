/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Model;
import Control.Propiedades;
import database.Database;
import database.Query;
import database.QueryController;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import mails.Mail;
/**
 *
 * @author Daniel Salas
 */
public class Modelo {
    static Database db;
    static QueryController query;
    static ClassController _class;
    static Propiedades p;
    static {
        init();
    }

    private static void init(){
       db= new Database(null, null, null);
       query=new QueryController();
       _class=new ClassController();
       p=new Propiedades();
    }


    public static int AddCliente(Cliente c){
     return db.executeQuery(query.buildQuery(c,Query.FIC))==null ? 0 : 1;
    }
    
    public static void addObservacion(Observacion o){
        db.executeQuery(query.buildQuery(o, Query.addObservacionCita));
    }
    
    public static int AddCita(Cita c){
     return db.executeQuery(query.buildQuery(c,Query.crearCita))==null ? 0 : 1;
    }
    public static int updateCita(Cita c){
     return db.executeQuery(query.buildQuery(c,Query.updateCita))==null ? 0 : 1;
    }
    
    public static int addMoto(Moto m){
        m.setPlaca(m.getPlaca().equals("")?"COMODIN"+m.getMotor():m.getPlaca());        
        return db.executeQuery(query.buildQuery(m,Query.FIM))==null ? verificaErrorMoto(m) : 1;
    }
    public static int addEstado(Estado e){       
        return db.executeQuery(query.buildQuery(e,Query.FIE))==null ? 0 : 1;
    }
    
    public static int verificaErrorMoto(Moto m){
        try {
            return
                    db.executeQuery(query.buildQuery(m, Query.FVM1)).getInt(1)==1?2
                   :db.executeQuery(query.buildQuery(m, Query.FVM2)).getInt(1)==1?3
                   :0;
        } catch (SQLException ex) {
            return 0;
        }        
    }
    public static int updateCliente(Cliente c){
        return db.executeQuery(query.buildQuery(c,Query.FUDC))==null?0:1;
    }
    public static  List<? extends Object>buscaMotosByCliente(String id){
        Moto m=new Moto(id);
        ResultSet rs=db.executeQuery(query.buildQuery(m, Query.BMPC));
        return _class.toCollection(rs,Moto.class.getSimpleName());
    }
    public static int updateMoto(Moto m){
        return db.executeQuery(query.buildQuery(m,Query.FUDM))==null?0:1;
    }
    
    public static List<? extends Object> searchClientes(String parameter){
        ResultSet rs= db.executeQuery(query.buildQuery(new Cliente(parameter),Query.FSC));
        return  _class.toCollection(rs,Cliente.class.getSimpleName());
    }
    public static List<? extends Object> buscarMoto(String dato){
        ResultSet rs=db.executeQuery(query.buildQuery(new Moto(dato),Query.FSM));
        return  _class.toCollection(rs,Moto.class.getSimpleName());
    }
    public static List<? extends Object> buscarEstados(String dato){
        ResultSet rs=db.executeQuery(query.buildQuery(new Estado(dato),Query.FSE));
        return  _class.toCollection(rs,Estado.class.getSimpleName());
    }
    
 
    public static List<? extends Object>getProvincias(){
        ResultSet rs=db.executeQuery(query.buildQuery(new Zona(),Query.GZP));
        return  _class.toCollection(rs,String.class.getSimpleName());
    }
    public static List<? extends Object>getCantones(int prov){
        ResultSet rs=db.executeQuery(query.buildQuery(new Zona(prov,0,0),Query.GZC));
        return  _class.toCollection(rs,String.class.getSimpleName());
    }
    public static List<? extends Object>getDistritos(int p,int c){
       ResultSet rs=db.executeQuery(query.buildQuery(new Zona(p,c,0),Query.GZD));
        return  _class.toCollection(rs,String.class.getSimpleName());
    }
    
    public static Usuario getUsuario(Usuario u){
        ResultSet rs=db.executeQuery(query.buildQuery(u,Query.FSU));
        return  (Usuario)_class.toObject(rs,Usuario.class.getSimpleName());
    }
    
    public static int addEmpleado(Empleado nuevo,Usuario tmp){
        return db.executeQuery(query.buildQuery(nuevo,Query.FIE2))==null ? 0 : 1;
    }
    
    public static int addUsuario(Usuario nuevo){
        if(db.executeQuery(query.buildQuery(nuevo,Query.FIU))==null)
            return 0;
        nuevaCuenta(nuevo);
        return 1;
    };
    
    public static int changePassWord(String username,String nombre,String correo){
        Usuario u=new Usuario();
        u.setId(username);
        String newpw=generatePassword(username);
        u.setPwsd(newpw);
        if(db.executeQuery(query.buildQuery(u, Query.cambioPW))==null)
            return 0;
        System.out.print(newpw);
        cambioPassWord(username, nombre, newpw, correo);
        System.out.print("contra cambiada");
        return 1;
    }
    
    public static List<? extends Object> searchEmpleados(String parameter){
        ResultSet rs= db.executeQuery(query.buildQuery(new Empleado(parameter),Query.FSEM));
        return  _class.toCollection(rs,Empleado.class.getSimpleName());
    }
    
    public static List<? extends Object> searchEmpleadosByUser(String parameter){
            ResultSet rs= db.executeQuery(query.buildQuery(new Usuario(parameter),Query.buscaEmpleadoByUser));
        return  _class.toCollection(rs,Empleado.class.getSimpleName());
    }
    public static String generatePassword(String user){
        String salida=user;
        for(int i=0;i<4;i++)
            salida+=Integer.toString(generateInt());
        return salida;
    }
    public static int generateInt(){
        return (int)(Math.random()*9+1);
    }
    static void nuevaCuenta(Usuario u){
        List<? extends Object>empleados=searchEmpleados(u.getEmpleado());
        Empleado emp=null;
        for(Object o: empleados){
            emp=(Empleado)o;
            if(emp.getIdempleado().replaceAll(" ", "").equals(u.getEmpleado()))
                break;
            emp=null;
        }
        if(emp==null)return;
        String mensaje=String.format(p.get("plantilla1"),emp.getNombre(),u.getId(),u.getPwsd());
        Mail mail=new Mail(mensaje,"Creación de cuenta SGA",emp.getCorreo());
        mail.send();
    }
    static void cambioPassWord(String username,String nombre,String newpw,String correo){
        String mensaje=String.format(p.get("plantilla2"),nombre,username,newpw);
        Mail mail=new Mail(mensaje,"Cambio de contraseña SGA",correo);
        mail.send();
    }
    public static Usuario getUserByEmpleado(Usuario parameter){
        ResultSet rs=db.executeQuery(query.buildQuery(parameter, Query.FBU));
        return (Usuario)_class.toObject(rs, Usuario.class.getSimpleName());
    } 
    public static int addMensaje(Mensaje j){
        return db.executeQuery(query.buildQuery(j,Query.FMJ1))==null ? 0 : 1;
    }
    public static void setMensaje(Mensaje j){
       db.executeQuery(query.buildQuery(j, Query.FMJ2));
    }
    public static void clearMensajes(){
       db.executeQuery(query.buildQuery(new Mensaje(), Query.FMJ3));
    }
    public static List<? extends Object> getMensajes(){
       ResultSet rs=db.executeQuery(query.buildQuery(new Mensaje(), Query.FMJ4));
       return _class.toCollection(rs,Mensaje.class.getSimpleName());
    }
    public static List<? extends Object> getEmpleadosActivos(){
        ResultSet rs=db.executeQuery(query.buildQuery(new Empleado(), Query.FSEA));
        return _class.toCollection(rs,Empleado.class.getSimpleName());
    }
    public static List<? extends Object> getcitasDelMes(Cita c){
          ResultSet rs=db.executeQuery(query.buildQuery(c, Query.SCRD));
          return _class.toCollection(rs,Cita.class.getSimpleName());
    }
    public static int deleteEmpleado(String id){
        db.executeQuery(query.buildQuery(new Empleado(id), Query.FDE));
        return 1;
    }
    
    public static List<? extends Object> getEmpleadosLibres(Cita c){
        ResultSet rs = db.executeQuery(query.buildQuery(c, Query.empleadosLibres));
        return _class.toCollection(rs,Empleado.class.getSimpleName());
    }
    
    public static int crearGastos(Gasto g){
        return db.executeUpdate(query.buildQuery(g,Query.rg_crearGastos));
    }
    
    public static List<? extends Object> getGastosDeProforma(String proforma){
        ResultSet rs=db.executeQuery(query.buildQuery(proforma, Query.rg_gastosdeproforma));
        return _class.toCollection(rs, Gasto.class.getSimpleName());
    }
    
    public static List<? extends Object> todosLosGastos(String proforma){
        ResultSet rs=db.executeQuery(Query.rg_gastosdeproforma.toString());
        return _class.toCollection(rs, Gasto.class.getSimpleName());
    }
    
    
    
}
