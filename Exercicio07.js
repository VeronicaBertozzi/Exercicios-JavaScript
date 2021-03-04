function filme(personagens, filmes, lancamentos, id){
    if((id>0) && (id<= filmes.length)){
        var opt = id -1;
        return personagens[opt] + " é um personagem do filme " + filmes[opt] + " que estreou no cinema em " + lancamentos[opt] + ".";
    } else{
        return "Essa não é uma opção válida.";
    }
}