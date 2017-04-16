const VALIDACIONES_MOTO_ESTADO=[
    new Validacion(
      "textKm"," -Indique el kilometraje- ",
        ($id("textKm").value!=="") && (!isNaN($id("textKm").value)) && ($id("textKm").value>=0)
    )
    
];


