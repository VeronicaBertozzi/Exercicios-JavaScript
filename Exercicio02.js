function maiorQueNum(array,num){
    var newArray = [];
    for(var i=0; i<array.length;i++){
        if(array[i]>num){
            newArray.push(array[i])
        }
    }
    return newArray
}