function soma(){

    let numero1 = parseInt(document.getElementById('numero1').value);
    let numero2 = parseInt(document.getElementById('numero2').value);
    
    let soma = numero1 + numero2;

    document.getElementById('resultado').textContent = 'Resultado: ' + soma;
    
}
function subtrair(){

    let numero1 = parseInt(document.getElementById('numero1').value);
    let numero2 = parseInt(document.getElementById('numero2').value);
    
    let subtrair = numero1 - numero2;

    document.getElementById('resultado2').textContent = 'Resultado: ' + subtrair;
}   