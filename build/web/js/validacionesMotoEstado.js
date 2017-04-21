/* 
    Document   : validacionesMotoEstado
    Created on : 15/04/2017, 9:26:17 PM
    Author     : cmadrigal
*/

/* global $id */

const VALIDACIONES_MOTO_ESTADO=[
    new Validacion(
      "textKm"," -Indique el kilometraje- ",
       ()=> ($id("textKm").value!=="") && (!isNaN($id("textKm").value)) && ($id("textKm").value>=0)
    ),
    new Validacion(
     "textDannos", "  -Los daños previos exceden el limite-  ",
     ()=>$("#textDannos").val().length<=500
    ),
    new Validacion(
     "textObservacion", "  -Las observaciones exceden el limite-  ",
     ()=>$("#textObservacion").val().length<=500
    )
];