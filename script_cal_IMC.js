function limpar() {
    location.reload();
}
 
function calcular(nome, altura, peso, resultado) {

var nome = window.document.getElementById("nome")
var altura = window.document.getElementById("altura")
var peso = window.document.getElementById("peso")
var resultado = window.document.getElementById("resultado")
var peso1 = Number(peso.value)
var nome = String(nome.value)
var altura1 = parseFloat(altura.value)
var imc1 = altura1 * altura1
var imc = (peso1 / imc1).toFixed(2);

if (imc < 18.5) {
    resultado.innerHTML = `${nome} Seu IMC é de: ${imc} <p> Sua classificação é: Abaixo do Peso </p>`
    
} else if (imc >= 18.5 & imc <= 24.9) {
    resultado.innerHTML = `${nome} Seu IMC é de: ${imc} <p> Sua classificação é: Peso Normal </p>`

} else if (imc >= 25 & imc <= 29.9) {
    resultado.innerHTML = `${nome} Seu IMC é de: ${imc} <p> Sua classificação é: Excesso de Peso </p>`

} else if (imc >= 30 & imc <= 34.9) {
    resultado.innerHTML = `${nome} Seu IMC é de: ${imc} <p> Sua classificação é: Obesidade Grau 1 </p>`
    
} else if (imc >= 35 & imc <= 39.9) {
    resultado.innerHTML = `${nome} Seu IMC é de: ${imc} <p> Sua classificação é: Obesidade Grau 2 </p>`
    
} else if (imc > 40) {
    resultado.innerHTML = `${nome} Seu IMC é de: ${imc} <p> Sua classificação é: Obesidade Grau 3 </p>`
   
} 
    
}









