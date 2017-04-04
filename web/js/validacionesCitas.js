/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* global $id, CLIENTEBUSCADO, modoUpdate, motosDelClienteBuscado */

const VALIDACIONES_CITAS = [
    new Validacion(
        "clienteCita","Cliente no válido  ",
        ()=> modoUpdate || CLIENTEBUSCADO!==null   
    ),
    
    new Validacion(
        "motocito","Seleccione una motocicleta  ",
        ()=> modoUpdate ||CLIENTEBUSCADO!==null&&motosDelClienteBuscado.length!==0   
    )
    
    /*falta  daaaah**/
    
];