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
 * @author Daniel Salas
 */
public class Cliente implements Serializable, Jsonable{
    String id;
    int tipoId;
    String nombre;
    int edad;
    String correo;
    String tel;
    String tel2; 
    String ocupacion;
    Date nacimiento;
    Zona zona;

    public Cliente(String id, int tipoId, String nombre, int edad, String correo, String tel, String tel2, String ocupacion, Date nacimiento, Zona zona) {
        this.id = id;
        this.tipoId = tipoId;
        this.nombre = nombre;
        this.edad = edad;
        this.correo = correo;
        this.tel = tel;
        this.tel2 = tel2;
        this.ocupacion = ocupacion;
        this.nacimiento = nacimiento;
        this.zona = zona;
    }

    public Cliente() {
        this.id = "123";
        this.tipoId = 1;
        this.nombre = "";
        this.edad = 0;
        this.correo = "@";
        this.tel = "";
        this.tel2 = "";
        this.ocupacion = "";
        this.nacimiento = new  Date();
        this.zona = new Zona();
    }

    public Cliente(String comodin) {
        this.id = comodin;
        this.tipoId = 1;
        this.nombre = comodin;
        this.edad = 0;
        this.correo = "@";
        this.tel = "";
        this.tel2 = "";
        this.ocupacion = "";
        this.nacimiento = new  Date();
        this.zona = new Zona();
    }
    
    public int getTipoId() {
        return tipoId;
    }
    
   

    public String getOcupacion() {
        return ocupacion;
    }

    public void setOcupacion(String ocupacion) {
        this.ocupacion = ocupacion;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getEdad() {
        return edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public String getTel2() {
        return tel2;
    }

    public void setTel2(String tel2) {
        this.tel2 = tel2;
    }

    public Date getNacimiento() {
        return nacimiento;
    }

    public void setNacimiento(Date nacimiento) {
        this.nacimiento = nacimiento;
    }

    public Zona getZona() {
        return zona;
    }

    public void setZona(Zona zona) {
        this.zona = zona;
    } 
}
