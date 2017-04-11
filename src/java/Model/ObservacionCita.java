/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Model;

import java.io.Serializable;
import java.util.Date;

/**
 *
 * @author jdani
 */
public class ObservacionCita implements Serializable, Jsonable {
    int proforma;
    Date fecha;
    String detalle;

    public ObservacionCita(int proforma, Date fecha, String detalle) {
        this.proforma = proforma;
        this.fecha = fecha;
        this.detalle = detalle;
    }

    public int getProforma() {
        return proforma;
    }

    public void setProforma(int proforma) {
        this.proforma = proforma;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public String getDetalle() {
        return detalle;
    }

    public void setDetalle(String detalle) {
        this.detalle = detalle;
    }
    
    
}
