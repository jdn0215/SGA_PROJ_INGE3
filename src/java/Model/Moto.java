/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Model;

import java.io.Serializable;

/**
 *
 * @author Daniel Salas
 */
public class Moto implements Serializable, Jsonable{
    String cliente;
    String modelo;
    int anno;
    String motor;
    String chasis;
    String placa;
    String placaavg;
    

    public Moto(String cliente,String modelo, int anno, String motor, String chasis, String placa,String placaavg) {
        this.cliente = cliente;
        this.modelo = modelo;
        this.anno = anno;
        this.motor = motor;
        this.chasis = chasis;
        this.placa = placa;
        this.placaavg=placaavg;
    }

    Moto() {
        this.cliente = "-";
        this.modelo = "-";
        this.anno = 0;
        this.motor = "-";
        this.chasis = "-";
        this.placa = "-";
        this.placaavg="-";
    }
    
    Moto(String Comodin) {
        this.cliente = Comodin;
        this.modelo = Comodin;
        this.anno = 0;
        this.motor = Comodin;
        this.chasis = Comodin;
        this.placa = Comodin;
        this.placaavg=Comodin;
    }
    

    public String getPlacaAvg() {
        return placaavg;
    }

    public void setPlacaAvg(String placaavg) {
        this.placaavg = placaavg;
    }

    public String getCliente() {
        return cliente;
    }

    public void setCliente(String cliente) {
        this.cliente = cliente;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public int getAnno() {
        return anno;
    }

    public void setAnno(int anno) {
        this.anno = anno;
    }

    public String getMotor() {
        return motor;
    }

    public void setMotor(String motor) {
        this.motor = motor;
    }

    public String getChasis() {
        return chasis;
    }

    public void setChasis(String chasis) {
        this.chasis = chasis;
    }

    public String getPlaca() {
        return placa;
    }

    public void setPlaca(String placa) {
        this.placa = placa;
    }
    
}
