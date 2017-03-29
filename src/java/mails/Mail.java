
package mails;


import Control.Propiedades;
import java.util.Date;
import java.util.Properties;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
/**
 *
 * @author jdani
 */
public class Mail {
    String mensaje;
    String asunto;
    String destino;
    Properties props;
    Session session;
    MimeMessage message;
    Runnable runnable;
    Thread hilo;
    Propiedades p=new Propiedades();
    public Mail(String mensaje, String asunto, String destino) {
        this.mensaje = mensaje;
        this.asunto = asunto;
        this.destino = destino;
        initProperties();
        this.session=Session.getInstance(props, null);
        this.message=new MimeMessage(this.session);
        this.runnable=()->{sendMessage();};
        this.hilo=new Thread(this.runnable);
    }
    final void initProperties(){
        props = new Properties();
        props.put("mail.debug", "true");
        props.put("mail.smtp.auth", true);
        props.put("mail.smtp.starttls.enable", true);
        props.put("mail.smtp.host", p.get("servidorSMTP"));
        props.put("mail.smtp.port", p.get("puertoMail"));
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

    public String getReceptor() {
        return destino;
    }

    public void setReceptor(String receptor) {
        this.destino = receptor;
    }
    public void send(){
        hilo.start();
    }
    void sendMessage(){
        try{
            message.addRecipient(Message.RecipientType.TO, new InternetAddress(destino));
             message.setSubject(asunto);
             message.setSentDate(new Date());
             message.setText(mensaje);

             Transport tr = session.getTransport("smtp");
             tr.connect(p.get("servidorSMTP"), p.get("userMail"), p.get("password"));
             message.saveChanges();   
             tr.sendMessage(message, message.getAllRecipients());
             tr.close();
             System.err.print("Mensaje: "+mensaje+" enviado a "+destino);
        } catch (MessagingException ex) {
            Logger.getLogger(Mail.class.getName()).log(Level.SEVERE, null, ex);
            System.err.print("Mensaje no enviado");
        }
    }
}
