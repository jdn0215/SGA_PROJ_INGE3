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
public class Zona implements Serializable, Jsonable{
    int provincia;
    int canton;
    int distrito;
    String zona;
    public Zona(int provincia, int canton, int distrito) {
        this.provincia = provincia;
        this.canton = canton;
        this.distrito = distrito;
    }
    public Zona(int provincia, int canton, int distrito,String text) {
        this.provincia = provincia;
        this.canton = canton;
        this.distrito = distrito;
        this.zona=text;
    }
     public Zona() {
        this.provincia = 1;
        this.canton = 1;
        this.distrito = 1;
    }

    public int getProvincia() {
        return provincia;
    }

    public void setProvincia(int provincia) {
        this.provincia = provincia;
    }

    public int getCanton() {
        return canton;
    }

    public void setCanton(int canton) {
        this.canton = canton;
    }

    public int getDistrito() {
        return distrito;
    }

    public void setDistrito(int distrito) {
        this.distrito = distrito;
    }

    @Override
    public String toString() {
        String out="";
        out+=Integer.toString(this.provincia);
        if(this.canton<10) out+="0";
        out+=Integer.toString(this.canton);
         if(this.distrito<10) out+="0";
        out+=Integer.toString(this.distrito);
        return out;
    }
    public static Zona toZona(String H){
        Zona z=new Zona();
        try{
            z.setProvincia(Integer.parseInt(H.charAt(0)+""));
            z.setCanton(Integer.parseInt(""+H.charAt(1)+H.charAt(2)));
            z.setDistrito(Integer.parseInt(""+H.charAt(3)+H.charAt(4)));
        }catch(Exception e){
            return new Zona();
        }
        return z;
    }
    

}
