/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Model;

import java.io.Serializable;
import java.sql.Date;

/**
 *
 * @author Luis
 */
public class Gasto implements Serializable, Jsonable{
    int proforma;
    String descripcion;
    float precio;
    Date fecha;
    String motormoto;

    public Gasto(int proforma, String descripcion, float precio, Date fecha, String motormoto) {
        this.proforma = proforma;
        this.descripcion = descripcion;
        this.precio = precio;
        this.fecha = fecha;
        this.motormoto = motormoto;
    }

    public Gasto(){}
    
    public int getProforma() {
        return proforma;
    }

    public void setProforma(int proforma) {
        this.proforma = proforma;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public float getPrecio() {
        return precio;
    }

    public void setPrecio(float precio) {
        this.precio = precio;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public String getMotormoto() {
        return motormoto;
    }

    public void setMotormoto(String motormoto) {
        this.motormoto = motormoto;
    }
    
    
}
