/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Model;

import java.io.Serializable;
import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author Luis
 */
public class Usuario implements Serializable, Jsonable{
    String id;
    String pwsd;
    boolean isAdmin;
    String empleado;
    public Usuario() {
    }

    public Usuario(String id, String pwsd, boolean isAdmin,String idE) {
        this.id = id;
        this.pwsd = pwsd;
        this.isAdmin = isAdmin;
        this.empleado=idE;
    }
    public Usuario(String aux){
        this.id = aux;
        this.pwsd = aux;
        this.isAdmin = false;
        this.empleado=aux;
    }
    public String getEmpleado() {
        return empleado;
    }

    public void setEmpleado(String empleado) {
        this.empleado = empleado;
    }
    
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPwsd() {
        return pwsd;
    }

    public void setPwsd(String pwsd) {
        this.pwsd = pwsd;
    }

    public boolean isIsAdmin() {
        return isAdmin;
    }

    public void setIsAdmin(boolean isAdmin) {
        this.isAdmin = isAdmin;
    }
    public String getMD5PSWRD(){
        MessageDigest m;
        try {
            m = MessageDigest.getInstance("MD5");
        } catch (NoSuchAlgorithmException ex) {
            System.err.print(ex.toString());
            return "error";
        }
        m.update(this.pwsd.getBytes(),0,this.pwsd.length());
        return new BigInteger(1,m.digest()).toString(16);
    }
    
}
