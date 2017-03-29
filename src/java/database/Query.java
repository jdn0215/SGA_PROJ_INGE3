
package database;
public enum Query{
    /*F=> funcion (I=insert,UD=update,S=select) (C=Clientes,M=Motos)*/
    /*insertar clientes(id,tipoId,nombre,edad,correo,tel,tel2,ocupacion,nacimiento,provincia,canton,distrito)*/
    FIC("select * from FIC('%s',%d,'%s',%d,'%s','%s','%s','%s','%s',%d,%d,%d);"),
    
    /*actualizar clientes (nombre,edad,correo,tel,tel2,ocupacion,nacimiento,provincia,canton,distrito,id)*/
    FUDC("select * from FUDC('%s',%d,'%s','%s','%s','%s','%s',%d,%d,%d,'%s');"),
    
    /*insert motos(dueñoId,modelo,año,motor,chasis,placa,placaAVG)*/
     FIM("select * from FIM('%s','%s',%d,'%s','%s','%s','%s');"),
     
     /*actulizar moto (dueñoId,modelo,año,chasis,placa,motor)*/
    FUDM("select * from FUDM('%s','%s',%d,'%s','%s','%s');"),
    
    FVM1("select * from FVM1('%s');"),
    FVM2("select * from FVM2('%s');"),
     FSM("Select * from FSM('%%%s%%');"),
     FIE("select * from FIE('%s',%s,%d,%d,'%s','%s');"),
     FSE("select * from FSE('%s');"),
     FSC("select * from FSC('%%%s%%') as C(\n" +
            "  a character(30),b smallint,c character(50),\n" +
            "  d integer,e character(40),f character(15) ,\n" +
            "  g character(15),h character(40),i date,\n" +
            "  j integer,k integer, l integer,m character varying\n" +
        ");"),
     GZP("select * from GZP();"),
     GZC("select * from GZC(%d);"),
     GZD("select * from GZD(%d,%d);"),
     FSU("select * from FSU('%s','%s');"),
    FIE2("select * from FIE('%s','%s',%b,%b,'%s','%s',%b,%d);"),
     FIU("select * from FIU('%s','%s',%b,'%s');"),
    FSEM("select * from FSEM('%%%s%%');"),
     FBU("select * from FBU('%s');"),
    FMJ1("select * from FMJ1('%s','%s','%s','%s','%s');"),
    FMJ2("select * from FMJ2(%d,%b);"),
    FMJ3("select * from FMJ3();"),
    FMJ4("select * from FMJ4();"),
      FT("select * from FT()"),
    BMPC("select * from BMPC('%s');"),
    FSEA("select * from FSEA();"),
    SCRD("select * from SCRD('%s','%s');"),
     FDE("select * from FDE('%s');"),
    buscaEmpleadoByUser("select * from buscaEmpleadoByUser('%s');"),
    cambioPW("select * from cambioPW('%s','%s');"),
    crearCita("select * from createCita('%s','%s','%s','%s',%d,'%s');"),
    updateCita("select * from updateCita(%d,'%s','%s',%d);"),
    empleadosLibres("select * from empleadosLibres('%s','%s');");
public final String query;
    Query(String a){
        query=a;
    }
}

