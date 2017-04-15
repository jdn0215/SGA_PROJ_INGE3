/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Model;

import java.io.Serializable;

/**
 *
 * @author Luis
 */
public class Empleado implements Serializable, Jsonable{
    String idempleado;//cedula
    String nombre;
    boolean isJefe;
    boolean isAsesor;
    String correo;
    String telefono;
    boolean activo;//por aquello de los despidos
    int tipoId;
    public Empleado(String idempleado, String nombre, boolean isJefe, boolean isAsesor, String correo, String telefono, boolean activo,int tipoId) {
        this.idempleado = idempleado;
        this.nombre = nombre;
        this.isJefe = isJefe;
        this.isAsesor = isAsesor;
        this.correo = correo;
        this.telefono = telefono;
        this.activo = activo;
        this.tipoId=tipoId;
    }
    
    public Empleado() {
        this.idempleado = "";
        this.nombre = "";
        this.isJefe = false;
        this.isAsesor = false;
        this.correo = "@";
        this.telefono = "";
        this.activo = false;
        this.tipoId=1;
    }
    public Empleado(String s) {
        this.idempleado = s;
        this.nombre = s;
        this.isJefe = false;
        this.isAsesor = false;
        this.correo = s;
        this.telefono = s;
        this.activo = false;
        this.tipoId=1;
    }

    public int getTipoId() {
        return tipoId;
    }

    public void setTipoId(int tipoId) {
        this.tipoId = tipoId;
    }

    public String getIdempleado() {
        return idempleado.toUpperCase();
    }

    public void setIdempleado(String idempleado) {
        this.idempleado = idempleado;
    }

    public String getNombre() {
        return nombre.toUpperCase();
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public boolean IsJefe() {
        return isJefe;
    }

    public void setIsJefe(boolean isJefe) {
        this.isJefe = isJefe;
    }

    public boolean IsAsesor() {
        return isAsesor;
    }

    public void setIsAsesor(boolean isAsesor) {
        this.isAsesor = isAsesor;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public boolean IsActivo() {
        return activo;
    }

    public void setActivo(boolean activo) {
        this.activo = activo;
    }
    
    
}
