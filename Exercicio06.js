function buscarDivisivelPor(array,num){
    for(var i=0; i<array.length; i++){
        if ((array[i] % num)==0 && array[i]!= 0){
            return array[i]
            break
        } else if(i == array.length || num == 100){
            return "Nenhum número válido encontrado!"
        }
    }    
}