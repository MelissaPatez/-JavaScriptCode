var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"
console.log(titulo)

var pacientes = document.querySelectorAll(".paciente");

for(var i=0; i < pacientes.length; i++){

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var imc = peso / (altura * altura);

    var alturaEhValida = true;
    var pesoEhValido = true;

    if(peso <= 0 || peso >= 700){
        console.log("peso inválido");
        pesoEhValido = false;
        tdPeso.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if(altura <= 0 || altura >= 3.00){
        console.log("altura inválido");
        alturaEhValida = false;
        tdAltura.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if(alturaEhValida && pesoEhValido == true){
        var tdImc = paciente.querySelector(".info-imc");
        tdImc.textContent = imc.toFixed(2);
    }

}

