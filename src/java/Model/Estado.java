
package Model;

import java.io.Serializable;
import java.sql.Date;

/**
 *
 * @author Daniel Salas
 */
public class Estado implements Serializable, Jsonable{
    double kilometraje;
    int aceite;
    int gas;
    String danosPrevios;
    String observaciones;
    Date fecha;
    String moto;
    public Estado(double kilometraje, int aceite, int gas, String danosPrevios, String observaciones, Date fecha) {
        this.kilometraje = kilometraje;
        this.aceite = aceite;
        this.gas = gas;
        this.danosPrevios = danosPrevios;
        this.observaciones = observaciones;
        this.fecha = fecha;
    }

    public Estado(double kilometraje, int aceite, int gas, String danosPrevios, String observaciones, Date fecha, String moto) {
        this.kilometraje = kilometraje;
        this.aceite = aceite;
        this.gas = gas;
        this.danosPrevios = danosPrevios;
        this.observaciones = observaciones;
        this.fecha = fecha;
        this.moto = moto;
    }

    Estado(String ocurrio_algun_error_en_la_carga_de_datos) {
        this.kilometraje = 1;
        this.aceite = 1;
        this.gas = 0;
        this.danosPrevios = ocurrio_algun_error_en_la_carga_de_datos;
        this.observaciones = ocurrio_algun_error_en_la_carga_de_datos;
        this.fecha = new Date(1,1,1);
        this.moto = ocurrio_algun_error_en_la_carga_de_datos;
    }

    public String getMoto() {
        return moto;
    }

    public void setMoto(String moto) {
        this.moto = moto;
    }

    public Estado() {
        this.kilometraje = 0;
        this.aceite = 0;
        this.gas = 0;
        this.danosPrevios = "";
        this.observaciones = "";
        this.fecha = new Date(1,1,1);
    }

    public double getKilometraje() {
        return kilometraje;
    }

    public void setKilometraje(double kilometraje) {
        this.kilometraje = kilometraje;
    }

    public int getAceite() {
        return aceite;
    }

    public void setAceite(int aceite) {
        this.aceite = aceite;
    }

    public int getGas() {
        return gas;
    }

    public void setGas(int gas) {
        this.gas = gas;
    }

    public String getDanosPrevios() {
        return danosPrevios;
    }

    public void setDanosPrevios(String danosPrevios) {
        this.danosPrevios = danosPrevios;
    }

    public String getObservaciones() {
        return observaciones;
    }

    public void setObservaciones(String observaciones) {
        this.observaciones = observaciones;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }
    

   
}
