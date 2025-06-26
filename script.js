function soma(){

    let numero1 = parseInt(document.getElementById('numero1').value);
    let numero2 = parseInt(document.getElementById('numero2').value);
    
    let soma = numero1 + numero2;

    document.getElementById('resultado').textContent = 'Resultado da soma: ' + soma;

}
function subtrair(){

    let numero1 = parseInt(document.getElementById('numero1').value);
    let numero2 = parseInt(document.getElementById('numero2').value);
    
    let subtrair = numero1 - numero2;

    document.getElementById('resultado').textContent = 'Resultado da subtração: ' + subtrair;

}   
function dividir(){
    
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);

    let dividir = numero1/numero2;

    if(numero2 == 0){
        alert("Você não pode dividir um número por 0!");
        return;
    }

    document.getElementById('resultado').textContent = 'Resultado da divisão: ' + dividir;

}
function multiplicar(){

    let numero1 = parseInt(document.getElementById('numero1').value);
    let numero2 = parseInt(document.getElementById('numero2').value);

    let multiplicar = numero1*numero2;

    document.getElementById('resultado').textContent = 'Resultado da multiplicação: ' + multiplicar;

}
function verificacao(){
    
    let numero1 = parseInt(document.getElementById('numero1').value);
    let numero2 = parseInt(document.getElementById('numero2').value);

    if(numero1 > numero2){
        document.getElementById('resultado').textContent = 'O número maior é o: ' + numero1;
        return
    }else if(numero1 < numero2){
        document.getElementById('resultado').textContent = 'O número maior é o: ' + numero2;
        return;
    }else{
        document.getElementById('resultado').textContent = "Os dois números são iguais";
    }
}