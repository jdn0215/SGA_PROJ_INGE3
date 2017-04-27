/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package database;

import Control.Propiedades;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author Daniel Salas
 */
public final class Database {
    Connection cnx;
    Propiedades p=new Propiedades();
    public Database(String servidorArg, String usuarioArg, String claveArg){
        if (servidorArg!=null){
            cnx=this.getConnection(servidorArg, usuarioArg, claveArg);
        }
        else{
            cnx=this.getConnection(null, null, null);            
        }
    }
    public Connection getConnection(String servidorArg, String usuarioArg, String claveArg){
       String URL_conexion="",servidor="",usuario="",clave="";
        try {
           
            servidor=(servidorArg==null?p.get("SERVIDOR"):servidorArg);
            usuario=(usuarioArg==null?p.get("USUARIO"):usuarioArg);
            clave=(claveArg==null?p.get("CLAVE"):claveArg);
            URL_conexion=p.get("PROTOCOLO")+"//"+ servidor+":"+p.get("PUERTO")+"/"+p.get("BASEDATOS")+"?user="+usuario+"&password="+clave;
            System.err.print("URL DE CONEXION: "+URL_conexion);
            Class.forName(p.get("MANEJADOR_DB")).newInstance();
            return DriverManager.getConnection(URL_conexion);
        } catch (ClassNotFoundException | IllegalAccessException | InstantiationException | SQLException e) {
            System.err.println(e.getMessage());
            URL_conexion=p.get("PROTOCOLO")+"//"+ servidor+":"+p.get("PUERTO")+"/"+p.get("BASEDATOS").toLowerCase()+"?user="+usuario+"&password="+clave;
           try{
               Class.forName(p.get("MANEJADOR_DB")).newInstance();
               return DriverManager.getConnection(URL_conexion);
           }catch (ClassNotFoundException | IllegalAccessException | InstantiationException | SQLException ee){
            System.err.println(ee.getMessage());
            System.exit(-1);
           }
            
        } 
        return null;
    }
    
    public int executeUpdate(String statement) {
        try {
            Statement stm = cnx.createStatement();
            stm.executeUpdate(statement);
            return stm.getUpdateCount();
        } catch (SQLException ex) {
            Logger.getLogger(Database.class.getName()).log(Level.SEVERE, null, ex);
            return 0;
        }
    }
    
    public ResultSet executeUpdateWithKeys(String statement) {
        try {
            Statement stm = cnx.createStatement();
            stm.executeUpdate(statement,Statement.RETURN_GENERATED_KEYS);
            return stm.getGeneratedKeys();
        } catch (SQLException ex) {
            Logger.getLogger(Database.class.getName()).log(Level.SEVERE, null, ex);
            return null;
        }
    }
    
    public ResultSet executeQuery(String statement){
        try {
            System.err.print(statement);
            Statement stm = cnx.createStatement();
            return stm.executeQuery(statement);
        } catch (SQLException ex) {
            Logger.getLogger(Database.class.getName()).log(Level.SEVERE, null, ex);
        }
        return null;
    }

   
}
