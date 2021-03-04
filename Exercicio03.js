var listaDeFrutas = [ "Uva", "Banana", "Manga", "Cajá", "Pinha"] 
var busca = "Cajá"

for (var i=0; i< listaDeFrutas.length; i++){
    if(busca == listaDeFrutas[i]){
        console.log("Sim, temos a fruta " + busca + " disponível.")
    }
}