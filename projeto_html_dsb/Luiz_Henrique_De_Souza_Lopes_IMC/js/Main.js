import {CalcIMC} from "./CalcIMC.js";

document.getElementById('frmImc').addEventListener('submit',function(event){
     event.preventDefault()
     const nomeForm = document.getElementById('txtNome').value
     const pesoForm = document.getElementById('nmbPeso').value
     const alturaForm = document.getElementById('nmbAltura').value

     let imc = new CalcIMC(nomeForm,pesoForm,alturaForm)

    document.getElementById('print').innerHTML = 
    `Nome: ${imc.getNome()} e o Peso ${imc.getPeso()} e a Altura ${imc.getAltura()}`
})