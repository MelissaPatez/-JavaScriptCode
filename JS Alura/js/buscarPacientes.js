var botao = document.querySelector("#buscar-paciente");

botao.addEventListener("click", function(){
    
    var xhr = new XMLHttpRequest(); // obj responsavel de fazer req http 
    xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function(){
        var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta); // pega to do o texto da api e transforma em array

        pacientes.forEach(function(paciente){
            addPacienteNaTabela(paciente);
        });
    });
    xhr.send();
});