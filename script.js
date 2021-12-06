var altura = document.getElementById("altura");
var peso = document.getElementById("peso");

document.getElementById("submit").addEventListener("click", validaPreenc);

function validaPreenc() {
    if (altura.value == '' || peso.value == '') {
        alert("Preencha todos os campos");
        document.getElementById("submit").removeEventListener("click", calculaIMC);
    } else {
        calculaIMC();
    }
}

function calculaIMC() {

    var imc = (peso.value / (altura.value/100*altura.value/100));
    
    //calculo utilizando array
    // var arrayPerson = [altura.value, peso.value];

    // var imc = Number(arrayPerson[1]) / (Number(arrayPerson[0]) / 100 * Number(arrayPerson[0]) / 100);
    //console.log(imc)

    var result = '';

    if (imc >= 40) {
        result = "Obesidade grau 3";
    }
    else if (imc >= 35 && imc <= 39.9) {
        result = "Obesidade grau 2";
    }
    else if (imc >= 30 && imc <= 34.9) {
        result = "Obesidade grau 1";
    }
    else if (imc >= 25 && imc <= 29.9) {
        result = "Sobrepeso";
    }
    else if (imc >= 18.5 && imc <= 24.9) {
        result = "Peso normal";
    }
    else {
        result = "Abaixo do peso";
    }


var msg = document.createElement('h1');
var comp = document.createElement('h2');

var m = document.createTextNode(result);
var a = document.createTextNode('Seu IMC é: ');
var u = document.createTextNode(parseFloat(imc).toFixed(2) + ' kg/m²');

msg.appendChild(m);
comp.appendChild(a);
comp.appendChild(u);

document.body.appendChild(msg);
document.body.appendChild(comp);

document.getElementById("submit").removeEventListener("click", calculaIMC);
document.getElementById("submit").removeEventListener("click", validaPreenc);


document.getElementById("submit").addEventListener("click", calculaIMC);
}