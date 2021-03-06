var botao = document.querySelector("#buscar-paciente");

botao.addEventListener("click", function(){
    
    var xhr = new XMLHttpRequest(); // obj responsavel de fazer req http 
    xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function() {
    var errorAjax = document.querySelector("#error-busca");
        if (xhr.status == 200) {
            errorAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function(paciente) {
                addPacienteNaTabela(paciente);
            });
        } else {
            errorAjax.classList.remove("invisivel");
        }
    });
 
    xhr.send();
});
           
               
    