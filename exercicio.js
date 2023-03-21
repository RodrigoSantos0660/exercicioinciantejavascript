alert(valor1=Number(prompt('digite o primeiro valor')))
alert(valor2=Number(prompt('digite o segundo  valor')))

function somar (valor1,valor2){
let soma=valor1+valor2
alert(`a soma dos dois valores e ${soma}`);

let subtracao=valor1-valor2
alert(`a subtracao dos dois valores e ${subtracao}`);

let divisao =valor1 / valor2
alert(`a divisao dos dois valores e ${divisao}`);
3
let multiplicacao =valor1*valor2
alert(`a multiplicao dos dois valores e ${multiplicacao}`);

let restodivisao = valor1 % valor2 
alert(`o resto da divisao dos dois valores e ${restodivisao}`);

}
somar(valor1,valor2)

function verificapar(valor1,valor2){
  let parimpar= valor1+valor2 

  if(parimpar  %  2 == 0){
  alert("a soma dos numeros e par")
  }
  else{
  alert('a soma dos numeros e impar ')}
}
verificapar(valor1,valor2)

function verificaigual (valor1,valor2){
   let verificaigual= valor1
   let verficaigual2=valor2
   if(valor1 === valor2){
   alert('os valores inseridos sao iguais')
  }
  else{
   alert('os valores inseridos sao diferentes')
  }
}

verificaigual(valor1,valor2)





