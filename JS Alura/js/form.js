var botao = document.querySelector("#adicionar-paciente");
botao.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");

    //extraindo dados do paciente do from
    var paciente = dadosPacienteFormulario(form);

    //criar tr e td do paciente
    var pacienteTr = mostrarTr(paciente);


    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset(); //limpa os camppos
});
 

function dadosPacienteFormulario(form){
    var paciente ={
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value, form.altura.value)
    }
  return paciente;

}

function mostrarTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente"); //adiciona uma classe 

    var pesoTd = montaTd(paciente.peso, "info-peso");
    var nomeTd = montaTd(paciente.nome, "info-nome");
    var alturaTd = montaTd(paciente.altura, "info-altura");
    var gorduraTd = montaTd(paciente.gordura, "info-gordura");
    var imcTd = montaTd(paciente.imc, "info-imc");


    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}