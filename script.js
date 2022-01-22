//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18
let idade = 21
if (idade >18){
    console.log ("Você é maior de idade.")
}
//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true
let idade2 = 21
let humana = true
if (idade2 >18 && humana == true ){
    console.log ("Você é humana, maior de idade.")
}
//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro
let dataDeAniversário = "Abril";
if (dataDeAniversário == "janeiro" || dataDeAniversário == "desembro"){
    console.log( "você faz aniversário no começo ou no fim do ano.")
}else{
    console.log("você faz aniverário em outros meses.")
}

//*** Exercícios bônus

//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R
let name1 = "Renan";
if (name1.indexOf('R') == 0) {
    console.log ("Seu nome começa com R")
}
//5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E
let _formName = "Raimundo";
let _formSobrenome = "Juliano"
let _formMaxCaracteres = 6
if(_formName.indexOf('E') == 0 || _formSobrenome.length > _formMaxCaracteres) {
    console.log ("Seu nome começa com E ou seu sobre nome tem mais de 6 letras")
}
