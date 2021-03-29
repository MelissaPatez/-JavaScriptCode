var botao = document.querySelector("#adicionar-paciente");
botao.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");

    //extraindo dados do paciente do from
    var paciente = dadosPacienteFormulario(form);



    var erros = validaPaciente(paciente);
    console.log(erros);

    if(erros.length > 0){
       exibeMenssagemError(erros);
       
       return;
    }

    

    addPacienteNaTabela(paciente);

    form.reset(); //limpa os camppos
    var menssagemErro = document.querySelector("#menssagem-error");
    menssagemErro.innerHTML = "";
});


function addPacienteNaTabela(paciente){
    //criar tr e td do paciente
    var pacienteTr = mostrarTr(paciente);
    //adicionando paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
};
function exibeMenssagemError(erros){
    var ul = document.querySelector("#menssagem-error");
    ul.innerHTML = "";
    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

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

function validaPaciente(paciente){
    var erros = [];

    if(paciente.nome.length == 0){
        erros.push("O nome não pode ser em branco");
    }

    if(!validaPeso(paciente.peso)){
        erros.push("Peso é inválido!");
    }

    if(!validaAltura(paciente.altura)){
        erros.push("Altura é inválido!");
    }

    if(paciente.gordura.length == 0){
        erros.push("Gordura não pode ser em branco");
    }

    if(paciente.altura.length == 0){
        erros.push("Altura não pode ser em branco");
    }

    return erros;
}