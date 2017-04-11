/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Model;

import Control.Propiedades;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Properties;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import mails.Mail;

/**
 *
 * @author jdani
 */
public class Messenger {
    Propiedades p=new Propiedades();
    Properties props;
    Session session;
    MimeMessage message;
    List<Mensaje>mjs;
    public Messenger(Mensaje m){
        initProperties();
        mjs=new ArrayList<>();
        mjs.add(m);
    }
    public Messenger(List<Mensaje> m){
        initProperties();
        mjs=m;
    }
    public Messenger(){
        initProperties();
        mjs=null;
    }
    final void initProperties(){
        props = new Properties();
        props.put("mail.debug", "true");
        props.put("mail.smtp.auth", true);
        props.put("mail.smtp.starttls.enable", true);
        props.put("mail.smtp.host", p.get("servidorSMTP"));
        props.put("mail.smtp.port", p.get("puertoMail"));
        this.session=Session.getInstance(props, null);
        this.message=new MimeMessage(this.session);
    }
    public void send(){
        Runnable rn=()->{sendMessage();};
        Thread hilo=new Thread(rn);
        hilo.start();
    }
    void sendMessage(){
        if(mjs==null){
            List <? extends Object> auxmjs= Modelo.getMensajes();
            mjs=new ArrayList<>();
            auxmjs.stream().forEach((m) -> {
                mjs.add((Mensaje)m);
            });
        }
        mjs.stream().forEach((m)->{
            sendMessage(m);
        });
        Modelo.clearMensajes();
    }
    void sendMessage(Mensaje mj){
        try{
            message.addRecipient(Message.RecipientType.TO, new InternetAddress(mj.getDestino()));
             message.setSubject(mj.getAsunto());//ajuste del asunto
             message.setSentDate(new Date());//fecha de envio
             message.setText(mj.getMensaje());//contenido del correo

             Transport tr = session.getTransport("smtp");
             tr.connect(p.get("servidorSMTP"), p.get(".userMail"),p.get("password"));
             message.saveChanges();   
             tr.sendMessage(message, message.getAllRecipients());//envio del correo
             tr.close();//cierre de conexión
             System.err.print("Mensaje: "+mj.getMensaje()+" enviado a "+mj.getDestino());
             Modelo.setMensaje(mj);//si no falla lo pone en true para luego ser borrado
        } catch (MessagingException ex) {
           if(mj.getId()==-1)
               Modelo.addMensaje(mj);//si falla y no estaba en la base es agregado
            Logger.getLogger(Mail.class.getName()).log(Level.SEVERE, null, ex);
            System.err.print("Mensaje no enviado");
        }
    }
    
     
}
