/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Model;

import java.util.Date;

/**
 *
 * @author jdani
 */
public class Mensaje {
    String mensaje;
    String asunto;
    String destino;
    Date expira;
    Date enviar;
    int id;

    public Mensaje(String mensaje, String asunto, String destino) {
        this.mensaje = mensaje;
        this.asunto = asunto;
        this.destino = destino;
        this.id=-1;
        this.expira=null;
        this.enviar=null;
    }

    public Date getExpira() {
        return expira;
    }

    public void setExpira(Date expira) {
        this.expira = expira;
    }

    public Date getEnviar() {
        return enviar;
    }

    public void setEnviar(Date enviar) {
        this.enviar = enviar;
    }

    public Mensaje(String mensaje, String asunto, String destino, int id) {
        this.mensaje = mensaje;
        this.asunto = asunto;
        this.destino = destino;
        this.id = id;
        this.expira=null;
        this.enviar=null;
    }

    public Mensaje(String mensaje, String asunto, String destino, Date expira, Date enviar, int id) {
        this.mensaje = mensaje;
        this.asunto = asunto;
        this.destino = destino;
        this.expira = expira;
        this.enviar = enviar;
        this.id = id;
    }
    
    public Mensaje() {

    }
    public Mensaje(String mensaje) {
        this.mensaje = mensaje;
        this.asunto = mensaje;
        this.destino = mensaje;
        this.id=-1;
    }

    public String getMensaje() {
        return mensaje;
    }

    public void setMensaje(String mensaje) {
        this.mensaje = mensaje;
    }

    public String getAsunto() {
        return asunto;
    }

    public void setAsunto(String asunto) {
        this.asunto = asunto;
    }

    public String getDestino() {
        return destino;
    }

    public void setDestino(String destino) {
        this.destino = destino;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
    
    
}
