const listaDePecas = ["Lanterna","Roda","Po"]
//lanterna é a 0, roda é a 1 e po é a 2.
console.log("início do processamento")

console.log("-------------------------------")

let pesoPeca = 101
if (pesoPeca > 100) {console.log("peso ok, pode cadastrar a peça")}
else (console.log("peça recusada"))

console.log("-------------------------------")

let qtdePeca = 11
if (qtdePeca > 10) {console.log("ultrapassou o limite da caixa")}
else (console.log("caixa ok"))

console.log("-------------------------------")
//esse aqui é manual, então tem que inserir um por um pra ele dizer se o nome da peça é maior ou menor que 3 letras
let nomePeca = listaDePecas[0]
if (nomePeca.length < 3) {console.log("erro no nome da peça")}
else (console.log("nome da peça ok"))
console.log(nomePeca)

console.log("-------------------------------")
//esse aqui já verifica todas as peças constadas na "listadepecas" e fala quais que estão com menos letras que 3 e quais estão com mais
for (let index = 0; index < listaDePecas.length; index++) {
        const nomePeca = listaDePecas[index];
            if (nomePeca.length < 3) {console.log("erro no nome da peça")}
            else {console.log("nome da peça ok")}

}

console.log("-------------------------------")

console.log("fim do processamento")