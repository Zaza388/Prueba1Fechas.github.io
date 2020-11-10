"use strict";

var forma = document.getElementById("forma"),
    txtFecha = forma["fecha"],    
    txtHora = forma["hora"],    
    txtFechaYHora = forma["fechaYHora"],    
    txtFechaYHoraLocal = forma["fechaYHoraLocal"],    
    txtSemana = forma["semana"],    
    txtMes = forma["mes"],    
    salidaFecha = document.getElementById("salidaFecha"), 
    salidaHora = document.getElementById("salidaHora"), 
    salidaFechaYHora = document.getElementById("salidaFechaYHora"), 
    salidaFechaYHoraLocal = document.getElementById("salidaFechaYLocal"), 
    salidaSemana = document.getElementById("salidaSemana"), 
    salidaMes = document.getElementById("salidaMes"); 
 
function procesa(){
    
   var fechaValueAsDate = txtFecha.valueAsDate,
       fecha = new Date(txtFecha.value),
       hora = new Date("1970-01-01T")+txtHora.value,
       fechaYHora = new Date(txtFechaYHora.value),
       fechaYHoraLocal = new Date(txtFechaYHoraLocal.value + "-06:00"),
       semana = txtSemana.valueAsDate,
       mes = txtMes.valueAsDate,
       miFecha;
    
   salidaFecha.textContent = txtFecha.value + " | " + txtFecha.value + fecha.toGMTString() + 
           (fechaValueAsDate ? "|valueAsDate: "+fechaValueAsDate.toGMTString() : "");
   miFecha=((fecha.getDate()+1)+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear());
   salidaFecha1.textContent=miFecha;  
   salidaHora.textContent = txtHora.type + " | " + txtHora.value +
           hora.toISOString();
   salidaFechaYHora.textContent = txtFechaYHora.type + " | " + txtFechaYHora.value + 
           fechaYHora.toString();
   salidaFechaYHoraLocal.textContent = txtFechaYHoraLocal.type + " | " + txtFechaYHoraLocal.value +
           " | "+ fechaYHoraLocal.toLocaleString();
   salidaSemana.textContent = txtSemana.type + " | " + txtSemana.value +
           (semana ? " | " + semana.toISOString() : "" );
   salidaMes.textContent = txtMes.type + " | " + txtMes.value;
           (mes ? " | " + mes.toISOString() : "" );
           }
