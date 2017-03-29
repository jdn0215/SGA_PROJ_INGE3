/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Control;

import java.io.File;
import java.io.IOException;
import java.util.Properties;

/**
 *
 * @author jdani
 */
public class Propiedades {
    Properties propiedaes;
    public Propiedades(){
        getProperties();
    } 
    public String get(String key){
       return this.propiedaes.getProperty(key);
    }
    final void getProperties() {
        
        try {
            //se crea una instancia a la clase Properties
            this.propiedaes = new Properties();
            //se leen el archivo .properties
            this.propiedaes.load( getClass().getResourceAsStream("Propiedades.properties") );
            //si el archivo de propiedades NO esta vacio retornan las propiedes leidas

        } catch (IOException ex) {
            System.err.print("No se ha podido leer el archivo de propiedades\n");
        }
        
        File miDir = new File (".");
        try {
            System.out.println ("Directorio actual: " + miDir.getCanonicalPath());
        }
        catch(Exception e) {
        e.printStackTrace();
        }
     }
       
}
