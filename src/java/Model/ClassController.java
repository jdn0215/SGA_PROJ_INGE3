/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Model;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.sql.Timestamp;

/**
 *
 * @author HP2000
 * seguir el patron de los otos toAlgo
 */
public class ClassController {

    public ClassController(){       
    }
    public Object toObject(ResultSet rs,String t){
        switch(t){
            case "Cliente": return toCliente(rs);
            case "Moto": return toMoto(rs);
            case "String": return toSingleString(rs);
            case "Usuario": return toUsuario(rs);
            case "Empleado": return toEmpleado(rs);
            case "Mensaje": return toMensaje(rs);
            case "Cita": return toCita(rs);
         }
        return null;
    }
    public List<? extends Object >toCollection(ResultSet rs,String t){
        try {
           List<Object>d=new ArrayList<>();
            while(rs.next())
                d.add(toObject(rs,t));
            return d;
        } catch (SQLException ex) {
            System.err.print(ex);
        }
        return null;
    }
    
    private Empleado toEmpleado(ResultSet rs){
        try{
            return new Empleado(
                    rs.getString(1),/*id*/
                    rs.getString(2),/*nombre*/
                    rs.getBoolean(3),/*isJefe*/
                    rs.getBoolean(4),/*isAsesor*/
                    rs.getString(5),/*correo*/
                    rs.getString(6),/*telefono*/
                    rs.getBoolean(7),/*activo*/
                    rs.getInt(8)/*tipoid*/
            );
        }catch (SQLException ex) {
            return new Empleado("Ocurrió algún error en la carga de datos");
        }
    }
    private Mensaje toMensaje(ResultSet rs){
        try{
            return new Mensaje(
                   rs.getString(4),/*mensaje*/
                   rs.getString(3),/*asunto*/
                   rs.getString(2),/*destino*/
                   rs.getInt(1)/*id*/
            );
        }catch (SQLException ex) {
            return new Mensaje("Ocurrió algún error en la carga de datos");
        }
    }
    private Cliente toCliente(ResultSet rs){
        try {
            return new Cliente(
                    rs.getString(1),/*id*/
                    rs.getInt(2),/*tipo id*/
                    rs.getString(3),/*nombre*/
                    rs.getInt(4),/*edad*/
                    rs.getString(5),/*mail*/
                    rs.getString(6),/*tel1*/
                    rs.getString(7),/*tel2*/
                    rs.getString(8),/*ocupacion*/
                    (Date)rs.getDate(9),/*nacimiento*/
                    new Zona(rs.getInt(10),rs.getInt(11),rs.getInt(12),rs.getString(13))
            );
        } catch (SQLException ex) {
            return new Cliente("Ocurrio algún error en la carga de datos");
        }
    }
    private Moto toMoto(ResultSet rs){
        try {
            return new Moto(
                    rs.getString(1),/*duenno*/
                    rs.getString(2),/*modelo*/
                    rs.getInt(3),/*anno*/
                    rs.getString(4),/*motor*/
                    rs.getString(5),/*chasis*/
                    rs.getString(6).equals("COMODIN"+rs.getString(4)) ? "" : rs.getString(6),/*placa*/
                    rs.getString(7)/*avg*/
            );
        } catch (SQLException ex) {
            return new Moto("Ocurrió algún error en la carga de datos");
        }
    }
    private Estado toEstado(ResultSet rs){
        try {
            return new Estado(
                    rs.getDouble(2),/*km*/
                    rs.getInt(3),/*aceite*/
                    rs.getInt(4),/*gas*/
                    rs.getString(5),/*danos*/
                    rs.getString(6),/*observaciones*/
                    rs.getDate(7),/*fecha*/
                    rs.getString(1)/*moto*/
            );
        } catch (SQLException ex) {
            return new Estado("Ocurrió algún error en la carga de datos");
        }
    }
    private String toSingleString(ResultSet rs){
        try{
            return rs.getString(1);
        }catch (SQLException ex) {
            return "Ocurrió algún error en la carga de datos";
        }
    }
    private List<String> toStrings(ResultSet rs) throws SQLException {
        List<String>d=new ArrayList();
        while(rs.next())
            d.add(toSingleString(rs));
        return d;
    }
    private Usuario toUsuario(ResultSet rs) {
        try{
            return rs.next()?
            new Usuario(
                 rs.getString(1),
                 rs.getString(2),
                 rs.getBoolean(3),
                 rs.getString(4)
            ):new Usuario("no hay","",false,"");
        } catch (SQLException ex) {
            return new Usuario("no hay","",false,"");
        }
    }
    private Cita toCita(ResultSet rs){
        try{
            return new Cita(
                    rs.getInt(1)/*id*/
            );
        }catch (SQLException ex) {
            return new Cita("Ocurrió algún error en la carga de datos");
        }
    }
    Date toDate(String tm){
        Timestamp ts = java.sql.Timestamp.valueOf(tm);
        return new Date(ts.getTime());
    }
}