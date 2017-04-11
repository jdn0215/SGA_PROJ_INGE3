/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Model;

import java.io.Serializable;
import java.util.Date;
import java.util.logging.Logger;

/**
 *
 * @author jdani
 */
public class Observacion implements Serializable, Jsonable{
    int proforma;
    String detalle;
    Date fecha;

    public Observacion(int proforma, String detalle, Date fecha) {
        this.proforma = proforma;
        this.detalle = detalle;
        this.fecha = fecha;
    }

    public Observacion(String detalle) {
        this.detalle = detalle;
    }

    public int getProforma() {
        return proforma;
    }

    public void setProforma(int proforma) {
        this.proforma = proforma;
    }

    public String getDetalle() {
        return detalle;
    }

    public void setDetalle(String detalle) {
        this.detalle = detalle;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }
   
    
}
