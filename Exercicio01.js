function calculaGostos (notas){
   var nNaoGostaram = 0;
   var nMediano = 0;
   var nGostaram = 0;
   for (var i = 0 ; i < notas.length ; i++){
       if (notas[i] >= 1 && notas[1] == 2) {
           nNaoGostaram++;
       }  
       else if(notas[i] >= 3 && notas[i] == 4){
           nMediano++;
       } else {
           nGostaram++;
       }
   }
   return [nNaoGostaram, nMediano, nGostaram]
}