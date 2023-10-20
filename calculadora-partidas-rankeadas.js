let nivelHeroi = ["Ferro", "Bronze", "Prata", //níveis
"Ouro", "Diamante", "Lendário", "Imortal"];

function calcularPartidas (vitorias, derrotas) { //função que calcula quant. de rank
   let rankeadas = vitorias - derrotas; //a variável vai realizar o cálculo
   return rankeadas;                   //e irá guardar o resultado   
}
function ganharPerder (rankeadas){
    if (rankeadas < 10) { //se o resultado for menor... //ferro
        console.log (`O Herói tem saldo de "${rankeadas}" e está no nível de ${nivelHeroi [0]}!`);
    } else if (rankeadas >= 11 && rankeadas <= 20) {   //bronze
        console.log (`O Herói tem saldo de "${rankeadas}" e está no nível de ${nivelHeroi [1]}!`);
    } else if (rankeadas >= 21 && rankeadas <= 50) {   //prata
        console.log (`O Herói tem saldo de "${rankeadas}" e está no nível de ${nivelHeroi [2]}!`);
    } else if (rankeadas >= 51 && rankeadas <= 80) {   //ouro
        console.log (`O Herói tem saldo de "${rankeadas}" e está no nível de ${nivelHeroi [3]}!`);
    } else if (rankeadas >= 81 && rankeadas <= 90) {  //diamante
       console.log (`O Herói tem saldo de "${rankeadas}" e está no nível de ${nivelHeroi [4]}!`);
    } else if (rankeadas >= 91 && rankeadas <= 100) { //lendário
        console.log (`O Herói tem saldo de "${rankeadas}" e está no nível de ${nivelHeroi [5]}!`);
    } else if (rankeadas >= 101) { //imortal
        console.log (`O Herói tem saldo de "${rankeadas}" e está no nível de ${nivelHeroi [6]}!`); 
    }
}
console.log (calcularPartidas (50,10)); //chamada da função
console.log (ganharPerder(40));