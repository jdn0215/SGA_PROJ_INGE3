/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Model;

import database.Query;
import java.io.Serializable;
import java.sql.ResultSet;
import java.util.Date;

/**
 *
 * @author jdani
 */
public abstract class Base implements Serializable, Jsonable{
    public abstract Object toObject(ResultSet rs);
    public abstract String toQuery(Base b, Query q);
    protected String FLOAT(double f){
        return Double.toString(f).replaceAll(",", ".");
    }
    protected String DATE(Date d){
        if(d==null)return "null";
        String fullY=Integer.toString(d.getYear()+1900),
        date=fullY+"-"+(Integer.toString(d.getMonth()+1))+"-"+Integer.toString(d.getDate());
        return date;
    }
    protected String DATE_TIME(Date d){
        if(d==null)return "null";
        String out=DATE(d)+" ";
        out+=(d.getHours()+":"+d.getMinutes()+":00");
        return out;
    }
}
