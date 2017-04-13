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
 * @author Mario
 */

public class Cita implements Serializable, Jsonable{
     //Pendiente(0),Cancelada(1),EnProceso(2),Entregada(3);

    int proforma,orden,estado;
    String cliente,moto,recepcionista,garantia,tipoDeTrabajo,mecanico;
    Date entrada,salida,prometida;
    public Cita(int p){
        this.proforma=this.orden=p;
    }
     public Cita(String p){
        cliente=moto=recepcionista=garantia=tipoDeTrabajo=mecanico=p;
    
     }

    public int getEstado() {
        return estado;
    }

    public void setEstado(int estado) {
        this.estado = estado;
    }
     
     
     
    public Cita(int proforma, int orden, String cliente, String moto, String recepcionista, String garantia, String tipoDeTrabajo, String mecanico, Date entrada, Date salida, Date prometida, int estado) {
        this.proforma = proforma;
        this.orden = orden;
        this.cliente = cliente;
        this.moto = moto;
        this.recepcionista = recepcionista;
        this.garantia = garantia;
        this.tipoDeTrabajo = tipoDeTrabajo;
        this.mecanico = mecanico;
        this.entrada = entrada;
        this.salida = salida;
        this.prometida = prometida;
        this.estado = estado;
    }


    public Cita() {
        this.proforma = 0;
        this.orden = 0;
        this.cliente = "";
        this.moto = "";
        this.recepcionista = "";
        this.garantia = "";
        this.tipoDeTrabajo = "";
        this.mecanico = "";
        this.entrada = null;
        this.salida = null;
        this.prometida = null;
        this.estado = 1;
    }

    public int getProforma() {
        return proforma;
    }

    public void setProforma(int proforma) {
        this.proforma = proforma;
    }

    public int getOrden() {
        return orden;
    }

    public void setOrden(int orden) {
        this.orden = orden;
    }

    public String getCliente() {
        return cliente;
    }

    public void setCliente(String cliente) {
        this.cliente = cliente;
    }

    public String getMoto() {
        return moto;
    }

    public void setMoto(String moto) {
        this.moto = moto;
    }

    public String getRecepcionista() {
        return recepcionista;
    }

    public void setRecepcionista(String recepcionista) {
        this.recepcionista = recepcionista;
    }

    public String getGarantia() {
        return garantia;
    }

    public void setGarantia(String garantia) {
        this.garantia = garantia;
    }

    public String getTipoDeTrabajo() {
        return tipoDeTrabajo;
    }

    public void setTipoDeTrabajo(String tipoDeTrabajo) {
        this.tipoDeTrabajo = tipoDeTrabajo;
    }

    public String getMecanico() {
        return mecanico;
    }

    public void setMecanico(String mecanico) {
        this.mecanico = mecanico;
    }

    public Date getEntrada() {
        return entrada;
    }

    public void setEntrada(Date entrada) {
        this.entrada = entrada;
    }

    public Date getSalida() {
        return salida;
    }

    public void setSalida(Date salida) {
        this.salida = salida;
    }

    public Date getPrometida() {
        return prometida;
    }

    public void setPrometida(Date prometida) {
        this.prometida = prometida;
    }

       
}
