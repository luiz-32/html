var historico = [];

function convertDNA() {
    var dnaSequencia = document.getElementById("dnaInput").value.toUpperCase();
    
    
    if (/[^ATCG]/.test(dnaSequencia)) {
        alert("Por favor, insira apenas os caracteres A, T, C e G.");
        return;
    }

    var dnaOposto = ""; 
    var rnaSequencia = "";

    
    for (var i = 0; i < dnaSequencia.length; i++) {
        var base = dnaSequencia[i];
        
        if (base == 'A') {
            dnaOposto += 'T'; 
        } else if (base == 'T') {
            dnaOposto += 'A'; 
        } else if (base == 'C') {
            dnaOposto += 'G'; 
        } else if (base == 'G') {
            dnaOposto += 'C'; 
        }
        
        
        if (base == 'A') {
            rnaSequencia += 'A'; 
        } else if (base == 'T') {
            rnaSequencia += 'U'; 
        } else if (base == 'C') {
            rnaSequencia += 'C'; 
        } else if (base == 'G') {
            rnaSequencia += 'G'; 
        }
    }

    
    document.getElementById("resultadoOposto").textContent = dnaOposto;
    document.getElementById("resultadoRNA").textContent = rnaSequencia;

    
    historico.push("DNA Oposto: " + dnaOposto);
    historico.push("RNA-m: " + rnaSequencia);

    
    var listaHistorico = document.getElementById("historico");
    listaHistorico.innerHTML = ""; 
    
    for (var i = 0; i < historico.length; i++) {
        var li = document.createElement("li");
        li.textContent = "Conversão " + (i + 1) + ": " + historico[i];
        listaHistorico.appendChild(li);
    }
}